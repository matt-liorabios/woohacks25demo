/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/__/auth/:path*',
        destination: 'https://woohacks25-jgehs1lhj-matthew-pookies-projects.vercel.app/__/auth/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply to all routes - narrow to specific auth paths if needed
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 