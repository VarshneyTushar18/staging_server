"use client";

import { useState } from "react";
import Image from "next/image";
import { resolvePostImage, stripHtml, DEFAULT_BLOG_IMAGE } from "@/lib/blogApi";

const isExternalSrc = (src) =>
  src.startsWith("http://") || src.startsWith("https://");

export default function BlogPostImage({
  post,
  variant = "card",
  priority = false,
  className = "",
}) {
  const initial = resolvePostImage(post);
  const [src, setSrc] = useState(initial);
  const alt = stripHtml(post?.title?.rendered || post?.title || "Blog post");
  const external = isExternalSrc(src);

  const onError = () => {
    if (src !== DEFAULT_BLOG_IMAGE) setSrc(DEFAULT_BLOG_IMAGE);
  };

  if (external) {
    if (variant === "slider") {
      return (
        <img
          src={src}
          alt=""
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={onError}
          aria-hidden="true"
        />
      );
    }

    if (variant === "hero") {
      return (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={onError}
        />
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        width={480}
        height={240}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={onError}
      />
    );
  }

  if (variant === "hero") {
    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        sizes="(max-width: 768px) 100vw, 800px"
        priority={priority}
        quality={80}
        className={className}
      />
    );
  }

  if (variant === "slider") {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        quality={75}
        className={className}
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={480}
      height={240}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading={priority ? undefined : "lazy"}
      priority={priority}
      quality={75}
      className={className}
    />
  );
}
