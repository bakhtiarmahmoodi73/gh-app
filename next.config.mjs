/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gh-app-9yq3.vercel.app',
            pathname: '/**',
          },
    ]
    }
};

export default nextConfig;
