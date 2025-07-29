'use client';

import { useRouter } from 'next/navigation';
import { ConfigProvider, Tabs } from 'antd';
import React from 'react';
import Image from 'next/image';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import CaseCarousel from '@/components/features/carousel/CaseCarousel';

import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '政府',
    children: (
      <div>
        <CaseCarousel
          title="某市公安情报分析以案搜案"
          description="基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的“语音语义建模”能力，该阶段为AI智能客服的较高级阶段，在初级能力基础上训练AI进行语义识别，达到“以案搜人”、“以案搜案”等效果。"
          picName="某市公安情报分析以案搜案.png"
        ></CaseCarousel>
      </div>
    )
  },
  {
    key: '2',
    label: '运营商',
    children: (
      <div>
        <CaseCarousel
          title="某运营商智能营销预案"
          description="通过大模型分析大量数据，可根据一线营销作战过程中千变万化的营销动态，实现生成精准作战策略，提高营销触达转化效果。"
          picName="某运营商智能营销预案.png"
        ></CaseCarousel>
      </div>
    )
  },
  {
    key: '3',
    label: '企业',
    children: (
      <div>
        <CaseCarousel
          title="某集团智能问答系统"
          description="企业智能问答系统，是基于通用大模型应用能力，面向企业集团及其分子公司构建的统一知识聚合、检索和问答系统，超大规模组织、超大规模用户、超大规模知识、超大规模数据安全防护"
          picName="某集团智能问答系统.png"
        ></CaseCarousel>
      </div>
    )
  },
  {
    key: '4',
    label: '教育',
    children: (
      <div>
        <CaseCarousel
          title="某高职校DEEPSEEK-AI+知识服务应用"
          description="AI+知识服务应用通过智能助手与数据分析技术，提升高校的管理效率、决策支持和知识资源的获取与管理。功能涵盖文档解读、知识查阅、员工知识管理等多个方面，帮助师生快速获取信息并提升工作协作效率。"
          picName="某高职校DEEPSEEK-AI+知识服务应用.png"
        ></CaseCarousel>
      </div>
    )
  }
];

const onTabsChange = (key: string) => {};

export default function IndustryCasesPage() {
  useScrollToTop();

  const router = useRouter();
  const handleContactUs = () => {
    router.push('/contact-us');
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              horizontalItemGutter: 60,
              itemColor: '#666',
              inkBarColor: '#d32d26',
              itemActiveColor: '#d32d26',
              itemHoverColor: '#d32d26',
              itemSelectedColor: '#d32d26',
              fontSize: 18
            }
          }
        }}
      >
        {/* 轮播图区域 */}
        <div>
          <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-5xl tracking-wide font-medium  mb-6">
              成功案例
            </h1>
            <p className="text-xl text-gray-500 text-center mb-18 leading-10 tracking-wider">
              协助众多企业完成了智能化数字化的转型及生产力工具的升级无论是快速扩张还是稳重求
              <br />
              进，H3C都能应企业所需。
            </p>

            <Tabs
              style={{
                width: '100%'
              }}
              defaultActiveKey="1"
              items={items}
              onChange={onTabsChange}
              indicator={{ align: 'center' }}
              centered
              animated={{ inkBar: true, tabPane: true }}
            />
          </div>
        </div>
      </ConfigProvider>

      {/* 专家咨询区域 */}
      <div
        className="relative py-24 overflow-hidden pt-40 pb-40"
        style={{
          background: `
          linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 1) 20%, rgba(241, 245, 249, 1) 50%, rgba(236, 241, 247, 1) 80%, rgba(230, 237, 243, 1) 100%),
          radial-gradient(ellipse 80% 50% at 20% 0%, rgba(214, 16, 66, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse 60% 70% at 80% 100%, rgba(103, 126, 234, 0.04) 0%, transparent 50%),
          radial-gradient(ellipse 90% 40% at 50% 100%, rgba(214, 16, 66, 0.03) 0%, transparent 50%)
        `,
          backgroundSize: '100% 100%, 800px 400px, 600px 500px, 1000px 300px',
          backgroundPosition: '0% 0%, 0% 0%, 100% 100%, 50% 100%'
        }}
      >
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[15%] left-[15%] w-6 h-8 opacity-60"
            style={{
              background:
                'linear-gradient(45deg, rgba(214, 16, 66, 0.12) 0%, rgba(232, 50, 90, 0.08) 50%, rgba(241, 245, 249, 0.6) 100%)',
              borderRadius: '50% 10% 50% 10%',
              animation: 'naturalFloat1 22s ease-in-out infinite'
            }}
          ></div>
          <div
            className="absolute top-[25%] right-[20%] w-8 h-5 opacity-60"
            style={{
              background:
                'linear-gradient(60deg, rgba(103, 126, 234, 0.12) 0%, rgba(134, 150, 247, 0.08) 50%, rgba(236, 241, 247, 0.6) 100%)',
              borderRadius: '60% 40% 60% 40%',
              animation: 'naturalFloat2 25s ease-in-out infinite',
              animationDelay: '-5s'
            }}
          ></div>
          <div
            className="absolute bottom-[30%] left-[25%] w-5 h-7 opacity-60"
            style={{
              background:
                'linear-gradient(30deg, rgba(214, 16, 66, 0.1) 0%, rgba(232, 50, 90, 0.06) 50%, rgba(230, 237, 243, 0.6) 100%)',
              borderRadius: '30% 70% 30% 70%',
              animation: 'naturalFloat3 28s ease-in-out infinite',
              animationDelay: '-12s'
            }}
          ></div>
          <div
            className="absolute bottom-[20%] right-[15%] w-9 h-6 opacity-60"
            style={{
              background:
                'linear-gradient(120deg, rgba(103, 126, 234, 0.1) 0%, rgba(134, 150, 247, 0.06) 50%, rgba(248, 250, 252, 0.6) 100%)',
              borderRadius: '70% 30% 70% 30%',
              animation: 'naturalFloat4 24s ease-in-out infinite',
              animationDelay: '-8s'
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* 聊天图标 */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/chat.png"
                alt="专家咨询"
                width={40}
                height={40}
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* 标题 */}
          <h2 className="text-3xl font-medium text-gray-800 mb-12">
            向专家咨询
          </h2>

          {/* 描述文字 */}
          <p className="text-lg text-gray-600 mb-6">为您提供专属定制 IT 服务</p>

          {/* 联系按钮 */}
          <button
            className="cursor-pointer bg-brand hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full text-base transition-colors duration-200"
            onClick={handleContactUs}
          >
            联系我们
          </button>
        </div>
      </div>
    </div>
  );
}
