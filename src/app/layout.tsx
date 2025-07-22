import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/layout/HeroSection';
import { RootStyleRegistry } from '@/components/layout/RootStyleRegistry';

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

      <RootStyleRegistry>
        <body>
          {/* 全局导航栏 */}
          <Header />

          {/* 英雄区域 */}
          <HeroSection />

          {/* 主要内容区域 */}
          <main>{children}</main>

          {/* 全局页脚 */}
          <Footer />
        </body>
      </RootStyleRegistry>
    </html>
  );
}
