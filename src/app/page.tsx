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
      <section className="notebook-container">
        <div 
          style={{ 
            position: 'relative',
            width: '90vw',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <a href="/work/observable">
            <img
              src="/shannon.gif"
              alt="Shannon Diversity Index Visualization"
              width={900}
              height={600}
              style={{ 
                width: '100%',
                height: 'auto',
                display: 'block'
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
                background: '#111111',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                Try it out
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  style={{
                    transform: 'rotate(45deg)'
                  }}
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
          .hover-overlay:hover {
            opacity: 0.8 !important;
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