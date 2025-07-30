# 案例数据使用指南

## 概述

案例数据已从页面组件中抽离到 `src/utils/caseData.ts` 文件中，便于在多个地方复用。

## 数据结构

### CaseItem 接口

```typescript
interface CaseItem {
  title: string; // 案例标题
  description: string; // 案例描述
  picName: string; // 图片文件名
  routeAdress: string; // 路由地址
}
```

### CaseCategory 接口

```typescript
interface CaseCategory {
  key: string; // 分类键值
  label: string; // 分类标签
  items: CaseItem[]; // 该分类下的案例列表
}
```

## 导出的数据和方法

### 1. caseCategories

所有案例分类的完整数据，包含政府、运营商、企业、教育四个分类。

### 2. allCases

所有案例的扁平化数组，方便遍历所有案例。

### 3. getCasesByCategory(categoryKey: string)

根据分类键值获取该分类下的所有案例。

### 4. getCaseByRoute(route: string)

根据路由地址获取特定的案例数据。

## 使用示例

### 1. 在组件中导入

```typescript
import {
  caseCategories,
  allCases,
  getCasesByCategory,
  getCaseByRoute
} from '@/utils/caseData';
```

### 2. 获取所有政府案例

```typescript
const governmentCases = getCasesByCategory('1');
```

### 3. 获取所有案例

```typescript
const allCaseItems = allCases;
```

### 4. 根据路由获取特定案例

```typescript
const specificCase = getCaseByRoute('/industry-cases/goverment1');
```

### 5. 在动态路由页面中使用

```typescript
// 在 [case]/page.tsx 中
const routePath = `/industry-cases/${caseId}`;
const caseData = getCaseByRoute(routePath);
```

### 6. 使用 CaseShowcase 组件

```typescript
import CaseShowcase from '@/components/features/cases/CaseShowcase';

// 显示所有案例
<CaseShowcase />

// 只显示政府案例
<CaseShowcase category="政府" />

// 显示前6个案例
<CaseShowcase limit={6} />

// 显示政府案例的前3个
<CaseShowcase category="政府" limit={3} />
```

## 优势

1. **数据集中管理**: 所有案例数据在一个文件中，便于维护
2. **类型安全**: 使用 TypeScript 接口确保数据类型正确
3. **灵活查询**: 提供多种查询方法满足不同需求
4. **易于扩展**: 新增案例只需在数据文件中添加即可
5. **复用性强**: 可在多个组件中复用相同的数据

## 注意事项

- 图片文件需要放在 `public` 目录下
- 路由地址需要与实际的页面路由保持一致
- 新增案例时注意保持数据结构的一致性
