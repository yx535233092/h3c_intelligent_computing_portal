'use client';

import style from './page.module.css';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

export default function ConsultService() {
  useScrollToTop();
  const [servicesRef, isServicesInView] = useInView({ threshold: 0.1 });
  const [detailedRef, isDetailedInView] = useInView({ threshold: 0.1 });

  return (
    <div className={style['consult-service-root']}>
      {/* 顶部标题区 */}
      <section className={style.hero}>
        <h1 className={style['hero-title']}>专业服务解决方案</h1>
        <p className={style['hero-subtitle']}>技术咨询与培训的一站式服务平台</p>
        <p className={style['hero-desc']}>
          为您的AI项目提供专业的技术咨询服务，从战略规划到技术实施，
          帮助团队快速提升技术能力
        </p>
      </section>

      {/* 服务概览区 */}
      <section
        ref={servicesRef as React.LegacyRef<HTMLElement>}
        className={`${style['services-overview']} ${
          isServicesInView ? style.animateIn : ''
        }`}
      >
        <div className={style['overview-title']}>
          <h2>核心服务</h2>
          <p>提供全面的技术咨询和培训服务，助力企业AI转型升级</p>
        </div>

        <div className={style['services-grid']}>
          {/* 技术咨询卡片 */}
          <div className={style['service-card']}>
            <div className={style['service-header']}>
              <div className={style['service-icon']}>💡</div>
              <div>
                <h3 className={style['service-title']}>技术咨询</h3>
                <p className={style['service-subtitle']}>
                  为您的AI项目提供专业的技术咨询服务，从战略规划到技术实施
                </p>
              </div>
            </div>

            <div className={style['service-features']}>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>AI战略规划</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>技术架构设计</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>解决方案咨询</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>项目评估</div>
              </div>
            </div>
          </div>

          {/* 技术培训卡片 */}
          <div className={style['service-card']}>
            <div className={style['service-header']}>
              <div className={style['service-icon']}>🎓</div>
              <div>
                <h3 className={style['service-title']}>技术培训</h3>
                <p className={style['service-subtitle']}>
                  提供系统化的AI技术培训，帮助团队快速提升技术能力
                </p>
              </div>
            </div>

            <div className={style['service-features']}>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>机器学习基础</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>深度学习实战</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>大模型应用</div>
              </div>
              <div className={style['feature-item']}>
                <div className={style['feature-checkmark']}>✓</div>
                <div className={style['feature-text']}>项目实战指导</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 详细服务区域 */}
      <section className={style['detailed-services']}>
        <div
          ref={detailedRef as React.LegacyRef<HTMLDivElement>}
          className={`${style['detailed-services-container']} ${
            isDetailedInView ? style.animateIn : ''
          }`}
        >
          <div className={style['section-title']}>
            <h2>详细服务内容</h2>
            <p>深入了解我们提供的专业服务，为您的AI项目保驾护航</p>
          </div>

          {/* 技术咨询详细介绍 */}
          <div className={style['detailed-service-card']}>
            <div className={style['detailed-service-header']}>
              <div className={style['detailed-service-icon']}>💡</div>
              <div className={style['detailed-service-info']}>
                <h3>技术咨询</h3>
                <p>为您的AI项目提供专业的技术咨询服务，从战略规划到技术实施</p>
              </div>
            </div>

            <div className={style['service-content']}>
              <p className={style['service-intro']}>
                我们拥有丰富的AI项目实施经验，能够为企业提供全方位的技术咨询服务。
                从AI战略制定到具体技术方案落地，帮助企业制定切实可行的AI转型路径，
                降低技术风险，提高项目成功率。
              </p>

              <div className={style['features-grid']}>
                <div className={style['feature-item-grid']}>
                  <h4>AI战略规划</h4>
                  <p>结合业务需求制定AI发展战略，明确技术路线图和实施计划</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>技术架构设计</h4>
                  <p>设计适合企业的AI技术架构，确保系统的可扩展性和稳定性</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>解决方案咨询</h4>
                  <p>针对具体业务场景提供定制化的AI解决方案和最佳实践</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>项目评估</h4>
                  <p>对AI项目进行全面评估，识别风险点并提供优化建议</p>
                </div>
              </div>
            </div>
          </div>

          {/* 技术培训详细介绍 */}
          <div className={style['detailed-service-card']}>
            <div className={style['detailed-service-header']}>
              <div className={style['detailed-service-icon']}>🎓</div>
              <div className={style['detailed-service-info']}>
                <h3>技术培训</h3>
                <p>提供系统化的AI技术培训，帮助团队快速提升技术能力</p>
              </div>
            </div>

            <div className={style['service-content']}>
              <p className={style['service-intro']}>
                我们提供从基础理论到实战应用的完整培训体系，采用理论与实践相结合的教学方式。
                通过系统化的课程设计和项目实战，帮助技术团队快速掌握AI核心技术，
                提升解决实际问题的能力。
              </p>

              <div className={style['features-grid']}>
                <div className={style['feature-item-grid']}>
                  <h4>机器学习基础</h4>
                  <p>涵盖机器学习核心算法、数据处理、特征工程等基础知识</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>深度学习实战</h4>
                  <p>深入学习神经网络、卷积网络、循环网络等深度学习技术</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>大模型应用</h4>
                  <p>掌握大语言模型的使用、微调和部署技术，解决实际业务问题</p>
                </div>
                <div className={style['feature-item-grid']}>
                  <h4>项目实战指导</h4>
                  <p>通过真实项目案例，指导学员完成端到端的AI项目开发</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
