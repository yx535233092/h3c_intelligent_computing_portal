'use client';

import { useInView } from '../../../hooks/useInView';
import {
  AimOutlined,
  BuildOutlined,
  BulbOutlined,
  BarChartOutlined,
  RobotOutlined,
  BranchesOutlined,
  RocketOutlined,
  UserOutlined,
  TeamOutlined,
  TrophyOutlined,
  SyncOutlined,
  ReadOutlined,
  CodeOutlined,
  StarOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';

export default function ConsultServicePage() {
  const [heroRef, heroInView] = useInView();
  const [consultRef, consultInView] = useInView();
  const [trainingRef, trainingInView] = useInView();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero 介绍模块 */}
      <section
        ref={heroRef}
        className={`px-60 py-24 transition-all duration-1000 ease-out ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            咨询培训服务
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            专业的AI技术咨询与培训服务，助力企业数字化转型升级
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 技术咨询模块 */}
      <section
        ref={consultRef}
        className={`px-60 py-20 transition-all duration-1000 ease-out delay-200 ${
          consultInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技术咨询</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              为AI项目提供专业的技术咨询服务，从战略规划到技术实施，全方位助力您的AI项目成功
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: '基础架构咨询',
                description:
                  '为企业提供AI基础设施架构设计咨询，包括计算资源、存储系统、网络架构等核心组件的规划与优化',
                icon: <BuildOutlined />
              },
              {
                title: '训推技术咨询',
                description:
                  '提供模型训练与推理技术咨询服务，包括数据预处理、模型训练、部署优化等全流程技术指导',
                icon: <RobotOutlined />
              },
              {
                title: '产品应用咨询',
                description:
                  '针对具体AI产品应用场景，提供技术选型、功能设计、用户体验优化等全方位的产品化咨询',
                icon: <BulbOutlined />
              },
              {
                title: '解决方案咨询',
                description:
                  '基于企业实际需求，提供端到端的AI解决方案咨询，从需求分析到技术实施的全流程指导',
                icon: <AimOutlined />
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 ${
                  consultInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 text-blue-600">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 智算培训模块 */}
      <section
        ref={trainingRef}
        className={`px-60 py-20 bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-1000 ease-out delay-400 ${
          trainingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">智算培训</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              提供系统化的智算技术培训，帮助团队快速提升技术能力，打造专业的智算人才队伍
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: '智算应用实践',
                description:
                  '向量数据库介绍、知识库构建及优化、应用场景定制（工作流、智能体、智能问答）',
                details: [
                  '向量数据库基础知识与大模型结合',
                  '知识库原理、RAG架构及优化技巧',
                  '工作流、智能体、智能问答定制开发'
                ],
                icon: <RocketOutlined />,
                level: '应用实践',
                iconColor: 'text-blue-600',
                dotColor: 'bg-blue-400'
              },
              {
                title: '智算平台介绍',
                description: '智算调度平台介绍与实操、使能平台&AI助手基础应用',
                details: [
                  '傲飞算力平台与多租户业务流程',
                  '算力仓库、开发环境、训练微调推理',
                  '使能平台基础使用、知识库智能体'
                ],
                icon: <BranchesOutlined />,
                level: '平台操作',
                iconColor: 'text-green-600',
                dotColor: 'bg-green-400'
              },
              {
                title: '智算知识体系',
                description: '大模型基础与进阶知识、推理部署实验',
                details: [
                  'Transformer模型、主流推理框架',
                  '预训练、分布式训练、RLHF强化学习',
                  'DeepSeek裸金属部署实验'
                ],
                icon: <RobotOutlined />,
                level: '理论进阶',
                iconColor: 'text-purple-600',
                dotColor: 'bg-purple-400'
              },
              {
                title: '智算基础架构',
                description: '智算概述与发展趋势、智算基础设施架构设计',
                details: [
                  '智算发展趋势与行业应用',
                  '基础设施架构设计原理',
                  '智算技术体系全貌解析'
                ],
                icon: <UserOutlined />,
                level: '架构设计',
                iconColor: 'text-orange-600',
                dotColor: 'bg-orange-400'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 relative overflow-hidden ${
                  trainingInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0}ms` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.level}
                  </span>
                </div>
                <div className={`text-4xl mb-4 ${item.iconColor}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.details && (
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div
                          className={`w-2 h-2 ${item.dotColor} rounded-full mt-2 mr-3 flex-shrink-0`}
                        ></div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 培训特色 */}
          {/* <div
            className={`mt-16 text-center transition-all duration-1000 ease-out delay-700 ${
              trainingInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                培训特色
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2 text-green-600">
                    <TeamOutlined />
                  </div>
                  <p className="text-gray-600">小班教学</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 text-yellow-600">
                    <TrophyOutlined />
                  </div>
                  <p className="text-gray-600">认证体系</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 text-indigo-600">
                    <SyncOutlined />
                  </div>
                  <p className="text-gray-600">持续更新</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* 服务优势 */}
          <div
            className={`mt-16 transition-all duration-1000 ease-out delay-900 ${
              trainingInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                服务优势
              </h3>
              <p className="text-lg text-gray-600">
                一体系+双结合+多专家+可定制
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  title: '专业知识体系',
                  description:
                    '课程遵循从基础到前沿的逻辑、模块化设计，目标清晰，内容实时更新，适配不同水平学员进阶。',
                  icon: <ReadOutlined />,
                  iconColor: 'text-blue-500'
                },
                {
                  title: '实验与理论结合',
                  description:
                    '50%实操课时，依托演示环境、客户环境进行实操结合行业案例，强化知识应用与项目实战能力。',
                  icon: <CodeOutlined />,
                  iconColor: 'text-green-500'
                },
                {
                  title: '专家团队护航',
                  description:
                    '汇聚云智专家团队，拥有丰富项目经验和授课经验深度指导技术学习。',
                  icon: <StarOutlined />,
                  iconColor: 'text-purple-500'
                },
                {
                  title: '服务私人定制',
                  description:
                    '可结合客户需求，定制化培训课程，教学方式与学习周期，满足客户业务需求。',
                  icon: <CustomerServiceOutlined />,
                  iconColor: 'text-orange-500'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 border border-gray-100 ${
                    trainingInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  <div className={`text-4xl mb-4 ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
