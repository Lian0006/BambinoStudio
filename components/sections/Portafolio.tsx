'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ClipReveal from '@/components/ui/ClipReveal';
import WordReveal from '@/components/ui/WordReveal';

const casos = [
  {
    id: 'caso-01',
    image: '/portfolio-01.jpg',
    brand: 'Marca Gastronómica',
    category: 'Contenido Audiovisual',
    result: '+340% alcance en 60 días',
    desc: 'Miniserie de marca que transformó la percepción del restaurante y triplicó las reservas.',
  },
  {
    id: 'caso-02',
    image: '/portfolio-02.jpg',
    brand: 'Consultora Premium',
    category: 'Desarrollo Web + Contenido',
    result: '+180% conversión web',
    desc: 'Sistema completo: landing page de alto rendimiento + estrategia de contenido mensual.',
  },
  {
    id: 'caso-03',
    image: '/portfolio-03.jpg',
    brand: 'E-commerce de Moda',
    category: 'Bambino Dev',
    result: '2.8x ROI en 3 meses',
    desc: 'E-commerce desarrollado a medida con integración de pasarelas de pago y panel de administración.',
  },
  {
    id: 'caso-04',
    image: '/portfolio-04.jpg',
    brand: 'Marca Personal',
    category: 'Contenido Audiovisual',
    result: '+40% autoridad de marca',
    desc: 'Estrategia de video y fotografía editorial que posicionó al fundador como referente en su sector.',
  },
];

export default function Portafolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="portafolio"
      className="section"
      style={{
        padding: 'clamp(80px, 10vh, 140px) 0',
        background: 'var(--charcoal)',
        borderTop: '1px solid rgba(242,240,228,0.06)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            marginBottom: 'clamp(48px, 6vh, 72px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Casos de éxito</p>
            <WordReveal
              text="Resultados reales. Sin promesas vacías."
              tag="h2"
              className="font-display"
              style={{
                fontSize: 'clamp(30px, 4vw, 56px)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                lineHeight: 0.97,
              } as React.CSSProperties}
            />
          </div>
          <ClipReveal>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: 'rgba(242,240,228,0.3)',
                textTransform: 'uppercase',
                maxWidth: '200px',
                textAlign: 'right',
              }}
            >
              Marcas que confiaron en el sistema
            </p>
          </ClipReveal>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
          className="portfolio-grid"
        >
          {casos.map((caso, i) => (
            <ClipReveal key={caso.id} delay={i * 0.1}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'var(--black)',
                }}
                onMouseEnter={() => setHoveredId(caso.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="article"
                aria-label={`Caso: ${caso.brand}`}
              >
                {/* Image */}
                <Image
                  src={caso.image}
                  alt={`Portfolio: ${caso.brand}`}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hoveredId === caso.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                  loading="lazy"
                />

                {/* Default label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px 24px',
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)',
                    transition: 'opacity 0.3s',
                    opacity: hoveredId === caso.id ? 0 : 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      color: 'var(--or-1)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {caso.category}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      color: 'var(--cream)',
                    }}
                  >
                    {caso.brand}
                  </p>
                </div>

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoveredId === caso.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(10,10,10,0.88)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '32px',
                        gap: '16px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(22px, 2.5vw, 32px)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--or-3)',
                        }}
                      >
                        {caso.result}
                      </span>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: 'rgba(242,240,228,0.7)',
                        }}
                      >
                        {caso.desc}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          color: 'var(--or-1)',
                          textTransform: 'uppercase',
                          marginTop: '8px',
                        }}
                      >
                        {caso.brand} · {caso.category}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ClipReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
