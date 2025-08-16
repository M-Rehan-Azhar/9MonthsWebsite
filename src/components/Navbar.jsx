import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png'; // Your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    const element = document.getElementById('hero');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };

  const capitalize = (str) =>
    str.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const sections = ['about', 'vision-mission', 'gallery', 'register'];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(253, 242, 248, 0.5)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div
          style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Larger logo image, no background, just the text in the logo */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleLogoClick}
            onKeyDown={handleLogoKeyDown}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              cursor: 'pointer',
              userSelect: 'none',
              paddingLeft: '0', // No border/margin backgrounds
              outline: 'none',
            }}
            aria-label="Scroll to top"
          >
            <img
              src={logoImg}
              alt="9Months Logo"
              style={{
                width: 100, // Bigger, as before
                height: 'auto',
                objectFit: 'contain',
                background: 'transparent',
                display: 'block',
                marginTop: '15px',
                padding: '0',
                borderRadius: '0',

                /* Added effects */
                filter:
                  'drop-shadow(0 2px 4px rgba(0,0,0,0.18)) drop-shadow(0 4px 8px rgba(202, 32, 97, 0.25))',
                transition: 'transform 0.25s ease, filter 0.25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter =
                  'drop-shadow(0 3px 6px rgba(0,0,0,0.25)) drop-shadow(0 6px 12px rgba(202, 32, 97, 0.35))';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter =
                  'drop-shadow(0 2px 4px rgba(0,0,0,0.18)) drop-shadow(0 4px 8px rgba(202, 32, 97, 0.25))';
              }}
            />

          </div>

          {/* Desktop Navigation */}
          <div className="desktop-links" style={{ display: 'none' }}>
            <div className="links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#000',
                    fontSize: '1rem',
                    transition: 'color 0.3s',
                    marginTop: '10px',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#ca2061')}
                  onMouseOut={(e) => (e.target.style.color = '#000')}
                  type="button"
                >
                  {capitalize(id)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: '#ca2061',
                  color: '#fdf2f8',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  marginTop: '10px',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 12px rgba(202, 32, 97, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
                type="button"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              padding: '0.25rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="mobile-menu"
            style={{
              background: '#fdf2f8',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid #f8bbcf',
              padding: '1.5rem 1rem',
            }}
          >
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#000',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#ca2061')}
                onMouseOut={(e) => (e.target.style.color = '#000')}
                type="button"
              >
                {capitalize(id)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'linear-gradient(to right, #ca2061, #f8bbcf)',
                color: '#fdf2f8',
                padding: '0.5rem 1.5rem',
                borderRadius: '999px',
                border: 'none',
                width: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 12px rgba(202, 32, 97, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
              type="button"
            >
              Contact
            </button>
          </div>
        )}
      </div>

      {/* Responsive behavior */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-links {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
