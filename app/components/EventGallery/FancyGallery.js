'use client';

import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function FancyGallery({ images, open, setOpen }) {
  useEffect(() => {
    if (!open || !images?.length) return;

    Fancybox.show(
      images.map((img) => ({
        src: img,
        type: 'image',
      })),
      {
        on: {
          destroy: () => setOpen(false), // 🔥 IMPORTANT FIX
        },
      }
    );

    return () => Fancybox.close();
  }, [open, images, setOpen]);

  return null;
}