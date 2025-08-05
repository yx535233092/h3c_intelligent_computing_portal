import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/layout/HeroSection';

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
    <html
      lang="zh"
      className="tc-new-price"
      suppressContentEditableWarning={true}
    >
      <head>
        <meta
          name="viewport"
          content={`${viewport.width}; initial-scale=${viewport.initialScale}`}
        />
      </head>

      <body>
        <AntdRegistry>
          <Header />
          <HeroSection />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
