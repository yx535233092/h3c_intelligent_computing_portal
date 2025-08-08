// 应用列表
export const applications = [
  {
    type: 'hj',
    name: '多模态文档知识库',
    description:
      '支持多模态文档、表格、图片、视频等多模态数据的智能解析、智能问答',
    route: '/hj-platform',
    sceneCategory: '智能问答',
    industryTag: '企业',
    icon: 'DataAnalysis'
  },
  {
    type: 'hj',
    name: '消防法律助手',
    description: '支持消防法律知识智能问答',
    route: '/pro-services/app-service/app-detail?appName=消防法律助手',
    url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270309229271183360&modeType=single&token=5018310373404f4e8ed2199c9f156b94',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'PictureRounded'
  },
  {
    type: 'hj',
    name: '康养知识问答',
    description: '基于专业书籍进行精准、全面的问答。',
    route: '/pro-services/app-service/app-detail?appName=康养知识问答',
    url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270328835872387072&modeType=single&token=9785442bc0644b72baa9f04065b0b807',
    sceneCategory: '智能问答',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  {
    type: 'hj',
    name: '康养行业财报分析',
    description: '康养行业相关财报智能分析',
    route: '/pro-services/app-service/app-detail?appName=康养行业财报分析',
    url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270313773443051520&modeType=single&token=bf3cf2ebaef84159af75677d733b701d',
    sceneCategory: '智能办公',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  {
    type: 'hj',
    name: '事假单小助手',
    description: '支持事假单的智能填写。',
    route:
      '/app-detail?type=hj&token=642502acbbbbe5d3d7741082c7c0194936f6c3374eb83f605860fdbcd415b31e4d32a9334098ec1c6d26b9d055919c70e97eaed66fa5514886d2949e51e8a824bd7c0bf23c12e8a31bc896724e25b584cd11d30287ec80cabf95ee64ca2f8da9b60fbcad32c634476b08a48e3c7918a2',
    sceneCategory: '智能办公',
    industryTag: '企业',
    icon: 'PictureRounded'
  },
  // {
  //   type:'hj',
  //   name: 'AI写作',
  //   description: 'ai写作',
  //   route: '/pro-services/app-service/app-detail?appName=AI写作',
  //   url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270329449614761984&modeType=single&token=00000000000000000000000000000000',
  //   sceneCategory: '智能文档',
  //   industryTag: '企业',
  //   icon: 'PictureRounded'
  // },
  {
    type: 'hj',
    name: '通信知识问答',
    description: '交通行业相关通信知识问答',
    route: '/pro-services/app-service/app-detail?appName=通信知识问答',
    url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270329143243567104&modeType=single&token=ca2db1f46bcf47fba3bfe122757365e9',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    type: 'hj',
    name: '电信财务知识助手',
    description: '电信行业相关财务知识问答',
    route: '/pro-services/app-service/app-detail?appName=电信财务知识助手',
    url: 'https://www.hjlingxi.com/BOTE/#/driver/bot?tenantId=1270197558062084096&botId=1270206415601659904&modeType=single&token=ad2b4b62d07746e8801967ecbe70459d',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    type: 'dify',
    name: '人口库智能问数',
    description: '人口数据、出生率、结婚率等多场景查询',
    route: '/pro-services/app-service/app-detail?appName=人口库智能问数',
    url: 'http://192.168.10.24/chat/VtwxEkpiOIVPOETe',
    sceneCategory: '智能问数',
    industryTag: '政府',
    icon: 'DataAnalysis'
  },
  {
    type: 'dify',
    name: '产品图文问答助手',
    description: '支持图文双重检索',
    route: '/pro-services/app-service/app-detail?appName=产品图文问答助手',
    url: 'http://192.168.10.24/chat/EDWuQZouY06bnKXy',
    sceneCategory: '智能问答',
    industryTag: '政府',
    icon: 'PictureRounded'
  },
  {
    type: 'dify',
    name: '会议室预定',
    description: '线上/线下预定会议室',
    route: '/pro-services/app-service/app-detail?appName=会议室预定',
    url: 'http://192.168.10.24/chat/sQCvVCOZgHW5nRdq',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'OfficeBuilding'
  },
  {
    type: 'dify',
    name: '访客申请',
    description: '外部访客登记',
    route: '/pro-services/app-service/app-detail?appName=访客申请',
    url: 'http://192.168.10.24/chat/BZBrTa6WhgcmRBTI',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'User'
  },
  {
    type: 'dify',
    name: '出差申请',
    description: '在线出差申请',
    route: '/pro-services/app-service/app-detail?appName=出差申请',
    url: 'http://192.168.10.24/chat/6thJYI8DDsf4uOUN',
    sceneCategory: '智能办公',
    industryTag: '政府',
    icon: 'Suitcase'
  },
  {
    type: 'dify',
    name: '文章改写',
    description: '根据B文章的分格改写A文章',
    route: '/pro-services/app-service/app-detail?appName=文章改写',
    url: 'http://192.168.10.24/chat/C5v2olj9iejVk41O',
    sceneCategory: '智能文档',
    industryTag: '政府',
    icon: 'EditPen'
  },
  {
    type: 'dify',
    name: '金融贷款报告评估',
    description: '智能生成企业贷款资质评估报告',
    route: '/pro-services/app-service/app-detail?appName=金融贷款报告评估',
    url: 'http://192.168.10.24/chat/2o05S4qNOVvVnQpu',
    sceneCategory: '智能文档',
    industryTag: '金融',
    icon: 'Money'
  },
  {
    type: 'dify',
    name: '医疗诊断分析助手',
    description: '根据病理、检查信息，进行诊断分析',
    route: '/pro-services/app-service/app-detail?appName=医疗诊断分析助手',
    url: 'http://192.168.10.24/workflow/TLZwJS8EwAKK4FL2',
    sceneCategory: '智能文档',
    industryTag: '医疗',
    icon: 'FirstAidKit'
  }
];
