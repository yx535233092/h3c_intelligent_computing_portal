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
            AI 全链路技术支撑服务
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            专业的AI技术支撑服务，助力企业AI转型升级
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技术支撑</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              为AI项目提供专业的技术支撑服务，从战略规划到技术实施，全方位助力您的AI项目成功
            </p>
          </div>
          ​
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: '基础架构集成设计服务',
                description:
                  '为企业AI战略提供基础设施架构设计，涵盖GPU/CPU集群、分布式存储、网络架构等核心组件配置，确保高扩展性、高稳定性与高效能特性，为AI模型训练与应用部署提供坚实硬件支撑。',
                icon: <BuildOutlined />
              },
              {
                title: '训推技术指导服务​',
                description:
                  '覆盖AI模型全生命周期，从数据预处理、算法选型、超参数调优到推理部署优化，提供轻量化改造、量化压缩等技术指导，实现模型在生产环境中的低延迟、高并发运行，最大化商业价值。',
                icon: <RobotOutlined />
              },
              {
                title: 'AI 应用支撑服务​',
                description:
                  '深度融合行业特性与业务场景，提供技术栈选型、功能模块设计、用户体验优化等定制化服务，通过自然语言交互、可视化呈现等方式，确保AI应用实现降本增效与体验升级。',
                icon: <BulbOutlined />
              },
              {
                title: '专项培训服务',
                description:
                  '系统化培训涵盖向量数据库、RAG架构、智能体开发等应用实践，以及傲飞算力平台操作、大模型理论等核心技能，助力团队快速掌握AI技术并实现落地应用。',
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
          {/* 服务优势 */}
          <div
            className={`mt-16 transition-all duration-1000 ease-out delay-100 ${
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
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
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
