// Import design system styles
import '@/styles/design-tokens.css'
import '@/styles/animations.css'
import './globals.css'
import type { Metadata } from 'next'
// Interフォントの読み込みを削除
import ConditionalHeader from '../../components/ConditionalHeader'

// inter変数の定義を削除

export const metadata: Metadata = {
  title: 'Kenta Tanaka Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* bodyタグからclassNameを削除 */}
      <body>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  )
}