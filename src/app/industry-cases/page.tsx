'use client';

import { useRouter } from 'next/navigation';
import { ConfigProvider, Tabs } from 'antd';
import React from 'react';
import Image from 'next/image';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import CaseGrid from '@/components/features/cases/CaseGrid';

// 自定义样式 - 减少tab切换闪动
const customStyles = `
  .custom-tabs .ant-tabs-tab {
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 0.2s ease;
    margin: 0 8px;
    will-change: transform, background-color;
    backface-visibility: hidden;
  }
  
  .custom-tabs .ant-tabs-tab:hover {
    background-color: transparent;
    transform: none;
  }
  
  .custom-tabs .ant-tabs-tab.ant-tabs-tab-active {
    background-color: transparent;
    box-shadow: none;
  }
  
  .custom-tabs .ant-tabs-content-holder {
    transition: opacity 0.2s ease;
  }
  
  .custom-tabs .ant-tabs-tabpane {
    transition: opacity 0.2s ease;
  }
  
  /* 减少动画在低性能设备上的闪动 */
  @media (prefers-reduced-motion: reduce) {
    .custom-tabs .ant-tabs-tab {
      transition: none;
    }
    
    .custom-tabs .ant-tabs-content-holder {
      transition: none;
    }
    
    .custom-tabs .ant-tabs-tabpane {
      transition: none;
    }
  }
`;

const tabItems = [
  {
    key: '1',
    label: '政府',
    children: (
      <CaseGrid
        items={[
          {
            title: '江苏大数据管理中心智能问数',
            description:
              '借助大模型能力构建智能问数智能体，实现自然语言到SQL语句的转化，快速查询数据并生成图表，为江苏省数据管理提供高效的智能化数据分析服务。',
            picName: '江苏省大数据智能问数.png',
            routeAdress: '/industry-cases/goverment-4',
          },
          {
            title: '某市公安情报分析以案搜案',
            description:
              '基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的"语音语义建模"能力，该阶段为AI智能客服的较高级阶段，在初级能力基础上训练AI进行语义识别，达到"以案搜人"、"以案搜案"等效果。',
            picName: '某市公安情报分析以案搜案.png',
            routeAdress: '/industry-cases/goverment',
          },
          {
            title: '某市营商政策智能双向匹配',
            description:
              '针对惠企政策知晓难、理解难、办理难、费人力、获得感不强问题，以企业需求为导向，建立统一的政策服务入口，搭建政企沟通桥梁，实现惠企政策集中汇聚、精准查询、主动推送、高效兑现。面向惠企服务场景，提供惠企政策大模型，以生成式理解与问答加强咨询过程中的意图识别和政务术语理解，通过人性化AI交互引导，完成政策和企业的智能匹配及推介，让政策找不到、不理解、办不好成为历史，高效改善营商环境。',
            picName: '某市营商政策智能双向匹配.png',
            routeAdress: '/industry-cases/goverment-2',
          },
          {
            title: '某省应急局处置方案生成',
            description:
              '实现专项预案数字化，把专项预案处置流程、各岗位职责通过文档解析的方式实现应急预案的结构化生成，辅助应急期间开展应急处置工作。提升应急响应效率，确保突发事件处置的专业性和时效性。',
            picName: '某省应急局处置方案生成.png',
            routeAdress: '/industry-cases/goverment-3',
          },
        ]}
      />
    ),
  },
  {
    key: '2',
    label: '运营商',
    children: (
      <CaseGrid
        items={[
          // {
          //   title: '某省联通智能受理',
          //   description:
          //     '覆盖业务咨询、信息查询、业务受理热点应用场景，实现用户利用自然语言自助进行业务咨询、信息查询、业务办理，降低系统上手难度，改善人机交互友好性，提高省份客户系统满意度，助力省份客户降本增效。',
          //   picName: '运营商1.png',
          //   routeAdress: '/industry-cases/operator',
          // },
          {
            title: '某电信运营商智能问数',
            description:
              '通过多模态的自然语言对话式交互、自动数据分析和展现，实现零门槛的智能用数。',
            picName: '电信运营商.png',
            routeAdress: '/industry-cases/dianxin-operator',
          },
          {
            title: '云南移动方案助手',
            description:
              '通过方案智能体的打标、推荐和编制，辅助一线进行优质方案的快速检索，促进方案编写效率提升40%，编写质量提升30%。',
            picName: '云南移动方案助手.png',
            routeAdress: '/industry-cases/operator-2',
          },
          {
            title: '山东移动标书助手',
            description:
              '针对编写招标文件过程中缺少文档编写辅助系统，完全依赖人工编写各类招投标文档，标书支撑面临编制工作量大、审核耗时长、依赖个人经验、存量数据挖掘不足等痛点。基于历史积累的投标文件、相关政策法规、人员资料信息等材料构建标书知识库，并融合大小模型能力，打造智慧标书助手，加快标书制作审核效率，提升标书人员专业水平。',
            picName: '山东移动标书助手.png',
            routeAdress: '/industry-cases/operator-1',
          },
        ]}
      />
    ),
  },
  {
    key: '3',
    label: '企业',
    children: (
      <CaseGrid
        items={[
          {
            title: '某集团智能问答系统',
            description:
              '企业智能问答系统，是基于通用大模型应用能力，面向企业集团及其分子公司构建的统一知识聚合、检索和问答系统，超大规模组织、超大规模用户、超大规模知识、超大规模数据安全防护',
            picName: '某集团智能问答系统.png',
            routeAdress: '/industry-cases/enterprise',
          },
          // {
          //   title: '企业智能合同分析',
          //   description:
          //     '基于自然语言处理和机器学习技术，为企业提供智能化的合同审查、风险识别和条款分析服务，大幅提升合同管理效率，降低法律风险。',
          //   picName: '企业智能合同分析.png',
          //   routeAdress: '/industry-cases/enterprise',
          // },
          // {
          //   title: '某石油企业数智人应用',
          //   description:
          //     '为石油企业打造专业的数字化智能助手，提供行业知识问答、业务流程指导和决策支持，提升企业运营效率和员工工作体验。',
          //   picName: '某石油企业数智人应用.png',
          //   routeAdress: '/industry-cases/enterprise',
          // },
        ]}
      />
    ),
  },
  {
    key: '4',
    label: '教育',
    children: (
      <CaseGrid
        items={[
          {
            title: '某高职校DEEPSEEK-AI+知识服务应用',
            description:
              '这是一个能融合数据、能智能服务、能任务闭环、还能安全交付的高校知识平台。通过统一门户、知识治理平台、智能体支撑底座，全面服务教研、申报、评估、管理等核心业务场景，并具备支撑智能体构建的持续演进能力。',
            picName: '教育1.png',
            routeAdress: '/industry-cases/education',
          },
        ]}
      />
    ),
  },
];

