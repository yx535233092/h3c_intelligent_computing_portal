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
  FileTextOutlined,
  UserOutlined,
  SafetyOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function ShandongMobileTenderPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '山东移动标书助手',
    subtitle: '基于AI的智慧标书编制与审核系统',
    description:
      '基于历史积累的投标文件、相关政策法规、人员资料信息等材料构建标书知识库，并融合大小模型能力，打造智慧标书助手，加快标书制作审核效率，提升标书人员专业水平。',
    detailPicName: '山东移动标书助手.png',
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
              传统标书编制过程中面临的关键挑战
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <UserOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                人力投入高
              </h3>
              <p className="text-gray-600 leading-relaxed">
                高度依赖人工，人力投入成本高。完全依赖人工编写各类招投标文档，标书支撑面临编制工作量大、审核耗时长、依赖个人经验等问题。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <SafetyOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                质量控制难
              </h3>
              <p className="text-gray-600 leading-relaxed">
                受主观因素左右，质量把控难。存量数据挖掘不足，缺少文档编写辅助系统，标书质量完全依赖个人经验和能力。
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
              基于AI技术的智慧标书编制与审核全流程解决方案
            </p>
          </div>

          <div className="space-y-8">
            {/* 人员资质法规查询 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                    <SearchOutlined className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    人员资质、法规查询—减少人力投入
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    通过建立标书信息库，通过问答式自助查询资质、法规，实现资质、证照信息的高效流转，确保标书撰写的快速响应。
                  </p>
                </div>
              </div>
            </div>

            {/* 在线协同编辑 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                    <FileTextOutlined className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    在线协同编辑—提高文档管控效率
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    通过将智能助手与在线编辑工具进行融合，实现标书文档的在线管控与快速合并，细化标书内容的管控颗粒度。
                  </p>
                </div>
              </div>
            </div>

            {/* 标书审核助手 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                    <RobotOutlined className="text-2xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    标书审核助手—提高审核效率
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    通过大模型进行标书偏离表审查，基于机器的初审结果，由人工进行二次确认和细化审核，提高整体审核效率。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              核心价值
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              智慧标书助手带来的核心价值和效益
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <ClockCircleOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                提升制作效率
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通过智能化工具和知识库，显著减少标书编制时间，提高制作效率，快速响应招标需求。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <CheckCircleOutlined className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                提升审核效率
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通过AI智能审核，实现标书偏离表的自动化审查，减少人工审核工作量，提高审核准确性。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <TeamOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                提升专业水平
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通过知识库积累和智能辅助，帮助提升标书人员的专业水平和工作能力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              应用场景
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              智慧标书助手的典型应用场景
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                招投标文档编制
              </h3>
              <p className="text-gray-600 leading-relaxed">
                基于历史投标文件和知识库，智能辅助编写各类招投标文档，提高编制质量和效率。
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                标书偏离表审查
              </h3>
              <p className="text-gray-600 leading-relaxed">
                通过AI技术自动进行标书偏离表审查，识别潜在问题，提供审核建议。
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                政策法规查询
              </h3>
              <p className="text-gray-600 leading-relaxed">
                提供便捷的政策法规查询功能，确保标书内容符合相关规定和要求。
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                资质证照管理
              </h3>
              <p className="text-gray-600 leading-relaxed">
                统一管理人员资质和证照信息，支持快速查询和调用，提高信息利用效率。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
