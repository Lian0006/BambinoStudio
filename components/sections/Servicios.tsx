'use client';

import ClipReveal from '@/components/ui/ClipReveal';

const servicios = [
  {
    icon: '▶',
    num: '01',
    title: 'Miniseries de Marca',
    desc: 'Episodios que convierten tu negocio en una marca que la gente sigue, desea y recomienda — antes de que intentes venderles algo.',
    tags: ['Guión', 'Producción', 'Edición', 'Distribución'],
  },
  {
    icon: '◉',
    num: '02',
    title: 'Video Corporativo',
    desc: 'Institucionales, presentaciones de producto, manifiestos de marca. Producción que comunica quiénes son y por qué importan.',
    tags: ['Video', 'Corporativo', 'Producto', 'Marca'],
  },
  {
    icon: '✦',
    num: '03',
    title: 'Fotografía Editorial',
    desc: 'Fotografía de producto, espacios y retrato. Imágenes que elevan la percepción de tu marca en cada punto de contacto.',
    tags: ['Producto', 'Editorial', 'Marca personal'],
  },
  {
    icon: '◈',
    num: '04',
    title: 'Gestión de Redes',
    desc: 'Estrategia, contenido mensual, pauta Meta y análisis. Escalamos marcas que quieren presencia real en redes.',
    tags: ['Estrategia', 'Pauta', 'Métricas', 'Crecimiento'],
  },
  {
    icon: '⬡',
    num: '05',
    title: 'Sitios Web & Landing Pages',
    desc: 'Diseño a medida, rápido, optimizado. Tu sitio como extensión de tu marca — no un template genérico.',
    tags: ['Diseño', 'Desarrollo', 'SEO', 'Conversión'],
  },
  {
    icon: '◻',
    num: '06',
    title: 'Web Apps a Medida',
    desc: 'Aplicaciones para automatizar procesos, gestionar clientes o crear herramientas internas. React, diseño impecable.',
    tags: ['React', 'UI/UX', 'Backend', 'API'],
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
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
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 72px)' }}>
            <p className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: 'var(--or-2)' }}>
              Lo que hacemos
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
              El sistema completo.{' '}
              <span style={{ color: 'var(--or-3)' }}>No piezas sueltas.</span>
            </h2>
          </div>
        </ClipReveal>

        {/* Servicios list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {servicios.map((s, i) => {
            const isStar = i === 0;
            return (
              <ClipReveal key={i} delay={i * 0.07}>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 'clamp(28px, 6vw, 40px) clamp(24px, 5vw, 36px)',
                    // Glassmorphism background
                    background: isStar 
                      ? 'linear-gradient(135deg, var(--or-2) 0%, var(--or-3) 100%)'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: isStar 
                      ? '1px solid rgba(255,255,255,0.3)' 
                      : '1px solid rgba(255,255,255,1)',
                    borderRadius: '24px',
                    boxShadow: isStar 
                      ? '0 20px 50px rgba(242,68,5,0.25), inset 0 1px 0 rgba(255,255,255,0.3)' 
                      : '0 12px 40px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: 'translateY(0)',
                    cursor: 'default',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = isStar 
                      ? '0 30px 60px rgba(242,68,5,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                      : '0 20px 50px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isStar 
                      ? '0 20px 50px rgba(242,68,5,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'
                      : '0 12px 40px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1)';
                  }}
                >
                  {/* Decorative background element for star service */}
                  {isStar && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    {/* Icon wrapper */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        background: isStar ? 'rgba(255,255,255,0.2)' : '#FFFFFF',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        color: isStar ? '#FFFFFF' : 'var(--or-3)',
                        boxShadow: isStar ? 'none' : '0 8px 24px rgba(0,0,0,0.04)',
                        border: isStar ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(0,0,0,0.02)',
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>

                    {isStar && (
                      <div
                        style={{
                          padding: '6px 12px',
                          background: 'rgba(255,255,255,0.95)',
                          color: 'var(--or-3)',
                          borderRadius: '20px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      >
                        Servicio Estrella ✦
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.18em',
                          color: isStar ? 'rgba(255,255,255,0.7)' : 'var(--or-2)',
                        }}
                      >
                        {s.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(20px, 5vw, 26px)',
                          letterSpacing: '0.01em',
                          textTransform: 'uppercase',
                          color: isStar ? '#FFFFFF' : 'var(--black)',
                          margin: 0,
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(14px, 4vw, 16px)',
                        lineHeight: 1.6,
                        color: isStar ? 'rgba(255,255,255,0.9)' : 'rgba(10,10,10,0.65)',
                        marginBottom: '20px',
                        maxWidth: '95%',
                      }}
                    >
                      {s.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {s.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          style={{
                            padding: '6px 14px',
                            background: isStar ? 'rgba(255,255,255,0.15)' : '#FFFFFF',
                            border: isStar ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '100px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: isStar ? '#FFFFFF' : 'rgba(10,10,10,0.7)',
                            boxShadow: isStar ? 'none' : '0 2px 8px rgba(0,0,0,0.02)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ClipReveal>
            );
          })}
        </div>

        {/* Divider statement */}
        <ClipReveal delay={0.2}>
          <div
            style={{
              marginTop: '12px',
              padding: 'clamp(20px, 5vw, 32px)',
              background: 'rgba(242,68,5,0.08)',
              border: '1px solid rgba(242,68,5,0.2)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(14px, 4vw, 18px)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                lineHeight: 1.4,
              }}
            >
              Contenido que construye audiencia.{' '}
              <span style={{ color: 'var(--or-3)' }}>Web que la convierte en clientes.</span>
            </p>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