export default function IndustryCasesPage() {
  useScrollToTop();

  const router = useRouter();
  const handleContactUs = () => {
    router.push('/contact-us');
  };

  return (
    <div>
      {/* 应用自定义样式 */}
      <style jsx global>
        {customStyles}
      </style>

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
              fontSize: 18,
            },
          },
        }}
      >
        {/* 案例展示区域 */}
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
                width: '100%',
              }}
              defaultActiveKey="1"
              items={tabItems}
              indicator={{ align: 'center' }}
              centered
              animated={{ inkBar: true, tabPane: false }}
              destroyOnHidden={false}
              className="custom-tabs"
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
          backgroundPosition: '0% 0%, 0% 0%, 100% 100%, 50% 100%',
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
              animation: 'naturalFloat1 22s ease-in-out infinite',
            }}
          ></div>
          <div
            className="absolute top-[25%] right-[20%] w-8 h-5 opacity-60"
            style={{
              background:
                'linear-gradient(60deg, rgba(103, 126, 234, 0.12) 0%, rgba(134, 150, 247, 0.08) 50%, rgba(236, 241, 247, 0.6) 100%)',
              borderRadius: '60% 40% 60% 40%',
              animation: 'naturalFloat2 25s ease-in-out infinite',
              animationDelay: '-5s',
            }}
          ></div>
          <div
            className="absolute bottom-[30%] left-[25%] w-5 h-7 opacity-60"
            style={{
              background:
                'linear-gradient(30deg, rgba(214, 16, 66, 0.1) 0%, rgba(232, 50, 90, 0.06) 50%, rgba(230, 237, 243, 0.6) 100%)',
              borderRadius: '30% 70% 30% 70%',
              animation: 'naturalFloat3 28s ease-in-out infinite',
              animationDelay: '-12s',
            }}
          ></div>
          <div
            className="absolute bottom-[20%] right-[15%] w-9 h-6 opacity-60"
            style={{
              background:
                'linear-gradient(120deg, rgba(103, 126, 234, 0.1) 0%, rgba(134, 150, 247, 0.06) 50%, rgba(248, 250, 252, 0.6) 100%)',
              borderRadius: '70% 30% 70% 30%',
              animation: 'naturalFloat4 24s ease-in-out infinite',
              animationDelay: '-8s',
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* 装饰性元素 */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand/5 rounded-full blur-3xl"></div>
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
