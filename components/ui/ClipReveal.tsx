'use client';

import { useRef, useEffect, ReactNode, CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';

interface ClipRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ClipReveal({ children, delay = 0, className, style }: ClipRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
