'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  DatabaseOutlined,
  SettingOutlined,
  SearchOutlined,
  MessageOutlined,
  EyeOutlined,
  BulbOutlined,
  TeamOutlined,
  FileTextOutlined,
  SafetyOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function GovernmentPolicyMatchingPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '某市营商政策智能双向匹配',
    subtitle: '以企业需求为导向，实现惠企政策精准匹配与智能推送',
    description:
      '针对惠企政策知晓难、理解难、办理难、费人力、获得感不强问题，以企业需求为导向，建立统一的政策服务入口，搭建政企沟通桥梁，实现惠企政策集中汇聚、精准查询、主动推送、高效兑现。',
    detailPicName: '某市公安情报分析以案搜案.png',
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
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-green-100 text-green-800">
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              惠企政策落地过程中面临的关键挑战
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <SearchOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                知晓难
              </h3>
              <p className="text-gray-600">
                政策信息分散在不同政府部门，缺乏统一的发布渠道，导致企业不知道有哪些政策，或者需要投入大量精力去查找
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileTextOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                理解难
              </h3>
              <p className="text-gray-600">
                政策文件通常包含大量专业术语和复杂条款，语言晦涩难懂。企业难以准确判断政策的适用性、申报条件和具体标准
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <SettingOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                办理难
              </h3>
              <p className="text-gray-600">
                申报流程繁琐复杂，涉及多个部门和环节，材料准备耗时费力，缺乏清晰的指引，增加了企业的办事成本
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <EyeOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                获得感不强
              </h3>
              <p className="text-gray-600">
                由于信息不对称和办理不顺畅，企业即使投入了时间和人力，也常常因为不确定性或流程障碍而无法成功获得政策支持
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
              政策智能匹配解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于惠企政策大模型能力，实现政策与企业的智能匹配与精准推荐
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <DatabaseOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                企业政策智能匹配
              </h3>
              <p className="text-gray-600 mb-4">
                基于惠企政策大模型能力实现企业、政策的智能匹配、精准推荐。各类市场主体能及时获得政策法规制度等相关信息
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能政策匹配
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  精准推荐服务
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <RocketOutlined className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                政策免申即享
              </h3>
              <p className="text-gray-600 mb-4">
                帮助政府高效分类管理政策、企业、审批要素等政务知识，提升基于大模型的政策落地效果
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  免申即享模式
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  快速精准剖析
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <MessageOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                政策咨询问答
              </h3>
              <p className="text-gray-600 mb-4">
                解决口语和政务术语之间的鸿沟，识别用户意图、多轮问答，实现人性化解答公众常见问题
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  意图智能识别
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  多轮对话问答
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <BulbOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                办理流程引导
              </h3>
              <p className="text-gray-600 mb-4">
                生成式AI对话能力，自动关联解读办事指南，提供个性化的支持和解答、人性化的办理流程互动引导
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能流程引导
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  个性化支持
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 预期效果 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              成果展示
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              通过政策智能匹配系统实现的核心价值和效果
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <TeamOutlined className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    搭建政企沟通桥梁
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  建立统一的政策服务入口，实现惠企政策集中汇聚、精准查询、主动推送、高效兑现，让政策找不到、不理解、办不好成为历史。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <SafetyOutlined className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    改善营商环境
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  通过人性化AI交互引导，完成政策和企业的智能匹配及推介，高效改善营商环境，提升企业政策获得感和满意度。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                核心能力展示
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <DatabaseOutlined className="text-blue-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      政策智能匹配
                    </span>
                  </div>
                  <div className="text-blue-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <RocketOutlined className="text-green-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      免申即享服务
                    </span>
                  </div>
                  <div className="text-green-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageOutlined className="text-purple-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      智能咨询问答
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <BulbOutlined className="text-orange-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      流程智能引导
                    </span>
                  </div>
                  <div className="text-orange-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <SearchOutlined className="text-indigo-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      政策精准推送
                    </span>
                  </div>
                  <div className="text-indigo-600 font-bold">✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
