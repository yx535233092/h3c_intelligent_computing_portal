'use client';

import { useState } from 'react';
import style from './page.module.css';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';

export default function DataService() {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState('text');
  const [productTitle, setProductTitle] = useState('智能文档处理');
  const [multiNeedsRef, isMultiNeedsInView] = useInView({ threshold: 0.2 });
  const [intelligentProcessRef, isIntelligentProcessInView] = useInView({
    threshold: 0.1
  });

  return (
    <div className={style['data-service-root']}>
      {/* 顶部标题区 */}
      <section className={style.hero}>
        <h1 className={style['hero-title']}>数据服务解决方案</h1>
        <p className={style['hero-subtitle']}>
          面向文本、图像与表格的智能解析服务，助力高效输出Markdown文档
        </p>
        <p className={style['hero-desc']}>
          支持文档与图片文字识别，智能结构化输出，助力各类应用场景。
        </p>
      </section>

      {/* 三栏优势区 */}
      <section className={style.features}>
        <div className={style['feature-card']}>
          <h3>表格识别更精准</h3>
          <p>支持复杂表格、单元格合并，跨页表格也能准确还原。</p>
        </div>
        <div className={style['feature-card']}>
          <h3>解析速度极快</h3>
          <p>百页文档秒级解析，支持大批量离线处理。</p>
        </div>
        <div className={style['feature-card']}>
          <h3>高稳定性</h3>
          <p>亿级调用量技术积累，稳定可靠，成功率99.999%。</p>
        </div>
      </section>

      {/* 多种需求区块 */}
      <section
        ref={multiNeedsRef}
        className={`${style.multiNeedsSection} ${
          isMultiNeedsInView ? style.animateIn : ''
        }`}
      >
        <h2 className={style.multiNeedsTitle}>多种需求，一“次”搞定</h2>
        <p className={style.multiNeedsDesc}>
          支持 PDF、Word（doc/docx）、常见图片（jpg/png/webp/tiff）、HTML
          等多种文件格式
        </p>
        <p className={style.multiNeedsDesc2}>
          一键解析数据内容，获取文字、表格、标题层级、公式、手写字符、图片信息
        </p>
        <div className={style.multiNeedsCardsWrapper}>
          <div className={style.multiNeedsCard}>
            <div className={style.iconPdf}></div>
            <span>PDF</span>
          </div>
          <div className={style.multiNeedsCard}>
            <div className={style.iconWord}></div>
            <span>Word</span>
          </div>
          <div className={style.multiNeedsCard}>
            <div className={style.iconJpeg}></div>
            <span>JPEG</span>
          </div>
          <div className={style.multiNeedsCard}>
            <div className={style.iconPng}></div>
            <span>PNG</span>
          </div>
          <div className={style.multiNeedsCard}>
            <div className={style.iconHtml}></div>
            <span>HTML</span>
          </div>
          <div className={style.multiNeedsCard}>
            <div className={style.iconExcel}></div>
            <span>Excel</span>
          </div>
        </div>
        <div className={style.multiNeedsSupport}>支持多种文档格式</div>
      </section>

      {/* 智能文档处理模块 */}
      <section
        ref={intelligentProcessRef}
        className={`${style.intelligentProcessSection} ${
          isIntelligentProcessInView ? style.animateIn : ''
        }`}
      >
        <h2 className={style.intelligentProcessTitle}>{productTitle}</h2>
        <a href="#" className={style.viewAllProducts}>
          查看更多产品 {'>'}
        </a>

        {/* 选项卡导航 */}
        <div className={style.tabNav}>
          <button
            className={`${style.tabButton} ${
              activeTab === 'text' ? style.active : ''
            }`}
            onClick={() => {
              setActiveTab('text');
              setProductTitle('智能文本解析');
            }}
          >
            文本解析
          </button>
          <button
            className={`${style.tabButton} ${
              activeTab === 'table' ? style.active : ''
            }`}
            onClick={() => {
              setActiveTab('table');
              setProductTitle('智能表格解析');
            }}
          >
            表格解析
          </button>
          <button
            className={`${style.tabButton} ${
              activeTab === 'image' ? style.active : ''
            }`}
            onClick={() => {
              setActiveTab('image');
              setProductTitle('智能图片解析');
            }}
          >
            图片解析
          </button>
        </div>

        {/* 选项卡内容 */}
        <div className={style.tabContent}>
          {/* 文本解析内容 */}
          {activeTab === 'text' && (
            <div className={style.tabPane}>
              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.complexLayoutDemo}>
                    <div className={style.layoutBlocks}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>复杂布局文档解析</h3>
                  <p className={style.serviceDesc}>
                    多栏布局、分栏识别
                    <br />
                    复杂版面结构解析
                    <br />
                    智能排版还原
                  </p>
                  <a
                    href="http://192.168.10.24:7860/"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.documentDemo}>
                    <div className={style.pdfIcon}></div>
                    <div className={style.arrow}>→</div>
                    <div className={style.markdownPreview}>
                      <div className={style.markdownHeader}>LaTeX</div>
                      <div className={style.markdownContent}></div>
                    </div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>公式类文档解析</h3>
                  <p className={style.serviceDesc}>
                    数学公式精准识别
                    <br />
                    LaTeX格式输出
                    <br />
                    复杂公式结构解析
                  </p>
                  <a
                    href="http://192.168.10.24:7860/"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.extractDemo}>
                    <div className={style.documentIcon}></div>
                    <div className={style.extractedContent}>
                      <div className={style.extractTitle}>媒体内容</div>
                      <div className={style.extractItems}></div>
                    </div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>媒体报刊类文档解析</h3>
                  <p className={style.serviceDesc}>
                    报纸杂志版面解析
                    <br />
                    新闻内容结构化
                    <br />
                    媒体资料智能提取
                  </p>
                  <a
                    href="http://192.168.10.24:7860/"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 表格解析内容 */}
          {activeTab === 'table' && (
            <div className={style.tabPane}>
              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.tableDemo}>
                    <div className={style.complexTable}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>复杂表格解析</h3>
                  <p className={style.serviceDesc}>
                    跨页表格识别
                    <br />
                    复杂结构解析
                    <br />
                    高精度数据提取
                  </p>
                  <a
                    href="/excel-process"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.tableDemo}>
                    <div className={style.complexTable}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>多区域表格解析</h3>
                  <p className={style.serviceDesc}>
                    智能识别页面多表格
                    <br />
                    分别解析输出
                    <br />
                    保持数据完整性
                  </p>
                  <a
                    href="/excel-process"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.headerDemo}>
                    <div className={style.complexHeader}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>复杂表头解析(合并场景)</h3>
                  <p className={style.serviceDesc}>
                    多层级表头识别
                    <br />
                    合并单元格处理
                    <br />
                    表格逻辑结构还原
                  </p>
                  <a
                    href="/excel-process"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 图片解析内容 */}
          {activeTab === 'image' && (
            <div className={style.tabPane}>
              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.ancientDemo}>
                    <div className={style.ancientText}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>古籍解析</h3>
                  <p className={style.serviceDesc}>
                    古代文献识别
                    <br />
                    繁体字、古文字
                    <br />
                    专业文史处理
                  </p>
                  <a
                    href="http://192.168.10.24:7860/"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>

              <div className={style.serviceCard}>
                <div className={style.serviceImage}>
                  <div className={style.handwritingDemo}>
                    <div className={style.handwritingLines}></div>
                  </div>
                </div>
                <div className={style.serviceInfo}>
                  <h3>手写识别</h3>
                  <p className={style.serviceDesc}>
                    高精度手写识别
                    <br />
                    多种笔迹风格
                    <br />
                    草书行书支持
                  </p>
                  <a
                    href="http://192.168.10.24:7860/"
                    target="_blank"
                    className={style.detailLink}
                  >
                    立即体验 {'>'}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
