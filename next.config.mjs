/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// Only use custom distDir for local development when explicitly enabled
if (process.env.USE_CUSTOM_DIST_DIR === 'true') {
  nextConfig.distDir = '.next-build'
}

export default nextConfig
