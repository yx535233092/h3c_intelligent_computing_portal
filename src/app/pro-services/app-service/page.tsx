// ai生成
'use client';

import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Button, Space, Avatar, Badge } from 'antd';
import {
  AppstoreOutlined,
  FileTextOutlined,
  DatabaseOutlined,
  MessageOutlined,
  CustomerServiceOutlined,
  CalendarOutlined,
  BuildOutlined,
  UserOutlined,
  CarOutlined,
  EditOutlined,
  DollarOutlined,
  MedicineBoxOutlined,
  BarChartOutlined,
  PictureOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';
import styles from './page.module.css';

// 应用数据
const applications = [
  {
    id: 16,
    name: '多模态文档知识库',
    description:
      '支持多模态文档、表格、图片、视频等多模态数据的智能解析、智能问答',
    url: '/hj-platform',
    sceneCategory: '智能问答',
    industryTag: '企业',
    icon: 'DataAnalysis'
  },

  {
    id: 10,
    name: '消防法律助手',
    description: '支持消防法律知识智能问答',
    url: '/app-detail?type=hj&token=6696c7f841ee233c7d7a0f19aed376991af7749b4416d234a60ef3223f7457db4460250cffc975277a36b288b8e224383cd89ba5fed842597442c3c03b093f297751234fb5e1f7a7eea3e7c494a7d1b17a7c135a5878b11ccf35657c3f92ee9862f9cda15ed731d170f873f2f3e32886',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'PictureRounded'
  },
  {
    id: 11,
    name: '康养知识问答',
    description: '基于专业书籍进行精准、全面的问答。',
    url: '/app-detail?type=hj&token=a9c90e42c9b2a8be403ef1343e0425eec02c99ddab76bc9d8e2ab5bf1c7706ff79b8a5f3e8ca732502c1e843e3b4c5ff184c393697c8f120a07fc5a0c006381fe75431d32ff63fa02766f96f80d52303816150d86c413af08a500a169e806f2bb05dbcf178b27bfb3da5ca99eb3710e5',
    sceneCategory: '智能问答',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  {
    id: 15,
    name: '康养行业财报分析',
    description: '康养行业相关财报智能分析',
    url: '/app-detail?type=hj&token=a9c90e42c9b2a8be403ef1343e0425eeb368aa0a6a428d8ac4d705373f870d521790f3e9f652c1c454fe4254f91b6fc2c0cfeb9977f34607c7c8188f6caaced34f7696a293ea808e52c793e5c6add8a2ae98117adb883c68b9f2fc97b43dd2dd401611983c81b33c1c5a6cbe85bcff85',
    sceneCategory: '智能办公',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  {
    id: 12,
    name: '事假单小助手',
    description: '支持事假单的智能填写。',
    url: '/app-detail?type=hj&token=642502acbbbbe5d3d7741082c7c0194936f6c3374eb83f605860fdbcd415b31e4d32a9334098ec1c6d26b9d055919c70e97eaed66fa5514886d2949e51e8a824bd7c0bf23c12e8a31bc896724e25b584cd11d30287ec80cabf95ee64ca2f8da9b60fbcad32c634476b08a48e3c7918a2',
    sceneCategory: '智能办公',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  // {
  //   id: 13,
  //   name: 'AI写作',
  //   description: 'ai写作',
  //   url: '/app-detail?type=hj&token=b642b7c017ae51168971be4c9c03074d4cfe550d4e059c0d786b0bbaa056940926c82ce12e0ebb25c2d4b0ebc120999a2ad98c27056c796334259cd6b30cb30616939160e514eadbb6bd890843dc70322812acc6fc28f74c458a83113f857625971f8a1a587b17dfe10c6a6cb8e01788',
  //   sceneCategory: '智能文档',
  //   industryTag: '企业',
  //   icon: 'PictureRounded'
  // },
  {
    id: 14,
    name: '通信知识问答',
    description: '交通行业相关通信知识问答',
    url: '/app-detail?type=hj&token=bf78d5e2b1e7634747d8abb84d7a536ab942dc8f9a03237933fa4b046769b4b2249d4d2cd06329560e1b454f363e81183a0bb6782091509a01b6075bcec8dcd8638fe1f60cc2f248cc322bc1b4d8cac5a13667e893aec0d4adeab35eab04b881e9140e536aebfe55795b6e7815c52761',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    id: 8,
    name: '人口库智能问数',
    description: '人口数据、出生率、结婚率等多场景查询',
    url: '/app-detail?type=df&chat=true&dfToken=dBPWW81n19PvkZlQ',
    sceneCategory: '智能问数',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    id: 9,
    name: '产品图文问答助手',
    description: '支持图文双重检索',
    url: '/app-detail?type=df&chat=true&dfToken=EDWuQZouY06bnKXy',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'PictureRounded'
  },
  {
    id: 2,
    name: '会议室预定',
    description: '线上/线下预定会议室',
    url: '/app-detail?type=df&chat=true&dfToken=sQCvVCOZgHW5nRdq',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'OfficeBuilding'
  },
  {
    id: 3,
    name: '访客申请',
    description: '外部访客登记',
    url: '/app-detail?type=df&chat=true&dfToken=BZBrTa6WhgcmRBTI',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'User'
  },
  {
    id: 4,
    name: '出差申请',
    description: '在线出差申请',
    url: '/app-detail?type=df&chat=true&dfToken=6thJYI8DDsf4uOUN',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'Suitcase'
  },
  {
    id: 5,
    name: '文章改写',
    description: '根据B文章的分格改写A文章',
    url: '/app-detail?type=df&chat=true&dfToken=C5v2olj9iejVk41O',
    sceneCategory: '智能文档',
    industryTag: '政府',
    icon: 'EditPen'
  },
  {
    id: 6,
    name: '金融贷款报告评估',
    description: '智能生成企业贷款资质评估报告',
    url: '/app-detail?type=df&chat=true&dfToken=2o05S4qNOVvVnQpu',
    sceneCategory: '智能文档',
    industryTag: '金融',
    icon: 'Money'
  },
  {
    id: 7,
    name: '医疗诊断分析助手',
    description: '根据病理、检查信息，进行诊断分析',
    url: '/app-detail?type=df&chat=false&dfToken=TLZwJS8EwAKK4FL2',
    sceneCategory: '智能文档',
    industryTag: '医疗',
    icon: 'FirstAidKit'
  }
];

// 图标映射
const iconMap: { [key: string]: React.ReactNode } = {
  Calendar: <CalendarOutlined />,
  OfficeBuilding: <BuildOutlined />,
  User: <UserOutlined />,
  Suitcase: <CarOutlined />,
  EditPen: <EditOutlined />,
  Money: <DollarOutlined />,
  FirstAidKit: <MedicineBoxOutlined />,
  DataAnalysis: <BarChartOutlined />,
  PictureRounded: <PictureOutlined />
};

export default function AppService() {
  useScrollToTop();
  const [activeCategory, setActiveCategory] = useState('全部');

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [capabilityRef, isCapabilityInView] = useInView({ threshold: 0.2 });
  const [categoryRef, isCategoryInView] = useInView({ threshold: 0.2 });
  const [appsRef, isAppsInView] = useInView({ threshold: 0.2 });

  // 筛选应用
  const filteredApps = useMemo(() => {
    if (activeCategory === '全部') {
      return applications;
    }
    return applications.filter((app) => app.sceneCategory === activeCategory);
  }, [activeCategory]);

  // 分类选项
  const categories = [
    { key: '全部', label: '全部', icon: <AppstoreOutlined /> },
    { key: '智能问答', label: '智能问答', icon: <MessageOutlined /> },
    { key: '智能文档', label: '智能文档', icon: <FileTextOutlined /> },
    { key: '智能问数', label: '智能问数', icon: <DatabaseOutlined /> },
    { key: '智能办公', label: '智能办公', icon: <BuildOutlined /> },
    { key: '智能客服', label: '智能客服', icon: <CustomerServiceOutlined /> }
  ];

  const handleAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles['app-service-container']}>
      {/* 顶部能力介绍区域 - 智能应用服务宣传模块 */}
      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 px-30 pt-20 ${
          isHeroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
        style={{ marginBottom: '40px' }}
      >
        {/* 主标题区域 */}
        <div className={styles['main-title']}>
          <h1>
            <span className={styles['title-normal']}>大模型</span>
            <span className={styles['title-highlight']}>应用定制</span>
            <span className={styles['title-normal']}> - </span>
            <span className={styles['title-normal']}>AI转型的强力引擎</span>
          </h1>
          <p>
            汇聚智能问答、智能文档、智能问数、智能办公四大核心场景，为政府、运营商、教育、企业等行业提供全方位的智能化解决方案
          </p>
        </div>

        {/* 核心能力展示 */}
        <div
          ref={capabilityRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 mt-30 mb-30  ${
            isCapabilityInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <Row gutter={[24, 24]}>
            {/* 智能问答场景 */}
            <Col xs={24} md={6}>
              <div className={styles['capability-card']}>
                <div className={styles['capability-header']}>
                  <div className={styles['capability-icon']}>
                    <MessageOutlined />
                  </div>
                  <div>
                    <h3 className={styles['capability-title']}>智能问答场景</h3>
                    <p className={styles['capability-subtitle']}>
                      知识查询智能化，问答交互人性化
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <ul className={styles['capability-list']}>
                    <li>图文问答助手：支持图文双重检索，多模态智能问答</li>
                    <li>消防法律助手：消防法律法规专业知识智能问答</li>
                    <li>康养知识问答：基于专业书籍的精准全面问答服务</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 智能文档场景 */}
            <Col xs={24} md={6}>
              <div className={styles['capability-card']}>
                <div className={styles['capability-header']}>
                  <div className={styles['capability-icon']}>
                    <FileTextOutlined />
                  </div>
                  <div>
                    <h3 className={styles['capability-title']}>智能文档场景</h3>
                    <p className={styles['capability-subtitle']}>
                      文档处理智能化，内容创作高效化
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <ul className={styles['capability-list']}>
                    <li>合同风险审核：提升合同与招投标的审核效率和准确性</li>
                    <li>
                      医疗诊断分析助手：根据病理、检查信息进行智能诊断分析
                    </li>
                    <li>智能标书：采购场景中，智能生成和优化标书</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 智能问数场景 */}
            <Col xs={24} md={6}>
              <div className={styles['capability-card']}>
                <div className={styles['capability-header']}>
                  <div className={styles['capability-icon']}>
                    <DatabaseOutlined />
                  </div>
                  <div>
                    <h3 className={styles['capability-title']}>智能问数场景</h3>
                    <p className={styles['capability-subtitle']}>
                      数据洞察智能化，决策支持精准化
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <ul className={styles['capability-list']}>
                    <li>智能问数：人口数据、出生率、结婚率等多场景查询</li>
                    <li>电信运营商智能报表：智能看数分析，高效获取业务洞察</li>
                    <li>ChatBI智能问数：自然语言交互式的数据智能分析</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 智能办公场景 */}
            <Col xs={24} md={6}>
              <div className={styles['capability-card']}>
                <div className={styles['capability-header']}>
                  <div className={styles['capability-icon']}>
                    <BuildOutlined />
                  </div>
                  <div>
                    <h3 className={styles['capability-title']}>智能办公场景</h3>
                    <p className={styles['capability-subtitle']}>
                      办公流程智能化，管理效率数字化
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <ul className={styles['capability-list']}>
                    <li>事假单助手：支持事假单的智能填写</li>
                    <li>
                      智慧政务大厅：政务服务流程智能化，提升办事效率和体验
                    </li>
                    <li>访客申请：外部访客智能登记，加强安全管理</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* 中部分类筛选区域 */}
      <div
        ref={categoryRef as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 px-30 ${
          isCategoryInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <Card className={styles['category-card']}>
          <div className={styles['category-header']}>
            <h3 className={styles['category-title']}>应用分类</h3>
            <p className={styles['category-subtitle']}>选择分类查看相关应用</p>
          </div>
          <Space wrap size={[12, 12]}>
            {categories.map((category) => (
              <Button
                key={category.key}
                type={activeCategory === category.key ? 'primary' : 'default'}
                icon={category.icon}
                onClick={(e) => {
                  setActiveCategory(category.key);
                  // 立即失焦，避免需要点击外面才能变红
                  e.currentTarget.blur();
                  // 确保焦点完全移除
                  setTimeout(() => {
                    e.currentTarget.blur();
                  }, 0);
                }}
                size="large"
                className={styles['category-button']}
                style={
                  activeCategory === category.key
                    ? {
                        backgroundColor: '#d32d26',
                        borderColor: '#d32d26',
                        color: 'white'
                      }
                    : undefined
                }
              >
                {category.label}
              </Button>
            ))}
          </Space>
        </Card>
      </div>

      {/* 底部应用展示区域 */}
      <div
        ref={appsRef as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 px-30 mt-10 mb-20 ${
          isAppsInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <Card
          title={
            <div className={styles['apps-header']}>
              <span className={styles['apps-title']}>{activeCategory}应用</span>
              <Badge
                count={filteredApps.length}
                className={styles['apps-badge']}
              />
            </div>
          }
          className={styles['apps-card']}
        >
          <Row gutter={[20, 20]}>
            {filteredApps.map((app) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={app.id}>
                <Card
                  hoverable
                  onClick={() => handleAppClick(app.url)}
                  className={styles['app-card']}
                >
                  {/* 主题色竖条 */}
                  <div className={styles['app-theme-bar']} />

                  {/* 应用图标和标题区域 */}
                  <div className={styles['app-header']}>
                    <div className={styles['app-icon-wrapper']}>
                      <Avatar
                        icon={iconMap[app.icon]}
                        size={48}
                        className={styles['app-avatar']}
                      />
                    </div>
                    <div className={styles['app-info']}>
                      <h4 className={styles['app-title']}>{app.name}</h4>
                      <div className={styles['app-meta']}>
                        <span className={styles['app-tag']}>
                          {app.industryTag}
                        </span>
                        <span className={styles['app-category']}>
                          {app.sceneCategory}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 应用描述 */}
                  <div className={styles['app-description-wrapper']}>
                    <p className={styles['app-description']}>
                      {app.description}
                    </p>
                  </div>

                  {/* 底部操作区域 */}
                  <div className={styles['app-footer']}>
                    <div className={styles['app-action']}>
                      <span className={styles['app-action-text']}>
                        立即使用
                      </span>
                      <RightOutlined className={styles['arrow-icon']} />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          {filteredApps.length === 0 && (
            <div className={styles['empty-state']}>
              <AppstoreOutlined />
              <p>暂无{activeCategory}类型的应用</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
