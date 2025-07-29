/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

// Only use custom distDir for local development on Windows/OneDrive
if (process.env.USE_CUSTOM_DIST_DIR === 'true') {
  nextConfig.distDir = '.next-build'
}

export default nextConfig
