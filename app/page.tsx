export default function Page() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <a href="#hero" className="font-display text-2xl tracking-tight">
            Doli<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            <a href="#sobre" className="hover:text-ink transition-colors duration-200">Nuestra casa</a>
            <a href="#cocina" className="hover:text-ink transition-colors duration-200">Cocina</a>
            <a href="#visitanos" className="hover:text-ink transition-colors duration-200">Visítanos</a>
            <a href="#contacto" className="hover:text-ink transition-colors duration-200">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-line rounded-full px-5 py-2 hover:border-accent hover:text-accent transition-all duration-200 active:scale-[0.97]"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient + grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 15% 95%, rgba(217,118,66,0.4) 0%, rgba(217,118,66,0.15) 35%, #1a0f0a 75%)'
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-9">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
                  Restaurante Indio · Madrid
                </span>
              </div>
              <h1
                className="font-display font-normal text-ink leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
              >
                El <em className="italic font-normal text-accent">sabor</em> del norte de la India,
                cocinado a <em className="italic font-normal text-accent">fuego</em> lento en el
                corazón de Madrid.
              </h1>
              <p className="mt-8 max-w-xl text-ink-soft text-lg leading-relaxed">
                En Doli servimos recetas tradicionales del Punjab y Delhi, con especias molidas en
                casa y el horno tandoor encendido cada noche.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#cocina"
                  className="group inline-flex items-center gap-3 bg-accent text-bg font-medium px-7 py-4 rounded-full transition-transform duration-150 ease-out active:scale-[0.97] hover:bg-[#e58a55]"
                  style={{ transitionProperty: 'transform, background-color' }}
                >
                  Ver carta
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#visitanos"
                  className="inline-flex items-center gap-3 border border-line text-ink px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-200 ease-out active:scale-[0.97]"
                >
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <div
                className="inline-flex items-center justify-center text-center border border-accent/60 rounded-full px-6 py-8 max-w-[200px] text-xs uppercase tracking-widest2 text-accent"
                style={{ transform: 'rotate(-6deg)' }}
              >
                Auténtica cocina del norte de la India
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-ink-soft uppercase tracking-widest2 hidden md:block">
          <span className="inline-block animate-pulse">↓ Desliza</span>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Mandala watermark */}
        <svg
          aria-hidden="true"
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ opacity: 0.06 }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <g stroke="#d97642" strokeWidth="0.5">
            <circle cx="100" cy="100" r="95" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="55" />
            <circle cx="100" cy="100" r="35" />
            <circle cx="100" cy="100" r="15" />
            {Array.from({ length: 16 }).map((_, i) => {
              const a = (i * Math.PI * 2) / 16;
              return (
                <line
                  key={i}
                  x1={100}
                  y1={100}
                  x2={100 + Math.cos(a) * 95}
                  y2={100 + Math.sin(a) * 95}
                />
              );
            })}
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * Math.PI * 2) / 8;
              return (
                <ellipse
                  key={i}
                  cx={100 + Math.cos(a) * 55}
                  cy={100 + Math.sin(a) * 55}
                  rx={20}
                  ry={8}
                  transform={`rotate(${(a * 180) / Math.PI} ${100 + Math.cos(a) * 55} ${100 + Math.sin(a) * 55})`}
                />
              );
            })}
          </g>
        </svg>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7 relative">
              {/* Big faded number */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -left-4 font-display italic text-accent select-none pointer-events-none"
                style={{ fontSize: 'clamp(8rem, 18vw, 14rem)', opacity: 0.08, lineHeight: 1 }}
              >
                01
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
                    Capítulo 01 · Nuestra Casa
                  </span>
                </div>
                <h2
                  className="font-display font-normal leading-[1.1] tracking-tight max-w-2xl"
                  style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
                >
                  Una cocina que huele a <em className="italic">cardamomo</em>, comino y leña.
                </h2>
                <p className="mt-8 text-ink-soft text-lg leading-[1.7] max-w-prose">
                  Doli no es un restaurante indio más. Es la mesa de una familia que lleva décadas
                  cocinando lo que cocinaba su abuela: currys de cocción larga, panes recién hechos
                  contra las paredes del tandoor y arroces basmati perfumados con azafrán y clavo.
                </p>
                <p className="mt-4 text-ink-soft text-lg leading-[1.7] max-w-prose">
                  Sin atajos, sin glutamato, sin prisa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(217,118,66,0.18) 0%, #241610 80%)'
                }}
              >
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-2/3 h-2/3"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <g stroke="#d97642" strokeWidth="0.6" opacity="0.5">
                    <circle cx="100" cy="100" r="90" />
                    <circle cx="100" cy="100" r="70" />
                    <circle cx="100" cy="100" r="50" />
                    <circle cx="100" cy="100" r="30" />
                    {Array.from({ length: 12 }).map((_, i) => {
                      const a = (i * Math.PI * 2) / 12;
                      return (
                        <line
                          key={i}
                          x1={100}
                          y1={100}
                          x2={100 + Math.cos(a) * 90}
                          y2={100 + Math.sin(a) * 90}
                        />
                      );
                    })}
                    {Array.from({ length: 8 }).map((_, i) => {
                      const a = (i * Math.PI * 2) / 8;
                      return (
                        <circle
                          key={i}
                          cx={100 + Math.cos(a) * 70}
                          cy={100 + Math.sin(a) * 70}
                          r="6"
                        />
                      );
                    })}
                  </g>
                </svg>
                <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-widest2 text-ink-soft">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-accent" />
                    <span>Especias · Tandoor · Tradición</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA GASTRONÓMICA */}
      <section id="cocina" className="relative bg-surface py-24 lg:py-32">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-20 right-0 font-display italic text-accent select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 14rem)', opacity: 0.08, lineHeight: 1 }}
            >
              02
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
                Capítulo 02 · Nuestra Cocina
              </span>
            </div>
            <h2
              className="font-display font-normal leading-[1.1] tracking-tight max-w-3xl"
              style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
            >
              Tres pilares, una sola <em className="italic">tradición</em>.
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-[1.7] max-w-2xl">
              Trabajamos con las técnicas que definen la cocina del norte de la India. Cada plato
              pasa por una de estas tres manos.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Tandoor',
                description:
                  'Horno de barro a 400ºC. Pollo tikka, seekh kebab, naan recién hecho. El fuego define el sabor.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M12 3c1.5 2.5 0 4-.5 5.5C11 10 11.5 11 12 12c0.5-1 1-2 0.5-3.5C12 7 13.5 5.5 12 3z" />
                    <path d="M8 14c-1 1.5-1 4 1 5.5" />
                    <path d="M16 14c1 1.5 1 4-1 5.5" />
                    <path d="M6 16c0 3 2.5 5 6 5s6-2 6-5c0-2-1-4-3-5" />
                  </svg>
                )
              },
              {
                name: 'Curry de cocción lenta',
                description:
                  'Salsas que se cocinan durante horas. Butter chicken, rogan josh, dal makhani de la noche anterior.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M4 11h16" />
                    <path d="M5 11v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6" />
                    <path d="M3 11h18" />
                    <path d="M9 7c0-1 .5-2 1.5-2.5" />
                    <path d="M12 7c0-1 .5-2 1.5-2.5" />
                    <path d="M15 7c0-1 .5-2 1.5-2.5" />
                  </svg>
                )
              },
              {
                name: 'Especias molidas en casa',
                description:
                  'Cada masala se tuesta y se muele a diario. Garam masala, tandoori masala, chaat masala. Nunca de bote.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M7 14a5 5 0 0 1 10 0v4H7z" />
                    <path d="M9 18v2" />
                    <path d="M15 18v2" />
                    <path d="M12 9V4" />
                    <path d="M10 6h4" />
                  </svg>
                )
              }
            ].map((p, i) => (
              <article
                key={p.name}
                className="group relative bg-bg border border-line rounded-2xl p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_40px_-20px_rgba(217,118,66,0.25)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-accent">{p.icon}</div>
                  <span className="font-display italic text-ink-soft text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className="font-display font-normal text-ink leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                >
                  {p.name}
                </h3>
                <p className="mt-4 text-ink-soft leading-[1.7] text-[1.0625rem]">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISÍTANOS */}
      <section
        id="visitanos"
        className="relative py-24 lg:py-32"
        style={{ backgroundColor: 'rgba(217, 118, 66, 0.06)' }}
      >
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div
                aria-hidden="true"
                className="absolute -top-16 -left-4 font-display italic text-accent select-none pointer-events-none"
                style={{ fontSize: 'clamp(8rem, 18vw, 14rem)', opacity: 0.08, lineHeight: 1 }}
              >
                03
              </div>

              <div className="flex items-center gap-4 mb-6 relative">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
                  Capítulo 03 · Visítanos
                </span>
              </div>
              <h2
                className="font-display font-normal leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
              >
                Te esperamos en <em className="italic">Madrid</em>.
              </h2>
              <p className="mt-6 text-ink-soft text-lg leading-[1.7] max-w-prose">
                Mesa para dos, para seis, para una celebración. Pasa, llama o escríbenos por
                WhatsApp y reservamos sitio.
              </p>

              <dl className="mt-10 space-y-6 border-t border-line pt-8">
                <div className="flex items-baseline gap-6">
                  <dt className="text-xs uppercase tracking-widest2 text-ink-soft w-24 shrink-0">Dónde</dt>
                  <dd className="text-ink text-lg font-display">Madrid</dd>
                </div>
                <div className="flex items-baseline gap-6">
                  <dt className="text-xs uppercase tracking-widest2 text-ink-soft w-24 shrink-0">Teléfono</dt>
                  <dd className="text-ink">[TEL_PENDIENTE]</dd>
                </div>
                <div className="flex items-baseline gap-6">
                  <dt className="text-xs uppercase tracking-widest2 text-ink-soft w-24 shrink-0">Email</dt>
                  <dd className="text-ink break-all">[EMAIL_PENDIENTE]</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              {/* Stylized map */}
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-line bg-surface">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 320"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d97642" strokeWidth="0.3" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* abstract roads */}
                  <g stroke="#d97642" strokeWidth="1" fill="none" opacity="0.4">
                    <path d="M 0 180 Q 100 160 200 170 T 400 150" />
                    <path d="M 0 100 L 150 110 L 250 90 L 400 110" />
                    <path d="M 80 0 L 90 120 L 110 200 L 100 320" />
                    <path d="M 280 0 L 270 100 L 290 220 L 300 320" />
                  </g>
                  {/* pin */}
                  <g transform="translate(200 160)">
                    <circle r="30" fill="#d97642" opacity="0.15">
                      <animate attributeName="r" values="20;40;20" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.25;0.05;0.25" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle r="8" fill="#d97642" />
                    <circle r="3" fill="#1a0f0a" />
                  </g>
                </svg>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-widest2">
                  <span className="text-ink-soft">Madrid · España</span>
                  <span className="text-accent">Doli ·</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative bg-bg py-24 lg:py-32 border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-widest2 text-accent">
              Contacto
            </span>
          </div>
          <h2
            className="font-display font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <em className="italic">Hablemos</em>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-[1.7] max-w-xl">
            Reservas, eventos privados o simplemente para saludar. Estamos al otro lado.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="#"
              /* pending real phone */
              className="group flex items-center justify-between gap-4 bg-accent text-bg font-medium px-7 py-5 rounded-full transition-transform duration-150 ease-out active:scale-[0.97] hover:bg-[#e58a55]"
              style={{ transitionProperty: 'transform, background-color' }}
            >
              <span className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp
              </span>
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#"
              /* pending real phone */
              className="group flex items-center justify-between gap-4 border border-line text-ink px-7 py-5 rounded-full hover:border-accent hover:text-accent transition-all duration-200 ease-out active:scale-[0.97]"
            >
              <span className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                Llamar al restaurante
              </span>
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-ink-soft">
            <div className="font-display text-2xl text-ink">
              Doli<span className="text-accent">.</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 uppercase tracking-widest2 text-xs">
              <a href="#sobre" className="hover:text-ink transition-colors">Nuestra casa</a>
              <a href="#cocina" className="hover:text-ink transition-colors">Cocina</a>
              <a href="#visitanos" className="hover:text-ink transition-colors">Visítanos</a>
            </div>
            <div className="text-xs">© {new Date().getFullYear()} Doli · Madrid</div>
          </div>
        </div>
      </section>
    </main>
  );
}
