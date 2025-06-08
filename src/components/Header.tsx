import Link from 'next/link';

export default function Header() {
  return (
    <header id="top" className="header" data-bg="#FFFFFF">
      <div className="container header-inner">
        <h1 className="logo">
          Kenta Tanaka<br />
        </h1>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link href="/about">About</Link></li>
            <li className="nav-item"><Link href="/work">Work</Link></li>
            <li className="nav-item"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
