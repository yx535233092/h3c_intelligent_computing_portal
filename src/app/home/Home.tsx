'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useRouter } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  useScrollToTop();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [servicesRef, isServicesInView] = useInView({ threshold: 0.2 });
  const [featuresRef, isFeaturesInView] = useInView({ threshold: 0.2 });
  const [casesRef, isCasesInView] = useInView({ threshold: 0.2 });

  // 轮播图数据
  const slides = [
    {
      title: '智能计算 赋能未来',
      subtitle: 'Intelligent Computing Portal',
      description: '新华三集团智算专业服务，为您提供全方位人工智能解决方案',
      image: '/1.jpg',
      cta: '了解更多'
    },
    {
      title: '数据驱动 智慧决策',
      subtitle: 'Data-Driven Smart Decisions',
      description: '专业的数据服务解决方案，让您的数据发挥最大价值',
      image: '/5.jpg',
      cta: '数据服务'
    },
    {
      title: '行业领先 服务卓越',
      subtitle: 'Industry Leading Excellence',
      description: '覆盖政府、企业、教育等多个行业的成功案例',
      image: '/7.jpg',
      cta: '行业案例'
    }
  ];

  // 服务数据
  const services = [
    {
      title: '应用服务',
      description: '提供定制化应用开发、系统集成和技术咨询服务',
      icon: '🚀',
      link: '/pro-services/app-service'
    },
    {
      title: '数据服务',
      description: '智能文档解析、表格识别、图像处理等数据处理服务',
      icon: '📊',
      link: '/pro-services/data-service'
    },
    {
      title: '模型服务',
      description: 'AI模型训练、部署和优化，提供完整的机器学习解决方案',
      icon: '🤖',
      link: '/pro-services/network-service'
    },
    {
      title: '运维服务',
      description: '全方位的系统运维、监控和技术支持服务',
      icon: '⚙️',
      link: '/pro-services/security-service'
    }
  ];

  // 特色功能
  const features = [
    {
      title: '高精度识别',
      description: '基于深度学习的文档识别技术，准确率达99.9%',
      icon: '🎯'
    },
    {
      title: '快速处理',
      description: '百页文档秒级解析，支持大批量并行处理',
      icon: '⚡'
    },
    {
      title: '多格式支持',
      description: '支持PDF、Word、Excel、图片等多种文件格式',
      icon: '📄'
    },
    {
      title: '安全可靠',
      description: '企业级安全保障，数据加密传输和存储',
      icon: '🔒'
    }
  ];

  // 行业案例数据
  const industries = [
    { name: '政府', icon: '🏛️', desc: '政务数字化转型' },
    { name: '企业', icon: '🏢', desc: '企业智能化升级' },
    { name: '教育', icon: '🎓', desc: '智慧教育解决方案' },
    { name: '金融', icon: '💰', desc: '金融科技创新' },
    { name: '医疗', icon: '🏥', desc: '智慧医疗服务' },
    { name: '制造', icon: '🏭', desc: '智能制造转型' }
  ];

  // 轮播自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleServiceClick = (link: string) => {
    router.push(link);
  };

  const handleCTAClick = (slide: (typeof slides)[0], index: number) => {
    if (index === 0) {
      router.push('/about-us');
    } else if (index === 1) {
      router.push('/pro-services/data-service');
    } else if (index === 2) {
      router.push('/industry-cases');
    }
  };

  return (
    <div className="min-h-screen">
      {/* 英雄区域 - 轮播图 */}
      <section
        ref={heroRef}
        className={`relative h-screen overflow-hidden transition-all duration-1000 ${
          isHeroInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('${slide.image}') center/cover`
            }}
          >
            <div className="flex items-center justify-center h-full text-white text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl mb-4 font-light opacity-90">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button
                  onClick={() => handleCTAClick(slide, index)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* 轮播指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-sm opacity-75">向下滚动了解更多</span>
          </div>
        </div>
      </section>

      {/* 专业服务区域 */}
      <section
        ref={servicesRef}
        className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
          isServicesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">专业服务</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              提供全方位的智能计算服务，从应用开发到数据处理，从模型训练到系统运维，满足您的所有需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.link)}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心优势区域 */}
      <section
        ref={featuresRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          isFeaturesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">核心优势</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              基于多年技术积累和行业实践，为您提供高质量、高效率的智能计算解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行业案例预览 */}
      <section
        ref={casesRef}
        className={`py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-1000 ${
          isCasesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">行业案例</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              服务覆盖多个重要行业，助力数字化转型和智能化升级
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onClick={() => router.push('/industry-cases')}
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-red-300 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm opacity-75">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('/industry-cases')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              查看更多案例
            </button>
          </div>
        </div>
      </section>

      {/* 联系咨询区域 */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/chat.png"
                alt="专家咨询"
                width={40}
                height={40}
                className="object-contain filter brightness-0 invert"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              专业技术咨询
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们的专家团队随时为您提供专业的技术咨询和解决方案建议
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact-us')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                联系我们
              </button>
              <button
                onClick={() => router.push('/excel-process')}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                在线体验
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
