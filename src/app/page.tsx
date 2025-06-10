'use client';

export default function Home() {
  return (
    <main>
      
      <section className="hero">
        <div className="hero-content">
          <h2>Kenta Tanaka is a designer</h2>
          <h3>improving experience with computer interactions.</h3>
          <p className="role">Born and raised in Japan.</p>
        </div>
      </section>
      {/* --- 可視化エリア 新デザイン --- */}
      <section className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        {/* 区切り線 */}
        <div style={{ 
          borderTop: '2px solid #111', 
          width: '100%', 
          maxWidth: '100vw',
          margin: '0 auto 1.5rem auto'
        }} />
        {/* タイトル・説明・日付 */}
        <div style={{ marginBottom: '1.5rem' }}>
          {/* 新しいFlexboxコンテナ */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, textAlign: 'left' }}>Shannon Diversity Index Calculator & Visualizer</h2>
            <div style={{ fontSize: '1rem', color: '#000' }}>Jun 2025</div>
          </div>
          {/* 3行目の要素はそのまま */}
          <div style={{ fontSize: '1.1rem', color: '#000', margin: '0.5rem 0 0.2rem 0', textAlign:"left" }}>This program is a Shannon Diversity Index Calculator & Visualizer, designed within a reactive JavaScript notebook environment. It facilitates data exploration and the creation of interactive data visualizations. The platform provides a collaborative space for visual data analysis and dashboard development, offering extensive resources for users.</div>
        </div>
        {/* gif + hover overlay */}
        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '90wh', margin: '0 auto', borderRadius: '0px', overflow: 'hidden' }}
        >
          <a
            href="/work/observable"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '90vw',
              height: '100%',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <img
              src="/shannon.gif"
              alt="Shannon Diversity Index Visualization"
              width={1500}
              height={600}
              style={{
                width: '100%',
                maxWidth: '100vw',
                height: 'auto',
                display: 'block',
                borderRadius: '0px',
              }}
            />
            <div
              className="hover-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#060606',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                borderRadius: '0px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'left',
                  gap: '1rem',
                  color: 'white',
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                Try it out
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  style={{ transform: 'rotate(45deg)' }}
                >
                  <path
                    d="M5 19V5h14"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M19 5L5 19"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <style jsx>{`
          a:hover .hover-overlay {
            opacity: 0.85 !important;
          }
        `}</style>
      </section>

      <section id="notebook-cycling" className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
          width="100%"
          height="600"
          frameBorder="1"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="SFC Hello Cycling"
        ></iframe>
        <div id="obs-medical"></div>
      </section>

      <section id="notebook-shannon" className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="Shannon Diversity Index Calculator & Visualizer"
        ></iframe>
      </section>

      <section id="notebook" style={{ maxWidth: '900px', margin: '3rem auto' }}>
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
          width="100%"
          height="600"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          frameBorder="0"
          title="Medical Expenses in Japan"
        ></iframe>
      </section>

    </main>
  )
}