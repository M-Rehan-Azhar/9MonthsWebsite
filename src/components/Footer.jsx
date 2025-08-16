import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from '../assets/logo.png'; // your logo file

const Footer = () => {
  const gradient = "linear-gradient(to right, #ca2061, #ec7ea3ff)";

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Vision and Mission", id: "vision-mission" },
    { name: "Gallery", id: "gallery" },
    { name: "Register", id: "register" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Services", href: "/terms" },
    { name: "Emergency Resources", href: "/emergency" },
  ];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogoKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <footer
      style={{
        marginTop: "50px",
        backgroundColor: "white",
        borderTop: "1px solid white",
        padding: "3rem 0 1rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
          className="footer-content"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              role="button"
              tabIndex={0}
              onClick={handleLogoClick}
              onKeyDown={handleLogoKeyDown}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
                transition: "transform 0.2s ease",
                marginLeft: '-15px',
        
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label="Scroll to top"
            >
              {/* Replaced Heart icon + text with logo image */}
              <img
                src={logoImg}
                alt="9Months Logo"
                style={{
                  width: 120, // make larger for visibility
                  height: "auto",
                  objectFit: "contain",
                  background: "transparent",
                  display: "block",
                }}
              />
            </div>

            <p
              style={{
                color: '#64748b',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "400px",
                textAlign: "justify",
                fontSize: "0.9rem",
              }}
            >
              Supporting expecting mothers through their pregnancy journey with compassionate
              care, professional guidance, and a strong community network.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Mail size={16} style={{ color: "#ca2061", flexShrink: 0 }} />
                <a
                  href="mailto:support@9months.org"
                  style={{
                    color: '#64748b',
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    fontSize: "0.9rem",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ca2061")}
                  onMouseOut={(e) => (e.target.style.color = "#64748b")}
                >
                  support@9months.org
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} style={{ color: "#ca2061", flexShrink: 0 }} />
                <a
                  href="tel:05123212"
                  style={{
                    color: '#64748b',
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    fontSize: "0.9rem",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ca2061")}
                  onMouseOut={(e) => (e.target.style.color = '#64748b')}
                >
                  051 23212
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={16} style={{ color: "#ca2061" }} />
                <span style={{ color: '#64748b', fontSize: '0.9rem'}}>
                  123 Street, Health City
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              paddingLeft: "1rem",
              marginTop: "0.9rem",
            }}
            className="footer-right"
          >
            {/* Quick Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "justify" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#000", margin: 0, paddingLeft: '4px' }}>
                Quick Links
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  textAlign: "justify",
                }}
              >
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      type="button"
                      style={{
                        background: "none",
                        border: "none",
                        color: '#64748b',
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                        fontFamily: "inherit",
                        width: "100%",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#ca2061")}
                      onMouseOut={(e) => (e.target.style.color = '#64748b')}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#000", margin: 0, textAlign: "justify" }}>
                Support
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "justify",
                }}
              >
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      style={{
                        color: '#64748b',
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                        display: "block",
                        width: "100%",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#ca2061")}
                      onMouseOut={(e) => (e.target.style.color = '#64748b')}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #00000080", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "#00000080", fontSize: "0.9rem", margin: 0 }}>
            © 2025 9Months. All rights reserved.
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
          .footer-right {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-content {
            grid-template-columns: 2fr 1fr !important;
            gap: 4rem !important;
          }
          .footer-right {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-content {
            gap: 1.5rem !important;
          }
          .footer-right {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
            padding-left: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
