'use client';

import { useEffect, useRef, useState } from 'react';

const PHONE = '+34675811548';
const PHONE_DISPLAY = '+34 675 811 548';
const WA_URL = `https://wa.me/34675811548?text=${encodeURIComponent('Hola Doli, me gustaría reservar mesa.')}`;

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin: '-10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, mounted };
}

function Mandala({ className = '', size = 480 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="35" />
      <circle cx="100" cy="100" r="15" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path d="M100 5 Q 110 50 100 95 Q 90 50 100 5 Z" />
            <line x1="100" y1="100" x2="100" y2="5" strokeOpacity="0.5" />
          </g>
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        return (
          <g key={`p-${i}`} transform={`rotate(${angle} 100 100)`}>
            <ellipse cx="100" cy="55" rx="6" ry="18" />
          </g>
        );
      })}
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c0 4-4 5-4 9a4 4 0 0 0 8 0c0-2-1-3-2-4 0 2-1 3-2 3 0-3 0-6 0-8z" />
      <path d="M8.5 14a3.5 3.5 0 0 0 7 0" />
    </svg>
  );
}

function IconPot() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7z" />
      <path d="M3 10h18" />
      <path d="M8 6c0-1 1-2 2-2M12 5c0-1 1-2 2-2" />
      <path d="M2 14h2M20 14h2" />
    </svg>
  );
}

function IconMortar() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14l-1.5 6a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5 12z" />
      <path d="M4 12h16" />
      <path d="M14 3l3 6" />
      <path d="M14 3l-1 2" />
    </svg>
  );
}

