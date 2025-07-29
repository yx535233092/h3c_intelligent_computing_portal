'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AboutUs() {
  useScrollToTop();
  const router = useRouter();

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [introRef, isIntroInView] = useInView({ threshold: 0.2 });
  const [visionRef, isVisionInView] = useInView({ threshold: 0.2 });
  const [valuesRef, isValuesInView] = useInView({ threshold: 0.2 });
  const [timelineRef, isTimelineInView] = useInView({ threshold: 0.1 });
  const [teamRef, isTeamInView] = useInView({ threshold: 0.2 });

  // 核心价值观数据
  const values = [
    {
      title: '技术创新',
      description: '持续投入研发，紧跟前沿技术趋势，为客户提供最先进的解决方案',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '客户至上',
      description: '深入理解客户需求，提供定制化服务，确保客户价值最大化',
      icon: '💡',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '品质卓越',
      description: '严格的质量管理体系，确保每一个项目都达到行业领先水平',
      icon: '⭐',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '合作共赢',
      description: '与合作伙伴建立长期互信关系，共同推动行业数字化转型',
      icon: '🤝',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  // 团队成员数据
  const teamMembers = [
    {
      name: '张伟',
      position: '首席技术官',
      description: '15年技术研发经验，专注人工智能领域',
      avatar: '/team1.jpg'
    },
    {
      name: '李明',
      position: '产品总监',
      description: '10年产品管理经验，深耕企业数字化转型',
      avatar: '/team2.jpg'
    },
    {
      name: '王红',
      position: '解决方案专家',
      description: '12年行业解决方案经验，服务百余家企业',
      avatar: '/team3.jpg'
    },
    {
      name: '陈强',
      position: '研发总监',
      description: '算法专家，拥有多项AI技术专利',
      avatar: '/team4.jpg'
    }
  ];

  // 发展历程数据
  const timeline = [
    {
      year: '2015',
      title: '公司成立',
      description: 'H3C智算服务团队成立，专注企业数字化转型服务'
    },
    {
      year: '2018',
      title: '技术突破',
      description: '自主研发的文档识别技术达到行业领先水平，准确率突破99%'
    },
    {
      year: '2020',
      title: '业务扩展',
      description: '服务范围扩展至政府、教育、金融等多个行业，客户超过500家'
    },
    {
      year: '2022',
      title: '平台升级',
      description: '推出智能计算平台，实现从数据处理到模型部署的全流程服务'
    },
    {
      year: '2024',
      title: '创新发展',
      description: '持续技术创新，构建完整的智能计算生态系统'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 公司简介 */}
      <section
        ref={introRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          isIntroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                引领智能计算时代
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                新华三集团智算专业服务团队是国内领先的智能计算解决方案提供商。我们专注于人工智能、大数据、云计算等前沿技术的研发与应用，致力于为各行各业提供高效、智能、安全的数字化转型服务。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                凭借多年的技术积累和丰富的项目经验，我们已为超过1000家企业和机构提供了专业的智能计算服务，涵盖政府、金融、教育、医疗、制造等多个重要行业。
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">服务客户</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600">准确率</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">技术支持</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-semibold mb-4">核心业务</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    智能文档解析与处理
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    AI模型开发与部署
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    企业数字化转型咨询
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    智能系统集成与运维
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 愿景使命 */}
      <section
        ref={visionRef}
        className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
          isVisionInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">愿景与使命</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                我们的愿景
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                成为全球领先的智能计算服务提供商，推动人工智能技术在各行各业的深度应用，为构建智慧社会贡献力量。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                我们的使命
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过持续的技术创新和专业的服务，帮助客户实现数字化转型，提升生产效率，创造更大的商业价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section
        ref={valuesRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          isValuesInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              核心价值观
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这些价值观指引着我们的行为，塑造着我们的企业文化
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            准备开始您的数字化转型之旅？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            联系我们的专家团队，为您量身定制智能计算解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact-us')}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              联系我们
            </button>
            <button
              onClick={() => router.push('/excel-process')}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              在线体验
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
