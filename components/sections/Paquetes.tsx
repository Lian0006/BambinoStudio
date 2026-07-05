'use client';

import ClipReveal from '@/components/ui/ClipReveal';
import WordReveal from '@/components/ui/WordReveal';
import MagneticButton from '@/components/ui/MagneticButton';

const paquetes = [
  {
    id: 'starter',
    label: 'Starter',
    subtitle: 'Para marcas que están empezando a tomarse el contenido en serio y quieren una base sólida.',
    features: [
      '4 videos cortos al mes',
      'Fotografía básica (1 sesión)',
      'Gestión de 1 red social',
      'Estrategia de contenido mensual',
      'Landing page de presentación',
    ],
    nota: 'Ideal para marcas en etapa inicial',
    featured: false,
    badge: null,
    cta: 'Quiero empezar',
  },
  {
    id: 'growth',
    label: 'Growth',
    subtitle: 'Para marcas listas para escalar. Contenido consistente + web que convierte. El sistema completo.',
    features: [
      '8 videos al mes (reels + cortos)',
      'Fotografía editorial mensual',
      'Gestión de 2 redes sociales',
      'Miniserie de marca (trimestral)',
      'Sitio web o landing de alta conversión',
      'Reportes mensuales de rendimiento',
      'Revisiones y optimización continua',
    ],
    nota: 'El más solicitado',
    featured: true,
    badge: 'Más popular',
    cta: 'Este es el mío',
  },
  {
    id: 'full',
    label: 'Full',
    subtitle: 'Producción a escala. Para marcas que quieren presencia dominante y una web premium.',
    features: [
      'Producción ilimitada mensual',
      'Dirección creativa dedicada',
      'Gestión completa de RRSS',
      'Documental o campaña de lanzamiento',
      'Web app o e-commerce a medida',
      'Fotografía editorial mensual',
      'Estrategia de distribución y pauta',
    ],
    nota: 'Para marcas que juegan a ganar',
    featured: false,
    badge: null,
    cta: 'Hablemos de esto',
  },
];

interface PaquetesProps {
  onOpenModal: () => void;
}

export default function Paquetes({ onOpenModal }: PaquetesProps) {
  return (
    <section
      id="paquetes"
      className="section"
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(242,240,228,0.06)',
        padding: '0',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: 'clamp(48px, 7vh, 100px) clamp(20px, 5vw, 80px) clamp(32px, 4vh, 56px)',
          borderBottom: '1px solid rgba(242,240,228,0.06)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>Cómo trabajamos juntos</p>
          <WordReveal
            text="Elige tu nivel de acceso."
            tag="h2"
            className="font-display"
            style={{
              fontSize: 'clamp(40px, 6vw, 88px)',
              lineHeight: 0.97,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
            } as React.CSSProperties}
          />
        </div>
        <ClipReveal>
          <p
            style={{
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              lineHeight: 1.65,
              color: 'rgba(242,240,228,0.45)',
              maxWidth: '320px',
            }}
          >
            El precio se define en tu llamada. Aquí entiendes qué incluye cada nivel antes de hablar.
          </p>
        </ClipReveal>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
        className="paquetes-grid"
      >
        {paquetes.map((p, i) => (
          <ClipReveal key={p.id} delay={i * 0.1}>
            <div
              style={{
                padding: 'clamp(28px, 4vw, 52px) clamp(20px, 3vw, 40px)',
                borderRight: i < paquetes.length - 1 ? '1px solid rgba(242,240,228,0.06)' : 'none',
                borderTop: p.featured ? `3px solid var(--or-3)` : '1px solid rgba(242,240,228,0.06)',
                background: p.featured ? 'var(--charcoal)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '560px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = p.featured ? 'var(--charcoal-2)' : 'rgba(242,68,5,0.03)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(242,68,5,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = p.featured ? 'var(--charcoal)' : 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Badge */}
              {p.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '24px',
                    background: 'var(--or-3)',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '8px',
                    letterSpacing: '0.15em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                  }}
                >
                  {p.badge}
                </div>
              )}

              {/* Label + title */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: p.featured ? 'var(--or-3)' : 'var(--or-1)',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  {p.label}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--cream)',
                    lineHeight: 1.0,
                    marginBottom: '12px',
                  }}
                >
                  {p.label}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(242,240,228,0.45)' }}>
                  {p.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(242,240,228,0.08)' }} />

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', flex: 1 }}>
                {p.features.map((feat, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span
                      style={{
                        color: p.featured ? 'var(--or-3)' : 'var(--or-1)',
                        fontSize: '12px',
                        fontWeight: 700,
                        flexShrink: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      +
                    </span>
                    <span style={{ fontSize: '13px', color: 'rgba(242,240,228,0.6)', lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Nota */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  color: 'rgba(242,240,228,0.2)',
                  textTransform: 'uppercase',
                  borderTop: '1px solid rgba(242,240,228,0.08)',
                  paddingTop: '16px',
                }}
              >
                {p.nota}
              </p>

              {/* CTA */}
              <MagneticButton
                onClick={onOpenModal}
                strength={0.2}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: p.featured ? 'var(--or-3)' : 'transparent',
                  border: `1px solid ${p.featured ? 'var(--or-3)' : 'rgba(242,240,228,0.15)'}`,
                  color: p.featured ? 'var(--cream)' : 'rgba(242,240,228,0.6)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.25s',
                  boxShadow: p.featured ? '0 0 24px rgba(242,68,5,0.3)' : 'none',
                  clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                }}
                onMouseOver={(e) => {
                  if (!p.featured) {
                    e.currentTarget.style.borderColor = 'var(--or-3)';
                    e.currentTarget.style.color = 'var(--or-3)';
                  } else {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(242,68,5,0.6)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!p.featured) {
                    e.currentTarget.style.borderColor = 'rgba(242,240,228,0.15)';
                    e.currentTarget.style.color = 'rgba(242,240,228,0.6)';
                  } else {
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(242,68,5,0.3)';
                  }
                }}
              >
                {p.cta}
              </MagneticButton>
            </div>
          </ClipReveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .paquetes-grid { grid-template-columns: 1fr !important; }
          .paquetes-grid > div > div { border-right: none !important; border-bottom: 1px solid rgba(242,240,228,0.06); }
        }
      `}</style>
    </section>
  );
}
