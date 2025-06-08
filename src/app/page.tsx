export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>Kenta Tanaka is a designer</h2>
          <h3>improving experience with computer interactions.</h3>
          <p className="role">Born and raised in Yokohama, Japan.</p>
        </div>
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
      <section id="notebook" style={{ maxWidth: '900px', margin: '3rem auto' }}>
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
          width="100%"
          height="600"
          frameBorder="0"
          title="Medical Expenses in Japan"
        ></iframe>
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
    </main>
  )
}