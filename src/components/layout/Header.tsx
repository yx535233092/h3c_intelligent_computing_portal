import Link from 'next/link';
import Logo from '@/components/common/Logo';
import Nav from '@/components/features/nav/Nav';

export default function Header() {
  return (
    <header className="sticky top-0 w-full px-16 flex items-center bg-white h-16 border-t-brand border-t-2 shadow-lg z-99">
      {/* LOGO图标 */}
      <Logo />
      {/* LOGO标题 */}
      <Link className="text-xl font-normal ml-4 tracking-wide title" href="/">
        智算专业服务
      </Link>

      {/* 导航栏 */}
      <Nav />
    </header>
  );
}
