export default function Contact() {
  return (
    <main className="about-main">
      <section className="about-intro">
        <div className="about-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div className="about-text">
            <p className="lead">
              Feel free to reach out if you&apos;d like to work together or just want to say hello.
            </p>
            <p className="description">
              Email: <a href="mailto:contact@kentatanaka.com" style={{ color: 'inherit', textDecoration: 'underline' }}>contact@kentatanaka.com</a><br /><br />
              LinkedIn: <a href="https://linkedin.com/in/kentatanaka" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>linkedin.com/in/kentatanaka</a><br /><br />
              GitHub: <a href="https://github.com/kenta-tanaka" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>github.com/kenta-tanaka</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}