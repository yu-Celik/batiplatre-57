import withBundleAnalyzer from '@next/bundle-analyzer';
import nextTranspileModules from 'next-transpile-modules';

const withTM = nextTranspileModules([
  '@mui/material',
  '@mui/icons-material'
]);

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false, // Pour désactiver l'ouverture automatique du rapport dans le navigateur
});

const nextConfig = withBundleAnalyzerConfig(withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
  },
}));

export default nextConfig;