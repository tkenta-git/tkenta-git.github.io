import '@/styles/design-tokens.css';
import '@/styles/animations.css';
import './(main)/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
} 