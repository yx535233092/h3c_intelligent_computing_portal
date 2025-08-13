'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  BarChartOutlined,
  DatabaseOutlined,
  LineChartOutlined,
  SettingOutlined,
  SearchOutlined,
  MessageOutlined,
  RiseOutlined,
  EyeOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function TelecomIntelligentDataPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '某电信运营商智能问数',
    subtitle: '多模态自然语言对话式交互，实现零门槛的智能用数',
    description:
      '通过多模态的自然语言对话式交互、自动数据分析和展现，实现零门槛的智能用数。解决业务部门跨部门需求沟通中的高延时、长反馈、不满意等问题。',
    detailPicName: '电信运营商.png',
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
                电信运营商行业案例
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
              传统数据使用流程中存在的关键挑战
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <DatabaseOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                跨部门需求沟通
              </h3>
              <p className="text-gray-600">
                业务部门用数需要进行跨部门间的需求沟通，流程复杂
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <SearchOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                高延时长反馈
              </h3>
              <p className="text-gray-600">
                数据需求处理周期长，响应速度慢，影响决策效率
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <SettingOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                用数门槛高
              </h3>
              <p className="text-gray-600">
                传统数据分析工具使用复杂，业务人员难以快速上手
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
              智能问数解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              多模态自然语言交互，全面提升数据使用体验
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChartOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                图表智能生成
              </h3>
              <p className="text-gray-600 mb-4">
                智能生成合适类型的图表，如柱状图、折线图、散点图等，自动匹配最佳可视化方式
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  自动选择图表类型
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  数据驱动可视化
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <SettingOutlined className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                智能布局与美化
              </h3>
              <p className="text-gray-600 mb-4">
                支持对报表进行整体智能化布局，根据内容或场景要求自动配色
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能报表布局
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  自动配色美化
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <EyeOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                数据解读
              </h3>
              <p className="text-gray-600 mb-4">
                用户可以通过自然语言对图形组件的数据进行自动的分析解读
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  自然语言解读
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能数据洞察
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <MessageOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                智能问答
              </h3>
              <p className="text-gray-600 mb-4">
                通过自然语言看数取数，降低数据查询和分析门槛
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  自然语言查询
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  零门槛用数
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BulbOutlined className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                数据诊断
              </h3>
              <p className="text-gray-600 mb-4">
                实现异动分析，自动发现指标数据异常原因，提供智能诊断
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  异动自动检测
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  原因智能分析
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <RiseOutlined className="text-2xl text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                趋势预测
              </h3>
              <p className="text-gray-600 mb-4">
                支持分析数据的趋势变化，预测数据的发展趋势和走势
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  趋势智能分析
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  未来走势预测
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
              预期效果
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              通过智能问数系统实现的核心价值和效果
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <DatabaseOutlined className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    零门槛用数
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  业务部门无需具备专业数据分析技能，通过自然语言即可实现数据查询、分析和可视化，真正实现零门槛的智能用数体验。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <LineChartOutlined className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    提升决策效率
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  大幅缩短从数据需求提出到获得分析结果的时间，提高业务决策的时效性和准确性，支持快速响应市场变化。
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
                    <BarChartOutlined className="text-blue-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      智能图表生成
                    </span>
                  </div>
                  <div className="text-blue-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageOutlined className="text-green-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      自然语言问答
                    </span>
                  </div>
                  <div className="text-green-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <BulbOutlined className="text-purple-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      智能数据诊断
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <RiseOutlined className="text-orange-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      趋势预测分析
                    </span>
                  </div>
                  <div className="text-orange-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <SettingOutlined className="text-indigo-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      智能布局美化
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
