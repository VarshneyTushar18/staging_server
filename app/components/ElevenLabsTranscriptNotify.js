"use client";

import { useEffect, useRef } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const DEFAULT_AGENT_ID = "agent_0901k7egwwhhejatq2wv0gf0k1ax";
const WIDGET_CALL_EVENT = "elevenlabs-convai:call";
const WIDGET_STARTED_EVENT = "conversationStarted";
const WIDGET_ENDED_EVENT = "conversationEnded";

function extractConversationId(source) {
  if (!source) return null;

  if (typeof source === "string" && source.startsWith("conv_")) {
    return source;
  }

  return (
    source.conversationId ??
    source.conversation_id ??
    source.conversation_initiation_metadata_event?.conversation_id ??
    null
  );
}

async function notifyConversationEnded(conversationId, agentId) {
  if (!conversationId) return;

  try {
    await fetch(`${API}/api/elevenlabs/fallback/notify-ended`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationId, agentId }),
    });
  } catch {
    // Fail silently — no client-side logging (privacy).
  }
}

function chainCallback(existing, handler) {
  if (typeof existing !== "function") return handler;
  return (...args) => {
    handler(...args);
    existing(...args);
  };
}

function storeConversationId(conversationIdRef, source) {
  const id = extractConversationId(source);
  if (id) {
    conversationIdRef.current = id;
  }
  return id;
}

function hookConversationEnd(conversation, conversationIdRef, agentIdRef, notifiedRef) {
  const notifyOnce = async () => {
    if (notifiedRef.current) return;

    const conversationId =
      conversationIdRef.current || conversation?.getId?.() || null;
    if (!conversationId) return;

    notifiedRef.current = true;
    await notifyConversationEnded(conversationId, agentIdRef.current);
    conversationIdRef.current = null;
  };

  const wrapMethod = (methodName) => {
    const original = conversation?.[methodName];
    if (typeof original !== "function") return;

    conversation[methodName] = async (...args) => {
      try {
        return await original.apply(conversation, args);
      } finally {
        await notifyOnce();
      }
    };
  };

  wrapMethod("endSessionWithDetails");
  wrapMethod("endSession");
}

function hookWidgetSessionCallbacks(widget, conversationIdRef, agentIdRef, notifiedRef) {
  const onConversationEnded = (event) => {
    storeConversationId(conversationIdRef, event?.detail);
    void (async () => {
      if (notifiedRef.current) return;

      const conversationId = conversationIdRef.current;
      if (!conversationId) return;

      notifiedRef.current = true;
      await notifyConversationEnded(conversationId, agentIdRef.current);
      conversationIdRef.current = null;
    })();
  };

  const onConversationStarted = () => {
    notifiedRef.current = false;
    conversationIdRef.current = null;
  };

  widget.addEventListener(WIDGET_STARTED_EVENT, onConversationStarted);
  widget.addEventListener(WIDGET_ENDED_EVENT, onConversationEnded);

  const onCall = (event) => {
    const config = event?.detail?.config;
    if (!config || typeof config !== "object") return;

    config.onConnect = chainCallback(config.onConnect, (props) => {
      storeConversationId(conversationIdRef, props);
    });

    config.onConversationMetadata = chainCallback(
      config.onConversationMetadata,
      (metadata) => {
        storeConversationId(conversationIdRef, metadata);
      },
    );

    config.onConversationCreated = chainCallback(
      config.onConversationCreated,
      (conversation) => {
        const id = conversation?.getId?.();
        if (id) {
          conversationIdRef.current = id;
        }

        hookConversationEnd(
          conversation,
          conversationIdRef,
          agentIdRef,
          notifiedRef,
        );
      },
    );
  };

  widget.addEventListener(WIDGET_CALL_EVENT, onCall);

  return () => {
    widget.removeEventListener(WIDGET_STARTED_EVENT, onConversationStarted);
    widget.removeEventListener(WIDGET_ENDED_EVENT, onConversationEnded);
    widget.removeEventListener(WIDGET_CALL_EVENT, onCall);
  };
}

export default function ElevenLabsTranscriptNotify() {
  const conversationIdRef = useRef(null);
  const notifiedRef = useRef(false);
  const agentIdRef = useRef(
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || DEFAULT_AGENT_ID,
  );
  const boundWidgetRef = useRef(null);

  useEffect(() => {
    const bindWidget = (widget) => {
      if (!widget || boundWidgetRef.current === widget) return;

      const agentFromDom = widget.getAttribute("agent-id");
      if (agentFromDom) {
        agentIdRef.current = agentFromDom;
      }

      const unhook = hookWidgetSessionCallbacks(
        widget,
        conversationIdRef,
        agentIdRef,
        notifiedRef,
      );

      boundWidgetRef.current = widget;

      return () => {
        unhook();
        if (boundWidgetRef.current === widget) {
          boundWidgetRef.current = null;
        }
      };
    };

    const bindWhenReady = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (!widget) return null;
      return bindWidget(widget);
    };

    let cleanup = bindWhenReady();

    const observer = new MutationObserver(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget && widget !== boundWidgetRef.current) {
        cleanup?.();
        cleanup = bindWidget(widget);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cleanup?.();
      observer.disconnect();
    };
  }, []);

  return null;
}
