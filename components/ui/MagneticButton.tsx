'use client';

import { useRef, CSSProperties, MouseEvent, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  strength?: number;
  style?: CSSProperties;
  className?: string;
  onMouseOver?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function MagneticButton({
  children,
  onClick,
  strength = 0.25,
  style,
  className,
  onMouseOver,
  onMouseOut,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
    onMouseOut?.(e);
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseOver={onMouseOver}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)', ...style }}
      className={className}
    >
      {children}
    </button>
  );
}
