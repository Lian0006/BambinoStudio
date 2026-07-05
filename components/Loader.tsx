'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let progress = 0;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const pct = Math.round(eased * 100);
      setCount(pct);
      if (fillRef.current) fillRef.current.style.width = `${eased * 100}%`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 200);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <div className="loader" aria-label="Cargando Bambino Studio" role="status">

      <div className="loader-progress-wrap">
        <div className="loader-bar-track">
          <div ref={fillRef} className="loader-bar-fill" />
        </div>
        <span className="loader-count">{count}%</span>
      </div>
    </div>
  );
}
