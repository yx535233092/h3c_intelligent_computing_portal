import Logo from '@/components/common/Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-16 py-12 flex flex-col">
      {/* 上侧 */}
      <div className="flex justify-between">
        {/* 左侧 */}
        <div className="flex flex-col gap-4">
          {/* 标题 */}
          <h1 className="flex gap-4 items-center">
            <Logo /> <span className="text-xl font-bold">智算专业服务</span>
          </h1>

          {/* 内容 */}
          <p className="max-w-md text-secondary-text">
            新华三集团智算专业服务团队，致力于为客户提供全方位的人工智能解决方案，
            包括模型服务、数据服务、应用服务、运维服务和咨询培训服务。
          </p>
        </div>

        {/* 中间 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">专业服务</h1>
          <ul className="flex flex-col gap-2 text-secondary-text">
            <li>
              <Link className="link" href="/pro-services/model-service">
                模型服务
              </Link>
            </li>
            <li>
              <Link className="link" href="/pro-services/data-service">
                数据服务
              </Link>
            </li>
            <li>
              <Link className="link" href="/pro-services/app-service">
                应用服务
              </Link>
            </li>
            <li>
              <Link className="link" href="/pro-services/consult-service">
                技术支撑服务
              </Link>
            </li>
          </ul>
        </div>

        {/* 右侧 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">友情链接</h1>
          <ul className="flex flex-col gap-2 text-secondary-text">
            <li className="flex gap-2">
              <Link
                className="link"
                href="https://www.h3c.com/cn/"
                target="_blank"
              >
                新华三
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                className="link"
                href="https://www.unigroup.com.cn/"
                target="_blank"
              >
                新紫光集团
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                className="link"
                href="http://linseer.h3c.com/hub/modelHome"
                target="_blank"
              >
                灵犀使能平台
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                className="link"
                href="http://linseer.h3c.com/copilot"
                target="_blank"
              >
                灵犀AI助手
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
