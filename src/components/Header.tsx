import Link from 'next/link';

export default function Header() {
  return (
    <header id="top" className="header" data-bg="#FFFFFF">
      <div className="container header-inner">
        <h1 className="logo">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.05s ease' }} className="hover-effect">
            Kenta Tanaka<br />
          </Link>
        </h1>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link href="/work" className="nav-link">Work</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
