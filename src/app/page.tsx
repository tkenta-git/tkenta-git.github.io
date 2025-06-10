// src/app/page.tsx
'use client';

import ProjectHeader from '../components/ProjectHeader'; // ProjectHeaderをインポート

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

      {/* --- 可視化エリア 新デザイン (Shannon Diversity Index) --- */}
      <section className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        {/* 既存のProjectHeaderと同じ内容をPropsとして渡す */}
        <ProjectHeader
          title="Shannon Diversity Index Calculator & Visualizer"
          date="Jun 2025"
          description="This program is a Shannon Diversity Index Calculator & Visualizer, designed within a reactive JavaScript notebook environment. It facilitates data exploration and the creation of interactive data visualizations. The platform provides a collaborative space for visual data analysis and dashboard development, offering extensive resources for users."
        />
        {/* gif + hover overlay の部分はそのまま残す */}
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
                alignItems: 'left',
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
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                }}
              >
                Try it out
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  style={{ transform: 'rotate(90deg)' }}
                >
                  <path
                    d="M5 19V5h14"
                    stroke="white"
                    strokeWidth="1"
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

      {/* --- Cycling Project Section --- */}
      <section id="notebook-cycling" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title="SFC Hello Cycling Data Analysis"
          date="May 2025"
          description="This project analyzes cycling data from SFC Hello Cycling, offering insights into usage patterns and trends through interactive visualizations within an Observable notebook."
        />
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

      {/* --- Shannon Diversity Index (Embedded) Section --- */}
      <section id="notebook-shannon" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title="Shannon Diversity Index Calculator & Visualizer (Embedded)"
          date="Jun 2025"
          description="This is an embedded version of the Shannon Diversity Index Calculator & Visualizer, demonstrating its interactive features directly within the page."
        />
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="Shannon Diversity Index Calculator & Visualizer"
        ></iframe>
      </section>

      {/* --- Medical Expenses in Japan Section --- */}
      <section id="notebook" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title="Medical Expenses in Japan Analysis"
          date="Apr 2025"
          description="An Observable notebook that provides a detailed analysis and visualization of medical expenses in Japan, exploring trends and key factors."
        />
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