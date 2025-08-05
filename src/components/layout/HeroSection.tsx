'use client';

import { Breadcrumb, ConfigProvider } from 'antd';
import React from 'react';
import { usePathname } from 'next/navigation';

// 定义页面配置类型
interface PageConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb: Array<{ title: string }>;
}

// 页面配置映射
const pageConfigs: Record<string, PageConfig> = {
  '/contact-us': {
    title: '联系我们',
    subtitle: 'Contact Us',
    backgroundImage: '/11.jpg',
    breadcrumb: [{ title: '首页' }, { title: '联系我们' }]
  },
  '/industry-cases': {
    title: '行业案例',
    subtitle: 'Industry Case',
    backgroundImage: '/10.jpg',
    breadcrumb: [{ title: '首页' }, { title: '行业案例' }]
  }
};

export default function HeroSection() {
  // 渲染hero的地址
  const renderPath = ['/industry-cases', '/contact-us'];
  const pathname = usePathname();
  if (!renderPath.includes(pathname)) {
    return null;
  }

  const defaultConfig = {
    title: '智算门户',
    subtitle: 'Intelligent Computing Portal',
    backgroundImage: '/10.jpg',
    breadcrumb: [{ title: '首页' }]
  };

  // 获取当前页面的配置
  const getPageConfig = (): PageConfig => {
    // 精确匹配
    if (pageConfigs[pathname]) {
      return pageConfigs[pathname];
    }

    // 模糊匹配（处理子路由）
    for (const [route, config] of Object.entries(pageConfigs)) {
      if (pathname.startsWith(route)) {
        return config;
      }
    }

    return defaultConfig;
  };

  const currentConfig = getPageConfig();

  // 如果是首页，不渲染组件
  if (renderPath.includes(pathname)) {
    return (
      <>
        {/* hero */}
        <div
          className="w-full h-100 flex flex-col justify-center pl-60 gap-6"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url('${currentConfig.backgroundImage}') no-repeat center/cover`
          }}
        >
          <h1 className="text-white text-7xl font-medium tracking-wider">
            {currentConfig.title}
          </h1>
          <span className="text-white text-3xl font-normal">
            {currentConfig.subtitle}
          </span>
        </div>

        {/* 面包屑 */}
        <ConfigProvider
          theme={{
            components: {
              Breadcrumb: {
                lastItemColor: '#d32d26',
                lineHeight: 4,
                fontSize: 18
              }
            }
          }}
        >
          <Breadcrumb
            className="border-b border-gray-200"
            style={{
              paddingLeft: '15rem'
            }}
            items={currentConfig.breadcrumb}
          />
        </ConfigProvider>
      </>
    );
  }
}
