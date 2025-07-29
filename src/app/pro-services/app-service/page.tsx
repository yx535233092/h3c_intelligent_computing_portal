// ai生成
'use client';

import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Statistic, Button, Space, Avatar, Badge } from 'antd';
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
    id: 1,
    name: '快捷请假',
    description: '支持年假/事假/病假',
    url: 'http://192.168.10.24/chat/3PI9JFrycaTSDHGB',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'Calendar'
  },
  {
    id: 2,
    name: '会议室预定',
    description: '线上/线下',
    url: 'http://192.168.10.24/chat/sQCvVCOZgHW5nRdq',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'OfficeBuilding'
  },
  {
    id: 3,
    name: '访客申请',
    description: '外部访客登记',
    url: 'http://192.168.10.24/chat/BZBrTa6WhgcmRBTI',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'User'
  },
  {
    id: 4,
    name: '出差申请',
    description: '在线出差申请',
    url: 'http://192.168.10.24/chat/6thJYI8DDsf4uOUN',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'Suitcase'
  },
  {
    id: 5,
    name: '文章改写',
    description: '根据B文章的分格改写A文章',
    url: 'http://192.168.10.24/chat/C5v2olj9iejVk41O',
    sceneCategory: '智能文档',
    industryTag: '政府',
    icon: 'EditPen'
  },
  {
    id: 6,
    name: '金融贷款报告评估',
    description: '智能生成企业贷款资质评估报告',
    url: 'http://192.168.10.24/chat/2o05S4qNOVvVnQpu',
    sceneCategory: '智能文档',
    industryTag: '金融',
    icon: 'Money'
  },
  {
    id: 7,
    name: '医疗诊断分析助手',
    description: '根据病理、检查信息，进行诊断分析',
    url: 'http://192.168.10.24/workflow/TLZwJS8EwAKK4FL2',
    sceneCategory: '智能文档',
    industryTag: '医疗',
    icon: 'FirstAidKit'
  },
  {
    id: 8,
    name: '人口库智能问数',
    description: '人口数据、出生率、结婚率等多场景查询',
    url: 'http://192.168.10.24/chat/dBPWW81n19PvkZlQ',
    sceneCategory: '智能问数',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    id: 9,
    name: '图文问答助手',
    description: '支持图文双重检索',
    url: 'http://192.168.10.24/chat/EDWuQZouY06bnKXy',
    sceneCategory: '智能文档',
    industryTag: '政府',
    icon: 'PictureRounded'
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
  const [valueTechRef, isValueTechInView] = useInView({ threshold: 0.2 });
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
    { key: '智能问数', label: '智能问数', icon: <DatabaseOutlined /> },
    { key: '智能问答', label: '智能问答', icon: <MessageOutlined /> },
    { key: '智能文档', label: '智能文档', icon: <FileTextOutlined /> },
    { key: '智能客服', label: '智能客服', icon: <CustomerServiceOutlined /> },
    { key: '智能办公', label: '智能办公', icon: <BuildOutlined /> }
  ];

  const handleAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles['app-service-container']}>
      {/* 顶部能力介绍区域 - 智能应用服务宣传模块 */}
      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 px-60 pt-20 ${
          isHeroInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
        style={{ marginBottom: '40px' }}
      >
        {/* 主标题区域 */}
        <div className={styles['main-title']}>
          <h1>
            <span className={styles['title-normal']}>智能</span>
            <span className={styles['title-highlight']}>应用服务</span>
            <span className={styles['title-normal']}> - </span>
            <span className={styles['title-normal']}>数字化转型的强力引擎</span>
          </h1>
          <p>
            汇聚9大精品应用，覆盖智能办公、智能文档、智能问数三大核心场景，为政府、金融、医疗等行业提供全方位的智能化解决方案
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
            {/* 智能办公场景 */}
            <Col xs={24} md={8}>
              <div className={styles['capability-card']}>
                <div className={styles['capability-header']}>
                  <div className={styles['capability-icon']}>
                    <BuildOutlined />
                  </div>
                  <div>
                    <h3 className={styles['capability-title']}>智能办公场景</h3>
                    <p className={styles['capability-subtitle']}>
                      提升行政效率，优化内部管理
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <ul className={styles['capability-list']}>
                    <li>快捷请假系统：支持年假、事假、病假等多种类型</li>
                    <li>会议室预定：线上线下无缝衔接，提升资源利用率</li>
                    <li>访客申请：外部访客智能登记，加强安全管理</li>
                    <li>出差申请：在线化出差申请流程，提高审批效率</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 智能文档场景 */}
            <Col xs={24} md={8}>
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
                    <li>文章改写助手：基于B文章风格智能改写A文章</li>
                    <li>金融贷款报告评估：智能生成企业贷款资质评估报告</li>
                    <li>
                      医疗诊断分析助手：根据病理、检查信息进行智能诊断分析
                    </li>
                    <li>图文问答助手：支持图文双重检索，快速获取精准信息</li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* 智能问数场景 */}
            <Col xs={24} md={8}>
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
                    <li>经济数据智能分析：GDP、CPI、就业率等经济指标分析</li>
                    <li>地理信息数据查询：行政区划、地理坐标、空间分析等</li>
                    <li>行业数据洞察：各行业发展趋势、竞争格局分析</li>
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
        className={`transition-all duration-1000 px-60 ${
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
                onClick={() => setActiveCategory(category.key)}
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
        className={`transition-all duration-1000 px-60 mt-10 mb-20 ${
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
