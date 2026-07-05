'use client';

import { useRef, CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordRevealProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function WordReveal({ text, tag: Tag = 'p', className, style, delay = 0 }: WordRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const words = text.split(' ');

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0 0.28em' }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.04 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
