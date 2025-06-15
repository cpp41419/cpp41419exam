import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    GTM_ID: process.env.GTM_ID,
  },
};

module.exports = {
  ...nextConfig,
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            // Add any handlebars-loader options here
          }
        }
      });
    }
    return config;
  },
};
