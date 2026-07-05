'use client';

import Image from 'next/image';
import ClipReveal from '@/components/ui/ClipReveal';

interface FooterProps {
  onOpenModal: () => void;
  calendlyUrl: string;
}

export default function Footer({ onOpenModal, calendlyUrl }: FooterProps) {
  return (
    <footer
      id="footer"
      style={{
        background: 'var(--cream)',
        borderTop: '1px solid rgba(10,10,10,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 48px)',
        }}
      >
        {/* CTA strip */}
        <div
          style={{
            padding: 'clamp(64px, 10vw, 100px) 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '32px',
          }}
        >
          <ClipReveal>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 8vw, 48px)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--black)',
              }}
            >
              ¿Listo para construir el sistema?{' '}
              <span style={{ color: 'var(--or-3)' }}>Hablemos.</span>
            </p>
          </ClipReveal>
          
          <ClipReveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: 'clamp(16px, 4vw, 18px) clamp(28px, 8vw, 44px)',
                  background: 'var(--or-3)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(13px, 3.5vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  width: '100%',
                  maxWidth: '380px',
                  boxShadow: '0 0 24px rgba(242,68,5,0.3)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}
              >
                Agendar llamada gratuita →
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  color: 'rgba(10,10,10,0.3)',
                  textTransform: 'uppercase',
                }}
              >
                45 min · Sin compromiso
              </p>
            </div>
          </ClipReveal>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: 'clamp(32px, 5vw, 48px) 0',
            borderTop: '1px solid rgba(10,10,10,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(10,10,10,0.4)',
                textTransform: 'uppercase',
              }}
            >
              Contenido audiovisual + desarrollo web
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://instagram.com/bambino.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(10,10,10,0.5)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              @bambino.studio ↗
            </a>
            <a
              href="mailto:bambino.studio@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'rgba(10,10,10,0.5)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              bambino.studio@gmail.com
            </a>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.1em',
              color: 'rgba(10,10,10,0.3)',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            © {new Date().getFullYear()} Bambino Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
