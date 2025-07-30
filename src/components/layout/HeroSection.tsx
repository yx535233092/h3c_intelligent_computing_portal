'use client';

import { Breadcrumb, ConfigProvider } from 'antd';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import path from 'path';

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
  },
  '/pro-services/app-service': {
    title: '应用服务',
    subtitle: 'App Service',
    backgroundImage: '/7.jpg',
    breadcrumb: [
      { title: '首页' },
      { title: '专业服务' },
      { title: '应用服务' }
    ]
  },
  '/pro-services/data-service': {
    title: '数据服务',
    subtitle: 'Data Service',
    backgroundImage: '/5.jpg',
    breadcrumb: [
      { title: '首页' },
      { title: '专业服务' },
      { title: '数据服务' }
    ]
  },
  '/pro-services/model-service': {
    title: '模型服务',
    subtitle: 'Model Service',
    backgroundImage: '/1.jpg',
    breadcrumb: [
      { title: '首页' },
      { title: '专业服务' },
      { title: '模型服务' }
    ]
  }
};

// 默认配置（首页）
const defaultConfig: PageConfig = {
  title: '智能计算门户',
  subtitle: 'Intelligent Computing Portal',
  backgroundImage: '/1.jpg',
  breadcrumb: [{ title: '首页' }]
};

export default function HeroSection() {
  useScrollToTop();
  const pathname = usePathname();

  // 如果是首页，不渲染组件
  if (
    pathname === '/' ||
    pathname === '/home' ||
    pathname.includes('excel-process') ||
    pathname.includes('pro-services') ||
    pathname.includes('industry-cases/')
  ) {
    return null;
  }

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
