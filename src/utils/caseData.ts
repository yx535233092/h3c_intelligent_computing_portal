export interface Solution {
  title: string;
  description: string;
}

export interface PointOfPain {
  title: string;
  description: string;
}

export interface Result {
  title: string;
  description: string;
}

export interface CaseItem {
  title: string;
  description: string;
  picName: string;
  detailPicName: string;
  routeAdress: string;
  pointOfPain: PointOfPain[];
  solution: Solution[];
  result: Result[];
}

export interface CaseCategory {
  key: string;
  label: string;
  items: CaseItem[];
}

export const caseCategories: CaseCategory[] = [
  {
    key: '1',
    label: '政府',
    items: [
      {
        title: '某市公安情报分析以案搜案',
        description:
          '基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的"语音语义建模"能力，该阶段为AI智能客服的较高级阶段，在初级能力基础上训练AI进行语义识别，达到"以案搜人"、"以案搜案"等效果。',
        picName: '某市公安情报分析以案搜案.png',
        detailPicName: '某市公安情报分析以案搜案.png',
        routeAdress: '/industry-cases/goverment1',
        pointOfPain: [
          {
            title: '信息获取效率低下且耗时耗力',
            description:
              '传统人工检索和研判警情，获取报警电话机主身份、历史报警情况、家暴受害人身份或相关历史案件信息时，需要登录多系统、查阅大量文档并人工比对，效率低下，耗费大量时间。'
          },
          {
            title: '历史信息碎片化，难以快速形成决策支持',
            description:
              '历史案件和人员信息分散在不同数据源中，缺乏有效整合与关联分析能力。领导和民警难以全面、快速地获取有价值的关联信息，影响对警情基本状态的判断和历史处置参考的获取。'
          },
          {
            title: '警务研判能力受限于个人经验和时效性',
            description:
              '“以案搜人”和“以案搜案”等深度研判工作高度依赖研判人员的经验和知识，在紧急情况下，人工研判可能无法及时提供最优解或发现重要关联线索，导致研判的智能化和自动化程度不足。'
          },
          {
            title: '警务操作和沟通便捷性不足',
            description:
              '民警在警务指挥和处置过程中，可能面临复杂的系统操作界面或繁琐的查询流程，影响工作效率和及时性。缺乏通过自然语言（如语音、文本对话）快速查询和获取信息的便捷交互方式。'
          },
          {
            title: '现有信息检索能力在语义理解上存在局限',
            description:
              '传统的信息检索方式主要依赖精确关键词匹配，难以理解复杂的语义和上下文语境，可能导致信息检索结果不全面或存在偏差，无法满足智能化情报分析的需求。'
          }
        ],
        solution: [
          {
            title: '构建AI辅助合成研判能力',
            description:
              '基于AI大模型训练平台的数据和计算资源，形成处置过程中辅助合成研判的“语音语义建模”能力，作为AI智能客服的较高级阶段。'
          },
          {
            title: '实现“以案搜人”与“以案搜案”',
            description:
              '通过AI大模型进行语义识别，达到快速、智能地关联人员与案件的效果，支持精准的情报分析。'
          },
          {
            title: '集成AI智能客服，提供便捷交互入口',
            description:
              '在创建群组后自动加入AI客服，允许民警通过@AI客服的方式，以自然语言（语音或文本）直接询问警情相关信息。'
          },
          {
            title: '提供智能身份研判和历史案件关联',
            description:
              'AI客服通过智能身份研判大模型，快速判断机主身份（如长期家暴受害人），并获取所有相关的历史案件信息，提供警情基本状态判断和历史处置参考。'
          },
          {
            title: '支持智能文本与语音语义检索模式',
            description:
              '提供两种核心模式：模式一通过自然语言处理技术对文本要素进行智能关键字检索；模式二通过智能语音+NLP能力，快速完成语义识别并转换为机器可识别的SQL或Python查询，直接返回结果。'
          }
        ],
        result: []
      },
      {
        title: '浙江某消防总队办公问答助手',
        description:
          '某消防救援总队以省委省政府提出的"一号发展工程"指示精神为指引，在2024年以更大力度实施数字经济创新提质，贯彻执行 "加强数据开发利用，深化拓展场景应用，激活数据要素新价值"的战略方向。项目结合国家消防救援局"数字消防"建设的工作要求，构建消防领域"智能防控、智能处置、智能管理"三大业务方向。',
        picName: '浙江某消防总队办公问答助手.png',
        detailPicName: '浙江某消防总队办公问答助手.png',
        routeAdress: '/industry-cases/goverment2',
        pointOfPain: [],
        solution: [],
        result: []
      },
      {
        title: '某省应急局处置方案生成',
        description:
          '实现专项预案数字化，把专项预案处置流程、各岗位职责通过文档解析的方式实现应急预案的结构化生成，辅助应急期间开展应急处置工作。',
        picName: '某省应急局处置方案生成.png',
        detailPicName: '某省应急局处置方案生成.png',
        routeAdress: '/industry-cases/goverment3',
        pointOfPain: [],
        solution: [],
        result: []
      },
      {
        title: '某省大数据智能问数助手',
        description:
          '基于大语言模型和政务知识库构建面向多业务场景的智能问答应用。通过对政务领域事项数据、办事材料、办事指南、办事流程、办事进度、办事地址、服务政策、培训文档等各类知识进行统一归集和管理，利用大模型理解用户提问并自主生成人性化的准确答案。',
        picName: '某省大数据智能问数助手.png',
        detailPicName: '某省大数据智能问数助手.png',
        routeAdress: '/industry-cases/goverment4',
        pointOfPain: [],
        solution: [],
        result: []
      }
    ]
  },
  {
    key: '2',
    label: '运营商',
    items: [
      {
        title: '某运营商智能营销预案',
        description:
          '通过大模型对海量数据的深度分析，能够依据一线营销实战中瞬息万变的动态信息，精准生成适配的作战策略，从而有效提升营销触达的转化效能。',
        picName: '某运营商智能营销预案.png',
        detailPicName: '某运营商智能营销预案.png',
        routeAdress: '/industry-cases/operator1',
        pointOfPain: [
          {
            title: '营销策略精细化程度不足',
            description:
              '当前营销模式难以适应市场动态的快速变化，需要更精细化的营销策略来提高触达效率和转化效果。'
          },
          {
            title: '营销决策依赖人工经验与效率低下',
            description:
              '营销策略的制定、效果预测和研判主要依赖人工经验和判断，存在效率低、难以规模化复制且可能不精准的问题。'
          },
          {
            title: '客户服务和支持响应效率不足',
            description:
              '客户在获取产品信息、使用建议或技术支持时，可能面临响应速度和准确性不足的问题，影响客户体验。'
          },
          {
            title: '企业内部知识获取与管理效率低',
            description:
              '企业内部的营销知识、案例和策略等信息分散，员工获取所需耗时耗力，难以有效复用和形成知识沉淀。'
          },
          {
            title: '新产品推广缺乏精准高效支持',
            description:
              '新产品推广需要高效、精准地触达目标客户并提供个性化建议，现有方式难以满足新产品快速市场推广的需求。'
          },
          {
            title: '数据分析能力受限，难以深度洞察',
            description:
              '面对海量营销数据，缺乏有效的数据分析工具和深入洞察能力，难以从复杂数据中提炼出有价值的商业情报和趋势。'
          }
        ],
        solution: [
          {
            title: '构建大模型营销预案平台',
            description:
              '基于AI大模型数据分析能力，实时生成应对千变万化营销动态的精准作战策略，旨在提升营销触达和转化效率。'
          },
          {
            title: '提供智慧营销AI助手',
            description:
              '通过语音/自然语言交互，AI助手能够辅助客户进行提问、获取产品信息、接收使用建议和参与营销活动，实现智能化客户服务。'
          },
          {
            title: '建设营销知识体系与策略库',
            description:
              '形成包括营销经验总结经验池、营销话术库、COP营销策略库等在内的知识体系，支持知识的导入与持续学习，并能进行智能知识推荐与应用。'
          },
          {
            title: '整合大模型与业务知识进行辅助研判',
            description:
              '大模型结合客户和业务知识，进行深度知识融合，辅助生成研判结论，并支持形成新的营销策略，优化决策过程。'
          },
          {
            title: '提供智能文本与语音语义交互能力',
            description:
              '支持基于自然语言处理的文本挖掘和关键字检索，以及通过智能语音和NLP能力实现快速语义识别，形成机器可识别的查询并返回结果。'
          },
          {
            title: '提升营销全链条效率与价值',
            description:
              '通过AI赋能，实现精准预测、深度分析、实时需求满足，从而达成创新营销策略、提升客户体验、提高营销效益和降低营销成本的目标。'
          },
          {
            title: '提供专家模型、算力及HPC+AI解决方案',
            description:
              '提供通用大模型优化、定制化行业重构模型服务、多核HPC+AI算力支持和GPU集群，以及深入业务场景的超算智慧融合解决方案与SaaS应用，为大模型运行提供基础支撑。'
          }
        ],
        result: [
          {
            title: '提升高校管理效率',
            description:
              '通过智能助手与数据分析技术，高校的管理效率得到显著提升。'
          },
          {
            title: '增强科学决策支持',
            description:
              '数据解读助手从海量数据中提取有价值信息，提高数据分析效率和精准度，为教育决策提供支持。'
          },
          {
            title: '优化知识资源获取与管理',
            description:
              '知识查询助手帮助师生快速获取和使用知识资源，员工知识助手协助各部门员工快速获取和管理档案、资源和知识库。'
          },
          {
            title: '提升学习和教学效率',
            description:
              '文档解读助手通过自动化分析和摘要生成，提升文献研究和学习的效率。'
          },
          {
            title: '增强校园服务体验与智能化',
            description:
              '校园百事通助手为师生提供高效解答，提升校园事务处理的智能化与便捷性。'
          },
          {
            title: '促进协作效率',
            description:
              'AI+知识服务应用能够帮助师生快速获取信息并提升工作协作效率。'
          }
        ]
      },
      {
        title: '山东移动标书助手',
        description:
          '针对编写招标文件过程中缺少文档编写辅助系统，完全依赖人工编写各类招投标文档，标书支撑面临编制工作量大、审核耗时长、依赖个人经验、存量数据挖掘不足等痛点。基于历史积累的投标文件、相关政策法规、人员资料信息等材料构建标书知识库，并融合大小模型能力，打造智慧标书助手，加快标书制作审核效率，提升标书人员专业水平。',
        picName: '山东移动标书助手.png',
        detailPicName: '山东移动标书助手.png',
        routeAdress: '/industry-cases/operator2',
        pointOfPain: [],
        solution: [],
        result: []
      },
      {
        title: '云南移动方案助手',
        description: '售前方案编制效率和质量双提升',
        picName: '云南移动方案助手.png',
        detailPicName: '云南移动方案助手.png',
        routeAdress: '/industry-cases/operator3',
        pointOfPain: [],
        solution: [],
        result: []
      }
    ]
  },
  {
    key: '3',
    label: '企业',
    items: [
      {
        title: '某集团智能问答系统',
        description:
          '该系统围绕国家政策咨询和集团制度问答两大场景打造面向企业集团及其分公司的统一智能化问答平台，实现安全、精准、高效的知识检索与问答服务。',
        picName: '某集团智能问答系统.png',
        detailPicName: '智能问答.png',
        routeAdress: '/industry-cases/enterprise1',
        pointOfPain: [
          {
            title: '知识管理碎片化与检索效率低',
            description:
              '企业内部的知识、信息和数据分散在不同部门和系统中，缺乏统一的知识管理和检索平台，导致信息查找耗时且效率低下，难以从海量数据中快速获取所需知识。'
          },
          {
            title: '缺乏精准的知识识别与匹配能力',
            description:
              '现有的知识系统可能无法对非结构化文本进行深入的语义识别和理解，导致在复杂查询或多义词情境下无法提供精准的知识匹配和返回，影响决策质量。'
          },
          {
            title: '政策法规理解复杂且查询困难',
            description:
              '针对国家或地方发布的政策、法规、资讯、知识等文件，传统查询方式难以快速、准确地理解其内涵，并形成精准的决策建议。'
          },
          {
            title: '跨领域知识获取与应用受限',
            description:
              '在医疗、教育、军事、农业、生产等多个不同业务领域，缺乏通用且能深入理解内容并提供辅助决策的知识服务能力。'
          },
          {
            title: '海量用户和数据安全风险',
            description:
              '面对大规模用户群体（如3万+员工）和海量的业务操作、部门、角色、知识库、文档等数据，存在数据安全和隐私保护的巨大挑战，需要严格的防护机制。'
          },
          {
            title: '传统检索速度慢，无法满足实时响应需求',
            description:
              '在处理大规模数据和查询请求时，现有检索系统响应速度可能较慢，无法在短时间内（例如2秒内）提供结果，影响用户体验和工作效率。'
          }
        ],
        solution: [
          {
            title: '构建企业级智能问答系统',
            description:
              '基于大模型应用能力，面向企业集团及分子公司构建一套集知识管理、检索和问答于一体的系统，解决知识碎片化和检索效率问题。'
          },
          {
            title: '统一超大规模知识管理与应用',
            description:
              '通过整合集团内部超过2900万份知识文件、数据文本、图片、音视频等21种文件格式，形成统一、全面的知识库，并提供深度语义理解和知识响应。'
          },
          {
            title: '提供精准的政策法规智能查询',
            description:
              '针对国家或地方发布的政策、法规、资讯等知识，进行智能识别和解读，辅助用户精准理解和決策。'
          },
          {
            title: '支持多领域通用知识问答',
            description:
              '提供涵盖教育、医疗、企业、政府等多领域专业的知识问答服务。'
          },
          {
            title: '构建超大规模用户和数据安全防护体系',
            description:
              '面向超大规模用户群体，支持集团总部及分公司权限管理，并提供业务、部门、角色等7个维度的数据安全防护，确保数据不泄密。'
          },
          {
            title: '提升检索速度和问答准确率',
            description:
              '将检索速度提升20秒提升到2秒内响应，同时将问答准确率从60%提升到92%，提高系统效率和用户满意度。'
          },
          {
            title: '提供专家模型和算力云服务',
            description:
              '提供通用大模型优化、定制化行业重构模型服务，以及多种HPC+AI算力支持和GPU集群，支持万卡CPU/GPU集群，为大模型运行提供强大计算资源。'
          },
          {
            title: '提供HPC与AI综合解决方案及SaaS应用',
            description:
              '深入业务场景，提供超算智慧融合解决方案，包括建设管理和应用一体化，并通过SaaS模式提供AI计算、工程计算、科学计算等多样化服务。'
          }
        ],
        result: []
      },
      {
        title: '企业智能合同分析',
        description:
          '非标合同需要人工从合同正文里识别对应信息，出错率高，耗时长，通过大模型代替人工为用户提供合同预审、合同履约方案等，大幅提升合同审核效率、准确率，降低合同签订和交付的风险和损失，同时提高二次续约的成功率。',
        picName: '企业智能合同分析.png',
        detailPicName: '企业智能合同分析.png',
        routeAdress: '/industry-cases/enterprise2',
        pointOfPain: [],
        solution: [],
        result: []
      },
      {
        title: '某石油企业数智人应用',
        description:
          '融合大模型、语音交互、虚拟形象制作等多项技术，打造的虚拟数智人产品。面向智能咨询、讲解营销等场景，帮助企业引入虚拟员工降本增效，同时通过虚拟品牌形象打造营销记忆点。',
        picName: '某石油企业数智人应用.png',
        detailPicName: '某石油企业数智人应用.png',
        routeAdress: '/industry-cases/enterprise3',
        pointOfPain: [],
        solution: [],
        result: []
      }
    ]
  },
  {
    key: '4',
    label: '教育',
    items: [
      {
        title: '某高职校DEEPSEEK-AI+知识服务应用',
        description:
          '“AI + 知识服务” 应用借助智能助手与数据分析技术，可提升高校管理效率、强化决策支持、优化知识资源的获取与管理。其功能涵盖文档解读、知识查阅、知识管理等多个方面，能助力师生快速获取信息并提高工作协作效率。',
        picName: '某高职校DEEPSEEK-AI+知识服务应用.png',
        detailPicName: '某高职校DEEPSEEK-AI+知识服务应用.png',
        routeAdress: '/industry-cases/education1',
        pointOfPain: [
          {
            title: '文档分析与信息提取效率低下',
            description:
              '传统文档分析效率低，难以快速、自动地从海量文档中提取关键信息、生成摘要，导致科研和学习效率受影响。'
          },
          {
            title: '知识获取与查询效率低',
            description:
              '师生在查询知识资源时可能效率不高，难以快速获取、整合和使用所需知识，影响学习和教学内容的获取效率。'
          },
          {
            title: '数据分析与决策支持不足',
            description:
              '现有方法难以从各类数据中有效提取有价值信息，数据分析效率和精准度有待提高，影响科学决策支持。'
          },
          {
            title: '知识管理与员工协助效率低',
            description:
              '学校各部门员工在管理档案、资源和知识库方面面临挑战，难以快速获取和管理所需知识资源，影响协作效率。'
          },
          {
            title: '校园事务服务效率与智能化不足',
            description:
              '传统校园事务服务效率不高，学生获取信息不便，难以满足对智能和便捷服务的需求，影响整体校园服务体验。'
          }
        ],
        solution: [
          {
            title: '提供智能助手与数据分析技术',
            description:
              '通过智能助手与数据分析技术，提升高校的管理效率、决策支持和知识资源的获取与管理，全面覆盖文档解读、知识查询、员工知识管理等多个方面。'
          },
          {
            title: '文档解读助手',
            description:
              '通过自然语言处理技术自动分析文档内容，提取关键信息、生成摘要，提升文献研究和学习的效率。'
          },
          {
            title: '知识查询助手',
            description:
              '通过智能检索和推荐算法，帮助师生快速查找、获取和使用知识资源，支持学习和教学内容的灵活获取。'
          },
          {
            title: '数据解读助手',
            description:
              '帮助管理者从各类数据中提取有价值的信息，为教育决策提供支持，提高数据分析效率与精准度。'
          },
          {
            title: '知识员工助手',
            description:
              '为学校各部门的员工提供智能档案、资源管理和知识库整合功能，帮助他们快速获取和管理所需知识资源。'
          },
          {
            title: '校园百事通助手',
            description:
              '为师生提供校园事务的高效解答，增强师生对校园服务的便捷体验，通过集成校园内的各类信息资源，支持师生通过语音、文本或图片输入，获取准确的答案，提供包括教务、课程表、考试安排等信息查询服务，提升校园事务处理的智能化与便捷性。'
          },
          {
            title: '提供专家模型服务',
            description: '提供通用大模型优化和定制化行业重构模型服务。'
          },
          {
            title: '提供算力云服务',
            description: '提供多种HPC+AI算力支持，包括支持万卡CPU、GPU集群。'
          },
          {
            title: '提供HPC与AI解决方案',
            description:
              '深入业务场景，提供超算智慧融合解决方案，涵盖建设、管理和应用一体化。'
          },
          {
            title: '提供SaaS应用',
            description:
              '通过联合合作伙伴，提供AI计算、工程计算、科学计算等多种服务。'
          }
        ],
        result: [
          {
            title: '提升高校管理效率',
            description:
              '通过智能助手与数据分析技术，高校的管理效率得到显著提升。'
          },
          {
            title: '增强科学决策支持',
            description:
              '数据解读助手从海量数据中提取有价值信息，提高数据分析效率和精准度，为教育决策提供支持。'
          },
          {
            title: '优化知识资源获取与管理',
            description:
              '知识查询助手帮助师生快速获取和使用知识资源，员工知识助手协助各部门员工快速获取和管理档案、资源和知识库。'
          },
          {
            title: '提升学习和教学效率',
            description:
              '文档解读助手通过自动化分析和摘要生成，提升文献研究和学习的效率。'
          },
          {
            title: '增强校园服务体验与智能化',
            description:
              '校园百事通助手为师生提供高效解答，提升校园事务处理的智能化与便捷性。'
          },
          {
            title: '促进协作效率',
            description:
              'AI+知识服务应用能够帮助师生快速获取信息并提升工作协作效率。'
          }
        ]
      },
      {
        title: '某水科院大模型智能问答',
        description:
          'AI+为深入贯彻"十四五"规划构建智慧水利体系，加快完善水旱灾害防御"三大体系"要求。以"完善流域防洪工程体系"为切口，结合多模态大模型构建水利知识体系，通过知识机器人"小蓄"实现高效查询、水利新闻随时汇聚、业务图册随时浏览，极大提升水利业务智能化水平。 ',
        picName: '某水科院大模型智能问答.png',
        detailPicName: '某水科院大模型智能问答.png',
        routeAdress: '/industry-cases/education2',
        pointOfPain: [],
        solution: [],
        result: []
      }
    ]
  }
];

