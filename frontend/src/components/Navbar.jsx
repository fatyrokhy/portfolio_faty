import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.jsx';

const NAV = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? 'var(--bg-card)'
    : 'transparent';
  const navBorder = scrolled ? '1px solid var(--border)' : '1px solid transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: navBg,
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: navBorder,
      transition: 'all .3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', padding: 0 }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', letterSpacing: '-.01em' }}>
            FR<span style={{ color: 'var(--accent-warm)' }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desk-nav">
          {NAV.map(n => (
            <button key={n.href} onClick={() => scrollTo(n.href)} className="btn btn-ghost" style={{ fontSize: '.83rem' }}>
              {n.label}
            </button>
          ))}
          {/* Theme toggle */}
          <button onClick={toggle} className="btn btn-ghost"
            style={{ width: 36, height: 36, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile */}
        <div style={{ display: 'none', alignItems: 'center', gap: 8 }} className="mob-nav">
          <button onClick={toggle} className="btn btn-ghost"
            style={{ width: 36, height: 36, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="btn btn-ghost"
            style={{ width: 36, height: 36, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '12px 24px 20px' }}>
          {NAV.map(n => (
            <button key={n.href} onClick={() => scrollTo(n.href)}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '11px 0', fontSize: '.95rem', color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}>
              {n.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) { .desk-nav { display: none !important; } .mob-nav { display: flex !important; } }
      `}</style>
    </nav>
  );
}
