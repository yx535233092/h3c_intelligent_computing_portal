'use client';

import { Menu, ConfigProvider } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import type { MenuProps } from 'antd';
import React, { useState, useEffect } from 'react';

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
        label: '应用工程服务',
        key: '/pro-services/app-service'
      },
      {
        label: '数据工程服务',
        key: '/pro-services/data-service'
      },
      {
        label: '模型工程服务',
        key: '/pro-services/model-service'
      },
      {
        label: '咨询培训服务',
        key: '/pro-services/consult-service'
      }
    ]
  },
  {
    label: '行业案例',
    key: '/industry-cases'
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
    <header className="sticky top-0 w-full px-16 flex items-center bg-white h-16 border-t-brand border-t-2 shadow-lg z-99">
      {/* logo图标 */}
      <Logo />

      {/* 标题 */}
      <span className="text-xl font-normal ml-4 tracking-wide">
        智算专业服务
      </span>

      {/* 导航栏 */}
      <nav className="ml-auto">
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                horizontalItemSelectedBg: 'transparent',
                itemSelectedBg: 'transparent',
                horizontalItemSelectedColor: '#d32d26',
                itemSelectedColor: '#d32d26',
                subMenuItemSelectedColor: '#d32d26',
                fontSize: 16
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
