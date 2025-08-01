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
  SearchOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function UniversityKnowledgePlatformPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '某市公安情报分析以案搜案',
    subtitle: '基于AI大模型训练平台，形成辅助合成研判能力',
    description:
      '基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的“语音语义建模”能力，该阶段为AI智能客服的较高级阶段，在初级能力基础上训练AI进行语义识别，达到“以案搜人”、“以案搜案”等效果。',
    detailPicName: '某市公安情报分析以案搜案.png'
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              客户痛点
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              公安部门在情报分析和案件检索过程中面临的实际挑战
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-red-50 border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                身份识别效率低
              </h3>
              <p className="text-gray-600 text-sm">
                无法快速识别报警电话机主身份，难以获取历史报警情况
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DatabaseOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                案件关联困难
              </h3>
              <p className="text-gray-600 text-sm">
                缺乏高效的案件关联检索能力，无法快速进行&ldquo;以案搜案&rdquo;
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-yellow-50 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SettingOutlined className="text-2xl text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                传统检索低效
              </h3>
              <p className="text-gray-600 text-sm">
                传统关键字检索方式效率低下，无法支撑复杂的身份研判需求
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                语义理解缺失
              </h3>
              <p className="text-gray-600 text-sm">
                缺乏智能语义识别能力，无法理解自然语言查询需求
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于AI大模型的智能情报分析系统，全面提升公安工作效率
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TeamOutlined className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      AI智能客服系统
                    </h3>
                    <p className="text-gray-600 mb-4">
                      创建群组后自动加入AI客服，民警通过@AI客服询问报警电话机主身份及历史报警情况
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 自动群组集成</li>
                      <li>• 智能身份研判</li>
                      <li>• 历史案件关联</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DatabaseOutlined className="text-xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      一档一体系统
                    </h3>
                    <p className="text-gray-600 mb-4">
                      建立一人一档、一车一档、一案一档完整档案体系，全面整合各类信息
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 人员基本信息与关系网络</li>
                      <li>• 车辆信息与轨迹分析</li>
                      <li>• 案件信息与关联分析</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SearchOutlined className="text-xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      智能检索能力
                    </h3>
                    <p className="text-gray-600 mb-4">
                      提供多种检索方式，支持图片检索、精确ID检索、自然语言检索、全文数据检索
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 智能文本检索</li>
                      <li>• 语音建模查询</li>
                      <li>• 自然语言解析</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafetyOutlined className="text-xl text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      多场景应用
                    </h3>
                    <p className="text-gray-600 mb-4">
                      支持社区管控、大型活动安保、治安巡逻等多种执法场景
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 身份证识别与现场拍照</li>
                      <li>• 车牌识别与套牌检测</li>
                      <li>• 安全隐患人员识别</li>
                    </ul>
                  </div>
                </div>
              </div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI智能化改造带来的实际效果与工作效率提升
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="text-white w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                实现智能关联
              </h3>
              <p className="text-gray-600">
                成功实现&ldquo;以案搜人&rdquo;、&ldquo;以案搜案&rdquo;功能，智能关联历史案件信息
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="text-white w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TeamOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                快速身份研判
              </h3>
              <p className="text-gray-600">
                AI客服快速判断特殊人员身份，如长期家暴受害人，为处置提供参考
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
              <div className="text-white w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DatabaseOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                多维度检索
              </h3>
              <p className="text-gray-600">
                支持基础信息、行为类信息、关系类信息的多维度检索服务
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              覆盖执法全场景
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <SafetyOutlined className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">社区管控</h4>
                <p className="text-sm text-gray-600">
                  区分业主租住户，识别安全隐患标签住户
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TeamOutlined className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">活动安保</h4>
                <p className="text-sm text-gray-600">
                  识别特定安全隐患标签人员及其关系网络
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <SearchOutlined className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">治安巡逻</h4>
                <p className="text-sm text-gray-600">
                  识别问题人员和车辆，检测套牌车辆
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOutlined className="text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">执法办案</h4>
                <p className="text-sm text-gray-600">
                  为指挥长、各级领导、民警提供决策支持
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
