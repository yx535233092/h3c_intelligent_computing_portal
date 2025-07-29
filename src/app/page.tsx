'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import {
  ArrowRightOutlined,
  FileTextOutlined,
  TableOutlined,
  BarChartOutlined,
  TeamOutlined,
  CloudUploadOutlined,
  ApiOutlined,
  StarOutlined,
  BuildOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  BookOutlined,
  CarryOutOutlined,
  FileDoneOutlined,
  PartitionOutlined,
  CalendarOutlined,
  UserOutlined
} from '@ant-design/icons';

export default function HomePage() {
  const router = useRouter();

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [servicesRef, isServicesInView] = useInView({ threshold: 0.2 });
  const [dataRef, isDataInView] = useInView({ threshold: 0.2 });
  const [casesRef, isCasesInView] = useInView({ threshold: 0.2 });
  const [consultRef, isConsultInView] = useInView({ threshold: 0.2 });

  // 应用服务数据
  const appServices = [
    {
      icon: CalendarOutlined,
      title: '快捷请假',
      desc: '支持年假/事假/病假',
      category: '智能办公'
    },
    {
      icon: BuildOutlined,
      title: '会议室预定',
      desc: '线上/线下预约管理',
      category: '智能办公'
    },
    {
      icon: FileTextOutlined,
      title: '文章改写',
      desc: '智能文档处理改写',
      category: '智能文档'
    },
    {
      icon: BarChartOutlined,
      title: '人口库智能问数',
      desc: '人口数据多场景查询',
      category: '智能问数'
    }
  ];

  // 数据服务特性
  const dataFeatures = [
    {
      icon: FileTextOutlined,
      title: '文档解析',
      desc: '支持PDF、Word、图片等多格式解析'
    },
    {
      icon: TableOutlined,
      title: '表格识别',
      desc: '复杂表格、跨页表格精准识别'
    },
    {
      icon: StarOutlined,
      title: '智能提取',
      desc: '文字、图片、公式信息智能提取'
    }
  ];

  // 行业案例数据
  const industryCases = [
    {
      title: '某市公安情报分析以案搜案',
      industry: '政府',
      image: '/某市公安情报分析以案搜案.png',
      desc: '基于AI大模型训练平台，形成辅助合成研判能力'
    },
    {
      title: '某运营商智能营销预案',
      industry: '运营商',
      image: '/某运营商智能营销预案.png',
      desc: '通过大模型分析数据，生成精准营销策略'
    },
    {
      title: '某集团智能问答系统',
      industry: '企业',
      image: '/某集团智能问答系统.png',
      desc: '面向企业集团构建的统一知识聚合检索系统'
    },
    {
      title: '某高职校AI+知识服务',
      industry: '教育',
      image: '/某高职校DEEPSEEK-AI+知识服务应用.png',
      desc: 'AI智能助手提升高校管理效率和决策支持'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero 区域 */}
      <section
        ref={heroRef}
        className={`relative px-60 pt-32 pb-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden transition-all duration-1000 ${
          isHeroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[url('/12.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>

        {/* 浮动装饰元素 */}
        <div className="absolute top-20 right-40 w-72 h-72 bg-brand/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              智算专业服务
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
                数字化转型引擎
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              基于新华三智算平台，提供全方位的AI应用服务、数据处理服务和行业解决方案
              <br />
              助力企业数字化转型，释放数据价值，提升业务效率
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => router.push('/pro-services/app-service')}
                className="group bg-brand hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
              >
                立即体验
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => router.push('/contact-us')}
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-white/10"
              >
                联系咨询
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 应用服务 */}
      <section
        ref={servicesRef}
        className={`px-60 py-32 transition-all duration-1000 ${
          isServicesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            智能应用服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚精品AI应用，覆盖智能办公、智能文档、智能问数三大核心场景
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {appServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-16 h-16 bg-white border-2 border-brand text-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-sm rounded-full font-medium">
                {service.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/pro-services/app-service')}
            className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
          >
            查看全部应用
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 数据服务 */}
      <section
        ref={dataRef}
        className={`px-60 py-32 bg-white transition-all duration-1000 ${
          isDataInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="grid grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              数据服务解决方案
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              面向文本、图像与表格的智能解析服务，支持多种文档格式，
              一键解析数据内容，助力高效输出结构化文档。
            </p>

            <div className="space-y-8">
              {dataFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 text-white bg-gradient-to-br from-red-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                onClick={() => router.push('/pro-services/data-service')}
                className="group bg-brand hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                了解详情
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl">
              {/* 数据处理流程图示 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white">
                    <FileTextOutlined className="text-xl text-white" />
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <ApiOutlined className="text-xl text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-center">
                      <CloudUploadOutlined className="text-2xl text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">文档上传</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-center">
                      <StarOutlined className="text-2xl text-brand mb-2" />
                      <p className="text-sm text-gray-600">AI解析</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-center">
                      <TableOutlined className="text-2xl text-green-500 mb-2" />
                      <p className="text-sm text-gray-600">结构化输出</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行业案例 */}
      <section
        ref={casesRef}
        className={`px-60 py-32 bg-gray-50 transition-all duration-1000 ${
          isCasesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            行业成功案例
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            协助众多企业完成智能化数字化转型，覆盖政府、运营商、企业、教育等多个行业
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {industryCases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseItem.industry}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{caseItem.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/industry-cases')}
            className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
          >
            查看更多案例
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 培训咨询 */}
      <section
        ref={consultRef}
        className={`px-60 py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden transition-all duration-1000 ${
          isConsultInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">专业培训咨询服务</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                提供专业的AI技术培训、数字化转型咨询和定制化解决方案，
                助力企业快速掌握智能技术应用。
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <BookOutlined className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">技术培训</h3>
                    <p className="text-gray-300">
                      AI技术应用、数据分析、系统操作培训
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CarryOutOutlined className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">业务咨询</h3>
                    <p className="text-gray-300">
                      数字化转型策略、业务流程优化咨询
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <PartitionOutlined className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">定制方案</h3>
                    <p className="text-gray-300">
                      针对企业需求的个性化解决方案设计
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">联系我们</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <PhoneOutlined className="text-xl text-brand" />
                  <span className="text-lg">400-888-0916</span>
                </div>
                <div className="flex items-center gap-4">
                  <MailOutlined className="text-xl text-brand" />
                  <span className="text-lg">service@h3c.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <EnvironmentOutlined className="text-xl text-brand" />
                  <span className="text-lg">
                    杭州市滨江区长河路466号 H3C公司
                  </span>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => router.push('/contact-us')}
                  className="group bg-brand hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
                >
                  立即咨询
                  <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
