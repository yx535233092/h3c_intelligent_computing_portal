'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';

// 案例数据
const casesData = {
  government: {
    title: '某市公安情报分析以案搜案',
    category: '政府',
    image: '某市公安情报分析以案搜案.png',
    overview: {
      description:
        '基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的"语音语义建模"能力，该阶段为AI智能客服的较高级阶段，在初级能力基础上训练AI进行语义识别，达到"以案搜人"、"以案搜案"等效果。',
      highlights: [
        '基于AI大模型训练平台',
        '语音语义建模能力',
        '智能辅助合成研判',
        '以案搜人、以案搜案'
      ],
      technology: ['人工智能', '大数据分析', '语义识别', '知识图谱'],
      duration: '6个月',
      scale: '全市公安系统'
    },
    painPoints: [
      {
        title: '数据孤岛问题',
        description: '各部门数据分散，缺乏统一的数据整合平台，影响案件分析效率'
      },
      {
        title: '人工分析效率低',
        description: '传统人工分析案件线索耗时长，容易遗漏关键信息'
      },
      {
        title: '缺乏智能研判工具',
        description: '缺乏有效的智能化工具辅助侦查人员进行案件关联分析'
      },
      {
        title: '历史案件利用率低',
        description: '历史案件数据缺乏有效的检索和关联机制，资源浪费严重'
      }
    ],
    solutions: [
      {
        title: '智能数据整合平台',
        description:
          '构建统一的数据整合平台，实现多源异构数据的标准化处理和存储',
        features: [
          '多源数据接入',
          '数据清洗标准化',
          '实时数据同步',
          '数据质量管控'
        ]
      },
      {
        title: 'AI语义分析引擎',
        description: '基于自然语言处理技术，实现案件信息的智能解析和语义理解',
        features: [
          '文本语义分析',
          '实体识别抽取',
          '关系图谱构建',
          '情感倾向分析'
        ]
      },
      {
        title: '智能搜案系统',
        description: '利用机器学习算法，实现"以案搜案"和"以案搜人"的智能化检索',
        features: ['相似案件推荐', '嫌疑人画像', '案件关联分析', '预警风险评估']
      },
      {
        title: '可视化研判工具',
        description: '提供直观的可视化界面，辅助侦查人员进行案件分析和决策',
        features: ['关系网络图', '时空轨迹图', '统计分析图', '实时监控面板']
      }
    ]
  },
  telecom: {
    title: '某运营商智能营销预案',
    category: '运营商',
    image: '某运营商智能营销预案.png',
    overview: {
      description:
        '通过大模型分析大量数据，可根据一线营销作战过程中千变万化的营销动态，实现生成精准作战策略，提高营销触达转化效果。',
      highlights: [
        '大模型数据分析',
        '精准营销策略',
        '动态策略调整',
        '提高转化效果'
      ],
      technology: ['大数据分析', '机器学习', '用户画像', '智能推荐'],
      duration: '4个月',
      scale: '全省运营商网络'
    },
    painPoints: [
      {
        title: '营销策略单一',
        description: '传统营销方式缺乏个性化，无法满足不同用户群体的需求'
      },
      {
        title: '客户画像不准确',
        description: '缺乏精准的用户分析，导致营销活动投放效果不佳'
      },
      {
        title: '营销效果难以评估',
        description: '缺乏有效的营销效果跟踪和评估机制，无法优化策略'
      },
      {
        title: '响应速度慢',
        description: '市场变化快速，传统营销策略调整周期长，错失商机'
      }
    ],
    solutions: [
      {
        title: '智能用户画像系统',
        description: '基于多维度数据分析，构建精准的用户画像和行为预测模型',
        features: [
          '多维数据融合',
          '行为模式分析',
          '需求预测建模',
          '画像实时更新'
        ]
      },
      {
        title: '个性化推荐引擎',
        description: '利用深度学习算法，为不同用户群体推荐个性化的产品和服务',
        features: ['协同过滤算法', '内容推荐策略', '实时个性化', '多场景适配']
      },
      {
        title: '动态营销策略平台',
        description: '根据市场变化和用户反馈，实时调整和优化营销策略',
        features: [
          '策略自动生成',
          '效果实时监控',
          '策略动态调整',
          'A/B测试优化'
        ]
      },
      {
        title: '营销效果分析系统',
        description: '提供全方位的营销效果分析和ROI评估，指导营销决策',
        features: [
          '效果实时跟踪',
          'ROI分析报告',
          '转化路径分析',
          '营销归因分析'
        ]
      }
    ]
  },
  enterprise: {
    title: '某集团智能问答系统',
    category: '企业',
    image: '某集团智能问答系统.png',
    overview: {
      description:
        '企业智能问答系统，是基于通用大模型应用能力，面向企业集团及其分子公司构建的统一知识聚合、检索和问答系统，超大规模组织、超大规模用户、超大规模知识、超大规模数据安全防护。',
      highlights: [
        '基于通用大模型',
        '统一知识聚合',
        '超大规模支持',
        '企业级安全防护'
      ],
      technology: ['自然语言处理', '知识图谱', '企业搜索', '安全加密'],
      duration: '8个月',
      scale: '集团及50+分子公司'
    },
    painPoints: [
      {
        title: '知识分散难管理',
        description: '企业知识分布在各个系统和部门，缺乏统一的知识管理平台'
      },
      {
        title: '信息检索效率低',
        description: '员工查找信息耗时长，影响工作效率和决策速度'
      },
      {
        title: '知识传承困难',
        description: '企业专业知识难以有效传承，人员流动导致知识流失'
      },
      {
        title: '多系统集成复杂',
        description: '需要整合多个业务系统的数据，技术架构复杂度高'
      }
    ],
    solutions: [
      {
        title: '统一知识管理平台',
        description: '构建企业级知识管理平台，实现知识的统一存储和管理',
        features: [
          '知识分类体系',
          '版本控制管理',
          '权限分级管控',
          '知识生命周期'
        ]
      },
      {
        title: '智能问答引擎',
        description: '基于大模型技术，提供自然语言问答和智能推荐服务',
        features: [
          '自然语言理解',
          '意图识别分析',
          '智能答案生成',
          '多轮对话支持'
        ]
      },
      {
        title: '企业级安全体系',
        description: '建立完善的数据安全和隐私保护机制，确保企业数据安全',
        features: ['数据加密传输', '访问权限控制', '审计日志记录', '合规性检查']
      },
      {
        title: '多系统数据集成',
        description: '实现与企业现有系统的无缝集成，确保数据的实时性和一致性',
        features: [
          'API接口集成',
          '数据实时同步',
          '系统兼容适配',
          '数据格式转换'
        ]
      }
    ]
  },
  education: {
    title: '某高职校DEEPSEEK-AI+知识服务应用',
    category: '教育',
    image: '某高职校DEEPSEEK-AI+知识服务应用.png',
    overview: {
      description:
        'AI+知识服务应用通过智能助手与数据分析技术，提升高校的管理效率、决策支持和知识资源的获取与管理。功能涵盖文档解读、知识查阅、员工知识管理等多个方面，帮助师生快速获取信息并提升工作协作效率。',
      highlights: [
        'AI智能助手',
        '数据分析技术',
        '知识资源管理',
        '提升协作效率'
      ],
      technology: ['深度学习', '文档解析', '知识检索', '智能推荐'],
      duration: '5个月',
      scale: '全校师生1万+人'
    },
    painPoints: [
      {
        title: '教学资源分散',
        description: '教学资源分布在不同平台，师生查找和使用不便'
      },
      {
        title: '知识服务效率低',
        description: '传统的知识服务方式无法满足师生快速获取信息的需求'
      },
      {
        title: '管理决策缺乏数据支持',
        description: '学校管理层缺乏有效的数据分析工具支持决策制定'
      },
      {
        title: '师生协作沟通不畅',
        description: '缺乏有效的知识共享和协作平台，影响教学和科研效率'
      }
    ],
    solutions: [
      {
        title: '智能知识检索系统',
        description: '构建基于AI的智能检索系统，提供精准的知识查找服务',
        features: ['语义检索技术', '多模态搜索', '个性化推荐', '智能摘要生成']
      },
      {
        title: '文档智能解析平台',
        description: '利用NLP技术实现文档的自动解析和知识抽取',
        features: [
          '多格式文档解析',
          '关键信息提取',
          '知识点自动标注',
          '内容结构化'
        ]
      },
      {
        title: '数据分析决策系统',
        description: '提供comprehensive的数据分析和可视化，支持管理决策',
        features: [
          '学情数据分析',
          '资源使用统计',
          '趋势预测分析',
          '决策支持报告'
        ]
      },
      {
        title: '智能协作助手',
        description: 'AI驱动的协作工具，提升师生之间的沟通和协作效率',
        features: [
          '智能问答助手',
          '任务自动分配',
          '进度跟踪提醒',
          '知识共享推荐'
        ]
      }
    ]
  }
};

