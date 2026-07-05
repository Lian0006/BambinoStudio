'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';
import Hero from '@/components/sections/Hero';
import Servicios from '@/components/sections/Servicios';
import Proceso from '@/components/sections/Proceso';
import Testimonios from '@/components/sections/Testimonios';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(true);

  // Enlace directo al calendario de Google para agendar
  const CALENDAR_URL = 'https://calendar.app.google/dQXdNXXgkptD6JUK8';

  return (
    <main className="hide-scroll">
      <Hero onOpenModal={() => {}} ready={loaderDone} calendlyUrl={CALENDAR_URL} />
      <Servicios />
      <Proceso onOpenModal={() => {}} calendlyUrl={CALENDAR_URL} />
      <Testimonios />
      <Footer onOpenModal={() => {}} calendlyUrl={CALENDAR_URL} />
    </main>
  );
}