export default function Page() {
  const aboutChap = useReveal<HTMLSpanElement>();
  const cocinaChap = useReveal<HTMLSpanElement>();
  const visitChap = useReveal<HTMLSpanElement>();
  const card1 = useReveal<HTMLDivElement>();
  const card2 = useReveal<HTMLDivElement>();
  const card3 = useReveal<HTMLDivElement>();

  return (
    <main className="relative">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-tight">
            Doli<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#sobre-nosotros" className="text-ink-soft hover:text-ink transition-colors duration-200">Sobre nosotros</a>
            <a href="#cocina" className="text-ink-soft hover:text-ink transition-colors duration-200">Cocina</a>
            <a href="#como-llegar" className="text-ink-soft hover:text-ink transition-colors duration-200">Cómo llegar</a>
            <a href="#contacto" className="text-ink-soft hover:text-ink transition-colors duration-200">Contacto</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="btn-primary hidden sm:inline-flex bg-accent text-bg px-5 py-2 rounded-full text-sm font-medium tracking-wide"
          >
            Llamar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-radial">
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" aria-hidden="true" />

        {/* Etiqueta circular desktop */}
        <div className="hidden lg:flex absolute top-28 right-12 xl:right-24 w-44 h-44 rounded-full border border-accent/60 items-center justify-center text-center -rotate-6 z-10">
          <span className="px-6 text-[10px] uppercase tracking-[0.25em] text-accent leading-relaxed">
            Auténtica cocina<br />del norte de la India
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium mb-8">
            <span className="eyebrow-bar" aria-hidden="true" />
            Restaurante indio · Madrid
          </p>
          <h1
            className="font-display font-normal leading-[1.05] tracking-tight max-w-5xl"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            El <em className="italic text-accent">sabor</em> del norte de la India, cocinado a <em className="italic text-accent">fuego</em> lento en el corazón de Madrid.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            En Doli servimos recetas tradicionales del Punjab y Delhi, con especias molidas en casa y el horno tandoor encendido cada noche.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={`tel:${PHONE}`} className="btn-primary bg-accent text-bg px-7 py-3.5 rounded-full font-medium tracking-wide text-sm">
              Llamar al restaurante
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost border border-line text-ink hover:border-accent hover:text-accent px-7 py-3.5 rounded-full font-medium tracking-wide text-sm">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-ink-soft">
          Desliza
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="flex justify-center py-8"><hr className="w-32 h-px border-0 bg-line" /></div>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute right-0 bottom-0 -z-10 text-accent" aria-hidden="true">
          <Mandala className="opacity-[0.06] translate-x-1/4 translate-y-1/4" size={520} />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <span
            ref={aboutChap.ref}
            data-chapter
            data-mounted={aboutChap.mounted}
            className="absolute -top-4 -left-2 lg:-left-8 font-display italic font-normal text-accent select-none pointer-events-none -z-10"
            style={{ fontSize: 'clamp(6rem, 12vw, 9rem)', lineHeight: 1 }}
            aria-hidden="true"
          >
            01
          </span>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-8">
                <span className="eyebrow-bar" aria-hidden="true" />
                Capítulo 01 · Sobre nosotros
              </p>
              <h2
                className="font-display font-normal leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
              >
                Una cocina que huele a <em className="italic">cardamomo</em>, comino y leña.
              </h2>
              <p className="mt-8 text-ink-soft leading-[1.75] max-w-prose" style={{ fontSize: '1.0625rem' }}>
                Doli no es un restaurante indio más. Es la mesa de una familia que lleva décadas cocinando lo que cocinaba su abuela: currys de cocción larga, panes recién hechos contra las paredes del tandoor y arroces basmati perfumados con azafrán y clavo. Sin atajos, sin glutamato, sin prisa.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl border border-line relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(217, 118, 66, 0.18) 0%, #241610 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center text-accent">
                  <Mandala className="opacity-30" size={320} />
                </div>
                <div className="absolute inset-0 grain" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="flex justify-center py-8"><hr className="w-32 h-px border-0 bg-line" /></div>

      {/* COCINA */}
      <section id="cocina" className="relative bg-surface py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <span
            ref={cocinaChap.ref}
            data-chapter
            data-mounted={cocinaChap.mounted}
            className="absolute -top-4 right-0 font-display italic font-normal text-accent select-none pointer-events-none"
            style={{ fontSize: 'clamp(6rem, 12vw, 9rem)', lineHeight: 1 }}
            aria-hidden="true"
          >
            02
          </span>

          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-8">
              <span className="eyebrow-bar" aria-hidden="true" />
              Capítulo 02 · Nuestra cocina
            </p>
            <h2
              className="font-display font-normal leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
            >
              Tres pilares, una sola <em className="italic">tradición</em>.
            </h2>
            <p className="mt-8 text-ink-soft leading-[1.75] max-w-prose" style={{ fontSize: '1.0625rem' }}>
              Trabajamos con las técnicas que definen la cocina del norte de la India. Cada plato pasa por una de estas tres manos.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div ref={card1.ref} data-reveal data-mounted={card1.mounted} className="pillar-card bg-bg border border-line p-8 rounded-2xl">
              <div className="text-accent mb-6"><IconFlame /></div>
              <h3 className="font-display font-medium" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Tandoor</h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">
                Horno de barro a 400ºC. Pollo tikka, seekh kebab, naan recién hecho. El fuego define el sabor.
              </p>
            </div>
            <div ref={card2.ref} data-reveal data-mounted={card2.mounted} className="pillar-card bg-bg border border-line p-8 rounded-2xl">
              <div className="text-accent mb-6"><IconPot /></div>
              <h3 className="font-display font-medium" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Curry de cocción lenta</h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">
                Salsas que se cocinan durante horas. Butter chicken, rogan josh, dal makhani de la noche anterior.
              </p>
            </div>
            <div ref={card3.ref} data-reveal data-mounted={card3.mounted} className="pillar-card bg-bg border border-line p-8 rounded-2xl">
              <div className="text-accent mb-6"><IconMortar /></div>
              <h3 className="font-display font-medium" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Especias molidas en casa</h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">
                Cada masala se tuesta y se muele a diario. Garam masala, tandoori masala, chaat masala. Nunca de bote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="flex justify-center py-8"><hr className="w-32 h-px border-0 bg-line" /></div>

      {/* CÓMO LLEGAR */}
      <section id="como-llegar" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <span
            ref={visitChap.ref}
            data-chapter
            data-mounted={visitChap.mounted}
            className="absolute -top-4 -left-2 lg:-left-8 font-display italic font-normal text-accent select-none pointer-events-none -z-10"
            style={{ fontSize: 'clamp(6rem, 12vw, 9rem)', lineHeight: 1 }}
            aria-hidden="true"
          >
            03
          </span>

          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-8">
              <span className="eyebrow-bar" aria-hidden="true" />
              Capítulo 03 · Cómo llegar
            </p>
            <h2
              className="font-display font-normal leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
            >
              Te esperamos en <em className="italic">Madrid</em>.
            </h2>
          </div>

          <div className="mt-12 rounded-2xl border border-accent/20 p-10 md:p-16 relative overflow-hidden" style={{ background: 'rgba(217, 118, 66, 0.08)' }}>
            <div className="absolute -right-20 -top-20 text-accent opacity-10" aria-hidden="true">
              <Mandala size={360} />
            </div>
            <div className="relative max-w-2xl">
              <p className="text-ink-soft leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
                Mesa para dos, para seis, para una celebración. Llámanos o escríbenos por WhatsApp y te guardamos sitio.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="btn-primary bg-accent text-bg px-7 py-3.5 rounded-full font-medium tracking-wide text-sm">
                  Llamar al restaurante
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost border border-line text-ink hover:border-accent hover:text-accent px-7 py-3.5 rounded-full font-medium tracking-wide text-sm">
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="flex justify-center py-8"><hr className="w-32 h-px border-0 bg-line" /></div>

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-8">
            <span className="eyebrow-bar" aria-hidden="true" />
            Contacto
          </p>
          <h2
            className="font-display font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <em className="italic">Hablemos</em>.
          </h2>
          <p className="mt-8 max-w-2xl text-ink-soft leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
            Estamos al otro lado del teléfono o del WhatsApp. Sin formularios, sin esperas.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink-soft mb-3">Teléfono</p>
              <a href={`tel:${PHONE}`} className="link-underline font-display text-3xl md:text-4xl">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink-soft mb-3">WhatsApp</p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="link-underline font-display text-3xl md:text-4xl">
                Escríbenos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl tracking-tight">Doli<span className="text-accent">.</span></p>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-ink-soft">Restaurante indio · Madrid</p>
          </div>
          <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Doli. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
