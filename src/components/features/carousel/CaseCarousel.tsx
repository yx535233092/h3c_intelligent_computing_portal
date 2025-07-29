import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  display: 'flex',
  height: '540px',
  color: '#000',
  background: '#fff'
};

const App: React.FC = () => (
  <Carousel effect="fade">
    {Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx}>
        <div className="case-carousel-container" style={contentStyle}>
          {/* 介绍 */}
          <div className="flex-1 flex flex-col">
            <div className="px-30">
              <h1 className="font-normal  text-5xl tracking-wide mt-20 mb-10">
                移动招标案例
              </h1>
              <p className="text-xl tracking-wider text-gray-600 leading-8 h-60">
                针对编写招标文件过程中缺少文档编写辅助系统，完全依赖人工编写各类招投标文档，标书支撑面临编制工作量大、审核耗时长、依赖个人经验、存量数据挖掘不足等痛点。基于历史积累的投标文件、相关政策法规、人员资料信息等材料构建标书知识库，并融合大小模型能力，打造智慧标书助手，加快标书制作审核效率，提升标书人员专业水平
              </p>
              <button className="h-14 border-1 border-brand rounded-4xl px-8 text-brand text-xl cursor-pointer">
                {'了解更多 >>'}
              </button>
            </div>
          </div>

          {/* 图片 */}
          <div className="flex-1 overflow-hidden">
            <Image
              className="case-img"
              alt="case"
              src={'/9.jpg'}
              width={4000}
              height={4000}
            />
          </div>
        </div>
      </div>
    ))}
    {/* 样式 */}
    <style global jsx>{`
      .case-img {
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .case-carousel-container:hover:hover {
        .case-img {
          transform: scale(1.08);
          z-index: 1;
        }
      }
    `}</style>
  </Carousel>
);

export default App;
