'use client';

import { useEffect, useRef } from 'react';

const nav = [
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
  { label: 'Cocina', href: '#cocina' },
  { label: 'Cómo llegar', href: '#como-llegar' },
  { label: 'Contacto', href: '#contacto' }
];

function Mandala({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="55" />
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="10" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 30;
        const y1 = 100 + Math.sin(angle) * 30;
        const x2 = 100 + Math.cos(angle) * 95;
        const y2 = 100 + Math.sin(angle) * 95;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 100 + Math.cos(angle) * 55;
        const cy = 100 + Math.sin(angle) * 55;
        return <circle key={`p-${i}`} cx={cx} cy={cy} r="8" />;
      })}
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 1-5" />
      <path d="M12 22a6 6 0 0 0 6-6c0-2-1-3-2-4-1 2-2 3-4 3s-3-1-3-3c-2 1-3 2-3 4a6 6 0 0 0 6 6z" />
    </svg>
  );
}

function IconPot() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h16" />
      <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
      <path d="M2 10h2" />
      <path d="M20 10h2" />
      <path d="M9 6c0-1 1-2 1-2M13 6c0-1 1-2 1-2M11 4c0-1 1-2 1-2" />
    </svg>
  );
}

function IconMortar() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11h14l-1.5 7a2 2 0 0 1-2 1.6h-7A2 2 0 0 1 6.5 18z" />
      <path d="M3 11h18" />
      <path d="M14 4l4 4" />
      <path d="M16 2l-3 3" />
    </svg>
  );
}