export default function IndustryCasesDetailPage() {
  useScrollToTop();
  const router = useRouter();
  const searchParams = useSearchParams();

  // 从URL参数获取案例类型，默认为government
  const caseType = searchParams.get('type') || 'government';
  const caseData =
    casesData[caseType as keyof typeof casesData] || casesData.government;

  const handleBackToList = () => {
    router.push('/industry-cases');
  };

  const handleContactUs = () => {
    router.push('/contact-us');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 返回按钮 */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={handleBackToList}
            className="flex items-center text-gray-600 hover:text-brand transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回案例列表
          </button>
        </div>
      </div>

      {/* 页面头部 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium mb-6">
              {caseData.category}行业案例
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {caseData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {caseData.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* 项目概述模块 */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-brand mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">项目概述</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  项目亮点
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {caseData.overview.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-brand/5 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">核心技术</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseData.overview.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">项目信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">项目周期:</span>
                      <span className="text-gray-900 font-medium">
                        {caseData.overview.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">应用规模:</span>
                      <span className="text-gray-900 font-medium">
                        {caseData.overview.scale}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={`/${caseData.image}`}
                  alt={caseData.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 客户痛点模块 */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-brand mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">客户痛点</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseData.painPoints.map((painPoint, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {painPoint.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {painPoint.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 解决方案模块 */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-brand mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">解决方案</h2>
          </div>

          <div className="space-y-8">
            {caseData.solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mr-6">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系咨询区域 */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/chat.png"
                alt="专家咨询"
                width={32}
                height={32}
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              对此案例感兴趣？
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们的专家团队将为您提供专业的咨询服务，
              <br />
              量身定制适合您企业的智能化解决方案
            </p>
            <button
              onClick={handleContactUs}
              className="bg-brand hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full text-base transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              立即咨询解决方案
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
