/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongodb'],
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Only use custom distDir for local development on Windows/OneDrive
  ...(process.env.NODE_ENV === 'development' && process.platform === 'win32' && {
    distDir: '.next-build',
  }),
}

export default nextConfig
