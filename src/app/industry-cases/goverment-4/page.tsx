'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  BookOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  TeamOutlined,
  SettingOutlined,
  SearchOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function JiangsuDataManagementPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '江苏大数据管理中心智能问数',
    subtitle: '基于大模型的自然语言数据查询分析平台',
    description:
      '借助大模型能力构建智能问数智能体，实现自然语言到SQL语句的转化，快速查询数据并生成图表，为江苏省数据管理提供高效的智能化数据分析服务。',
    detailPicName: '江苏省大数据智能问数.png',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.push('/industry-cases')}
            className="flex items-center text-gray-600 hover:text-brand transition-colors duration-200 group"
          >
            <ArrowLeftOutlined className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            返回案例列表
          </button>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-orange-100 text-orange-800">
                政府行业案例
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {caseData.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                {caseData.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {caseData.description}
              </p>
              <button
                onClick={() => router.push('/contact-us')}
                className="inline-flex items-center px-6 py-3 bg-brand hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 group"
              >
                咨询解决方案
                <RightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                <Image
                  src={`/${caseData.detailPicName}`}
                  alt={caseData.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 客户痛点 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              客户痛点
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              数据管理中心在数据查询分析过程中面临的核心挑战
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-red-50 border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChartOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                数据分析应用短板
              </h3>
              <p className="text-gray-600 text-sm">
                虽已整合基础数据库，但在数据分析应用方面存在明显短板，无法充分发挥数据价值
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockCircleOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                查询响应时效性低
              </h3>
              <p className="text-gray-600 text-sm">
                领导查询需求响应慢，需要等待工程师定制开发和报表输出，影响决策效率
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-yellow-50 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TeamOutlined className="text-2xl text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                高度依赖人工开发
              </h3>
              <p className="text-gray-600 text-sm">
                每次数据查询都需要数据分析工程师根据具体需求进行定制开发，人力成本高
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                缺乏智能查询能力
              </h3>
              <p className="text-gray-600 text-sm">
                缺乏自然语言查询能力，无法直接理解用户意图并自动生成查询分析结果
              </p>
            </div>
          </div>

          {/* 痛点详细说明 */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  传统数据查询模式的困境
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        需求响应链条长：
                      </span>
                      领导提出查询需求 → 工程师理解需求 → 定制开发 → 生成报表 →
                      提供结果
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        时效性差：
                      </span>
                      复杂查询需求往往需要数天甚至数周才能获得结果，错失决策时机
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        资源消耗大：
                      </span>
                      大量工程师时间用于重复性的定制开发工作，无法聚焦核心业务
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">
                        查询门槛高：
                      </span>
                      用户需要具备一定的技术背景才能准确表达查询需求
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      急需智能化转型
                    </h4>
                    <p className="text-gray-600 text-sm">
                      传统的数据查询模式已无法满足现代数据管理的需求，急需借助大模型能力实现智能化升级
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 建设内容 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              建设内容
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于大模型构建智能问数平台，实现自然语言数据查询分析
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChartOutlined className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      人口库主体分析层
                    </h3>
                    <p className="text-gray-600 mb-4">
                      根据人口数据特点，从多维度进行统计分析，构建完整的人口数据分析体系
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 人口户籍统计分析</li>
                      <li>• 出生数据统计分析</li>
                      <li>• 结婚离婚统计分析</li>
                      <li>• 死亡数据统计分析</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SearchOutlined className="text-xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      智能问数智能体
                    </h3>
                    <p className="text-gray-600 mb-4">
                      依托大模型强大能力构建智能体，实现text2sql转化，精准查询数据并生成图表
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 自然语言到SQL转化</li>
                      <li>• 智能数据查询</li>
                      <li>• 自动图表生成</li>
                      <li>• 查询结果分析说明</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              核心技术能力
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOutlined className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  自然语言理解
                </h4>
                <p className="text-sm text-gray-600">
                  准确理解用户的自然语言查询意图
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <SettingOutlined className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  SQL自动生成
                </h4>
                <p className="text-sm text-gray-600">
                  将自然语言转化为可执行的SQL命令
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BarChartOutlined className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  智能图表展示
                </h4>
                <p className="text-sm text-gray-600">
                  自动生成直观的图表形式展现查询结果
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 优势效果 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              优势效果
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              智能问数平台带来的实际效果与显著优势
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="text-white w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                准确性高
              </h3>
              <p className="text-gray-600">
                处理复杂查询时能够准确输出SQL语句，确保结果可靠性
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="text-white w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThunderboltOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                性能优良
              </h3>
              <p className="text-gray-600">
                从自然语言生成SQL到查询结果输出，整个过程实现秒级响应
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
              <div className="text-white w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DatabaseOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                场景广泛
              </h3>
              <p className="text-gray-600">
                可覆盖多种人口查询场景，有效应对多样化的查询需求
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
              <div className="text-white w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChartOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                结果分析
              </h3>
              <p className="text-gray-600">
                对查询结果进行合理深入分析，为决策提供有价值的参考依据
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              典型应用场景
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BarChartOutlined className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  人口统计分析
                </h4>
                <p className="text-sm text-gray-600">
                  按年龄段统计结婚率、离婚率等复杂人口数据分析
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <SearchOutlined className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  自然语言查询
                </h4>
                <p className="text-sm text-gray-600">
                  支持用户使用自然语言进行数据查询和分析
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TeamOutlined className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  领导决策支持
                </h4>
                <p className="text-sm text-gray-600">
                  为各级领导提供快速、准确的数据分析支持
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
