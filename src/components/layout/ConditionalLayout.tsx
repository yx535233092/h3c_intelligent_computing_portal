'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  // excel-process 页面不显示 header、hero、footer
  const isExcelProcessPage = pathname === '/excel-process';

  return (
    <>
      {<Header />}
      {!isExcelProcessPage && <HeroSection />}
      <main>{children}</main>
      {!isExcelProcessPage && <Footer />}
    </>
  );
}
