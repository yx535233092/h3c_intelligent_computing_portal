'use client';

import { Menu, ConfigProvider } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import type { MenuProps } from 'antd';
import React, { useState, useEffect } from 'react';
import './Header.css';

type MenuItem = Required<MenuProps>['items'][number];

// 导航栏目录
const items: MenuItem[] = [
  {
    label: '首页',
    key: '/'
  },
  {
    label: '专业服务',
    key: '/pro-services',
    children: [
      {
        label: '应用服务',
        key: '/pro-services/app-service'
      },
      {
        label: '数据服务',
        key: '/pro-services/data-service'
      },
      {
        label: '模型服务',
        key: '/pro-services/network-service'
      },
      {
        label: '运维服务',
        key: '/pro-services/security-service'
      }
    ]
  },
  {
    label: '行业案例',
    key: '/industry-cases'
  },
  {
    label: '关于我们',
    key: '/about-us'
  },
  {
    label: '联系我们',
    key: '/contact-us'
  }
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [current, setCurrent] = useState(pathname);

  // 当路径变化时更新current状态
  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <header className="sticky top-0 w-full px-8 flex items-center bg-white h-16 border-t-brand border-t-2 shadow-lg z-9">
      {/* logo图标 */}
      <Logo />

      {/* 标题 */}
      <span className="text-xl font-normal ml-2 tracking-wide">
        智算专业服务
      </span>

      {/* 导航栏 */}
      <nav className="ml-auto">
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemHeight: 64,
                horizontalItemSelectedBg: 'transparent',
                itemSelectedBg: 'transparent',
                horizontalItemSelectedColor: '#d32d26',
                itemSelectedColor: '#d32d26',
                subMenuItemSelectedColor: '#d32d26'
              }
            }
          }}
        >
          <Menu
            style={{ borderBottom: 'none' }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </ConfigProvider>
      </nav>
    </header>
  );
}
