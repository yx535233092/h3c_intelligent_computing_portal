'use client';

import { useState } from 'react';
import style from './page.module.css';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

export default function ModelService() {
  useScrollToTop();
  const [servicesRef, isServicesInView] = useInView({ threshold: 0.1 });

  return (
    <div className={style['model-service-root']}>
      {/* 顶部标题区 */}
      <section className={style.hero}>
        <h1 className={style['hero-title']}>模型服务解决方案</h1>
        <p className={style['hero-subtitle']}>专业的AI模型全生命周期管理平台</p>
        <p className={style['hero-desc']}>
          提供从模型微调、部署到测评的全流程服务，支持多种硬件环境与国产化部署方案。
        </p>
      </section>

      {/* 三栏优势区 */}
      <section className={style.features}>
        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>🎯</div>
          <h3>模型微调更精准</h3>
          <p>基于LLMFactory框架，支持多种微调策略，针对性优化模型性能。</p>
        </div>
        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>🚀</div>
          <h3>部署方案多样化</h3>
          <p>支持N卡、国产化芯片等多种硬件环境，灵活部署策略。</p>
        </div>
        <div className={style['feature-card']}>
          <div className={style['feature-icon']}>📊</div>
          <h3>测评体系专业化</h3>
          <p>全面的压力测试和精度评估，确保模型质量和性能指标。</p>
        </div>
      </section>

      {/* 主要服务模块区 */}
      <section
        ref={servicesRef}
        className={`${style['services-section']} ${
          isServicesInView ? style.animateIn : ''
        }`}
      >
        <div className={style['services-title']}>
          <h2>核心服务模块</h2>
          <p>全面覆盖AI模型开发、部署与运维的关键环节，提供企业级专业服务</p>
        </div>

        {/* 模型微调模块 */}
        <div className={style['service-card']}>
          <div className={style['service-header']}>
            <div className={style['service-icon']}>⚙️</div>
            <div>
              <h3 className={style['service-title']}>模型微调</h3>
              <p className={style['service-subtitle']}>
                基于LLMFactory框架的专业模型微调服务，支持多种微调策略和任务类型
              </p>
            </div>
          </div>
          <div className={style['service-content']}>
            <p className={style['service-intro']}>
              采用业界先进的LLMFactory微调框架，提供从数据预处理到模型训练的全流程支持。
              支持LoRA、QLoRA、全参数微调等多种策略，针对不同业务场景提供定制化解决方案。
            </p>

            <div className={style['features-grid']}>
              <div className={style['feature-item']}>
                <h4>领域特化微调</h4>
                <p>针对金融、医疗、法律等垂直领域进行专业知识注入和性能优化</p>
              </div>
              <div className={style['feature-item']}>
                <h4>多任务联合训练</h4>
                <p>支持多个相关任务同时训练，提升模型泛化能力和效率</p>
              </div>
              <div className={style['feature-item']}>
                <h4>参数高效微调</h4>
                <p>采用LoRA、AdaLoRA等技术，在保持性能的同时大幅减少计算资源</p>
              </div>
              <div className={style['feature-item']}>
                <h4>持续学习优化</h4>
                <p>支持增量学习和在线学习，模型可持续改进和适应新数据</p>
              </div>
            </div>

            {/* 视频演示区域 */}
            <div className={style['video-placeholder']}>
              <div className={style['video-placeholder-icon']}>🎥</div>
              <p className={style['video-placeholder-text']}>
                LLMFactory调试演示视频（后续提供）
              </p>
            </div>

            <div className={style['tech-specs']}>
              <h4>技术规格</h4>
              <div className={style['specs-grid']}>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>支持模型</div>
                  <div className={style['spec-value']}>
                    LLaMA、ChatGLM、Baichuan等
                  </div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>微调策略</div>
                  <div className={style['spec-value']}>LoRA、QLoRA、全参数</div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>数据格式</div>
                  <div className={style['spec-value']}>JSON、CSV、文本等</div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>训练时间</div>
                  <div className={style['spec-value']}>小时级至天级</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 模型部署模块 */}
        <div className={style['service-card']}>
          <div className={style['service-header']}>
            <div className={style['service-icon']}>🖥️</div>
            <div>
              <h3 className={style['service-title']}>模型部署</h3>
              <p className={style['service-subtitle']}>
                支持N卡和国产化芯片的多环境部署方案，确保模型高效稳定运行
              </p>
            </div>
          </div>
          <div className={style['service-content']}>
            <p className={style['service-intro']}>
              提供完整的模型部署解决方案，支持NVIDIA
              GPU、国产化芯片（海光、飞腾、鲲鹏等）、
              以及各种云原生部署环境。通过容器化、微服务架构确保部署的灵活性和可扩展性。
            </p>

            <div className={style['features-grid']}>
              <div className={style['feature-item']}>
                <h4>N卡GPU部署</h4>
                <p>
                  优化NVIDIA GPU利用率，支持多卡并行、动态调度和资源池化管理
                </p>
              </div>
              <div className={style['feature-item']}>
                <h4>国产化芯片适配</h4>
                <p>深度适配海光DCU、飞腾CPU、鲲鹏处理器等国产化硬件平台</p>
              </div>
              <div className={style['feature-item']}>
                <h4>容器化部署</h4>
                <p>基于Docker和Kubernetes的云原生部署，支持自动扩缩容</p>
              </div>
              <div className={style['feature-item']}>
                <h4>边缘计算支持</h4>
                <p>支持边缘设备部署，满足低延迟和数据安全要求</p>
              </div>
              <div className={style['feature-item']}>
                <h4>混合云部署</h4>
                <p>支持公有云、私有云、混合云多种部署模式，灵活组合</p>
              </div>
              <div className={style['feature-item']}>
                <h4>高可用架构</h4>
                <p>多副本部署、故障转移、负载均衡，确保服务稳定性</p>
              </div>
            </div>

            <div className={style['tech-specs']}>
              <h4>支持硬件平台</h4>
              <div className={style['specs-grid']}>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>NVIDIA GPU</div>
                  <div className={style['spec-value']}>
                    V100、A100、H100系列
                  </div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>海光DCU</div>
                  <div className={style['spec-value']}>DCU300、DCU500系列</div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>飞腾CPU</div>
                  <div className={style['spec-value']}>
                    FT-2000+、FT-D2000系列
                  </div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>华为鲲鹏</div>
                  <div className={style['spec-value']}>
                    鲲鹏920、鲲鹏930系列
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 模型测评模块 */}
        <div className={style['service-card']}>
          <div className={style['service-header']}>
            <div className={style['service-icon']}>📈</div>
            <div>
              <h3 className={style['service-title']}>模型测评</h3>
              <p className={style['service-subtitle']}>
                专业的模型性能评估体系，涵盖压力测试和精度验证的全方位分析
              </p>
            </div>
          </div>
          <div className={style['service-content']}>
            <p className={style['service-intro']}>
              建立完整的模型评估体系，通过多维度指标和专业测试工具，
              全面评估模型的性能表现、稳定性和业务适用性。确保模型在生产环境中的可靠运行。
            </p>

            <div className={style['features-grid']}>
              <div className={style['feature-item']}>
                <h4>压力测试</h4>
                <p>高并发请求测试、内存压力测试、长时间运行稳定性验证</p>
              </div>
              <div className={style['feature-item']}>
                <h4>精度评估</h4>
                <p>BLEU、ROUGE、准确率、召回率等多维度精度指标评估</p>
              </div>
              <div className={style['feature-item']}>
                <h4>性能基准测试</h4>
                <p>推理速度、吞吐量、延迟、资源利用率等性能指标测试</p>
              </div>
              <div className={style['feature-item']}>
                <h4>安全性测试</h4>
                <p>对抗样本测试、数据泄露风险评估、模型鲁棒性验证</p>
              </div>
              <div className={style['feature-item']}>
                <h4>业务场景测试</h4>
                <p>真实业务数据验证、边界条件测试、异常情况处理验证</p>
              </div>
              <div className={style['feature-item']}>
                <h4>可解释性评估</h4>
                <p>模型决策可解释性分析、特征重要性评估、偏见检测</p>
              </div>
            </div>

            <div className={style['tech-specs']}>
              <h4>测评指标体系</h4>
              <div className={style['specs-grid']}>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>精度指标</div>
                  <div className={style['spec-value']}>
                    准确率、F1-Score、BLEU
                  </div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>性能指标</div>
                  <div className={style['spec-value']}>QPS、延迟、吞吐量</div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>资源指标</div>
                  <div className={style['spec-value']}>GPU/CPU利用率、内存</div>
                </div>
                <div className={style['spec-item']}>
                  <div className={style['spec-label']}>稳定性指标</div>
                  <div className={style['spec-value']}>
                    可用性、故障恢复时间
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
