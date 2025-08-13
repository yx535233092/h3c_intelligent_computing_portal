'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  TagOutlined,
  ApartmentOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function YunnanMobileSolutionPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: 'YN移动方案助手',
    subtitle: '基于AI的方案智能编制与推荐系统',
    description:
      '通过方案智能体的打标、推荐和编制，辅助一线进行优质方案的快速检索，促进方案编写效率提升40%，编写质量提升30%。',
    detailPicName: '云南移动方案助手.png',
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
                运营商行业案例
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              传统方案编制过程中面临的关键挑战
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <ClockCircleOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                业务述求多
              </h3>
              <p className="text-gray-600 leading-relaxed">
                方案编制工作繁多繁杂，方案要求时间紧质量高，业务需求复杂多样，传统编制方式难以满足快速响应的要求。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TeamOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                人员要求高
              </h3>
              <p className="text-gray-600 leading-relaxed">
                方案编制费时能力不足，成功方案检索难复用低，对人员专业能力要求高，经验积累和传承困难。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <SettingOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                运营模式旧
              </h3>
              <p className="text-gray-600 leading-relaxed">
                方案归纳打标不科学，方案未分块不利复用，缺乏有效的知识管理体系，导致方案资源浪费严重。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于AI技术的智能方案编制全流程解决方案
            </p>
          </div>

          {/* 需求识别模块 */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SearchOutlined
                    className="text-xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    智能需求识别
                  </h3>
                  <p className="text-blue-600 font-medium">
                    第一步：多模态输入
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                支持表单户型上传CAD图纸或对话式输入，通过AI技术对客户需求进行精准识别和理解。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ApartmentOutlined
                    className="text-xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    智能布局初始化
                  </h3>
                  <p className="text-green-600 font-medium">第二步：自动布局</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                根据识别的需求智能初始化布局，自动生成最优的方案架构和设计框架。
              </p>
            </div>
          </div>

          {/* 设计编辑模块 */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SettingOutlined
                    className="text-xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    在线设计编辑
                  </h3>
                  <p className="text-purple-600 font-medium">
                    第三步：交互设计
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                提供在线设计和修改功能，支持可视化编辑，实时预览方案效果。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RobotOutlined
                    className="text-xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    智能内容生成
                  </h3>
                  <p className="text-orange-600 font-medium">
                    第四步：自动编写
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                在设计图基础上智能编写需求描述、解决方案、报价等完整内容。
              </p>
            </div>
          </div>

          {/* 文档输出模块 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <ThunderboltOutlined
                    className="text-2xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  一键文档输出
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">
                  第五步：方案交付
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  将所有内容整合，自动生成标准化的方案文档，包含需求描述、解决方案、设计图纸、报价清单等完整交付物，一键完成方案编制全流程。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              功能特点
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              三大核心功能模块，全面提升方案编制效率和质量
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <TagOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                标签管理
              </h3>
              <p className="text-gray-600 leading-relaxed">
                方案标签的自我学习，自动构建并动态更新方案标签库，实现方案的智能分类和快速检索。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <SearchOutlined className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                方案推荐
              </h3>
              <p className="text-gray-600 leading-relaxed">
                基于商机、客户、行业、产品等信息提供方案智能匹配推荐，精准定位最适合的解决方案模板。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <RobotOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                智能生成
              </h3>
              <p className="text-gray-600 leading-relaxed">
                多模态自然语言对话，渐进式引导自动生成完整解决方案，大幅提升编制效率和质量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 提效成果 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              提效成果
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              显著提升方案编制效率和质量，助力业务快速发展
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <ThunderboltOutlined
                    className="text-2xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">效率提升</h3>
                  <p className="text-green-600 font-semibold">
                    方案编写效率提升40%
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                通过智能推荐和自动生成功能，大幅减少方案编制时间，让一线人员能够快速响应客户需求，提高项目成功率。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircleOutlined
                    className="text-2xl text-white"
                    style={{ color: 'white' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">质量提升</h3>
                  <p className="text-blue-600 font-semibold">编写质量提升30%</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                基于优质方案库的智能推荐和标准化模板，确保方案质量稳定提升，减少错误和遗漏，提高客户满意度。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
