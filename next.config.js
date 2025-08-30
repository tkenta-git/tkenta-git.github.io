/** @type {import('next').NextConfig} */
const nextConfig = {
    // 開発環境では静的出力を無効化
    ...(process.env.NODE_ENV === 'production' && {
      output: 'export', // 本番環境のみ静的サイトとして出力
      basePath: '', // カスタムドメイン用にベースパスを空に設定
      assetPrefix: '', // アセットのプレフィックスも空に設定
      images: {
        unoptimized: true, // GitHub Pagesでは画像最適化が使えないため
      },
      trailingSlash: true, // GitHub Pages用にトレイリングスラッシュを有効化
      // GitHub Pages用の追加設定
      experimental: {
        appDir: true,
      },
      // 静的ファイルの出力設定
      distDir: 'out',
    }),
  };
  
  module.exports = nextConfig;