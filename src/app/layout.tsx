import type { Metadata, Viewport } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import { env } from '@/env';

import './globals.css';

import { cn } from '@/lib/utils';
import { AppProviders } from '@/components/providers';

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL!),

  applicationName: env.NEXT_PUBLIC_APP_NAME,

  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
  },

  description: 'Production-grade AI powered code review platform for modern engineering teams.',

  keywords: [
    'AI',
    'Code Review',
    'GitHub',
    'Pull Request',
    'TypeScript',
    'Next.js',
    'LLM',
    'CodeRabbit',
  ],

  authors: [
    {
      name: 'Deepansh Gangwar',
    },
  ],

  creator: 'Deepansh Gangwar',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Code Review',
    title: 'AI Code Review',
    description: 'Production-grade AI powered code review platform for engineering teams.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Code Review',
    description: 'Production-grade AI powered code review platform for engineering teams.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#09090b',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('h-full scroll-smooth', geist.variable, jetbrainsMono.variable)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen',
          'bg-background',
          'text-foreground',
          'font-sans',
          'antialiased',
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
