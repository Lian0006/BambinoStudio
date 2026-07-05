'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null);

  useEffect(() => {
    let lenis: import('lenis').default | null = null;

    const init = async () => {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
