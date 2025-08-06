import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@gradio/client'],
  devIndicators: {
    // 隐藏性能提示框
    buildActivity: false
  }
};

export default nextConfig;
