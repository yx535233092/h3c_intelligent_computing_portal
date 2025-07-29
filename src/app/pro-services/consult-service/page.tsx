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
  SyncOutlined
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
                title: 'AI战略规划',
                description:
                  '制定符合企业发展的AI战略路线图，确保技术投入与业务目标完美契合',
                icon: <AimOutlined />
              },
              {
                title: '技术架构设计',
                description:
                  '设计可扩展、高可用的AI技术架构，为系统稳定运行提供坚实基础',
                icon: <BuildOutlined />
              },
              {
                title: '解决方案咨询',
                description:
                  '针对具体业务场景，提供定制化的AI解决方案咨询与优化建议',
                icon: <BulbOutlined />
              },
              {
                title: '项目评估',
                description:
                  '全面评估AI项目的可行性、风险点和预期收益，确保投资回报最大化',
                icon: <BarChartOutlined />
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

      {/* 技术培训模块 */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技术培训</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              提供系统化的AI技术培训，帮助团队快速提升技术能力，打造专业的AI人才队伍
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: '机器学习基础',
                description:
                  '从零开始学习机器学习核心概念，掌握算法原理和实际应用技巧',
                icon: <RobotOutlined />,
                level: '基础入门'
              },
              {
                title: '深度学习实战',
                description:
                  '深入理解神经网络架构，通过实际项目掌握深度学习开发技能',
                icon: <BranchesOutlined />,
                level: '进阶提升'
              },
              {
                title: '大模型应用',
                description:
                  '学习大语言模型的应用开发，掌握ChatGPT等先进AI技术的集成使用',
                icon: <RocketOutlined />,
                level: '高级应用'
              },
              {
                title: '项目实战指导',
                description:
                  '结合真实项目场景，提供一对一指导，确保理论知识与实践能力并重',
                icon: <UserOutlined />,
                level: '实战演练'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 relative overflow-hidden ${
                  trainingInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.level}
                  </span>
                </div>
                <div className="text-4xl mb-4 text-purple-600">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 培训特色 */}
          <div
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
          </div>
        </div>
      </section>
    </div>
  );
}
