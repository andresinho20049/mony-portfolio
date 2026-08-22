import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/theme-context';
import './globals.css';
import { ThemeToggle } from '@/components/toggle-theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Monique Martins',
    template: '%s | Monique Martins',
  },
  description:
    'Portfólio profissional de Monique Martins. Especialista em recepção, atendimento ao cliente e com vivência na gastronomia. Conectando pessoas e entregando excelência em Itanhaém - SP.',
  keywords: [
    'Monique Martins',
    'Recepcionista Itanhaém',
    'Atendimento ao Cliente',
    'Portfólio Profissional',
    'Auxiliar de Cozinha',
    'Gastronomia',
    'Atendimento Receptivo',
    'Itanhaém SP',
  ],
  authors: [{ name: 'Monique da Silva Martins' }],
  creator: 'Monique da Silva Martins',
  publisher: 'Monique da Silva Martins',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moniquemartins.andresinho20049.com.br'), // Altere para o seu domínio final em produção
  openGraph: {
    title: 'Monique Martins | Recepcionista & Atendimento ao Cliente',
    description:
      'Conectando pessoas, oferecendo suporte e entregando excelência — seja na linha de frente do atendimento ou à mesa, com comida que aconchega.',
    url: 'https://moniquemartins.andresinho20049.com.br', // Altere para a URL final
    siteName: 'Portfólio Monique Martins',
    images: [
      {
        url: '/photos/0016D70A-0015.jpg',
        width: 1200,
        height: 630,
        alt: 'Monique da Silva Martins - Perfil Profissional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monique Martins | Recepcionista & Atendimento ao Cliente',
    description:
      'Portfólio profissional de Monique Martins: recepção, atendimento e paixão pela gastronomia.',
    images: ['/photos/0016D70A-0015.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}

          <div className='fixed bottom-4 right-4 md:bottom-12 md:right-12'>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
