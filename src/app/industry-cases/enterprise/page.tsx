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
    title: '某集团智能问答系统',
    subtitle: '基于通用大模型应用能力的统一知识聚合、检索和问答系统',
    description:
      '面向企业集团及其分子公司构建的统一知识聚合、检索和问答系统，实现超大规模组织、超大规模用户、超大规模知识、超大规模数据安全防护',
    detailPicName: '某集团智能问答系统.png'
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
                企业行业案例
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

      {/* 客户痛点板块 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-red-50 text-red-600">
              <TeamOutlined className="mr-2" />
              客户痛点
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              传统知识管理面临的痛点
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              企业在知识管理和问答系统方面遇到的关键问题
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <SearchOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                检索速度慢
              </h3>
              <p className="text-gray-600">
                基于ES全文检索需要20秒响应时间，影响工作效率
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                准确率低
              </h3>
              <p className="text-gray-600">
                关键词检索问答准确率仅60%，无法满足精准需求
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <DatabaseOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                知识分散
              </h3>
              <p className="text-gray-600">
                缺乏统一知识聚合平台，信息获取困难
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <SettingOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                组织管理复杂
              </h3>
              <p className="text-gray-600">
                超大规模组织架构管理困难，权限控制复杂
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <SafetyOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                安全防护不足
              </h3>
              <p className="text-gray-600">
                数据安全防护机制不完善，存在泄密风险
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BookOutlined className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                政策查询困难
              </h3>
              <p className="text-gray-600">
                政策文件查询和解读效率低，影响决策速度
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案板块 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-600">
              <SettingOutlined className="mr-2" />
              解决方案
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              全方位智能问答解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于通用大模型应用能力，提供统一知识聚合、检索和问答系统
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* 全域数据治理 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <DatabaseOutlined className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                全域数据治理
              </h3>
              <p className="text-gray-600 mb-6">
                统一接入32900+份制度文档，构建企业级知识图谱，联动K-Cool知识系统、国家政策API、LDAP主数据，实现跨系统数据融合
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  多源异构数据整合
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  企业级知识图谱构建
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  安全治理框架
                </li>
              </ul>
            </div>

            {/* 高质量知识加工 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <SettingOutlined className="text-green-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                高质量知识加工
              </h3>
              <p className="text-gray-600 mb-6">
                深度文档理解，自动进行版面分析，精准识别10种版面结构。集成paddleOCR模型进行高精度文字识别，采用TSR技术实现复杂表格结构识别
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  深度文档理解
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  异构数据兼容
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能语义切片
                </li>
              </ul>
            </div>

            {/* RAG深度定制优化 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <SearchOutlined className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                RAG深度定制优化
              </h3>
              <p className="text-gray-600 mb-6">
                通过多轮对话补全信息，利用大模型对用户问题进行改写和扩充。结合意图识别进行标签过滤，采用向量检索和关键字全文检索的多路召回
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  查询理解优化
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  多路混合检索
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  Rerank二次精排
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  Self-RAG自我反思
                </li>
              </ul>
            </div>

            {/* 精准权限控制 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <SafetyOutlined className="text-orange-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                精准权限控制
              </h3>
              <p className="text-gray-600 mb-6">
                将K-cool系统的多层级权限标签同步更新到制度知识库中，基于登录用户所属组织架构权限进行数据初步召回过滤，保障数据安全
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  知识鉴权
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  意图识别
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  组织架构权限同步
                </li>
              </ul>
            </div>

            {/* 多种模型协同工作 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <TeamOutlined className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                多种模型协同工作
              </h3>
              <p className="text-gray-600 mb-6">
                通义千问（qwen-plus,
                qwen-turbo）作为模型基座，bge-large-zh用于文本向量化，bge-reranker-large用于召回结果的二次精排
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  基础大模型
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  嵌入与排序模型
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  专用识别模型
                </li>
              </ul>
            </div>

            {/* 交互体验升级 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <BookOutlined className="text-pink-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                交互体验升级
              </h3>
              <p className="text-gray-600 mb-6">
                系统生成的所有答案都会明确标注引用来源，支持多轮对话与长短期记忆，通过案例示范引导用户采用更具体、目标导向的提问技巧
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  可信赖的答案
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  人性化交互
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能引导提问
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 提效成果板块 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-100 text-green-600">
              <CheckCircleOutlined className="mr-2" />
              提效成果
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              显著的效率提升和业务价值
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              通过智能问答系统实现的具体提效指标和业务成果
            </p>
          </div>

          {/* 核心指标 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                检索提速
              </h3>
              <p className="text-gray-600">从20秒提升到2秒内响应</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">30%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                准确率提升
              </h3>
              <p className="text-gray-600">从60%提升到92%</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">37万+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                服务用户
              </h3>
              <p className="text-gray-600">全集团员工覆盖</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-white">32900+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                知识文档
              </h3>
              <p className="text-gray-600">聚合全集团知识</p>
            </div>
          </div>

          {/* 详细成果 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                超大规模应用成果
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TeamOutlined className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      超大规模组织
                    </h4>
                    <p className="text-gray-600">
                      无缝集成企业超大规模的用户组织体系，覆盖全集团25个业务单元、超3000+实体企业组织接入，实现全集团接入问答
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <DatabaseOutlined className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      超大规模知识
                    </h4>
                    <p className="text-gray-600">
                      聚合全集团32900+知识文档，囊括文本/PDF/图片/特定格式等21种文件格式
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <SafetyOutlined className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      大规模数据安全防护
                    </h4>
                    <p className="text-gray-600">
                      提供业务单元、部门、角色、员工、知识库、文档、知识点等7个维度的数据安全防护，不泄密、不越界
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                效率对比
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">响应时间</span>
                    <span className="text-sm text-gray-500">传统 vs 现在</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-red-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full w-full"></div>
                    </div>
                    <span className="text-red-600 font-semibold">20秒</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex-1 bg-green-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-1/10"></div>
                    </div>
                    <span className="text-green-600 font-semibold">2秒</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">准确率</span>
                    <span className="text-sm text-gray-500">传统 vs 现在</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-red-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-red-600 font-semibold">60%</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex-1 bg-green-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-11/12"></div>
                    </div>
                    <span className="text-green-600 font-semibold">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
