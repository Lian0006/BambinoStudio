'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? scrollY / docH : 0;
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
      setScrolled(scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Casos', href: '#portafolio' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" aria-hidden="true" />

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px clamp(20px, 4vw, 60px)',
          background: scrolled || menuOpen ? 'rgba(10,10,10,0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(242,240,228,0.06)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          aria-label="Bambino Studio — Inicio"
          style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
        >
          <Image
            src="/logo.png"
            alt="Bambino Studio"
            width={140}
            height={50}
            style={{ objectFit: 'contain', filter: 'invert(1)', height: '38px', width: 'auto' }}
            priority
          />
        </a>

        {/* Desktop nav links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: 'rgba(242,240,228,0.65)',
                textTransform: 'uppercase',
                transition: 'color 0.25s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(242,240,228,0.65)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <button
            id="nav-cta"
            onClick={onOpenModal}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '12px', letterSpacing: '0.1em' }}
          >
            <span>Empieza tu proyecto</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            id="hamburger-btn"
            className="hamburger-btn"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'transparent',
              border: '1px solid rgba(242,240,228,0.2)',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'border-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--or-3)')}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(242,240,228,0.2)')}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'block', width: '16px', height: '1px', background: 'var(--cream)', transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'block', width: '16px', height: '1px', background: 'var(--cream)', transformOrigin: 'center' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 410 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'clamp(280px, 40vw, 440px)',
                background: '#090909',
                borderLeft: '1px solid rgba(242,240,228,0.08)',
                zIndex: 420,
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(60px, 8vh, 100px) clamp(28px, 4vw, 56px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '56px' }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--or-3)', borderRadius: '1px', display: 'block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(242,240,228,0.4)', textTransform: 'uppercase' }}>
                  Menú
                </span>
              </div>

              <nav style={{ flex: 1 }} aria-label="Menú móvil">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(36px, 5vw, 60px)',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      color: 'var(--cream)',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(242,240,228,0.06)',
                      transition: 'color 0.2s, padding-left 0.2s',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color = 'var(--or-3)'; e.currentTarget.style.paddingLeft = '16px'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="mailto:hola@bambino.studio" style={{ fontSize: '14px', color: 'var(--or-2)', fontWeight: 500 }}>
                  hola@bambino.studio
                </a>
                <a href="https://instagram.com/bambino.studio" target="_blank" rel="noopener noreferrer"
                   style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(242,240,228,0.35)', textTransform: 'uppercase' }}>
                  @bambino.studio ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .hamburger-btn { display: none !important; } }
      `}</style>
    </>
  );
}
