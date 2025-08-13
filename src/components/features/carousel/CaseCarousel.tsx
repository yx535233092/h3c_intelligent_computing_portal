'use client';

import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './CaseCarousel.module.css';

const contentStyle: React.CSSProperties = {
  display: 'flex',
  height: '540px',
  color: '#000',
  background: '#fff',
};

interface CaseCarouselItem {
  title: string;
  description: string;
  picName: string;
  routeAdress: string;
}

interface CaseCarouselProps {
  items: CaseCarouselItem[];
}

const CaseCarousel: React.FC<CaseCarouselProps> = ({ items }) => {
  const router = useRouter();

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            /* 这里是你的组件 token */
            dotGap: 8,
            dotActiveWidth: 32,
            dotWidth: 24,
            dotHeight: 6,
            dotOffset: 10,
            arrowSize: 26,
            arrowOffset: 40,
          },
        },
      }}
    >
      <Carousel
        effect="fade"
        arrows={true}
        autoplay={true}
        autoplaySpeed={5000}
        speed={1000}
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <div
              className={styles['case-carousel-container']}
              style={contentStyle}
            >
              {/* 介绍 */}
              <div className="flex-1 flex flex-col">
                <div className="pl-60 pr-18">
                  <h1 className="font-normal  text-5xl tracking-wide mt-20 mb-10">
                    {item.title}
                  </h1>
                  <p className="text-xl tracking-wider text-gray-600 leading-8 h-60">
                    {item.description}
                  </p>
                  <button
                    className="h-14 border-1 border-brand rounded-4xl px-8 text-brand text-xl cursor-pointer hover:bg-brand hover:text-white transition-all duration-300"
                    onClick={() => router.push(item.routeAdress)}
                  >
                    {'了解更多 >>'}
                  </button>
                </div>
              </div>

              {/* 图片 */}
              <div className={`flex-1 overflow-hidden ${styles['case-img']}`}>
                <Image
                  alt="case"
                  src={`/${item.picName}`}
                  width={4000}
                  height={4000}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default CaseCarousel;
