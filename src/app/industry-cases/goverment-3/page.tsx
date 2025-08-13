'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  RightOutlined,
  SearchOutlined,
  BulbOutlined,
  FileTextOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  BookOutlined,
  TeamOutlined,
  SettingOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function EmergencyResponsePage() {
  useScrollToTop();
  const router = useRouter();

  const caseData = {
    title: '某省应急局处置方案生成',
    subtitle: '基于AI的应急预案数字化与智能处置方案生成系统',
    description:
      '实现专项预案数字化，把专项预案处置流程、各岗位职责通过文档解析的方式实现应急预案的结构化生成，辅助应急期间开展应急处置工作。',
    detailPicName: '某省应急局处置方案生成.png',
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
      <section className="relative bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 py-20 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-600/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
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
              <p className="text-xl text-orange-600 font-semibold mb-6">
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
              传统应急预案管理在紧急情况下面临的关键挑战
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <SearchOutlined className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                查找困难，响应滞后
              </h3>
              <p className="text-gray-600 leading-relaxed">
                传统预案通常以纸质或非结构化的电子文档形式（如
                Word、PDF）存在。在紧急情况下，应急人员需要花费宝贵时间手动翻阅大量文档，从中查找关键信息，导致响应速度慢，延误黄金救援时间。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <WarningOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                理解困难，执行不准
              </h3>
              <p className="text-gray-600 leading-relaxed">
                预案内容往往冗长、复杂，包含大量专业术语和交叉引用。一线应急人员在压力下难以快速、准确地理解自身岗位职责、具体处置流程和不同场景下的应对措施，容易出现误判或执行偏差。
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <SettingOutlined className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                动态匹配不足，适用性差
              </h3>
              <p className="text-gray-600 leading-relaxed">
                传统预案是静态的，无法根据实时的应急态势进行动态调整和匹配。在不同类型的突发事件中，预案无法智能地推荐最适合的处置流程和人员配置，导致预案的实战价值大打折扣。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案功能 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              智能应急处置解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于AI技术的应急预案数字化与智能处置方案生成平台
            </p>
          </div>
          <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOutlined className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                应急预案推荐
              </h3>
              <p className="text-gray-600 mb-4">
                通过输入事件信息，对事件关键内容进行分析，预案模板智能匹配，生成预案文本
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  事件智能分析
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  预案模板匹配
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  预案文本生成
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <SafetyOutlined className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                处置方案生成
              </h3>
              <p className="text-gray-600 mb-4">
                输入实时事件信息，事件关键内容分析，处置方案生成
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  实时事件分析
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  关键内容提取
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能方案生成
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BulbOutlined className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                应急知识问答
              </h3>
              <p className="text-gray-600 mb-4">
                应急问题输入，应急知识智能召回，模型问答
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  智能知识召回
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  专业问答服务
                </li>
                <li className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  即时知识支持
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              技术架构与核心能力
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于大模型和文档解析技术的智能应急处置系统
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                文档解析与结构化
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      预案文档解析：
                    </span>
                    自动解析现有应急预案文档，提取关键信息和流程结构
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      岗位职责提取：
                    </span>
                    智能识别各岗位职责和责任分工，形成结构化数据
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      流程标准化：
                    </span>
                    将处置流程转化为标准化、模块化的执行步骤
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                智能生成与匹配
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      事件智能分析：
                    </span>
                    自动分析突发事件特征，识别事件类型和严重程度
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      动态方案生成：
                    </span>
                    根据实时态势和预案模板，生成定制化处置方案
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">
                      知识智能检索：
                    </span>
                    快速检索相关应急知识，提供专业指导和决策支持
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              核心技术优势
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <ThunderboltOutlined className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">快速响应</h4>
                <p className="text-sm text-gray-600">
                  秒级生成处置方案，大幅提升应急响应速度
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <DatabaseOutlined className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">结构化管理</h4>
                <p className="text-sm text-gray-600">
                  将非结构化预案转化为可执行的数字化流程
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BulbOutlined className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">智能匹配</h4>
                <p className="text-sm text-gray-600">
                  根据事件特征智能匹配最适合的处置方案
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TeamOutlined className="text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">协同作业</h4>
                <p className="text-sm text-gray-600">
                  清晰的岗位职责分工，提升团队协作效率
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施效果 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              预期成果与效果
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              通过应急处置方案生成系统实现的核心价值和效果
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <ClockCircleOutlined className="text-2xl text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    显著提升响应效率
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  彻底改变传统的手动查找模式，实现应急预案的数字化、智能化管理，将应急响应时间从小时级缩短到分钟级，为黄金救援时间争取宝贵机会。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <SafetyOutlined className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    提高处置准确性
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  通过智能匹配和结构化指导，减少人为判断误差，确保应急人员能够快速、准确地执行处置流程，显著降低因理解偏差导致的执行错误。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                核心功能实现
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <BookOutlined className="text-blue-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      应急预案推荐
                    </span>
                  </div>
                  <div className="text-blue-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <SafetyOutlined className="text-orange-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      处置方案生成
                    </span>
                  </div>
                  <div className="text-orange-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <BulbOutlined className="text-green-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      应急知识问答
                    </span>
                  </div>
                  <div className="text-green-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <DatabaseOutlined className="text-purple-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      预案数字化管理
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center">
                    <ThunderboltOutlined className="text-indigo-600 text-xl mr-3" />
                    <span className="font-semibold text-gray-900">
                      实时态势分析
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
