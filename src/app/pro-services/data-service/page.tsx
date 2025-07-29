'use client';

import { useState } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

export default function DataService() {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState('text');
  const [productTitle, setProductTitle] = useState('智能文档处理');

  // 添加更多动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [featuresRef, isFeaturesInView] = useInView({ threshold: 0.2 });
  const [multiNeedsRef, isMultiNeedsInView] = useInView({ threshold: 0.2 });
  const [intelligentProcessRef, isIntelligentProcessInView] = useInView({
    threshold: 0.1
  });

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
          面向文本、图像与表格的智能解析服务，助力高效输出Markdown文档
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
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(229,57,53,0.05)] p-8 min-w-[240px] max-w-[320px] flex-1 text-center">
          <h3 className="text-[#e53935] text-xl mb-3">表格识别更精准</h3>
          <p className="text-[#444]">
            支持复杂表格、单元格合并，跨页表格也能准确还原。
          </p>
        </div>
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(229,57,53,0.05)] p-8 min-w-[240px] max-w-[320px] flex-1 text-center">
          <h3 className="text-[#e53935] text-xl mb-3">解析速度极快</h3>
          <p className="text-[#444]">百页文档秒级解析，支持大批量离线处理。</p>
        </div>
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(229,57,53,0.05)] p-8 min-w-[240px] max-w-[320px] flex-1 text-center">
          <h3 className="text-[#e53935] text-xl mb-3">高稳定性</h3>
          <p className="text-[#444]">
            亿级调用量技术积累，稳定可靠，成功率99.999%。
          </p>
        </div>
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
          style={{
            opacity: isMultiNeedsInView ? 1 : 0,
            transform: isMultiNeedsInView
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          多种需求，一&ldquo;次&rdquo;搞定
        </h2>
        <p
          className="text-[1.08rem] text-[#444] mb-1"
          style={{
            opacity: isMultiNeedsInView ? 1 : 0,
            transform: isMultiNeedsInView
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition:
              'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          支持 PDF、Word（doc/docx）、常见图片（jpg/png/webp/tiff）、HTML
          等多种文件格式
        </p>
        <p
          className="text-[1.08rem] text-[#444] mb-8"
          style={{
            opacity: isMultiNeedsInView ? 1 : 0,
            transform: isMultiNeedsInView
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition:
              'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          一键解析数据内容，获取文字、表格、标题层级、公式、手写字符、图片信息
        </p>
        <div className="flex justify-center gap-7 mb-8 flex-wrap">
          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition:
                'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative"
              style={{
                background: 'linear-gradient(135deg, #f44336 70%, #fff 100%)'
              }}
            >
              <div className="absolute right-0 top-0 w-[18px] h-[18px] bg-white rounded-tr-[8px]"></div>
              <div className="absolute left-3 top-8 w-6 h-1.5 bg-white rounded-[3px]"></div>
            </div>
            <span className="mt-2.5">PDF</span>
          </div>

          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition:
                'opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative flex items-center justify-center text-white text-[1.7rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, #1976d2 70%, #fff 100%)'
              }}
            >
              W
            </div>
            <span className="mt-2.5">Word</span>
          </div>

          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition:
                'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative"
              style={{
                background: 'linear-gradient(135deg, #ff9800 70%, #fff 100%)'
              }}
            >
              <div className="absolute left-3 top-8 w-6 h-1.5 bg-[#fff3e0] rounded-[3px]"></div>
              <div className="absolute left-5 top-[18px] w-2 h-2 bg-[#fff3e0] rounded-full"></div>
            </div>
            <span className="mt-2.5">JPEG</span>
          </div>

          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition:
                'opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative"
              style={{
                background: 'linear-gradient(135deg, #ff9800 70%, #fff 100%)'
              }}
            >
              <div className="absolute left-3 top-8 w-6 h-1.5 bg-[#fffde7] rounded-[3px]"></div>
              <div className="absolute left-5 top-[18px] w-2 h-2 bg-[#fffde7] rounded-full"></div>
            </div>
            <span className="mt-2.5">PNG</span>
          </div>

          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 1s, transform 0.8s ease-out 1s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative flex items-center justify-center text-white text-[1.1rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, #b39ddb 70%, #fff 100%)'
              }}
            >
              HTML
            </div>
            <span className="mt-2.5">HTML</span>
          </div>

          <div
            className="bg-white rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] w-[90px] h-[110px] flex flex-col items-center justify-center text-[1.08rem] font-medium text-[#444] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              opacity: isMultiNeedsInView ? 1 : 0,
              transform: isMultiNeedsInView
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition:
                'opacity 0.8s ease-out 1.1s, transform 0.8s ease-out 1.1s'
            }}
          >
            <div
              className="w-12 h-14 rounded-[8px_8px_6px_6px] relative flex items-center justify-center text-white text-[1.7rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, #43a047 70%, #fff 100%)'
              }}
            >
              X
            </div>
            <span className="mt-2.5">Excel</span>
          </div>
        </div>
        <div
          className="absolute right-8 bottom-[18px] text-[1.15rem] font-medium text-[#333]"
          style={{
            opacity: isMultiNeedsInView ? 1 : 0,
            transform: isMultiNeedsInView
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition:
              'opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s'
          }}
        >
          支持多种文档格式
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
          <button
            className={`bg-transparent border-none py-4 px-8 text-[1.1rem] cursor-pointer border-b-[3px] border-transparent transition-all duration-200 hover:text-[#e53935] ${
              activeTab === 'text'
                ? 'text-[#e53935] border-b-[#e53935] font-semibold'
                : 'text-[#666]'
            }`}
            style={{
              opacity: isIntelligentProcessInView ? 1 : 0,
              transform: isIntelligentProcessInView
                ? 'translateX(0)'
                : 'translateX(-30px)',
              transition:
                'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
            }}
            onClick={() => {
              setActiveTab('text');
              setProductTitle('智能文本解析');
            }}
          >
            文本解析
          </button>
          <button
            className={`bg-transparent border-none py-4 px-8 text-[1.1rem] cursor-pointer border-b-[3px] border-transparent transition-all duration-200 hover:text-[#e53935] ${
              activeTab === 'table'
                ? 'text-[#e53935] border-b-[#e53935] font-semibold'
                : 'text-[#666]'
            }`}
            style={{
              opacity: isIntelligentProcessInView ? 1 : 0,
              transform: isIntelligentProcessInView
                ? 'translateX(0)'
                : 'translateX(-30px)',
              transition:
                'opacity 0.6s ease-out 0.7s, transform 0.6s ease-out 0.7s'
            }}
            onClick={() => {
              setActiveTab('table');
              setProductTitle('智能表格解析');
            }}
          >
            表格解析
          </button>
          <button
            className={`bg-transparent border-none py-4 px-8 text-[1.1rem] cursor-pointer border-b-[3px] border-transparent transition-all duration-200 hover:text-[#e53935] ${
              activeTab === 'image'
                ? 'text-[#e53935] border-b-[#e53935] font-semibold'
                : 'text-[#666]'
            }`}
            style={{
              opacity: isIntelligentProcessInView ? 1 : 0,
              transform: isIntelligentProcessInView
                ? 'translateX(0)'
                : 'translateX(-30px)',
              transition:
                'opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s'
            }}
            onClick={() => {
              setActiveTab('image');
              setProductTitle('智能图片解析');
            }}
          >
            图片解析
          </button>
        </div>

        {/* 选项卡内容 */}
        <div className="flex flex-col gap-6">
          {/* 文本解析内容 */}
          {activeTab === 'text' && (
            <div className="flex flex-col gap-6">
              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {/* 复杂布局演示 */}
                  <div
                    className="w-[160px] h-[120px] rounded-lg relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
                    style={{
                      background:
                        'linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%)'
                    }}
                  >
                    <div className="w-full h-full p-2 flex flex-col gap-1">
                      <div className="w-full h-4 flex flex-col gap-0.5 mb-1">
                        <div
                          className="w-[70%] h-1.5 rounded-[3px] shadow-[0_1px_2px_rgba(229,57,53,0.2)]"
                          style={{
                            background:
                              'linear-gradient(90deg, #e53935 0%, #ff7043 100%)'
                          }}
                        ></div>
                        <div
                          className="w-[45%] h-1 rounded-[2px] shadow-[0_1px_2px_rgba(66,165,245,0.2)]"
                          style={{
                            background:
                              'linear-gradient(90deg, #42a5f5 0%, #66bb6a 100%)'
                          }}
                        ></div>
                      </div>
                      <div className="flex-1 flex gap-1.5">
                        <div className="flex-1 flex flex-col gap-0.5">
                          <div
                            className="w-full h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate'
                            }}
                          ></div>
                          <div
                            className="w-[85%] h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate',
                              animationDelay: '0.3s'
                            }}
                          ></div>
                          <div
                            className="w-[90%] h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate',
                              animationDelay: '0.6s'
                            }}
                          ></div>
                          <div
                            className="w-full h-[18px] rounded-[3px] relative shadow-[0_2px_4px_rgba(0,0,0,0.1)] my-0.5"
                            style={{
                              background:
                                'linear-gradient(135deg, #ffd54f 0%, #ffb74d 50%, #81c784 100%)'
                            }}
                          >
                            <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-white/70 rounded-full"></div>
                            <div className="absolute bottom-0.5 right-0.5 w-3 h-0.5 bg-white/80 rounded-[1px]"></div>
                          </div>
                          <div
                            className="w-[75%] h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate',
                              animationDelay: '0.9s'
                            }}
                          ></div>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                          <div
                            className="w-full h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate'
                            }}
                          ></div>
                          <div
                            className="w-[85%] h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate',
                              animationDelay: '0.3s'
                            }}
                          ></div>
                          <div
                            className="w-full h-5 rounded-[3px] relative shadow-[0_2px_4px_rgba(0,0,0,0.1)] my-0.5 overflow-hidden"
                            style={{
                              background:
                                'linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 50%, #81d4fa 100%)'
                            }}
                          >
                            <div
                              className="absolute bottom-0.5 left-0.5 w-0.5 h-2 bg-[#2196f3] rounded-[1px]"
                              style={{
                                boxShadow:
                                  '4px 0 0 #4caf50, 8px 0 0 #ff9800, 12px 0 0 #f44336'
                              }}
                            ></div>
                          </div>
                          <div
                            className="w-full h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate'
                            }}
                          ></div>
                          <div
                            className="w-[85%] h-0.5 rounded-[1.5px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)',
                              animation:
                                'shimmer 2s ease-in-out infinite alternate',
                              animationDelay: '0.3s'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    复杂布局文档解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    多栏布局、分栏识别
                    <br />
                    复杂版面结构解析
                    <br />
                    智能排版还原
                  </p>
                  <a
                    href="http://192.168.10.24:7860/?title=复杂布局文档解析"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-15 rounded-lg relative flex items-center justify-center text-white text-[0.8rem] font-bold"
                      style={{
                        background:
                          'linear-gradient(135deg, #e53935 70%, #ffcdd2 100%)'
                      }}
                    >
                      PDF
                    </div>
                    <div className="text-2xl text-[#e53935] font-bold">→</div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4 w-[100px] h-[80px]">
                      <div className="text-[0.8rem] text-[#666] mb-2">
                        LaTeX
                      </div>
                      <div className="bg-[#e9ecef] h-10 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    公式类文档解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    数学公式精准识别
                    <br />
                    LaTeX格式输出
                    <br />
                    复杂公式结构解析
                  </p>
                  <a
                    href="http://192.168.10.24:7860/?title=公式类文档解析"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-[52px] rounded-md"
                      style={{
                        background:
                          'linear-gradient(135deg, #1976d2 70%, #bbdefb 100%)'
                      }}
                    ></div>
                    <div className="bg-[#f8f9fa] rounded-md p-3 w-[120px]">
                      <div className="text-[0.7rem] text-[#666] mb-2">
                        媒体内容
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="bg-[#e9ecef] h-2 rounded"></div>
                        <div className="bg-[#e9ecef] h-2 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    媒体报刊类文档解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    报纸杂志版面解析
                    <br />
                    新闻内容结构化
                    <br />
                    媒体资料智能提取
                  </p>
                  <a
                    href="http://192.168.10.24:7860/?title=媒体报刊类文档解析"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 表格解析内容 */}
          {activeTab === 'table' && (
            <div className="flex flex-col gap-6">
              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {/* 复杂表格演示 */}
                  <div
                    className="w-[160px] h-[120px] rounded-lg flex items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
                    }}
                  >
                    <div className="w-[140px] h-[100px] bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden">
                      <div
                        className="flex h-5"
                        style={{
                          background:
                            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                        }}
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 border-r border-white/30 last:border-r-0 relative"
                          >
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/80 rounded"></div>
                          </div>
                        ))}
                      </div>
                      <div className="h-20 flex flex-col">
                        {[...Array(4)].map((_, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="flex-1 flex border-b border-[#e5e7eb] last:border-b-0"
                          >
                            {[...Array(4)].map((_, colIndex) => (
                              <div
                                key={colIndex}
                                className="flex-1 border-r border-[#e5e7eb] last:border-r-0 relative"
                                style={{
                                  background:
                                    'linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%)'
                                }}
                              >
                                <div
                                  className="absolute top-1/2 left-2 right-2 h-0.5 rounded"
                                  style={{
                                    background:
                                      'linear-gradient(90deg, #cbd5e1 0%, #94a3b8 100%)',
                                    animation: `dataLoad 2s ease-in-out infinite`,
                                    animationDelay: `${(colIndex % 3) * 0.3}s`
                                  }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    复杂表格解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    跨页表格识别
                    <br />
                    复杂结构解析
                    <br />
                    高精度数据提取
                  </p>
                  <a
                    href="/excel-process"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {/* 多区域表格演示 */}
                  <div
                    className="w-[160px] h-[120px] rounded-lg grid grid-cols-2 grid-rows-2 gap-2 p-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
                    style={{
                      background:
                        'linear-gradient(135deg, #fef3e2 0%, #fde68a 100%)'
                    }}
                  >
                    <div className="bg-white rounded border border-[#f59e0b] overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                      <div
                        className="h-2 relative"
                        style={{
                          background:
                            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                      </div>
                      <div
                        className="h-2 border-b border-[#fed7aa] relative"
                        style={{
                          background:
                            'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#fbbf24] rounded opacity-70"></div>
                      </div>
                      <div
                        className="h-2 relative"
                        style={{
                          background:
                            'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#fbbf24] rounded opacity-70"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded border border-[#f59e0b] overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                      <div
                        className="h-2 relative"
                        style={{
                          background:
                            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                      </div>
                      <div
                        className="h-2 border-b border-[#fed7aa] relative"
                        style={{
                          background:
                            'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#fbbf24] rounded opacity-70"></div>
                      </div>
                      <div
                        className="h-2 relative"
                        style={{
                          background:
                            'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#fbbf24] rounded opacity-70"></div>
                      </div>
                    </div>
                    <div className="col-span-2 h-3/5 bg-white rounded border border-[#f59e0b] overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                      <div
                        className="h-3 relative"
                        style={{
                          background:
                            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                      </div>
                      <div
                        className="flex-1 relative"
                        style={{
                          background:
                            'linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-[#fbbf24] rounded opacity-70"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    多区域表格解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    智能识别页面多表格
                    <br />
                    分别解析输出
                    <br />
                    保持数据完整性
                  </p>
                  <a
                    href="/excel-process"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {/* 复杂表头演示 */}
                  <div
                    className="w-[160px] h-[120px] rounded-lg flex items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
                    }}
                  >
                    <div className="w-[140px] h-[100px] bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden border border-[#22c55e]">
                      <div className="h-10">
                        <div
                          className="h-5 flex"
                          style={{
                            background:
                              'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                          }}
                        >
                          <div className="w-[30%] border-r border-white/30 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                          </div>
                          <div className="w-[45%] border-r border-white/30 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                          </div>
                          <div className="w-[25%] relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-0.5 bg-white/90 rounded"></div>
                          </div>
                        </div>
                        <div
                          className="h-5 flex"
                          style={{
                            background:
                              'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
                          }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 border-r border-white/30 last:border-r-0 relative"
                            >
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-px bg-white/80 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-15 flex flex-col">
                        {[...Array(3)].map((_, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="flex-1 flex border-b border-[#d1fae5] last:border-b-0"
                          >
                            {[...Array(5)].map((_, colIndex) => (
                              <div
                                key={colIndex}
                                className="flex-1 border-r border-[#d1fae5] last:border-r-0 relative"
                                style={{
                                  background:
                                    'linear-gradient(90deg, #f7fee7 0%, #ecfdf5 100%)'
                                }}
                              >
                                <div
                                  className="absolute top-1/2 left-1.5 right-1.5 h-px rounded"
                                  style={{
                                    background:
                                      'linear-gradient(90deg, #bbf7d0 0%, #86efac 100%)',
                                    animation: `complexDataLoad 2.5s ease-in-out infinite`,
                                    animationDelay: `${(colIndex % 3) * 0.4}s`
                                  }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    复杂表头解析(合并场景)
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    多层级表头识别
                    <br />
                    合并单元格处理
                    <br />
                    表格逻辑结构还原
                  </p>
                  <a
                    href="/excel-process?type=2"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 图片解析内容 */}
          {activeTab === 'image' && (
            <div className="flex flex-col gap-6">
              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="w-[160px] h-[120px] bg-[#f8f9fa] rounded-lg flex items-center justify-center">
                    <div className="w-[120px] h-[80px] bg-[#f5f5dc] rounded relative">
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#8b4513] text-4xl font-bold">
                        古
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    古籍解析
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    古代文献识别
                    <br />
                    繁体字、古文字
                    <br />
                    专业文史处理
                  </p>
                  <a
                    href="http://192.168.10.24:7860/?title=古籍解析"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-8 rounded-2xl p-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                style={{
                  background: 'linear-gradient(135deg, #fff 60%, #fff2f2 100%)',
                  opacity: isIntelligentProcessInView ? 1 : 0,
                  transform: isIntelligentProcessInView
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.95)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-[200px] h-[160px] bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="w-[160px] h-[120px] bg-[#f8f9fa] rounded-lg flex items-center justify-center">
                    <div className="w-[120px] h-[80px] relative">
                      <div className="absolute left-5 top-5 w-20 h-0.5 bg-[#666] rounded transform -rotate-2"></div>
                      <div
                        className="absolute left-5 top-10 w-15 h-0.5 bg-[#666] rounded transform rotate-1"
                        style={{
                          boxShadow: '0 20px 0 #666'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#222] mb-4">
                    手写识别
                  </h3>
                  <p className="text-[#666] leading-6 mb-5">
                    高精度手写识别
                    <br />
                    多种笔迹风格
                    <br />
                    草书行书支持
                  </p>
                  <a
                    href="http://192.168.10.24:7860/?title=手写识别"
                    target="_blank"
                    className="text-[#4285f4] no-underline font-medium transition-colors duration-200 hover:text-[#3367d6]"
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
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
