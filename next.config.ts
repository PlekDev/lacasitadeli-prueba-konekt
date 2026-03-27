import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Configurar para monorepo
  experimental: {
    // Permitir que el servidor encuentre los módulos correctamente
    externalDir: true,
  },
  // Configurar turbopack para monorepo
  turbopack: {
    root: __dirname,
  },
  // Permitir orígenes cruzados en desarrollo
  allowedDevOrigins: [
    'preview-chat-98205ad7-0df1-4c8f-91d8-cee2db2bb45d.space.z.ai',
    '.space.z.ai',
  ],
};

export default nextConfig;
