'use client';

import React from 'react';
import { Carousel } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './CaseCarousel.module.css';

const contentStyle: React.CSSProperties = {
  display: 'flex',
  height: '540px',
  color: '#000',
  background: '#fff'
};

interface CaseCarouselProps {
  title: string;
  description: string;
  picName: string;
}

const CaseCarousel: React.FC<CaseCarouselProps> = ({
  title,
  description,
  picName
}) => {
  const router = useRouter();

  return (
    <Carousel effect="fade">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
          <div
            className={styles['case-carousel-container']}
            style={contentStyle}
          >
            {/* 介绍 */}
            <div className="flex-1 flex flex-col">
              <div className="pl-60 pr-20">
                <h1 className="font-normal  text-5xl tracking-wide mt-20 mb-10">
                  {title}
                </h1>
                <p className="text-xl tracking-wider text-gray-600 leading-8 h-60">
                  {description}
                </p>
                <button
                  className="h-14 border-1 border-brand rounded-4xl px-8 text-brand text-xl cursor-pointer"
                  onClick={() => router.push('/industry-cases/detail')}
                >
                  {'了解更多 >>'}
                </button>
              </div>
            </div>

            {/* 图片 */}
            <div className={`flex-1 overflow-hidden ${styles['case-img']}`}>
              <Image
                alt="case"
                src={`/${picName}`}
                width={4000}
                height={4000}
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CaseCarousel;
