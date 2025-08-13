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
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function UniversityKnowledgePlatformPage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '高校自助知识服务平台',
    subtitle: '领先一步的高校AI知识中枢解决方案',
    description:
      '这是一个能融合数据、能智能服务、能任务闭环、还能安全交付的高校知识平台。通过统一门户、知识治理平台、智能体支撑底座，全面服务教研、申报、评估、管理等核心业务场景，并具备支撑智能体构建的持续演进能力。',
    detailPicName: '教育2.png',
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
                教育行业案例
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

      {/* 客户痛点模块 */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-red-50 text-red-600">
            痛点
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            客户面临的核心痛点
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            高校普遍面临知识资源分散、流程查找困难、数据安全等挑战，影响了教学科研和管理效率
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 左侧痛点 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <DatabaseOutlined className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    材料分散，重复劳动严重
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    申报、评估、教改等业务场景中，相关材料散落各处，每次都需要重新收集整理，耗费大量人力物力
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <SearchOutlined className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    制度流程查找困难
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    面对繁杂的规章制度和业务流程，师生经常需要翻阅大量文档才能找到所需信息，查询效率低下
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TeamOutlined className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    多部门数据统计繁琐
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    跨部门数据汇总需要人工收集和统计，不仅效率低下，还容易出现数据不一致的问题
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧痛点 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <SafetyOutlined className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    数据安全要求高
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    高校涉及大量敏感信息，对数据安全要求严格，云端部署存在数据外泄风险，难以满足合规要求
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <BookOutlined className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    知识资源分散孤立
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    各业务系统独立运行，知识问答、门户、知识库等模块相互分离，无法形成统一的知识服务体系
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0  w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <CheckCircleOutlined className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    用户反馈难以追踪
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    缺乏有效的反馈收集和处理机制，用户使用体验和改进建议难以及时响应和优化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案模块 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-50 text-blue-600">
              我们的解决方案
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              针对性解决方案，让高校知识管理更智能
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              基于深度理解高校业务场景，提供统一融合、智能实用、任务闭环的知识服务平台
            </p>
          </div>

          {/* 核心优势对比 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              核心优势：对比同行，看得见的不同
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        对比维度
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        我们的能力
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        市场常见做法
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        统一融合能力
                      </td>
                      <td className="px-6 py-4 text-green-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>结构化+非结构化资源统一治理、统一平台调用</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        模块孤立，知识问答、门户、知识库分离
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        AI实用性
                      </td>
                      <td className="px-6 py-4 text-green-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>
                            自研文档大模型，支持智能问答、知识解析、结构化摘要
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        多为通用大模型接入，问答泛化、无法聚焦内容
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        任务闭环设计
                      </td>
                      <td className="px-6 py-4 text-green-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>
                            教改、评估、申报等流程中，可按任务聚合知识材料、支持执行
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        多为展示平台，缺乏业务驱动能力
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        智能体支撑能力
                      </td>
                      <td className="px-6 py-4 text-green-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>
                            提供可持续的知识中枢体系，未来可支撑教学、科研智能体任务构建
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        无智能体设计能力，缺乏平台级支撑体系
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        部署安全性
                      </td>
                      <td className="px-6 py-4 text-green-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>
                            私有化交付、本地算力适配，支持敏感词与权限管理
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        云部署为主，数据出校风险高
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 平台功能架构 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              平台功能全景图：三大体系 + 六大能力模块
            </h3>

            {/* 三大体系 */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                「三大体系」
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className=" w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <SearchOutlined className="text-blue-600 text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    统一知识门户
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    聚合个人/共享/广场资源，支持多模态搜索、智能问答、语义推荐
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className=" w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <DatabaseOutlined className="text-green-600 text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    知识管理平台
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    统一治理主题、资源、报告、提示词，融合结构化+非结构化资源
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className=" w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <SettingOutlined className="text-purple-600 text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    智能体支撑中枢
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    提供统一知识解析与任务支撑能力，支持后续智能体开发落地
                  </p>
                </div>
              </div>
            </div>

            {/* 六大模块 */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                「六大能力模块」
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className=" text-white w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    文档解读助手
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    上传通知/制度，自动摘要、问答、结构化输出
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className=" text-white w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <DatabaseOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    数据解读助手
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    支持人员、发票、考勤、指标等结构化问答与图表生成
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className=" text-white w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <SearchOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    知识查阅助手
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    全文检索、摘要提取、权限控制与收藏标记
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className=" text-white w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <TeamOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    知识员工助手
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    部门构建专属助手，实现知识个性化服务
                    <span className="text-orange-600 text-sm ml-2">
                      (预留扩展)
                    </span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
                  <div className=" text-white w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <BookOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    材料归集模块
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    教学改革、评估、项目申报等任务中材料自动汇总
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
                  <div className=" text-white w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleOutlined className="text-white text-xl" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    流程问答助手
                  </h5>
                  <p className="text-gray-700 leading-relaxed">
                    制度、流程、常见问题一问即答
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 痛点解决方案对应 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              针对性解决方案：痛点与解决方式一一对应
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        高校痛点
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        解决方案响应
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-900">
                        材料分散、重复劳动
                      </td>
                      <td className="px-6 py-4 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>聚合式知识库支撑申报、评估等材料自动归集</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-900">
                        找制度、流程麻烦
                      </td>
                      <td className="px-6 py-4 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>智能问答助手直达答案，免翻资料</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-900">
                        多部门数据需人工统计
                      </td>
                      <td className="px-6 py-4 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>智能问答+图表输出，一问即得</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-900">
                        数据安全要求高
                      </td>
                      <td className="px-6 py-4 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>
                            本地大模型一体机部署，零数据外流，合规运行
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-gray-900">
                        用户反馈难追踪
                      </td>
                      <td className="px-6 py-4 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircleOutlined className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>点赞/点踩反馈机制+后台持续优化运营支持</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 安全与演进能力 */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                部署安全 · 权限可控 · 可持续演进
              </h3>
              <p className="text-slate-300 text-lg">
                为高校提供安全可靠、持续演进的智能知识服务
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafetyOutlined className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">私有化部署</h4>
                <p className="text-slate-300 text-sm">
                  适配高校算力环境，支持校内大模型运行
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TeamOutlined className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">权限管理</h4>
                <p className="text-slate-300 text-sm">
                  分级权限管理、敏感词控制、用户行为可追踪
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleOutlined className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">反馈闭环</h4>
                <p className="text-slate-300 text-sm">
                  满意度反馈闭环机制，支持内容持续优化与迭代
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SettingOutlined className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">智能体支撑</h4>
                <p className="text-slate-300 text-sm">
                  已具备支撑教学、科研、管理类智能体任务构建的知识中枢能力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            想要打造专属的高校知识服务平台？
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            我们的专家团队随时为您提供专业咨询和定制化解决方案，助力高校数字化转型
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
              已为 <span className="text-brand font-semibold">众多</span>{' '}
              高校提供知识服务解决方案
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
