'use client';

import ClipReveal from '@/components/ui/ClipReveal';
import WordReveal from '@/components/ui/WordReveal';

const painPoints = [
  {
    num: '01',
    label: 'El problema de frecuencia',
    text: 'Publican todos los días y no venden más. No es la cantidad. Es que no hay un sistema detrás.',
  },
  {
    num: '02',
    label: 'El problema de presencia',
    text: 'Tienen buena web pero sin audiencia. O tienen audiencia pero sin conversión. Las dos cosas por separado no funcionan.',
  },
  {
    num: '03',
    label: 'El problema de percepción',
    text: 'Su producto es bueno. Su contenido no lo comunica. Y en internet, si no lo ves, no existe.',
  },
];

export default function Problema() {
  return (
    <section
      id="problema"
      className="section"
      style={{
        padding: 'clamp(80px, 10vh, 140px) 0',
        background: 'var(--black)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 6vh, 80px)', maxWidth: '720px' }}>
          <p className="eyebrow" style={{ marginBottom: '24px' }}>El problema real</p>
          <WordReveal
            text="La mayoría de marcas publican todos los días y no venden más."
            tag="h2"
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              lineHeight: 0.97,
            } as React.CSSProperties}
          />
          <ClipReveal delay={0.3}>
            <p
              style={{
                marginTop: '24px',
                fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.65,
                color: 'rgba(242,240,228,0.55)',
                maxWidth: '540px',
              }}
            >
              El problema no es la frecuencia. Es que nadie está construyendo un sistema.
            </p>
          </ClipReveal>
        </div>

        {/* Pain cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {painPoints.map((point, i) => (
            <ClipReveal key={i} delay={i * 0.12}>
              <div
                className="card"
                style={{
                  padding: 'clamp(32px, 4vw, 52px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  background: i === 1 ? 'var(--charcoal-2)' : 'var(--charcoal)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '260px',
                }}
              >
                {/* Ghost number */}
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(80px, 10vw, 120px)',
                    lineHeight: 1,
                    color: 'rgba(242,135,5,0.05)',
                    position: 'absolute',
                    top: '12px',
                    right: '20px',
                    letterSpacing: '0.02em',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                >
                  {point.num}
                </span>

                {/* Orange accent bar */}
                <div
                  style={{
                    width: '28px',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--or-1), var(--or-3))',
                  }}
                />

                {/* Text */}
                <p
                  style={{
                    fontSize: 'clamp(17px, 1.8vw, 22px)',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    lineHeight: 1.45,
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {point.text}
                </p>

                {/* Label */}
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    color: 'var(--or-1)',
                    textTransform: 'uppercase',
                  }}
                >
                  {point.label}
                </p>
              </div>
            </ClipReveal>
          ))}
        </div>

        {/* Transition line */}
        <ClipReveal delay={0.2}>
          <div
            style={{
              marginTop: 'clamp(48px, 6vh, 80px)',
              padding: 'clamp(24px, 3vw, 40px) 0',
              borderTop: '1px solid rgba(242,240,228,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: 'var(--or-3)', flexShrink: 0 }} />
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2vw, 26px)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'rgba(242,240,228,0.9)',
              }}
            >
              La solución es construir el sistema completo.
            </p>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
