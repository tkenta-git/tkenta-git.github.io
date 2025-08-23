import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Extract current language from pathname
  let lang = 'ja'; // default to Japanese
  
  if (pathname?.startsWith('/en')) {
    lang = 'en';
  } else if (pathname?.startsWith('/ja')) {
    lang = 'ja';
  } else if (pathname === '/') {
    // For root page, check if we're in an English context
    // This might need to be adjusted based on your routing logic
    lang = 'en'; // Assuming root page is English for now
  }
  
  // Debug: log current values
  console.log('Header - pathname:', pathname, 'lang:', lang);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        
        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link href={navHref('/work')} className="nav-link">Work</Link></li>
            <li className="nav-item"><Link href={navHref('/about')} className="nav-link">About</Link></li>
            <li className="nav-item"><Link href={navHref('/contact')} className="nav-link">Contact</Link></li>
            <li className="nav-item lang-switch" style={{ marginLeft: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ position: 'relative' }}>
                <Link 
                  href={getLangPath('ja')} 
                  style={{
                    color: '#222',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                >
                  JA
                </Link>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  bottom: '-1px',
                  width: '100%',
                  height: '1px',
                  background: '#222',
                  transform: lang === 'ja' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                }} />
              </div>
              <span style={{ color: '#bbb', fontSize: '1rem', userSelect: 'none' }}>/</span>
              <div style={{ position: 'relative' }}>
                <Link 
                  href={getLangPath('en')} 
                  style={{
                    color: '#222',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                >
                  EN
                </Link>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  bottom: '-1px',
                  width: '100%',
                  height: '1px',
                  background: '#222',
                  transform: lang === 'en' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                }} />
              </div>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {/* Close Button */}
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <span>×</span>
            </button>
            
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link href={navHref('/work')} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  Work
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href={navHref('/about')} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href={navHref('/contact')} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="mobile-nav-item mobile-lang-switch">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                  <Link 
                    href={getLangPath('ja')} 
                    style={{
                      color: lang === 'ja' ? '#222' : '#bbb',
                      fontWeight: lang === 'ja' ? 600 : 400,
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    JA
                  </Link>
                  <span style={{ color: '#bbb', fontSize: '1rem', userSelect: 'none' }}>/</span>
                  <Link 
                    href={getLangPath('en')} 
                    style={{
                      color: lang === 'en' ? '#222' : '#bbb',
                      fontWeight: lang === 'en' ? 600 : 400,
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EN
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
