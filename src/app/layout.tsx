import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { RootStyleRegistry } from '@/components/layout/RootStyleRegistry';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

export const metadata: Metadata = {
  title: '新华三 - 智算门户',
  description: '新华三 - 智算门户'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: 'cover'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <meta
          name="viewport"
          content={`${viewport.width}; initial-scale=${viewport.initialScale}`}
        />
      </head>

      <body>
        <RootStyleRegistry>
          <ConditionalLayout>{children}</ConditionalLayout>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
