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

  // 统计数据
  const statistics = useMemo(() => {
    const categoryCount = applications.reduce((acc, app) => {
      acc[app.sceneCategory] = (acc[app.sceneCategory] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const industryCount = applications.reduce((acc, app) => {
      acc[app.industryTag] = (acc[app.industryTag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: applications.length,
      categories: categoryCount,
      industries: industryCount
    };
  }, []);

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
    <div
      style={{
        background: '#fafafa',
        minHeight: '100vh',
        padding: '40px 24px'
      }}
    >
      {/* 顶部统计区域 - 水平卡片网格，行业分布集成在下方 */}
      <div style={{ marginBottom: '40px' }}>
        <Row gutter={[16, 16]}>
          {/* 应用总数 */}
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#fff',
                    border: '2px solid #d32d26',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}
                >
                  <AppstoreOutlined
                    style={{ color: '#d32d26', fontSize: '22px' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginBottom: '4px'
                    }}
                  >
                    应用总数
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#262626'
                    }}
                  >
                    {statistics.total}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* 智能办公 */}
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#fff',
                    border: '2px solid #d32d26',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}
                >
                  <BuildOutlined
                    style={{ color: '#d32d26', fontSize: '22px' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginBottom: '4px'
                    }}
                  >
                    智能办公
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#262626'
                    }}
                  >
                    {statistics.categories['智能办公'] || 0}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* 智能文档 */}
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#fff',
                    border: '2px solid #d32d26',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}
                >
                  <FileTextOutlined
                    style={{ color: '#d32d26', fontSize: '22px' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginBottom: '4px'
                    }}
                  >
                    智能文档
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#262626'
                    }}
                  >
                    {statistics.categories['智能文档'] || 0}
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* 智能问数 */}
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#fff',
                    border: '2px solid #d32d26',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}
                >
                  <DatabaseOutlined
                    style={{ color: '#d32d26', fontSize: '22px' }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#8c8c8c',
                      marginBottom: '4px'
                    }}
                  >
                    智能问数
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#262626'
                    }}
                  >
                    {statistics.categories['智能问数'] || 0}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* 中部分类筛选区域 */}
      <Card
        style={{
          marginBottom: '40px',
          borderRadius: '12px',
          border: '1px solid #f0f0f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          background: 'white'
        }}
        styles={{ body: { padding: '32px' } }}
      >
        <div style={{ marginBottom: '24px' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#262626'
            }}
          >
            应用分类
          </h3>
          <p
            style={{
              margin: '4px 0 0 0',
              color: '#8c8c8c',
              fontSize: '14px'
            }}
          >
            选择分类查看相关应用
          </p>
        </div>
        <Space wrap size={[12, 12]}>
          {categories.map((category) => (
            <Button
              key={category.key}
              type={activeCategory === category.key ? 'primary' : 'default'}
              icon={category.icon}
              onClick={() => setActiveCategory(category.key)}
              size="large"
              style={{
                borderRadius: '8px',
                height: '40px',
                padding: '0 16px',
                fontWeight: '500',
                border:
                  activeCategory === category.key
                    ? 'none'
                    : '1px solid #d9d9d9',
                background:
                  activeCategory === category.key ? '#d32d26' : 'white',
                color: activeCategory === category.key ? 'white' : '#595959',
                boxShadow: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {category.label}
            </Button>
          ))}
        </Space>
      </Card>

      {/* 底部应用展示区域 */}
      <Card
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#262626'
              }}
            >
              {activeCategory}应用
            </span>
            <Badge
              count={filteredApps.length}
              style={{
                backgroundColor: '#d32d26',
                fontSize: '12px',
                fontWeight: '500',
                color: 'white'
              }}
            />
          </div>
        }
        style={{
          borderRadius: '12px',
          border: '1px solid #f0f0f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          background: 'white'
        }}
        styles={{ body: { padding: '32px' } }}
      >
        <Row gutter={[24, 24]}>
          {filteredApps.map((app) => (
            <Col xs={24} sm={12} md={8} lg={6} key={app.id}>
              <Card
                hoverable
                onClick={() => handleAppClick(app.url)}
                style={{
                  height: '100%',
                  borderRadius: '8px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  background: 'white'
                }}
                styles={{
                  body: {
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }
                }}
                className="app-card"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}
                >
                  <Avatar
                    icon={iconMap[app.icon]}
                    size={40}
                    style={{
                      backgroundColor: '#f5f5f5',
                      color: '#595959',
                      marginRight: '12px',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        margin: '0 0 6px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#262626',
                        lineHeight: '24px'
                      }}
                    >
                      {app.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#8c8c8c',
                        background: '#f5f5f5',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontWeight: '400'
                      }}
                    >
                      {app.industryTag}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    color: '#8c8c8c',
                    fontSize: '14px',
                    margin: 0,
                    flex: 1,
                    lineHeight: '20px'
                  }}
                >
                  {app.description}
                </p>
                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '12px',
                    borderTop: '1px solid #f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#bfbfbf',
                      fontWeight: '400'
                    }}
                  >
                    点击使用
                  </span>
                  <RightOutlined
                    style={{ color: '#bfbfbf', fontSize: '12px' }}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        {filteredApps.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#bfbfbf'
            }}
          >
            <AppstoreOutlined
              style={{ fontSize: '48px', marginBottom: '16px' }}
            />
            <p style={{ margin: 0, fontSize: '16px' }}>
              暂无{activeCategory}类型的应用
            </p>
          </div>
        )}
      </Card>

      <style jsx>{`
        .app-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </div>
  );
}
