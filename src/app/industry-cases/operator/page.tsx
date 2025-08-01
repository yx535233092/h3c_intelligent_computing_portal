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
    title: '某省联通智能受理',
    subtitle: '借助大模型能力及电信领域专业知识，打造智能受理助手',
    description:
      '覆盖业务咨询、信息查询、业务受理热点应用场景，实现用户利用自然语言自助进行业务咨询、信息查询、业务办理，降低系统上手难度，改善人机交互友好性，提高省份客户系统满意度，助力省份客户降本增效。',
    detailPicName: '运营商1.png'
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
              传统业务受理系统存在的挑战和问题
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <SettingOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                系统上手难度高
              </h3>
              <p className="text-gray-600">
                传统系统操作复杂，营业人员需要较长时间学习掌握
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TeamOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                人机交互不友好
              </h3>
              <p className="text-gray-600">
                缺乏自然语言交互能力，用户体验有待提升
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DatabaseOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                业务受理效率低
              </h3>
              <p className="text-gray-600">
                手工录入繁琐，信息处理速度慢，影响客户体验
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <SafetyOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                营销能力参差不齐
              </h3>
              <p className="text-gray-600">
                营业人员营销水平不一，影响业务转化效果
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
              基于大模型能力构建的智能受理助手，全面提升业务受理体验
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOutlined className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    多模态受理
                  </h3>
                  <p className="text-gray-600 mb-3">
                    支持手写受理单扫描图片受理、电子协议文档直接受理、文字模版意图受理、语音交互受理等多种方式
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 简化录入流程</li>
                    <li>• 提升受理效率</li>
                    <li>• 支持多种输入方式</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SearchOutlined className="text-2xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    实时智能推荐
                  </h3>
                  <p className="text-gray-600 mb-3">
                    基于受理页面流的推进，动态智能针对性推荐，一键信息带入
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 客户信息加载后的销售品推荐</li>
                    <li>• 销售品确定后的增值业务包推荐</li>
                    <li>• 宽带受理后的Wi-Fi组网及设备推荐</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TeamOutlined className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    营销话术实时推荐
                  </h3>
                  <p className="text-gray-600 mb-3">
                    基于页面流，智能助手推荐针对性的营销话术
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 拉齐营业人员的营销能力</li>
                    <li>• 提升转化率</li>
                    <li>• 个性化话术推荐</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafetyOutlined className="text-2xl text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    智能稽核
                  </h3>
                  <p className="text-gray-600 mb-3">
                    智能助手识别页面输入信息，进行智能稽核，并推荐修复动作
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 受理动作主线不受干扰</li>
                    <li>• 快速完成业务受理</li>
                    <li>• 智能错误检测与修复</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 提效成果 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              提效成果
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              在联通集团政企业务浙江省的实际应用效果
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleOutlined className="text-3xl text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">86.2%</div>
              <div className="text-xl font-semibold text-gray-900 mb-3">
                识别准确率
              </div>
              <p className="text-gray-600">
                客户经理通过智能受理识别协议、手写单、语音受理930多次，准确率达86.2%
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DatabaseOutlined className="text-3xl text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">37%</div>
              <div className="text-xl font-semibold text-gray-900 mb-3">
                时长降幅
              </div>
              <p className="text-gray-600">
                营业员通过智能受理进行客户定位、商品查询和办理业务，受理时长降低37%
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SettingOutlined className="text-3xl text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5.8</div>
              <div className="text-xl font-semibold text-gray-900 mb-3">
                平均受理时长（分钟）
              </div>
              <p className="text-gray-600">
                平均受理时长降低到5.8分钟，大幅提升业务处理效率
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
              <span className="text-gray-700 font-medium">应用场景：</span>
              <span className="ml-2 text-blue-600 font-semibold">
                联通集团政企业务浙江省
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
