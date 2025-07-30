'use client';

import { useState } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

// 提取公共样式
const commonStyles = {
  cardGradient: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
  hoverShadow: '0 8px 24px rgba(0,0,0,0.1)',
  cardShadow: '0 2px 8px rgba(0,0,0,0.08)',
  roundedCard:
    'rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]',
  demoContainer:
    'w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  linkStyle:
    'text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]'
};

// 提取动画样式
const getAnimationStyle = (isInView: boolean, delay: number = 0) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView
    ? 'translateY(0) scale(1)'
    : 'translateY(40px) scale(0.95)',
  transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`
});

// 提取文本动画样式
const getTextAnimationStyle = (isInView: boolean, delay: number = 0) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView ? 'translateY(0)' : 'translateY(30px)',
  transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`
});

// 提取选项卡动画样式
const getTabAnimationStyle = (isInView: boolean, delay: number = 0) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
  transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
});

// 产品卡片组件
const ProductCard = ({
  title,
  description,
  demoContent,
  link,
  isInView,
  delay = 0
}: {
  title: string;
  description: string[];
  demoContent: React.ReactNode;
  link: string;
  isInView: boolean;
  delay?: number;
}) => (
  <div
    className={commonStyles.roundedCard}
    style={{
      background: commonStyles.cardGradient,
      ...getAnimationStyle(isInView, delay),
      transition: 'all 0.3s ease'
    }}
  >
    <div className="flex items-center gap-8">
      <div className={`flex-shrink-0 ${commonStyles.demoContainer}`}>
        {demoContent}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">{title}</h3>
        <p className="text-[#666] leading-6 mb-5">
          {description.map((line, index) => (
            <span key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </span>
          ))}
        </p>
        <a
          href={link}
          target="_blank"
          className={commonStyles.linkStyle}
          style={{
            background: 'linear-gradient(135deg, #4285f4, #1a73e8)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
            border: '2px solid transparent',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            transform: 'translateY(0)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow =
              '0 8px 25px rgba(66, 133, 244, 0.4)';
            e.currentTarget.style.background =
              'linear-gradient(135deg, #1a73e8, #1557b0)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow =
              '0 4px 15px rgba(66, 133, 244, 0.3)';
            e.currentTarget.style.background =
              'linear-gradient(135deg, #4285f4, #1a73e8)';
          }}
        >
          立即体验 {'>'}
        </a>
      </div>
    </div>
  </div>
);

// 选项卡按钮组件
const TabButton = ({
  active,
  children,
  onClick,
  isInView,
  delay = 0
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  isInView: boolean;
  delay?: number;
}) => (
  <button
    className={`bg-transparent border-none py-4 px-8 text-[1.1rem] cursor-pointer border-b-[3px] border-transparent transition-all duration-200 hover:text-[#e53935] ${
      active ? 'text-[#e53935] border-b-[#e53935] font-semibold' : 'text-[#666]'
    }`}
    style={getTabAnimationStyle(isInView, delay)}
    onClick={onClick}
  >
    {children}
  </button>
);

// 优势卡片组件
const FeatureCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(229,57,53,0.05)] p-8 min-w-[240px] max-w-[320px] flex-1 text-center">
    <h3 className="text-[#e53935] text-xl mb-3">{title}</h3>
    <p className="text-[#444]">{description}</p>
  </div>
);

// 文件格式卡片组件
const FormatCard = ({
  icon,
  label,
  isInView,
  delay = 0
}: {
  icon: React.ReactNode;
  label: string;
  isInView: boolean;
  delay?: number;
}) => (
  <div
    className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
    style={getTextAnimationStyle(isInView, delay)}
  >
    {icon}
    <span className="mt-2.5">{label}</span>
  </div>
);

