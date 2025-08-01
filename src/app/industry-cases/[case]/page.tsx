'use client';

import { useParams } from 'next/navigation';
import { getCaseByRoute, getCaseCategoryByRoute } from '@/utils/caseData';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function CaseDetailPage() {
  useScrollToTop();
  const params = useParams();
  const router = useRouter();
  const caseParam = params.case as string;

  // 构建完整的路由路径来获取案例数据
  const fullRoute = `/industry-cases/${caseParam}`;
  const caseData = getCaseByRoute(fullRoute);
  const caseCategory = getCaseCategoryByRoute(fullRoute);

  // 如果找不到案例数据，显示404页面
  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-8">案例未找到</p>
          <button
            onClick={() => router.push('/industry-cases')}
            className="bg-brand hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            返回案例列表
          </button>
        </div>
      </div>
    );
  }

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
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${
                  caseCategory?.key === '1'
                    ? 'bg-blue-100 text-blue-800' // 政府
                    : caseCategory?.key === '2'
                    ? 'bg-green-100 text-green-800' // 运营商
                    : caseCategory?.key === '3'
                    ? 'bg-purple-100 text-purple-800' // 企业
                    : caseCategory?.key === '4'
                    ? 'bg-orange-100 text-orange-800' // 教育
                    : 'bg-gray-100 text-gray-800' // 默认
                }`}
              >
                {caseCategory?.label || '客户案例'}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {caseData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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

      {/* 主要内容区域 */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 客户痛点模块 */}
        {caseData.pointOfPain && caseData.pointOfPain.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                客户的痛点
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {caseCategory?.label === '政府' &&
                  '政府部门在数字化治理过程中面临的关键问题'}
                {caseCategory?.label === '运营商' &&
                  '运营商在数字化转型升级中的核心挑战'}
                {caseCategory?.label === '企业' &&
                  '企业在数字化转型过程中遇到的核心问题'}
                {caseCategory?.label === '教育' &&
                  '教育机构在智慧校园建设中的主要难点'}
                {!caseCategory &&
                  '我们深入分析客户在数字化转型过程中遇到的核心问题'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseData.pointOfPain.map((pain, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                      <span className="text-red-600 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {pain.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 解决方案模块 */}
        {caseData.solution && caseData.solution.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                我们的解决方案
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {caseCategory?.label === '政府' &&
                  '基于先进AI技术，为政府部门提供智慧治理解决方案'}
                {caseCategory?.label === '运营商' &&
                  '融合大数据与AI能力，助力运营商数字化转型升级'}
                {caseCategory?.label === '企业' &&
                  '基于先进技术和丰富经验，为企业量身定制数字化解决方案'}
                {caseCategory?.label === '教育' &&
                  '运用人工智能技术，构建智慧教育生态体系'}
                {!caseCategory &&
                  '基于先进技术和丰富经验，为客户量身定制数字化解决方案'}
              </p>
            </div>

            <div className="space-y-8">
              {caseData.solution.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-colors duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircleOutlined className="text-green-500 text-2xl mr-3" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      解决方案 {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 底部CTA区域 */}
      <section className="bg-gray-50 py-20 relative overflow-hidden">
        {/* 装饰性元素 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* 顶部装饰线 */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-brand rounded-full"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            想要实现类似的数字化转型？
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            我们的专家团队随时为您提供专业咨询和定制化解决方案
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact-us')}
              className="px-8 py-4 bg-brand hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              立即咨询
            </button>
            <button
              onClick={() => router.push('/industry-cases')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-brand hover:text-brand transition-colors duration-200"
            >
              查看更多案例
            </button>
          </div>

          {/* 底部信息 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              已为 <span className="text-brand font-semibold">1000+</span>{' '}
              家企业提供数字化解决方案
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
