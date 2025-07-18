import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12 flex flex-col">
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

          {/* 图标 */}
          <div className="flex gap-4">
            <div>icon1</div>
            <div>icon2</div>
            <div>icon3</div>
          </div>
        </div>

        {/* 中间 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">专业服务</h1>
          <ul className="flex flex-col gap-2 text-secondary-text">
            <li>模型服务</li>
            <li>数据服务</li>
            <li>应用服务</li>
            <li>运维服务</li>
            <li>咨询培训服务</li>
          </ul>
        </div>

        {/* 右侧 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">专业服务</h1>
          <ul className="flex flex-col gap-2 text-secondary-text">
            <li className="flex gap-2">
              <i>图标</i> <span>400-xxx-xxxx</span>
            </li>
            <li className="flex gap-2">
              <i>图标</i> <span>xxxxxxxx@h3c.com</span>
            </li>
            <li className="flex gap-2">
              <i>图标</i> <span>杭州市滨江区长河路466号</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 下侧 */}
      <div className="flex justify-between border-t border-gray-500 pt-12 mt-12 text-secondary-text">
        <span className="cursor-default">
          © 2024 新华三技术有限公司 保留所有权利
        </span>
        <ul className="flex gap-4 text-secondary-text">
          <li className="hover:text-white transition-all duration-300">
            <a href="">隐私政策</a>
          </li>
          <li className="hover:text-white transition-all duration-300">
            <a href="">使用条款</a>
          </li>
          <li className="hover:text-white transition-all duration-300">
            <a href="https://www.h3c.com" target="_blank">
              新华三官网
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
