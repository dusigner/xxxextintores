import { useEffect, useRef, useState } from 'react';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navigationConfig.brandMark && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '20px 4vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.5s ease',
        backgroundColor: scrolled ? 'rgba(5, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Brand */}
      <div
        className="font-serif-display"
        style={{
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '0.15em',
          color: '#FFFFFF',
        }}
      >
        {navigationConfig.brandMark}
      </div>

      {/* Desktop Nav */}
      <div
        style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}
        className="nav-desktop"
      >
        {navigationConfig.links.map((item) => (
          <button
            key={item.targetId}
            onClick={() => handleNavClick(item.targetId)}
            className="font-sans-body"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              opacity: 0.6,
              fontSize: '14px',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'opacity 0.4s ease',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = '0.6';
            }}
          >
            {item.label}
          </button>
        ))}

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick('contact')}
          className="font-sans-body"
          style={{
            background: '#C41E3A',
            color: '#ffffff',
            border: 'none',
            borderRadius: '40px',
            padding: '10px 24px',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E0304A';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#C41E3A';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          ORÇAMENTO
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="nav-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
        }}
        aria-label="Menu"
      >
        <div
          style={{
            width: '24px',
            height: '2px',
            background: '#ffffff',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <div
          style={{
            width: '24px',
            height: '2px',
            background: '#ffffff',
            margin: '6px 0',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <div
          style={{
            width: '24px',
            height: '2px',
            background: '#ffffff',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(5, 10, 15, 0.95)',
            backdropFilter: 'blur(12px)',
            padding: '24px 4vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navigationConfig.links.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className="font-sans-body"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                opacity: 0.8,
                fontSize: '16px',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                padding: '8px 0',
                textAlign: 'left',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="font-sans-body"
            style={{
              background: '#C41E3A',
              color: '#ffffff',
              border: 'none',
              borderRadius: '40px',
              padding: '14px 24px',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 500,
              marginTop: '8px',
            }}
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
