'use client';

import ClipReveal from '@/components/ui/ClipReveal';

const steps = [
  {
    num: '01',
    label: 'Impacto',
    title: 'Una llamada de 45 min',
    desc: 'Entendemos tu marca, tu cliente ideal y lo que quieres lograr. Sin compromisos, sin formularios interminables.',
    color: 'var(--or-1)',
  },
  {
    num: '02',
    label: 'Autoridad',
    title: 'Plan + producción',
    desc: 'Guión, referencias, calendario de publicación. Todo definido antes de encender la cámara. Solo tienes que aparecer.',
    color: 'var(--or-2)',
  },
  {
    num: '03',
    label: 'Clientes',
    title: 'La audiencia se convierte',
    desc: 'El contenido construye autoridad y confianza. Tu página web recibe a esos prospectos y les da una ruta clara para comprar o agendar. Un sistema predecible, sin promesas mágicas.',
    color: 'var(--or-3)',
  },
];

interface ProcesoProps {
  onOpenModal: () => void;
  calendlyUrl: string;
}

export default function Proceso({ onOpenModal, calendlyUrl }: ProcesoProps) {
  return (
    <section
      id="proceso"
      className="section"
      style={{
        padding: 'clamp(64px, 10vw, 120px) 0',
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
        {/* Header */}
        <ClipReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
            <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: 'var(--or-2)' }}>
              Cómo funciona
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 8vw, 52px)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--black)',
              }}
            >
              Diagnóstico{' '}
              <span style={{ color: 'var(--or-3)' }}>Estratégico.</span>
            </h2>
          </div>
        </ClipReveal>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {steps.map((step, i) => (
            <ClipReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: 'clamp(28px, 6vw, 40px) clamp(20px, 5vw, 32px)',
                  background: 'var(--black)',
                  borderLeft: `3px solid ${step.color}`,
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(36px, 10vw, 56px)',
                    lineHeight: 1,
                    color: 'rgba(242,240,228,0.06)',
                    userSelect: 'none',
                    position: 'absolute',
                    right: '20px',
                    top: '16px',
                  }}
                  aria-hidden="true"
                >
                  {step.num}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        background: `${step.color}18`,
                        border: `1px solid ${step.color}40`,
                        color: step.color,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 5vw, 24px)',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      color: 'var(--cream)',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(13px, 3.5vw, 15px)',
                      lineHeight: 1.65,
                      color: 'rgba(242,240,228,0.55)',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>

        {/* CTA block */}
        <ClipReveal delay={0.2}>
          <div
            style={{
              marginTop: 'clamp(40px, 8vw, 64px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 6vw, 30px)',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                lineHeight: 1.1,
              }}
            >
              Empieza con una llamada.{' '}
              <span style={{ color: 'var(--or-3)' }}>45 minutos.</span>
            </p>
            <p
              style={{
                fontSize: 'clamp(13px, 3.5vw, 15px)',
                color: 'rgba(10,10,10,0.55)',
                lineHeight: 1.6,
                maxWidth: '380px',
              }}
            >
              Sin compromiso. Analizamos tu marca y definimos si podemos ayudarte. Cupos limitados cada semana.
            </p>
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
                boxShadow: '0 0 24px rgba(242,68,5,0.35)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(242,68,5,0.65)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(242,68,5,0.35)';
                e.currentTarget.style.transform = 'scale(1)';
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
              Google Calendar · Sin costo · Online
            </p>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