export default function DataService() {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState('text');
  const [productTitle, setProductTitle] = useState('智能文档处理');

  // 使用自定义hook管理动画
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [featuresRef, isFeaturesInView] = useInView({ threshold: 0.2 });
  const [multiNeedsRef, isMultiNeedsInView] = useInView({ threshold: 0.2 });
  const [intelligentProcessRef, isIntelligentProcessInView] = useInView({
    threshold: 0.1
  });

  // 选项卡配置
  const tabs = [
    {
      key: 'text',
      label: '文本解析',
      title: '智能文本解析'
    },
    {
      key: 'table',
      label: '表格解析',
      title: '智能表格解析'
    },
    {
      key: 'image',
      label: '图片解析',
      title: '智能图片解析'
    }
  ];

  // 优势数据
  const features = [
    {
      title: '表格识别更精准',
      description: '支持复杂表格、单元格合并，跨页表格也能准确还原。'
    },
    {
      title: '解析速度极快',
      description: '百页文档秒级解析，支持大批量离线处理。'
    },
    {
      title: '高稳定性',
      description: '亿级调用量技术积累，稳定可靠，成功率99.999%。'
    }
  ];

  // 文件格式数据
  const formats = [
    {
      label: 'PDF',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, #dc2626 0%, #ef4444 50%, #f87171 100%)',
            boxShadow:
              '0 4px 12px rgba(220, 38, 38, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(220, 38, 38, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #dc2626',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* PDF 标识 */}
          <div className="absolute left-1/2 top-[18px] transform -translate-x-1/2 text-white text-[0.6rem] font-black tracking-wider">
            PDF
          </div>

          {/* 装饰线条 */}
          <div className="absolute left-2 top-[30px] w-8 h-[2px] bg-white/80 rounded-full"></div>
          <div className="absolute left-2 top-[34px] w-6 h-[1.5px] bg-white/60 rounded-full"></div>
          <div className="absolute left-2 top-[38px] w-7 h-[1.5px] bg-white/60 rounded-full"></div>
        </div>
      )
    },
    {
      label: 'Word',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
            boxShadow:
              '0 4px 12px rgba(30, 64, 175, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(30, 64, 175, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #1e40af',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* Word 图标 */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[1.8rem] font-black">
            W
          </div>

          {/* 装饰元素 */}
          <div className="absolute left-2 bottom-3 w-8 h-[1px] bg-white/70 rounded-full"></div>
          <div className="absolute left-2 bottom-1.5 w-6 h-[1px] bg-white/50 rounded-full"></div>
        </div>
      )
    },
    {
      label: 'Excel',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, #15803d 0%, #22c55e 50%, #4ade80 100%)',
            boxShadow:
              '0 4px 12px rgba(21, 128, 61, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(21, 128, 61, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #15803d',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* 表格网格 */}
          <div className="absolute left-2 top-[18px] w-8 h-7 bg-white/90 rounded-sm overflow-hidden">
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px] bg-green-600">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white"
                  style={{
                    background: i === 0 ? '#22c55e' : 'white'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Excel X 标识 */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-white text-[1rem] font-black">
            X
          </div>
        </div>
      )
    },
    {
      label: 'JPEG',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #ea580c 0%, #f97316 50%, #fb923c 100%)',
            boxShadow:
              '0 4px 12px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(234, 88, 12, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #ea580c',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* 图片预览框 */}
          <div className="absolute left-2 top-[20px] w-8 h-6 bg-white/90 rounded-md overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                position: 'relative'
              }}
            >
              {/* 山峰图案 */}
              <div
                className="absolute bottom-0 left-0 w-0 h-0"
                style={{
                  borderBottom: '8px solid #92400e',
                  borderRight: '12px solid transparent'
                }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-0 h-0"
                style={{
                  borderBottom: '6px solid #78350f',
                  borderLeft: '8px solid transparent'
                }}
              ></div>
              {/* 太阳 */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-200 rounded-full"></div>
            </div>
          </div>

          {/* JPEG 标识 */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-white text-[0.5rem] font-bold">
            JPEG
          </div>
        </div>
      )
    },
    {
      label: 'PNG',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)',
            boxShadow:
              '0 4px 12px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(124, 58, 237, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #7c3aed',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* 图片预览框 */}
          <div className="absolute left-2 top-[20px] w-8 h-6 bg-white/90 rounded-md overflow-hidden">
            <div
              className="w-full h-full relative"
              style={{
                background:
                  'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #9333ea 100%)'
              }}
            >
              {/* 透明度网格背景 */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #ffffff 25%, transparent 25%), 
                    linear-gradient(-45deg, #ffffff 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #ffffff 75%), 
                    linear-gradient(-45deg, transparent 75%, #ffffff 75%)
                  `,
                  backgroundSize: '4px 4px',
                  backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
                }}
              ></div>
              {/* 几何图案 */}
              <div className="absolute top-1 left-1 w-3 h-3 bg-white/80 rounded-full"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/60 rounded-sm"></div>
            </div>
          </div>

          {/* PNG 标识 */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-white text-[0.5rem] font-bold">
            PNG
          </div>
        </div>
      )
    },
    {
      label: 'WebP',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)',
            boxShadow:
              '0 4px 12px rgba(8, 145, 178, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(8, 145, 178, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #0891b2',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* 现代化图片预览框 */}
          <div className="absolute left-2 top-[20px] w-8 h-6 bg-white/95 rounded-md overflow-hidden border border-cyan-200">
            <div
              className="w-full h-full relative"
              style={{
                background:
                  'linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #a5f3fc 100%)'
              }}
            >
              {/* 现代几何图案 */}
              <div className="absolute inset-0">
                {/* 圆形元素 */}
                <div className="absolute top-0.5 left-1 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-80"></div>
                <div className="absolute top-1.5 right-0.5 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-60"></div>

                {/* 波浪线条 */}
                <div
                  className="absolute bottom-1 left-0 right-0 h-2"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, #22d3ee 20%, #06b6d4 50%, #0891b2 80%, transparent 100%)',
                    clipPath:
                      'polygon(0% 100%, 10% 80%, 30% 90%, 50% 70%, 70% 85%, 90% 75%, 100% 100%)'
                  }}
                ></div>

                {/* 现代条纹 */}
                <div className="absolute top-3 left-0.5 w-3 h-0.5 bg-cyan-500 rounded-full opacity-70 transform rotate-12"></div>
                <div className="absolute top-4 right-1 w-2 h-0.5 bg-cyan-400 rounded-full opacity-50 transform -rotate-12"></div>
              </div>

              {/* WebP 特有的压缩效果指示 */}
              <div className="absolute top-0 right-0 w-1 h-1">
                <div className="w-full h-full bg-green-400 rounded-bl-md opacity-80"></div>
              </div>
            </div>
          </div>

          {/* WebP 标识 */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-white text-[0.45rem] font-bold tracking-wide">
            WebP
          </div>
        </div>
      )
    },
    {
      label: 'HTML',
      icon: (
        <div
          className="w-12 h-14 rounded-[10px_10px_6px_6px] relative transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
          style={{
            background:
              'linear-gradient(145deg, #059669 0%, #10b981 50%, #34d399 100%)',
            boxShadow:
              '0 4px 12px rgba(5, 150, 105, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* 文件折角 */}
          <div
            className="absolute right-0 top-0 w-[20px] h-[20px] rounded-tr-[10px]"
            style={{
              background: 'linear-gradient(225deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: 'inset -2px -2px 4px rgba(5, 150, 105, 0.2)'
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-0 h-0"
            style={{
              borderLeft: '8px solid #059669',
              borderTop: '8px solid transparent'
            }}
          ></div>

          {/* HTML 标签 */}
          <div className="absolute left-1/2 top-[20px] transform -translate-x-1/2 text-white text-[0.7rem] font-bold">
            &lt;/&gt;
          </div>

          {/* 代码行 */}
          <div className="absolute left-2 top-[32px] w-6 h-[1.5px] bg-white/80 rounded-full"></div>
          <div className="absolute left-3 top-[36px] w-4 h-[1px] bg-white/60 rounded-full"></div>
          <div className="absolute left-2 top-[40px] w-5 h-[1px] bg-white/60 rounded-full"></div>

          {/* HTML 标识 */}
          <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-white text-[0.4rem] font-bold tracking-wide">
            HTML
          </div>
        </div>
      )
    }
  ];

  // 产品数据
  const products = {
    text: [
      {
        title: '常规文档解析',
        description: [
          '支持PDF、Word、图片等多种格式',
          '智能识别文档结构和内容',
          '保持原有格式和排版信息'
        ],
        link: 'http://192.168.10.24:7860/?title=常规文档解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：文档 → AI解析 → 结构化文本 */}
            <div className="flex items-center gap-3">
              {/* 输入：多格式文档 */}
              <div className="flex flex-col gap-1">
                <div
                  className="w-8 h-10 rounded-md shadow-md flex items-center justify-center text-white text-[0.5rem] font-bold"
                  style={{
                    background:
                      'linear-gradient(145deg, #dc2626 0%, #f87171 100%)'
                  }}
                >
                  PDF
                </div>
                <div
                  className="w-8 h-8 rounded-md shadow-md flex items-center justify-center text-white text-[0.5rem] font-bold"
                  style={{
                    background:
                      'linear-gradient(145deg, #3b82f6 0%, #60a5fa 100%)'
                  }}
                >
                  DOC
                </div>
              </div>

              {/* 处理过程：AI解析 */}
              <div className="flex flex-col items-center">
                <div className="text-[#666] text-lg font-bold">→</div>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-[0.6rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-lg font-bold">→</div>
              </div>

              {/* 输出：结构化文本 */}
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md flex flex-col items-center justify-center border border-green-300">
                <div className="text-[0.4rem] text-green-700 font-bold mb-0.5">
                  结构化文本
                </div>
                <div className="w-8 h-0.5 bg-green-600 rounded mb-0.5"></div>
                <div className="w-6 h-0.5 bg-green-500 rounded mb-0.5"></div>
                <div className="w-7 h-0.5 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '复杂表格解析',
        description: ['行列合并表格', '跨页表格', '...'],
        link: 'http://192.168.10.24:7860/?title=复杂布局文档解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：复杂表格 → AI识别 → 结构化数据 */}
            <div className="flex items-center gap-2">
              {/* 输入：复杂表格文档 */}
              <div
                className="w-10 h-12 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #059669 0%, #10b981 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  复杂表格
                </div>
                {/* 复杂表格结构 */}
                <div className="w-7 h-6 bg-white/20 rounded grid grid-cols-3 grid-rows-3 gap-px p-0.5">
                  <div className="col-span-2 bg-white/90 rounded-sm"></div>
                  <div className="bg-white/70 rounded-sm"></div>
                  <div className="bg-white/60 rounded-sm"></div>
                  <div className="col-span-2 bg-white/80 rounded-sm"></div>
                  <div className="col-span-3 bg-white/70 rounded-sm"></div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：结构化数据 */}
              <div className="w-11 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-emerald-300">
                <div className="text-[0.4rem] text-emerald-700 font-bold mb-1">
                  Excel数据
                </div>
                <div className="w-8 h-5 bg-white rounded border border-emerald-200 grid grid-cols-3 grid-rows-2 gap-px p-0.5">
                  <div className="bg-emerald-200 rounded-sm"></div>
                  <div className="bg-emerald-200 rounded-sm"></div>
                  <div className="bg-emerald-200 rounded-sm"></div>
                  <div className="bg-emerald-100 rounded-sm"></div>
                  <div className="bg-emerald-100 rounded-sm"></div>
                  <div className="bg-emerald-100 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '公式类文档解析',
        description: ['数学公式精准识别', 'LaTeX格式输出', '复杂公式结构解析'],
        link: 'http://192.168.10.24:7860/?title=公式类文档解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：公式文档 → AI识别 → LaTeX代码 */}
            <div className="flex items-center gap-2">
              {/* 输入：含公式的PDF */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #ea580c 0%, #f97316 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  数学PDF
                </div>
                <div className="w-7 h-3 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-[0.4rem] font-bold">
                    ∫f(x)dx
                  </span>
                </div>
                <div className="w-6 h-0.5 bg-white/50 rounded mt-1"></div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：LaTeX代码 */}
              <div className="w-12 h-11 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-orange-300">
                <div className="text-[0.4rem] text-orange-700 font-bold mb-1">
                  LaTeX
                </div>
                <div className="w-9 h-6 bg-gray-800 rounded text-green-400 flex flex-col items-center justify-center">
                  <div className="text-[0.3rem] font-mono">\int f(x)</div>
                  <div className="text-[0.3rem] font-mono">\,dx</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '媒体报刊类文档解析',
        description: ['报纸版面解析', '杂志内容解析', '研究报告解析'],
        link: 'http://192.168.10.24:7860/?title=媒体报刊类文档解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：报纸杂志 → AI解析 → 结构化内容 */}
            <div className="flex items-center gap-2">
              {/* 输入：报纸杂志 */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #1976d2 0%, #42a5f5 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  报纸
                </div>
                <div className="w-7 h-6 flex flex-col gap-0.5">
                  <div className="w-full h-1 bg-white/90 rounded"></div>
                  <div className="w-5 h-0.5 bg-white/70 rounded"></div>
                  <div className="w-6 h-0.5 bg-white/70 rounded"></div>
                  <div className="w-4 h-0.5 bg-white/50 rounded"></div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：结构化内容 */}
              <div className="w-12 h-11 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-blue-300">
                <div className="text-[0.4rem] text-blue-700 font-bold mb-1">
                  新闻内容
                </div>
                <div className="w-9 h-6 bg-white rounded border border-blue-200 flex flex-col gap-0.5 p-0.5">
                  <div className="w-full h-1 bg-blue-200 rounded text-[0.2rem] flex items-center justify-center text-blue-700">
                    标题
                  </div>
                  <div className="w-full h-0.5 bg-blue-100 rounded"></div>
                  <div className="w-4/5 h-0.5 bg-blue-100 rounded"></div>
                  <div className="w-full h-0.5 bg-blue-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '论文解析',
        description: ['普通论文解析', '化学论文解析', '章节结构提取'],
        link: 'http://192.168.10.24:7860/?title=论文解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：学术论文 → AI分析 → 结构化数据 */}
            <div className="flex items-center gap-2">
              {/* 输入：学术论文 */}
              <div className="flex flex-col gap-1">
                <div
                  className="w-8 h-10 rounded-md shadow-md flex flex-col items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(145deg, #1e40af 0%, #3b82f6 100%)'
                  }}
                >
                  <div className="text-white text-[0.4rem] font-bold mb-1">
                    普通
                  </div>
                  <div className="w-6 h-4 flex flex-col gap-0.5">
                    <div className="w-full h-0.5 bg-white/90 rounded"></div>
                    <div className="w-4 h-0.5 bg-white/70 rounded"></div>
                    <div className="w-5 h-0.5 bg-white/70 rounded"></div>
                  </div>
                </div>
                <div
                  className="w-8 h-8 rounded-md shadow-md flex flex-col items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(145deg, #ea580c 0%, #f97316 100%)'
                  }}
                >
                  <div className="text-white text-[0.4rem] font-bold mb-0.5">
                    化学
                  </div>
                  <div className="text-white text-[0.4rem] font-bold">H₂O</div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：结构化学术内容 */}
              <div className="w-11 h-12 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-indigo-300">
                <div className="text-[0.4rem] text-indigo-700 font-bold mb-1">
                  论文结构
                </div>
                <div className="w-9 h-7 bg-white rounded border border-indigo-200 flex flex-col gap-0.5 p-0.5">
                  <div className="w-full h-0.5 bg-indigo-300 rounded text-[0.2rem] flex items-center justify-center text-indigo-700">
                    摘要
                  </div>
                  <div className="w-full h-0.5 bg-indigo-200 rounded"></div>
                  <div className="w-3/4 h-0.5 bg-indigo-200 rounded"></div>
                  <div className="w-1/2 h-0.5 bg-indigo-100 rounded text-[0.15rem] flex items-center justify-center text-indigo-600">
                    [1]
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '试卷解析',
        description: ['题目选项识别', '答案区域提取', '评分标准解析'],
        link: 'http://192.168.10.24:7860/?title=试卷解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：试卷 → AI解析 → 结构化题目 */}
            <div className="flex items-center gap-2">
              {/* 输入：试卷 */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #7c3aed 0%, #8b5cf6 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  试卷
                </div>
                <div className="w-7 h-6 flex flex-col gap-0.5">
                  <div className="w-full h-0.5 bg-white/90 rounded"></div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1 h-1 border border-white/80 rounded-sm bg-white/90"></div>
                    <div className="w-3 h-0.5 bg-white/70 rounded"></div>
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-1 h-1 border border-white/80 rounded-sm"></div>
                    <div className="w-3 h-0.5 bg-white/70 rounded"></div>
                  </div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：结构化题目 */}
              <div className="w-12 h-11 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-purple-300">
                <div className="text-[0.4rem] text-purple-700 font-bold mb-1">
                  题目解析
                </div>
                <div className="w-9 h-6 bg-white rounded border border-purple-200 flex flex-col gap-0.5 p-0.5">
                  <div className="w-full h-0.5 bg-purple-200 rounded text-[0.2rem] flex items-center justify-center text-purple-700">
                    题干
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-0.5 h-0.5 bg-purple-400 rounded-full"></div>
                    <div className="w-3 h-0.5 bg-purple-100 rounded"></div>
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <div className="w-0.5 h-0.5 bg-purple-300 rounded-full"></div>
                    <div className="w-2 h-0.5 bg-purple-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    table: [
      {
        title: '多区域表格解析',
        description: ['智能识别页面多表格', '分别解析输出', '保持数据完整性'],
        link: '/excel-process?title=多区域表格解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：多表格页面 → AI识别 → 分别解析 */}
            <div className="flex items-center gap-2">
              {/* 输入：含多个表格的页面 */}
              <div
                className="w-10 h-12 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #f59e0b 0%, #f97316 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  多表页面
                </div>
                <div className="w-8 h-7 flex flex-col gap-0.5">
                  {/* 表格1 */}
                  <div className="w-4 h-2.5 bg-white/20 rounded grid grid-cols-2 gap-px p-0.5">
                    <div className="bg-white/90 rounded-sm"></div>
                    <div className="bg-white/90 rounded-sm"></div>
                    <div className="bg-white/70 rounded-sm"></div>
                    <div className="bg-white/70 rounded-sm"></div>
                  </div>
                  {/* 表格2 */}
                  <div className="w-6 h-2.5 bg-white/20 rounded grid grid-cols-3 gap-px p-0.5">
                    <div className="bg-white/90 rounded-sm"></div>
                    <div className="bg-white/90 rounded-sm"></div>
                    <div className="bg-white/90 rounded-sm"></div>
                    <div className="bg-white/70 rounded-sm"></div>
                    <div className="bg-white/70 rounded-sm"></div>
                    <div className="bg-white/70 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：分别解析的表格 */}
              <div className="w-11 h-12 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-yellow-300">
                <div className="text-[0.4rem] text-yellow-700 font-bold mb-1">
                  分别输出
                </div>
                <div className="w-9 h-7 flex flex-col gap-0.5">
                  <div className="w-full h-2.5 bg-white rounded border border-yellow-300 grid grid-cols-2 gap-px p-0.5">
                    <div className="bg-yellow-200 rounded-sm"></div>
                    <div className="bg-yellow-200 rounded-sm"></div>
                    <div className="bg-yellow-100 rounded-sm"></div>
                    <div className="bg-yellow-100 rounded-sm"></div>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded border border-yellow-300 grid grid-cols-3 gap-px p-0.5">
                    <div className="bg-yellow-200 rounded-sm"></div>
                    <div className="bg-yellow-200 rounded-sm"></div>
                    <div className="bg-yellow-200 rounded-sm"></div>
                    <div className="bg-yellow-100 rounded-sm"></div>
                    <div className="bg-yellow-100 rounded-sm"></div>
                    <div className="bg-yellow-100 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '复杂表头解析(合并场景)',
        description: ['多层级表头识别', '合并单元格处理', '表格逻辑结构还原'],
        link: '/excel-process?title=复杂表头解析(合并场景)&type=2',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：复杂表头 → AI解析 → 逻辑结构 */}
            <div className="flex items-center gap-2">
              {/* 输入：复杂合并表头 */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #22c55e 0%, #16a34a 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  复杂表头
                </div>
                <div className="w-7 h-6 bg-white/20 rounded">
                  {/* 多层表头 */}
                  <div className="h-2 flex border-b border-white/30">
                    <div className="w-1/2 border-r border-white/30 bg-white/40 text-[0.2rem] text-white flex items-center justify-center">
                      合并
                    </div>
                    <div className="w-1/4 border-r border-white/30 bg-white/30"></div>
                    <div className="w-1/4 bg-white/30"></div>
                  </div>
                  <div className="h-1.5 flex border-b border-white/20">
                    <div className="w-1/4 border-r border-white/20 bg-white/20"></div>
                    <div className="w-1/4 border-r border-white/20 bg-white/20"></div>
                    <div className="w-1/4 border-r border-white/20 bg-white/20"></div>
                    <div className="w-1/4 bg-white/20"></div>
                  </div>
                  <div className="h-1.5 flex">
                    <div className="w-1/4 border-r border-white/20 bg-white/10"></div>
                    <div className="w-1/4 border-r border-white/20 bg-white/10"></div>
                    <div className="w-1/4 border-r border-white/20 bg-white/10"></div>
                    <div className="w-1/4 bg-white/10"></div>
                  </div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：逻辑结构表格 */}
              <div className="w-11 h-11 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-green-300">
                <div className="text-[0.4rem] text-green-700 font-bold mb-1">
                  结构还原
                </div>
                <div className="w-9 h-6 bg-white rounded border border-green-200">
                  <div className="h-2 bg-green-200 border-b border-green-300 flex items-center justify-center text-[0.2rem] text-green-800">
                    表头逻辑
                  </div>
                  <div className="h-2 grid grid-cols-4 gap-px p-0.5">
                    <div className="bg-green-100 rounded-sm"></div>
                    <div className="bg-green-100 rounded-sm"></div>
                    <div className="bg-green-100 rounded-sm"></div>
                    <div className="bg-green-100 rounded-sm"></div>
                  </div>
                  <div className="h-2 grid grid-cols-4 gap-px p-0.5">
                    <div className="bg-green-50 rounded-sm"></div>
                    <div className="bg-green-50 rounded-sm"></div>
                    <div className="bg-green-50 rounded-sm"></div>
                    <div className="bg-green-50 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    image: [
      {
        title: '古籍解析',
        description: ['古代文献识别', '繁体字、古文字', '专业文史处理'],
        link: 'http://192.168.10.24:7860/?title=古籍解析',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：古籍图片 → AI识别 → 繁体文本 */}
            <div className="flex items-center gap-2">
              {/* 输入：古籍图片 */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #8b4513 0%, #d2691e 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  古籍图片
                </div>
                <div className="w-7 h-6 bg-amber-100 rounded border border-amber-300 flex items-center justify-center">
                  <div className="text-amber-800 text-base font-bold">古</div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：识别结果 */}
              <div className="w-11 h-11 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-amber-300">
                <div className="text-[0.4rem] text-amber-700 font-bold mb-1">
                  古文识别
                </div>
                <div className="w-9 h-6 bg-white rounded border border-amber-200 flex flex-col gap-0.5 p-0.5">
                  <div className="w-full h-1 bg-amber-200 rounded text-[0.2rem] flex items-center justify-center text-amber-800">
                    繁体字
                  </div>
                  <div className="w-full h-0.5 bg-amber-100 rounded"></div>
                  <div className="w-4/5 h-0.5 bg-amber-100 rounded"></div>
                  <div className="w-full h-0.5 bg-amber-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: '手写识别',
        description: ['高精度手写识别', '多种笔迹风格', '草书行书支持'],
        link: 'http://192.168.10.24:7860/?title=手写识别',
        demoContent: (
          <div className="w-[160px] h-[120px] flex items-center justify-center relative">
            {/* 操作流程：手写图片 → AI识别 → 数字化文本 */}
            <div className="flex items-center gap-2">
              {/* 输入：手写图片 */}
              <div
                className="w-9 h-11 rounded-md shadow-md flex flex-col items-center justify-center"
                style={{
                  background:
                    'linear-gradient(145deg, #64748b 0%, #94a3b8 100%)'
                }}
              >
                <div className="text-white text-[0.4rem] font-bold mb-1">
                  手写图片
                </div>
                <div className="w-7 h-6 bg-gray-100 rounded border border-gray-300 flex flex-col items-center justify-center gap-0.5">
                  <div className="w-5 h-0.5 bg-gray-600 rounded transform -rotate-2"></div>
                  <div className="w-4 h-0.5 bg-gray-600 rounded transform rotate-1"></div>
                  <div className="w-5 h-0.5 bg-gray-600 rounded transform -rotate-1"></div>
                </div>
              </div>

              {/* 处理过程 */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-[#666] text-sm font-bold">→</div>
                <div className="w-5 h-5 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[0.5rem] font-bold">AI</span>
                </div>
                <div className="text-[#666] text-sm font-bold">→</div>
              </div>

              {/* 输出：数字化文本 */}
              <div className="w-11 h-11 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-md flex flex-col items-center justify-center border border-slate-300">
                <div className="text-[0.4rem] text-slate-700 font-bold mb-1">
                  数字化文本
                </div>
                <div className="w-9 h-6 bg-white rounded border border-slate-200 flex flex-col gap-0.5 p-0.5">
                  <div className="w-full h-0.5 bg-slate-300 rounded"></div>
                  <div className="w-4/5 h-0.5 bg-slate-200 rounded"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded"></div>
                  <div className="w-3/4 h-0.5 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  };

  return (
    <div className="pb-[100px] bg-[#fafbfc] min-h-screen font-['PingFang_SC','Microsoft_YaHei',Arial,sans-serif]">
      {/* 顶部标题区 */}
      <section
        ref={heroRef}
        className={`text-center pt-[150px] pb-[90px] bg-[url('/13.jpg')] bg-center bg-cover shadow-[0_4px_24px_rgba(229,57,53,0.06)] transition-all duration-1000 ${
          isHeroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <h1 className="text-[#d32d26] text-5xl font-bold mb-15">
          数据服务解决方案
        </h1>
        <p className="text-[#222] text-2xl mb-4">
          面向文本、图像与表格的AI多模态数据解析服务
        </p>
        <p className="text-[#666] text-base mb-10">
          支持文档与图片文字识别，智能结构化输出，助力各类应用场景。
        </p>
      </section>

      {/* 三栏优势区 */}
      <section
        ref={featuresRef}
        className={`flex justify-center gap-8 my-12 mx-8 flex-wrap transition-all duration-1000 ${
          isFeaturesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>

      {/* 多种需求区块 */}
      <section
        ref={multiNeedsRef}
        className={`mx-auto my-[100px] p-10 rounded-[20px] max-w-[900px] relative text-center ${
          isMultiNeedsInView ? 'animate-in' : ''
        }`}
      >
        <h2
          className="text-5xl font-normal mb-10 text-[#222]"
          style={getTextAnimationStyle(isMultiNeedsInView)}
        >
          多种需求，一&ldquo;次&rdquo;搞定
        </h2>
        <p
          className="text-[1.08rem] text-[#444] mb-1"
          style={getTextAnimationStyle(isMultiNeedsInView, 0.2)}
        >
          支持 PDF、Word（doc/docx）、常见图片（jpg/png/webp/tiff）、HTML
          等多种文件格式
        </p>
        <p
          className="text-[1.08rem] text-[#444] mb-8"
          style={getTextAnimationStyle(isMultiNeedsInView, 0.4)}
        >
          一键解析数据内容，获取文字、表格、标题层级、公式、手写字符、图片信息
        </p>
        <div className="flex justify-center gap-7 mb-8 flex-wrap">
          {formats.map((format, index) => (
            <FormatCard
              key={index}
              icon={format.icon}
              label={format.label}
              isInView={isMultiNeedsInView}
              delay={0.6 + index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* 智能文档处理模块 */}
      <section
        ref={intelligentProcessRef}
        className={`mx-auto p-10 max-w-[1300px] bg-white rounded-[20px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] ${
          isIntelligentProcessInView ? 'animate-in' : ''
        }`}
      >
        <h2
          className="text-[2.5rem] font-semibold mb-4 text-[#222] text-center"
          style={{
            opacity: isIntelligentProcessInView ? 1 : 0,
            transform: isIntelligentProcessInView
              ? 'translateY(0)'
              : 'translateY(-30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          {productTitle}
        </h2>

        {/* 选项卡导航 */}
        <div className="flex justify-center mb-10 border-b border-[#e0e0e0]">
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              isInView={isIntelligentProcessInView}
              delay={0.6 + index * 0.1}
              onClick={() => {
                setActiveTab(tab.key);
                setProductTitle(tab.title);
              }}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        {/* 选项卡内容 */}
        <div className="flex flex-col gap-6">
          {products[activeTab as keyof typeof products]?.map(
            (product, index) => (
              <ProductCard
                key={index}
                {...product}
                isInView={isIntelligentProcessInView}
                delay={index * 0.2}
              />
            )
          )}
        </div>
      </section>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            opacity: 0.6;
            transform: scaleX(1);
          }
          100% {
            opacity: 1;
            transform: scaleX(0.98);
          }
        }
        @keyframes dataLoad {
          0%,
          100% {
            opacity: 0.6;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        @keyframes complexDataLoad {
          0%,
          100% {
            opacity: 0.5;
            transform: scaleX(0.7);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}
