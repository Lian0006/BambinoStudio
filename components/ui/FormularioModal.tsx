'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FormularioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Paso = 1 | 2 | 3 | 'exito';

const sectores = [
  'Moda y retail',
  'Alimentos y bebidas',
  'Salud y bienestar',
  'Servicios profesionales',
  'Tecnología / SaaS',
  'Educación',
  'Inmobiliario',
  'Otro',
];

const objetivos = [
  'Generar más ventas',
  'Construir autoridad de marca',
  'Lanzar un producto o servicio nuevo',
  'Aumentar reconocimiento en redes',
  'Otro',
];

const presupuestos = [
  'Menos de $1.000.000 COP',
  '$1.000.000 – $3.000.000',
  '$3.000.000 – $6.000.000',
  'Más de $6.000.000',
  'Prefiero hablarlo en la llamada',
];

const necesidades = [
  { value: 'contenido', label: 'Contenido audiovisual' },
  { value: 'dev', label: 'Desarrollo web-app' },
  { value: 'ambos', label: 'Ambos (sistema completo)' },
  { value: 'no-se', label: 'Aún no lo sé' },
];

export default function FormularioModal({ isOpen, onClose }: FormularioModalProps) {
  const [paso, setPaso] = useState<Paso>(1);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Form state
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [instagram, setInstagram] = useState('');
  const [sector, setSector] = useState('');

  const [necesidad, setNecesidad] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [detalle, setDetalle] = useState('');

  const [correo, setCorreo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [presupuesto, setPresupuesto] = useState('');

  // Focus trap + ESC
  useEffect(() => {
    if (!isOpen) return;
    const el = overlayRef.current;
    if (!el) return;
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [isOpen, onClose]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setPaso(1);
        setNombre(''); setMarca(''); setInstagram(''); setSector('');
        setNecesidad(''); setObjetivo(''); setDetalle('');
        setCorreo(''); setWhatsapp(''); setPresupuesto('');
      }, 400);
    }
  }, [isOpen]);

  const pasoActual = typeof paso === 'number' ? paso : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (fetch a API route, formspree, etc.)
    setPaso('exito');
  };

  const stepLabels = ['Impacto', 'Autoridad', 'Clientes'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Formulario de contacto Bambino Studio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="modal-box hide-scroll"
            style={{
              maxWidth: '620px',
              width: '95vw',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(242,68,5,0.08)',
              border: '1px solid rgba(242,240,228,0.08)',
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ── HEADER ── */}
            <div
              style={{
                padding: '28px 32px 20px',
                borderBottom: '1px solid rgba(242,240,228,0.08)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: '8px' }}>Da el primer paso</p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--cream)',
                    }}
                  >
                    {paso === 'exito' ? 'Mensaje enviado' : `Paso ${pasoActual}: ${stepLabels[(pasoActual as number) - 1]}`}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Cerrar formulario"
                  style={{
                    color: 'rgba(242,240,228,0.35)',
                    fontSize: '18px',
                    lineHeight: 1,
                    padding: '6px',
                    marginLeft: '16px',
                    transition: 'color 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--or-1)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(242,240,228,0.35)')}
                >
                  ✕
                </button>
              </div>

              {/* Progress indicator — clip-path diagonal ticks */}
              {paso !== 'exito' && (
                <div style={{ marginTop: '16px', display: 'flex', gap: '6px' }}>
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      style={{
                        flex: 1,
                        height: '4px',
                        background: (pasoActual as number) >= n
                          ? `linear-gradient(90deg, var(--or-2), var(--or-3))`
                          : 'rgba(242,240,228,0.08)',
                        transition: 'background 0.4s var(--ease-cinematic)',
                        clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                        boxShadow: (pasoActual as number) === n ? '0 0 10px rgba(242,68,5,0.5)' : 'none',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ── BODY ── */}
            <div style={{ padding: '28px 32px', overflowY: 'auto' }}>
              <AnimatePresence mode="wait">
                {/* ── PASO 1: IMPACTO ── */}
                {paso === 1 && (
                  <motion.form
                    key="paso1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={(e) => { e.preventDefault(); if (nombre && marca) setPaso(2); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div>
                      <label style={labelStyle}>¿Cómo te llamas? <span style={{ color: 'var(--or-3)' }}>*</span></label>
                      <input
                        type="text"
                        className="bs-input"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>¿Cuál es el nombre de tu marca o empresa? <span style={{ color: 'var(--or-3)' }}>*</span></label>
                      <input
                        type="text"
                        className="bs-input"
                        placeholder="Nombre de tu marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>¿Cuál es el Instagram de tu marca? <span style={{ color: 'rgba(242,240,228,0.3)' }}>(opcional)</span></label>
                      <input
                        type="text"
                        className="bs-input"
                        placeholder="@tumarca"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>¿En qué sector está tu negocio? <span style={{ color: 'rgba(242,240,228,0.3)' }}>(opcional)</span></label>
                      <select
                        className="bs-input"
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        style={{ appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="">Selecciona tu sector</option>
                        {sectores.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={!nombre || !marca}
                      style={{
                        marginTop: '8px',
                        opacity: nombre && marca ? 1 : 0.4,
                        cursor: nombre && marca ? 'pointer' : 'not-allowed',
                      }}
                    >
                      <span>Siguiente — Autoridad →</span>
                    </button>
                  </motion.form>
                )}

                {/* ── PASO 2: AUTORIDAD ── */}
                {paso === 2 && (
                  <motion.form
                    key="paso2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={(e) => { e.preventDefault(); if (necesidad) setPaso(3); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <div>
                      <label style={labelStyle}>¿Qué necesitas de Bambino Studio? <span style={{ color: 'var(--or-3)' }}>*</span></label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                        {necesidades.map((n) => (
                          <button
                            key={n.value}
                            type="button"
                            onClick={() => setNecesidad(n.value)}
                            className={`chip ${necesidad === n.value ? 'active' : ''}`}
                          >
                            {n.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>¿Cuál es tu objetivo principal? <span style={{ color: 'rgba(242,240,228,0.3)' }}>(opcional)</span></label>
                      <select
                        className="bs-input"
                        value={objetivo}
                        onChange={(e) => setObjetivo(e.target.value)}
                        style={{ appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="">Selecciona tu objetivo</option>
                        {objetivos.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Cuéntanos brevemente tu proyecto{' '}
                        <span style={{ color: 'rgba(242,240,228,0.3)' }}>(opcional)</span>
                      </label>
                      <textarea
                        className="bs-input"
                        placeholder="¿Qué está pasando hoy con tu marca y qué te gustaría lograr?"
                        value={detalle}
                        onChange={(e) => setDetalle(e.target.value)}
                        rows={4}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => setPaso(1)}
                        className="btn-outline"
                        style={{ flex: 1, minWidth: '120px' }}
                      >
                        ← Atrás
                      </button>
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={!necesidad}
                        style={{
                          flex: 2,
                          minWidth: '160px',
                          opacity: necesidad ? 1 : 0.4,
                          cursor: necesidad ? 'pointer' : 'not-allowed',
                        }}
                      >
                        <span>Siguiente — Clientes →</span>
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* ── PASO 3: CLIENTES ── */}
                {paso === 3 && (
                  <motion.form
                    key="paso3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div>
                      <label style={labelStyle}>Correo electrónico <span style={{ color: 'var(--or-3)' }}>*</span></label>
                      <input
                        type="email"
                        className="bs-input"
                        placeholder="tu@correo.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp <span style={{ color: 'var(--or-3)' }}>*</span></label>
                      <input
                        type="tel"
                        className="bs-input"
                        placeholder="+57 300 000 0000"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Presupuesto mensual aproximado <span style={{ color: 'rgba(242,240,228,0.3)' }}>(opcional)</span></label>
                      <select
                        className="bs-input"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(e.target.value)}
                        style={{ appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="">Selecciona un rango</option>
                        {presupuestos.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        padding: '14px 16px',
                        background: 'rgba(242,68,5,0.05)',
                        border: '1px solid rgba(242,68,5,0.15)',
                        marginTop: '4px',
                      }}
                    >
                      <p style={{ fontSize: '12px', lineHeight: 1.6, color: 'rgba(242,240,228,0.5)' }}>
                        Al enviar, un humano de Bambino Studio revisará tu solicitud y te contactará en menos de 24 horas.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => setPaso(2)}
                        className="btn-outline"
                        style={{ flex: 1, minWidth: '120px' }}
                      >
                        ← Atrás
                      </button>
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={!correo || !whatsapp}
                        style={{
                          flex: 2,
                          minWidth: '160px',
                          opacity: correo && whatsapp ? 1 : 0.4,
                          cursor: correo && whatsapp ? 'pointer' : 'not-allowed',
                          boxShadow: correo && whatsapp ? '0 0 24px rgba(242,68,5,0.4)' : 'none',
                        }}
                      >
                        <span>Enviar proyecto →</span>
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* ── ÉXITO ── */}
                {paso === 'exito' && (
                  <motion.div
                    key="exito"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: 'center', padding: '20px 0 8px' }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        background: 'rgba(242,68,5,0.1)',
                        border: '1px solid var(--or-3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        fontSize: '24px',
                        clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                      }}
                    >
                      ✦
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--cream)',
                        marginBottom: '12px',
                      }}
                    >
                      Proyecto recibido
                    </h4>
                    <p
                      style={{
                        color: 'rgba(242,240,228,0.6)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        marginBottom: '32px',
                        maxWidth: '400px',
                        margin: '0 auto 32px',
                      }}
                    >
                      <strong style={{ color: 'var(--cream)' }}>{nombre}</strong>, gracias por escribirnos. El equipo de Bambino Studio revisará tu solicitud y te contactaremos en menos de 24 horas por WhatsApp o correo.
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-outline"
                      style={{ margin: '0 auto' }}
                    >
                      Cerrar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(242,240,228,0.5)',
  marginBottom: '8px',
};