const pillars = [
  {
    name: 'Tandoor',
    description:
      'Horno de barro a 400ºC. Pollo tikka, seekh kebab, naan recién hecho. El fuego define el sabor.',
    Icon: IconFlame
  },
  {
    name: 'Curry de cocción lenta',
    description:
      'Salsas que se cocinan durante horas. Butter chicken, rogan josh, dal makhani de la noche anterior.',
    Icon: IconPot
  },
  {
    name: 'Especias molidas en casa',
    description:
      'Cada masala se tuesta y se muele a diario. Garam masala, tandoori masala, chaat masala. Nunca de bote.',
    Icon: IconMortar
  }
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useRevealAll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('.pillar-card');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Page() {
  const aboutNumberRef = useReveal<HTMLSpanElement>();
  const cookNumberRef = useReveal<HTMLSpanElement>();
  const visitNumberRef = useReveal<HTMLSpanElement>();
  const pillarsRef = useRevealAll<HTMLDivElement>();

  return (
    <main className="relative">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            Doli<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-ink transition-[color] duration-200"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="text-xs uppercase tracking-[0.2em] text-accent hover:text-ink transition-[color] duration-200">
            Contacto
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden pt-32 pb-20 md:pb-28">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 10% 100%, rgba(217,118,66,0.4) 0%, rgba(217,118,66,0.15) 30%, #1a0f0a 70%)'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        <div className="grain -z-10" />

        {/* Decorative badge */}
        <div className="hidden lg:block absolute top-32 right-10">
          <div className="hero-badge">Auténtica cocina del norte de la India</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full relative">
          <p className="eyebrow mb-8">Restaurante indio · Madrid</p>
          <h1 className="fluid-h1 font-display font-normal max-w-4xl text-ink">
            El <em className="font-display italic font-normal text-accent">sabor</em> del norte de la India, cocinado a{' '}
            <em className="font-display italic font-normal text-accent">fuego</em> lento en el corazón de Madrid.
          </h1>
          <p className="mt-8 max-w-xl text-ink-soft text-[1.0625rem] leading-relaxed">
            En Doli servimos recetas tradicionales del Punjab y Delhi, con especias molidas en casa y el horno tandoor encendido cada noche.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cocina" className="btn-primary">
              Descubrir la cocina
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contacto" className="btn-ghost">Contactar</a>
          </div>
        </div>

        {/* scroll cue */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-soft">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute right-0 bottom-0 -z-10 text-accent"
          style={{ opacity: 0.06 }}
          aria-hidden="true"
        >
          <Mandala className="w-[480px] h-[480px] translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-6">Capítulo 01 · Sobre nosotros</p>
          <div className="relative">
            <span
              ref={aboutNumberRef}
              className="chapter-number absolute -top-8 -left-2 md:-top-16 md:-left-4 select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </span>
            <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-7">
                <h2 className="fluid-h2 font-display font-normal text-ink max-w-2xl">
                  Una cocina que huele a <em className="italic text-accent">cardamomo</em>, comino y leña.
                </h2>
                <div className="mt-8 space-y-6 text-ink-soft text-[1.0625rem] leading-[1.7] max-w-xl">
                  <p>
                    Doli no es un restaurante indio más. Es la mesa de una familia que lleva décadas cocinando lo que cocinaba su abuela: currys de cocción larga, panes recién hechos contra las paredes del tandoor y arroces basmati perfumados con azafrán y clavo.
                  </p>
                  <p className="text-ink">Sin atajos, sin glutamato, sin prisa.</p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(217,118,66,0.12) 0%, #241610 100%)'
                  }}
                >
                  <div className="text-accent/40">
                    <Mandala className="w-3/5 h-3/5" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Tradición</p>
                    <p className="font-display italic text-ink mt-2 text-lg">Una receta, una historia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-32 border-0 h-px bg-line" />
      </div>

      {/* COCINA */}
      <section id="cocina" className="relative py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-6">Capítulo 02 · Nuestra cocina</p>
          <div className="relative">
            <span
              ref={cookNumberRef}
              className="chapter-number absolute -top-8 right-0 md:-top-16 select-none pointer-events-none"
              aria-hidden="true"
            >
              02
            </span>
            <h2 className="fluid-h2 font-display font-normal text-ink max-w-2xl">
              Tres pilares, una sola <em className="italic text-accent">tradición</em>.
            </h2>
            <p className="mt-6 max-w-xl text-ink-soft text-[1.0625rem] leading-relaxed">
              Trabajamos con las técnicas que definen la cocina del norte de la India. Cada plato pasa por una de estas tres manos.
            </p>
          </div>

          <div ref={pillarsRef} className="mt-16 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <article
                key={p.name}
                className="pillar-card bg-bg border border-line rounded-2xl p-8"
              >
                <div className="text-accent mb-6">
                  <p.Icon />
                </div>
                <h3 className="fluid-h3 font-display text-ink">{p.name}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed text-[0.975rem]">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-32 border-0 h-px bg-line" />
      </div>

      {/* COMO LLEGAR */}
      <section id="como-llegar" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-6">Capítulo 03 · Cómo llegar</p>
          <div className="relative">
            <span
              ref={visitNumberRef}
              className="chapter-number absolute -top-8 -left-2 md:-top-16 md:-left-4 select-none pointer-events-none"
              aria-hidden="true"
            >
              03
            </span>
            <h2 className="fluid-h2 font-display font-normal text-ink max-w-2xl">
              Te esperamos en <em className="italic text-accent">Madrid</em>.
            </h2>
          </div>

          <div
            className="mt-12 rounded-2xl p-10 md:p-16 border"
            style={{
              backgroundColor: 'rgba(217, 118, 66, 0.12)',
              borderColor: 'rgba(217, 118, 66, 0.2)'
            }}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[1.0625rem] text-ink leading-[1.7] max-w-md">
                  Mesa para dos, para seis, para una celebración. Pasa por el restaurante y te guardamos sitio.
                </p>
                <div className="mt-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Ubicación</p>
                  <p className="font-display text-2xl text-ink">Madrid</p>
                  <p className="text-ink-soft text-sm">Dirección exacta próximamente.</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="text-accent/30">
                  <Mandala className="w-56 h-56" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-32 border-0 h-px bg-line" />
      </div>

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="eyebrow mb-6">Contacto</p>
          <h2 className="fluid-display font-display font-normal text-ink">
            Hable<em className="italic text-accent">mos</em>.
          </h2>
          <p className="mt-8 max-w-xl text-ink-soft text-[1.0625rem] leading-relaxed">
            Estamos al otro lado del teléfono o del WhatsApp. Sin formularios, sin esperas.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Teléfono</p>
              <p className="font-display text-xl text-ink-soft italic">Pendiente de confirmar</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Email</p>
              <p className="font-display text-xl text-ink-soft italic">Pendiente de confirmar</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Dirección</p>
              <p className="font-display text-xl text-ink">Madrid</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg">
              Doli<span className="text-accent">.</span>
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mt-2">
              Restaurante indio · Madrid
            </p>
          </div>
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Doli. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
