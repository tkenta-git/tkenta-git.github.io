import Link from 'next/link';
import { useTranslations } from '../app/[lang]/i18n';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { lang } = useTranslations?.() || { lang: 'ja' };
  const pathname = usePathname();

  // Helper to swap /ja or /en in the current path
  function getLangPath(targetLang: string) {
    if (!pathname) return `/${targetLang}`;
    if (pathname.startsWith('/ja')) return `/${targetLang}${pathname.slice(3)}`;
    if (pathname.startsWith('/en')) return `/${targetLang}${pathname.slice(3)}`;
    return `/${targetLang}${pathname}`;
  }

  // Helper to build nav links with current lang
  function navHref(path: string) {
    return `/${lang}${path}`;
  }

  return (
    <header id="top" className="header" data-bg="#FFFFFF">
      <div className="container header-inner">
        <h1 className="logo">
          <Link href={navHref('/')} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.05s ease' }} className="hover-effect">
            Kenta Tanaka<br />
          </Link>
        </h1>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link href={navHref('/work')} className="nav-link">Work</Link></li>
            <li className="nav-item"><Link href={navHref('/about')} className="nav-link">About</Link></li>
            <li className="nav-item"><Link href={navHref('/contact')} className="nav-link">Contact</Link></li>
            <li className="nav-item lang-switch" style={{ marginLeft: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link href={getLangPath('ja')} className={`nav-link${lang === 'ja' ? ' active' : ''}`}>JA</Link>
              <span style={{ color: '#bbb', fontSize: '1rem', userSelect: 'none' }}>/</span>
              <Link href={getLangPath('en')} className={`nav-link${lang === 'en' ? ' active' : ''}`}>EN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
