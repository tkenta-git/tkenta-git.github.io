// src/app/page.tsx
'use client';

import ProjectHeader from '../../components/ProjectHeader'; // ProjectHeaderをインポート
import ProjectCard from '../../components/ProjectCard'; // ProjectCardをインポート

export default function Home() {
  return (
    <main>
      
      <section className="hero">
        <div className="hero-content">
          <h2>Kenta Tanaka is a designer</h2>
          <h3>improving experience with computer interactions.</h3>
          <p className="role">Born and raised in Japan.</p>
          
          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="/contact" className="cta-primary">
              Let's talk first
            </a>
            <a href="/contact" className="cta-secondary">
              How to proceed →
            </a>
          </div>
        </div>
      </section>

      {/* --- Project Cards Section --- */}
      <section className="project-cards-container">
        {/* SFC Hello Cycling Card */}
        <ProjectCard
          title="SFC通学路上の Hello Cyclingスポット可視化"
          description="慶應義塾大学SFC一湘南台駅付近のHello Cyclingスポット可視化して、通学路上でのシェアサイクル利用をスムーズに。"
          date="May 2025"
          footer="mapbox Jun 2025"
          content={
            <iframe
              src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 'none' }}
              title="SFC Hello Cycling"
            />
          }
          link="/work/observable"
        />

        {/* Shannon Diversity Index Card */}
        <ProjectCard
          title="シャノン多様性指数計算機とビジュアライザー"
          description="情報理論の父シャノンのエントロピー由来の多様性指数を、生態・環境・微生物・経済・社会・都市など多領域等の理解促進へ可視化・対話化として制作。"
          date="Jun 2025"
          footer="Jun 2025"
          content={
            <iframe
              src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 'none' }}
              title="Shannon Diversity Index Calculator & Visualizer"
            />
          }
          link="/work/observable"
        />

        {/* Medical Expenses in Japan Card */}
        <ProjectCard
          title="日本の医療費分析"
          description="日本における重大な社会問題である社会保障費急増を視覚的にわかりやすく解説。"
          date="Apr 2025"
          footer="Apr 2025"
          content={
            <iframe
              src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 'none' }}
              title="Medical Expenses in Japan"
            />
          }
          link="/work/observable"
        />
      </section>

      {/* --- Contact Form Section --- */}
<section id="contact" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader 
          title="Contact"
          date=""
          description="Feel free to reach out to me for any inquiries or collaborations."
        />
        {/* ▼▼▼ この部分を修正 ▼▼▼ */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem', // ラベルとフォームの間のスペース
          padding: '2rem 0',
          flexWrap: 'wrap' // スマホ表示などで折り返すように
        }}>
          {/* 「Wanna contact?」のラベル */}
          <span style={{ fontSize: '1.1rem' }}>Let's talk</span>

          {/* フォーム部分のコンテナ */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #111111',
            borderRadius: '50px', // 角を丸くしてカプセル型に
            overflow: 'hidden',   // はみ出した部分を隠す
            backgroundColor: '#fff',
            maxWidth: '100%'
          }}>
            {/* メールアドレス表示部分 */}
            <span style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              color: '#333',
              whiteSpace: 'nowrap', // 折り返さないように
              overflow: 'hidden',
              textOverflow: 'ellipsis' // はみ出したら...で表示
            }}>
              tb1.kenta-research@outlook.com
            </span>
            
            {/* 「contact」ボタン部分 */}
            <a 
              href="mailto:tb1.kenta-research@outlook.com"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#e0e0e0', // スクショに近いグレー
                color: '#000',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cccccc'} // ホバー時少し濃くする
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            >
              contact
            </a>
          </div>
        </div>
        {/* ▲▲▲ ここまで ▲▲▲ */}
      </section>

    </main>
  )
}