// 导出所有案例的扁平化数组，方便在其他地方使用
export const allCases: CaseItem[] = caseCategories.flatMap(
  (category) => category.items
);

// 根据分类key获取案例数据
export const getCasesByCategory = (categoryKey: string): CaseItem[] => {
  const category = caseCategories.find((cat) => cat.key === categoryKey);
  return category ? category.items : [];
};

// 根据路由地址获取单个案例
export const getCaseByRoute = (route: string): CaseItem | undefined => {
  return allCases.find((item) => item.routeAdress === route);
};

// 根据路由地址获取案例所属的分类
export const getCaseCategoryByRoute = (
  route: string
): CaseCategory | undefined => {
  return caseCategories.find((category) =>
    category.items.some((item) => item.routeAdress === route)
  );
};

/*
使用示例：

1. 在组件中导入并使用：
import { caseCategories, allCases, getCasesByCategory, getCaseByRoute } from '@/utils/caseData';

2. 获取所有政府案例：
const governmentCases = getCasesByCategory('1');

3. 获取所有案例：
const allCaseItems = allCases;

4. 根据路由获取特定案例：
const specificCase = getCaseByRoute('/industry-cases/goverment1');

5. 在动态路由页面中使用：
// 在 [case]/page.tsx 中
const caseData = getCaseByRoute(params.case);
*/
