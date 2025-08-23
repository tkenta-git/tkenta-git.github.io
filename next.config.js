/** @type {import('next').NextConfig} */
const nextConfig = {
    // 開発環境では静的出力を無効化
    ...(process.env.NODE_ENV === 'production' && {
      output: 'export', // 本番環境のみ静的サイトとして出力
      images: {
        unoptimized: true, // GitHub Pagesでは画像最適化が使えないため
      },
    }),
  };
  
  module.exports = nextConfig;