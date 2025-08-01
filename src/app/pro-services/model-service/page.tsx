'use client';

import React from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

export default function ModelService() {
  useScrollToTop();

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [tuningRef, isTuningInView] = useInView({ threshold: 0.2 });
  const [deployRef, isDeployInView] = useInView({ threshold: 0.2 });
  const [evalRef, isEvalInView] = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero介绍模块 */}
      <section
        ref={heroRef}
        className={`px-60 pt-20 pb-16 transition-all duration-1000 ${
          isHeroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gray-800">智能</span>
            <span className="text-red-600 mx-2">模型服务</span>
            <span className="text-gray-800">解决方案</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            从模型微调到部署测评，提供全链路AI模型服务能力
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            支持多种硬件平台部署，专业的性能测评体系，助力AI模型快速落地应用
          </p>
        </div>

        {/* 核心优势展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              智能微调
            </h3>
            <p className="text-gray-600 text-center">
              基于LLaMA-Factory等先进框架，支持多种微调策略，快速适配业务场景
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              灵活部署
            </h3>
            <p className="text-gray-600 text-center">
              支持NVIDIA
              GPU、国产芯片等多种硬件平台，提供单机多卡、多机多卡等多样化部署方案
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              专业测评
            </h3>
            <p className="text-gray-600 text-center">
              全面的性能测试体系，包含压力测试、精度评估，确保模型质量
            </p>
          </div>
        </div>
      </section>

      {/* 模型微调模块 */}
      <section
        ref={tuningRef}
        className={`px-60 py-16 bg-gray-50 transition-all duration-1000 ${
          isTuningInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              模型微调服务
            </h2>
            <p className="text-xl text-gray-600">
              基于LLaMA-Factory框架的专业模型微调解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧视频区域 */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* 视频播放区域 */}
                <div className="aspect-video bg-black">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src="/微调视频.mov" type="video/quicktime" />
                    <source src="/微调视频.mov" type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
                {/* 控制栏 */}
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">
                    LLaMA-Factory 微调演示视频
                  </span>
                </div>
              </div>
            </div>

            {/* 右侧功能介绍 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      多策略微调
                    </h3>
                    <p className="text-gray-600">
                      支持LoRA、QLoRA、全参数微调等多种策略，灵活适配不同规模的模型训练需求
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      快速训练
                    </h3>
                    <p className="text-gray-600">
                      优化的训练流程和参数配置，大幅缩短模型微调时间，提升开发效率
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      可视化调试
                    </h3>
                    <p className="text-gray-600">
                      提供直观的训练过程监控和参数调试界面，实时跟踪模型训练状态
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模型部署模块 */}
      <section
        ref={deployRef}
        className={`px-60 py-16 transition-all duration-1000 ${
          isDeployInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              模型部署方案
            </h2>
            <p className="text-xl text-gray-600">
              支持NVIDIA GPU和国产芯片的多元化部署选择
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* NVIDIA GPU部署 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    NVIDIA GPU 部署
                  </h3>
                  <p className="text-gray-600">高性能计算平台解决方案</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      A100/A800/H20/H100/H800
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      高性能训推
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    大模型训练推理首选，支持7B-70B参数规模
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      A6000/A40/L20/L40S
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      专业可视化
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    专业工作站部署，支持中等规模模型推理
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      3090/4090/4090D/5090/5090D
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      消费级游戏
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    个人开发者和小型团队部署，性价比高
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-600 text-white rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">CUDA 加速优化</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <p className="text-green-100 text-sm mt-1">性能提升高达10倍</p>
              </div>
            </div>

            {/* 国产芯片部署 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    国产芯片部署
                  </h3>
                  <p className="text-gray-600">自主可控的硬件平台支持</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      昆仑芯 P800-PCLE/P800 OAM
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      昆仑芯
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    百度昆仑芯AI处理器，高性能训练推理
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      昇腾 910B2/3
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      华为
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    华为昇腾AI处理器，支持MindSpore框架
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">
                      天数/海光等其他国产芯片
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      其他
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    天数智芯、海光信息等国产AI加速卡，支持多种深度学习框架
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-600 text-white rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">信创合规支持</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-red-100 text-sm mt-1">满足政企安全要求</p>
              </div>
            </div>
          </div>

          {/* 部署方式选择 */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              部署方式选择
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">单机单卡</h5>
                <p className="text-gray-600 text-sm">
                  基础部署，适合小规模应用
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">单机多卡</h5>
                <p className="text-gray-600 text-sm">并行计算，提升处理能力</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">多机多卡</h5>
                <p className="text-gray-600 text-sm">分布式部署，大规模计算</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-orange-300 transition-colors">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">多实例集群</h5>
                <p className="text-gray-600 text-sm">高可用集群，负载均衡</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模型测评模块 */}
      <section
        ref={evalRef}
        className={`px-60 py-16 bg-gray-50 transition-all duration-1000 ${
          isEvalInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              专业模型测评
            </h2>
            <p className="text-xl text-gray-600">
              全方位的性能评估体系，确保模型质量与稳定性
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 压力测试 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">压力测试</h3>
                  <p className="text-gray-600">极限负载下的性能表现评估</p>
                </div>
              </div>

              {/* 测试指标 */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    并发处理能力
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-orange-600 font-semibold">85%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    响应时间稳定性
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-22 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-orange-600 font-semibold">92%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    资源使用效率
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-18 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-orange-600 font-semibold">78%</span>
                  </div>
                </div>
              </div>

              {/* 测试场景 */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  测试场景覆盖
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">高并发请求</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">长上下文处理</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">长时间运行</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">多模态输入</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 精度测试 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">精度测试</h3>
                  <p className="text-gray-600">多维度准确性与可靠性验证</p>
                </div>
              </div>

              {/* 精度指标 */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    语义理解准确率
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-22 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-600 font-semibold">94%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    生成内容质量
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-600 font-semibold">88%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    逻辑一致性
                  </span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-23 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-600 font-semibold">96%</span>
                  </div>
                </div>
              </div>

              {/* 评估维度 */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3">评估维度</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">基础语言能力</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">代码生成能力</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">数学与推理能力</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">工具使用能力</span>
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
