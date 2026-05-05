import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Doli · Restaurante Indio en Madrid — Cocina del Norte de la India',
  description: 'Restaurante indio en Madrid con tandoor tradicional, currys de cocción lenta y especias molidas en casa. Auténtica cocina del Punjab y Delhi.',
  keywords: ['restaurante indio Madrid', 'comida india Madrid', 'tandoori Madrid', 'butter chicken Madrid', 'Doli restaurante', 'cocina india auténtica', 'naan Madrid', 'Punjab Madrid'],
  openGraph: {
    title: 'Doli · Restaurante Indio en Madrid',
    description: 'Auténtica cocina del norte de la India en el corazón de Madrid.',
    type: 'website',
    locale: 'es_ES'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Doli',
    description: 'Restaurante indio en Madrid especializado en cocina del norte de la India.',
    servesCuisine: 'Indian',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES'
    },
    telephone: '+34675811548'
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
