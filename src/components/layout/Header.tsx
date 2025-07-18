'use client';

import { useRouter } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const router = useRouter();

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <header className="sticky top-0 w-full px-8 flex items-center bg-white h-16 border-t-brand border-t-2">
      {/* logo图标 */}
      <Logo />

      {/* 标题 */}
      <span className="text-xl font-bold ml-2 tracking-wide">智算专业服务</span>

      {/* 导航栏 */}
      <nav className="ml-auto">
        <ul className="flex items-center gap-8">
          <li
            className="cursor-pointer hover:text-brand transition-all duration-300"
            onClick={() => handleNavClick('/')}
          >
            首页
          </li>
          <li
            className="cursor-pointer hover:text-brand transition-all duration-300"
            onClick={() => handleNavClick('/')}
          >
            专业服务
          </li>
          <li
            className="cursor-pointer hover:text-brand transition-all duration-300"
            onClick={() => handleNavClick('/industry-cases')}
          >
            行业案例
          </li>
          <li
            className="cursor-pointer hover:text-brand transition-all duration-300"
            onClick={() => handleNavClick('/about-us')}
          >
            关于我们
          </li>
          <li
            className="cursor-pointer hover:bg-red-700 hover:translate-y-[-2px] transition-all duration-300 bg-brand text-white px-2 rounded-md py-2"
            onClick={() => handleNavClick('/')}
          >
            联系我们
          </li>
        </ul>
      </nav>
    </header>
  );
}
