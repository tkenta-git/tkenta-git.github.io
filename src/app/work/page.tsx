export default function Work() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>Selected Works</h2>
          <h3>Data visualization and interaction design projects.</h3>
        </div>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
          width="100%"
          height="600"
          frameBorder="1"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="SFC Hello Cycling"
        ></iframe>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="Shannon Diversity Index Calculator & Visualizer"
        ></iframe>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title="Medical Expenses in Japan"
        ></iframe>
      </section>
      <section className="card">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <a href="/work/observable" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#4C92D9',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background-color 0.3s ease'
        }}>
          View Interactive Version
        </a>
      </div>
    </section>
    </main>
    
  );
}