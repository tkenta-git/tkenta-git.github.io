/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 静的サイトとして出力する設定
    images: {
      unoptimized: true, // GitHub Pagesでは画像最適化が使えないため
    },
  };
  
  module.exports = nextConfig;