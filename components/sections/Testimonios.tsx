'use client';

import ClipReveal from '@/components/ui/ClipReveal';

const testimonios = [
  {
    quote: 'Antes publicábamos sin estrategia. Bambino Studio nos dio un sistema. En tres meses pasamos de tener presencia a tener autoridad.',
    name: 'Valentina R.',
    marca: 'Fundadora, Tienda de Moda',
    initial: 'V',
  },
  {
    quote: 'No solo nos hicieron la web. Nos construyeron la máquina de conversión que necesitábamos. Los resultados llegaron en el primer mes.',
    name: 'Carlos M.',
    marca: 'CEO, Consultora',
    initial: 'C',
  },
  {
    quote: 'La miniserie que produjeron cambió completamente cómo nos percibía nuestra audiencia. De marca desconocida a referente en 60 días.',
    name: 'Daniela P.',
    marca: 'Directora Creativa',
    initial: 'D',
  },
];

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="section"
      style={{
        padding: 'clamp(64px, 10vw, 120px) 0',
        background: 'var(--black)',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 48px)',
        }}
      >
        {/* Header */}
        <ClipReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
            <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: 'var(--or-2)' }}>
              Lo que dicen
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 8vw, 52px)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
              }}
            >
              Marcas que ya{' '}
              <span style={{ color: 'var(--or-3)' }}>tienen el sistema.</span>
            </h2>
          </div>
        </ClipReveal>

        {/* Quotes list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {testimonios.map((t, i) => (
            <ClipReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--charcoal)',
                  color: 'var(--cream)',
                  padding: 'clamp(28px, 6vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  border: '1px solid rgba(242,240,228,0.06)',
                }}
              >
                {/* Quote mark */}
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '40px',
                    lineHeight: 0.8,
                    color: 'var(--or-3)',
                    opacity: 0.6,
                    userSelect: 'none',
                  }}
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Quote */}
                <blockquote
                  style={{
                    fontSize: 'clamp(14px, 3.8vw, 16px)',
                    lineHeight: 1.65,
                    color: 'rgba(242,240,228,0.85)',
                    fontStyle: 'normal',
                    margin: 0,
                  }}
                >
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(242,240,228,0.08)' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'var(--or-3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '14px',
                      color: 'var(--cream)',
                      flexShrink: 0,
                      clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                    }}
                    aria-hidden="true"
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--cream)', margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(242,240,228,0.35)', textTransform: 'uppercase', marginTop: '2px', margin: 0 }}>
                      {t.marca}
                    </p>
                  </div>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
