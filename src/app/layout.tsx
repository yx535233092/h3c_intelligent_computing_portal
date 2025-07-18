import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '新华三 - 智算门户',
  description: '新华三 - 智算门户'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        {/* 全局导航栏 */}
        <Header />

        {/* 主要内容区域 */}
        <main>{children}</main>

        {/* 全局页脚 */}
        <Footer />
      </body>
    </html>
  );
}
