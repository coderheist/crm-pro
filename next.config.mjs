/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongodb'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Only use custom distDir for local development on Windows/OneDrive
// Use environment variable to control this behavior
if (process.env.USE_CUSTOM_DIST_DIR === 'true') {
  nextConfig.distDir = '.next-build'
}

export default nextConfig
