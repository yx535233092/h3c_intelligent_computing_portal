'use client';

import React, { useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './CaseGrid.module.css';

interface CaseGridItem {
  title: string;
  description: string;
  picName: string;
  routeAdress: string;
}

interface CaseGridProps {
  items: CaseGridItem[];
}

const CaseGrid: React.FC<CaseGridProps> = React.memo(({ items }) => {
  const router = useRouter();

  const getIndustryLabel = useCallback((routeAdress: string) => {
    if (routeAdress.includes('goverment')) {
      return '政府';
    } else if (
      routeAdress.includes('operator') ||
      routeAdress.includes('dianxin')
    ) {
      return '运营商';
    } else if (routeAdress.includes('enterprise')) {
      return '企业';
    } else if (routeAdress.includes('education')) {
      return '教育';
    } else {
      return '其他';
    }
  }, []);

  const getIndustryIcon = useCallback((routeAdress: string) => {
    if (routeAdress.includes('goverment')) {
      // 政府 - 建筑物图标
      return (
        <svg
          className="w-6 h-6 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    } else if (
      routeAdress.includes('operator') ||
      routeAdress.includes('dianxin')
    ) {
      // 运营商 - 信号塔图标
      return (
        <svg
          className="w-6 h-6 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      );
    } else if (routeAdress.includes('enterprise')) {
      // 企业 - 公文包图标
      return (
        <svg
          className="w-6 h-6 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      );
    } else if (routeAdress.includes('education')) {
      // 教育 - 学术帽图标
      return (
        <svg
          className="w-6 h-6 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      );
    } else {
      // 其他 - 默认星星图标
      return (
        <svg
          className="w-6 h-6 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    }
  }, []);

  const handleCaseClick = useCallback(
    (routeAdress: string) => {
      router.push(routeAdress);
    },
    [router]
  );

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>, routeAdress: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        router.push(routeAdress);
      }
    },
    [router]
  );

  // 使用useMemo优化items的渲染
  const renderedItems = useMemo(() => {
    return items.map((item, idx) => (
      <div key={`${item.title}-${idx}`} className="relative group/container">
        {/* 背景装饰层 - 移除hover效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 rounded-3xl blur-sm scale-105 opacity-20"></div>

        <div
          className={`${styles['case-card-modern']} relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden group cursor-pointer border border-gray-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-fit`}
          onClick={() => handleCaseClick(item.routeAdress)}
          role="button"
          tabIndex={0}
          aria-label={`查看案例：${item.title}`}
          onKeyDown={(e) => handleCardKeyDown(e, item.routeAdress)}
        >
          {/* 顶部装饰条 - 移除hover效果 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-purple-500 to-blue-500"></div>

          {/* 主要内容区域 */}
          <div className="p-8 lg:p-10">
            {/* 头部区域 */}
            <div className="flex items-start justify-between mb-6">
              {/* 行业标签 */}
              <div className="relative">
                <div className="absolute inset-0 bg-brand/10 rounded-full blur-md scale-110 opacity-60"></div>
                <span className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-brand/10 to-purple-500/10 text-brand border border-brand/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-brand rounded-full mr-2"></div>
                  {getIndustryLabel(item.routeAdress)}
                </span>
              </div>

              {/* 装饰图标 - 根据行业类别显示 */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                  {getIndustryIcon(item.routeAdress)}
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full"></div>
              </div>
            </div>

            {/* 内容布局 - 重新设计为固定位置布局 */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 图片区域 - 固定尺寸 */}
              <div className="lg:w-80 lg:flex-shrink-0">
                <div className="relative h-48 lg:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  {/* 图片背景装饰 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-blue-500/5"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand/8 to-transparent rounded-bl-full"></div>

                  {/* 主图片 */}
                  <div className="relative w-full h-full p-3">
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-white/50">
                      <Image
                        alt={item.title}
                        src={`/${item.picName}`}
                        fill
                        className="object-cover"
                        priority={idx < 2}
                      />
                      {/* 图片遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                    </div>
                  </div>

                  {/* 装饰性几何元素 */}
                  <div className="absolute bottom-3 left-3 w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="absolute top-5 left-5 w-2 h-2 bg-brand/40 rounded-full"></div>
                </div>
              </div>

              {/* 文字内容区域 - 自适应高度 */}
              <div className="flex-1 flex flex-col">
                {/* 标题区域 - 固定位置 */}
                <div className="mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* 描述区域 - 自适应高度 */}
                <div className="flex-1 mb-6">
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* CTA 区域 - 固定在底部 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>案例详情</span>
                  </div>

                  <button
                    className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-brand to-purple-600 text-white font-semibold rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(item.routeAdress);
                    }}
                    aria-label={`了解更多：${item.title}`}
                  >
                    <span className="flex items-center">
                      了解更多
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* 间距装饰 */}
        {idx < items.length - 1 && (
          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-16 bg-gradient-to-b from-transparent via-brand/20 to-transparent"></div>
            </div>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-brand/30 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500/30 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500/30 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    ));
  }, [items, handleCaseClick, handleCardKeyDown, getIndustryLabel]);

  return (
    <div className="w-full px-4 py-16 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>

        {/* 静态背景元素 */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-brand/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/6 to-transparent rounded-full blur-3xl"></div>

        {/* 静态几何装饰点 */}
        <div className="absolute top-32 right-16 w-3 h-3 bg-brand/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-500/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500/20 rounded-full"></div>
      </div>

      {/* 主内容区域 - 限制宽度样式 */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="space-y-0">{renderedItems}</div>
      </div>

      {/* 当没有案例时显示的占位内容 */}
      {items.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">暂无案例展示</p>
        </div>
      )}
    </div>
  );
});

CaseGrid.displayName = 'CaseGrid';

export default CaseGrid;
