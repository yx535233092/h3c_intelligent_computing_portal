'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { allCases, getCasesByCategory, caseCategories } from '@/utils/caseData';

interface CaseShowcaseProps {
  category?: string; // 可选的分类筛选
  limit?: number; // 可选的显示数量限制
}

export default function CaseShowcase({ category, limit }: CaseShowcaseProps) {
  const router = useRouter();

  // 根据分类筛选案例
  const getFilteredCases = () => {
    if (category) {
      const categoryKey = caseCategories.find(
        (cat) => cat.label === category
      )?.key;
      return categoryKey ? getCasesByCategory(categoryKey) : allCases;
    }
    return allCases;
  };

  const cases = getFilteredCases();
  const displayCases = limit ? cases.slice(0, limit) : cases;

  const handleCaseClick = (routeAdress: string) => {
    router.push(routeAdress);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayCases.map((caseItem, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
          onClick={() => handleCaseClick(caseItem.routeAdress)}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`/${caseItem.picName}`}
              alt={caseItem.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              {caseItem.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {caseItem.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-brand text-sm font-medium">查看详情</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
