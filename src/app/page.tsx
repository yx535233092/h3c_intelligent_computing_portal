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
  CloudUploadOutlined,
  ApiOutlined,
  StarOutlined,
  BuildOutlined,
  RobotOutlined,
  UserOutlined,
  BookOutlined,
  ReadOutlined,
  MessageOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

export default function HomePage() {
  const router = useRouter();

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [servicesRef, isServicesInView] = useInView({ threshold: 0.2 });
  const [dataRef, isDataInView] = useInView({ threshold: 0.2 });
  const [casesRef, isCasesInView] = useInView({ threshold: 0.2 });
  const [modelRef, isModelInView] = useInView({ threshold: 0.2 });
  const [trainingRef, isTrainingInView] = useInView({ threshold: 0.2 });

  // 应用服务数据 - 四个核心场景
  const appServices = [
    {
      icon: MessageOutlined,
      title: '智能问答场景',
      desc: '知识查询智能化，问答交互人性化',
      category: '智能问答',
      examples: ['图文问答助手', '消防法律助手', '康养知识问答']
    },
    {
      icon: FileTextOutlined,
      title: '智能文档场景',
      desc: '文档处理智能化，内容创作高效化',
      category: '智能文档',
      examples: ['文章改写助手', '医疗诊断分析', 'AI写作助手']
    },
    {
      icon: DatabaseOutlined,
      title: '智能问数场景',
      desc: '数据洞察智能化，决策支持精准化',
      category: '智能问数',
      examples: ['人口数据查询', '经济数据分析', '地理信息查询']
    },
    {
      icon: BuildOutlined,
      title: '智能办公场景',
      desc: '提升行政效率，优化内部管理',
      category: '智能办公',
      examples: ['快捷请假系统', '会议室预定', '访客申请']
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
      id: 'goverment1',
      title: '某市公安情报分析以案搜案',
      industry: '政府',
      image: '/某市公安情报分析以案搜案.png',
      desc: '基于AI大模型训练平台，形成辅助合成研判能力'
    },
    {
      id: 'operator1',
      title: '某运营商智能营销预案',
      industry: '运营商',
      image: '/某运营商智能营销预案.png',
      desc: '通过大模型分析数据，生成精准营销策略'
    },
    {
      id: 'enterprise1',
      title: '某集团智能问答系统',
      industry: '企业',
      image: '/某集团智能问答系统.png',
      desc: '面向企业集团构建的统一知识聚合检索系统'
    },
    {
      id: 'education1',
      title: '某高职校AI+知识服务',
      industry: '教育',
      image: '/某高职校DEEPSEEK-AI+知识服务应用.png',
      desc: 'AI智能助手提升高校管理效率和决策支持'
    }
  ];

  // 模型工程服务数据
  const modelServices = [
    {
      icon: RobotOutlined,
      title: '智能微调',
      desc: '基于LLaMA-Factory等先进框架，支持多种微调策略，快速适配业务场景',
      features: ['多策略微调', '快速训练', '可视化调试']
    },
    {
      icon: ApiOutlined,
      title: '灵活部署',
      desc: '支持NVIDIA GPU、国产芯片等多种硬件平台，提供多样化部署方案',
      features: ['多硬件支持', '多种部署方式', '高可用集群']
    },
    {
      icon: BarChartOutlined,
      title: '专业测评',
      desc: '全面的性能测试体系，包含压力测试、精度评估，确保模型质量',
      features: ['压力测试', '精度评估', '多维度验证']
    }
  ];

  // 咨询培训服务数据
  const trainingServices = [
    {
      icon: BuildOutlined,
      title: '技术咨询',
      desc: '提供AI基础架构、训推技术、产品应用等全方位技术咨询服务',
      category: '专业咨询'
    },
    {
      icon: BookOutlined,
      title: '智算培训',
      desc: '系统化智算技术培训，涵盖平台操作、应用实践、理论进阶',
      category: '技能提升'
    },
    {
      icon: UserOutlined,
      title: '专家服务',
      desc: '汇聚云智专家团队，提供项目实战指导和技术深度支持',
      category: '专家护航'
    },
    {
      icon: ReadOutlined,
      title: '定制化服务',
      desc: '结合客户需求，定制培训课程、教学方式与学习周期',
      category: '个性定制'
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
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              智算专业服务
              <br />
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand via-red-500 to-red-700 font-semibold">
                释放AI大模型潜能 · 加速智能应用落地
              </span>
            </h1>
            <p className="text-xl text-red-50 mb-12 leading-relaxed max-w-3xl drop-shadow-sm">
              我们提供从技术咨询、模型优化、算力管理到应用定制的全流程专家服务，致力于打通大模型从技术潜力到商业价值的“最后一公里”，助您高效构建、部署与扩展AI应用。
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => router.push('/pro-services/app-service')}
                className="group relative bg-gradient-to-r from-brand to-red-700 hover:from-red-500 hover:to-brand text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand/30 flex items-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10">立即体验</span>
                <ArrowRightOutlined className="relative z-10 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </button>
              <button
                onClick={() => router.push('/contact-us')}
                className="group relative border-2 border-brand/40 hover:border-brand/80 hover:bg-gradient-to-r hover:from-brand/10 hover:to-red-600/10 text-red-50 hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand/20 backdrop-blur-sm"
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
            应用工程服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚智能问答、智能文档、智能问数、智能办公四大核心场景，为政府、运营商、教育、企业等行业提供全方位的智能化解决方案
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {appServices.map((service, index) => (
            <div
              key={index}
              onClick={() => {}}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 "
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-white w-16 h-16 bg-gradient-to-br from-brand to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>

              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">应用示例：</div>
                <div className="space-y-1">
                  {service.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="text-sm text-gray-700 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>

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
              数据工程服务
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

      {/* 模型工程服务 */}
      <section
        ref={modelRef}
        className={`px-60 py-32 bg-white transition-all duration-1000 ${
          isModelInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            模型工程服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从模型微调到部署测评，提供全链路AI模型服务能力，支持多种硬件平台部署
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {modelServices.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-white w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/pro-services/model-service')}
            className="group bg-brand hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
          >
            了解详情
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 咨询培训服务 */}
      <section
        ref={trainingRef}
        className={`relative px-60 py-32 bg-white overflow-hidden transition-all duration-1000 ${
          isTrainingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* 背景装饰 */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-brand/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-brand/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              咨询培训服务
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业的AI技术咨询与培训服务，助力企业数字化转型升级，打造专业的智算人才队伍
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-brand to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {trainingServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* 卡片内装饰 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand/5 to-transparent rounded-bl-3xl"></div>

                <div className="relative z-10">
                  <div className="text-white w-16 h-16 bg-gradient-to-br from-brand via-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-brand/10 to-blue-500/10 text-brand text-sm rounded-full font-medium border border-brand/20">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push('/pro-services/consult-service')}
              className="group bg-gradient-to-r from-gray-900 to-gray-800 hover:from-brand hover:to-red-600 text-white px-10 py-4 rounded-2xl text-lg font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
            >
              了解详情
              <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
            </button>
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
              onClick={() => router.push(`/industry-cases/${caseItem.id}`)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
    </div>
  );
}
