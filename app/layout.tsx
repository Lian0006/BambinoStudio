import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Letterbox from '@/components/Letterbox';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Bambino Studio — Contenido Audiovisual + Desarrollo Web | Colombia - New York',
  description:
    'Las historias bien contadas no solo generan vistas. Generan impacto, autoridad y clientes. Bambino Studio: producción audiovisual + desarrollo web que convierte tu marca en un negocio imposible de ignorar.',
  keywords: [
    'agencia de contenido',
    'producción audiovisual',
    'desarrollo web',
    'aplicaciones a medida',
    'Next.js',
    'landing pages',
    'e-commerce',
    'Bambino Studio',
    'gestión de redes sociales',
    'web apps a medida',
  ],
  authors: [{ name: 'Bambino Studio' }],
  openGraph: {
    title: 'Bambino Studio — Contenido + Web que convierte',
    description:
      'No entregamos piezas sueltas. Entregamos el sistema completo: contenido que construye audiencia y web que la convierte en clientes.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <Letterbox />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
