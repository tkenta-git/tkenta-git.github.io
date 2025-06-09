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
              LinkedIn: <a href="https://www.linkedin.com/in/kenta-tanaka-380491254/" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>linkedin.com/in/kenta-tanaka</a><br /><br />
              GitHub: <a href="https://github.com/tkenta-git" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>github.com/tkenta-git</a><br /><br />
              Observable: <a href="https://observablehq.com/@kenta-tanaka" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>observablehq.com/@kenta-tanaka</a><br /><br />
              Photography: <a href="https://tkenta.myportfolio.com/work" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>tkenta.myportfolio.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}