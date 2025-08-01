import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@gradio/client']
};

export default nextConfig;
