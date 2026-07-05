'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
  ready: boolean;
  calendlyUrl: string;
}

export default function Hero({ onOpenModal, ready, calendlyUrl }: HeroProps) {
  const watermarkRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  // Subtle parallax on watermark
  useEffect(() => {
    const onScroll = () => {
      if (!watermarkRef.current) return;
      const y = window.scrollY * 0.25;
      watermarkRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector('#servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      {/* ── VIDEO BG ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: 0.35,
        }}
        aria-hidden="true"
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
        <source src="/hero-reel.webm" type="video/webm" />
      </video>

      {/* ── GRADIENT OVERLAY ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.92) 100%)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* ── WATERMARK ISOTIPO ── */}
      <div
        ref={watermarkRef}
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-5%',
          width: 'clamp(200px, 50vw, 380px)',
          height: 'clamp(200px, 50vw, 380px)',
          zIndex: 3,
          opacity: 0.05,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect x="0" y="0" width="100" height="100" fill="#F2F0E4" />
          <circle cx="50" cy="50" r="16" fill="#0A0A0A" />
          <rect x="8" y="8" width="84" height="84" stroke="#F2F0E4" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* ── SCROLL PROGRESS BAR ── */}
      <div className="scroll-progress-bar" aria-hidden="true" />

      {/* ── CONTENT ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(80px, 12vw, 120px) clamp(20px, 6vw, 60px) clamp(60px, 10vw, 100px)',
          maxWidth: '700px',
          width: '100%',
          gap: 'clamp(20px, 4vw, 32px)',
        }}
      >


        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 2.5vw, 11px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--or-1)',
          }}
        >
          Contenido audiovisual · Desarrollo web · Colombia - New York
        </motion.p>

        {/* H1 — THE HOOK */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 10vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            margin: 0,
          }}
        >
          Tu marca merece
          {' '}<span style={{ color: 'var(--or-3)' }}>verse como lo que es.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 4vw, 18px)',
            lineHeight: 1.6,
            color: 'rgba(242,240,228,0.7)',
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          Producción audiovisual + desarrollo web que construyen autoridad real y convierten tu audiencia en clientes.
        </motion.p>

        {/* PRIMARY CTA → Calendly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: 'clamp(16px, 4vw, 20px) clamp(28px, 8vw, 48px)',
              background: 'var(--or-3)',
              color: 'var(--cream)',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 3.5vw, 15px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              width: '100%',
              maxWidth: '420px',
              boxShadow: '0 0 30px rgba(242,68,5,0.4)',
              transition: 'box-shadow 0.3s, transform 0.3s',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(242,68,5,0.75)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(242,68,5,0.4)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Agendar llamada gratuita con Bambino Studio"
          >
            <span>Agendar llamada gratuita →</span>
          </a>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 2.5vw, 10px)',
            letterSpacing: '0.14em',
            color: 'rgba(242,240,228,0.35)',
            textTransform: 'uppercase',
          }}>
            45 min · Sin compromiso · 100% online
          </p>
        </motion.div>

        {/* Secondary: scroll down */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 0.4 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={scrollToNext}
          ref={scrollIndicatorRef}
          aria-label="Ver servicios"
          style={{
            marginTop: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--cream)',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.4')}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            Ver servicios
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: '16px', display: 'block' }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
