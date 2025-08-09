import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src={heroImage}
          alt="Maternal care and support"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(253, 242, 248, 0.85) 40%, rgba(253, 242, 248, 0) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          padding: '0 5vw',
        }}
      >
        <div
          className="hero-content"
          style={{
            maxWidth: 510,
            textAlign: 'left',
            color: '#1e293b',
            marginTop: '-10vh',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              lineHeight: 1.2,
              marginBottom: '1.3rem',
            }}
          >
            Supporting Your{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Journey
            </span>{' '}
            through Pregnancy
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#475569',
              marginBottom: '2rem',
            }}
          >
            9Months is dedicated to providing comprehensive support, resources, and care
            for expecting mothers throughout their pregnancy journey. Join our community
            of caring professionals and mothers.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={scrollToAbout}
              style={{
                background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
                color: '#fff',
                padding: '0.85rem 1.7rem',
                border: 'none',
                borderRadius: 999,
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Learn More About Us
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                background: 'transparent',
                border: '2px solid #ca2061',
                color: '#ca2061',
                padding: '0.85rem 1.7rem',
                borderRadius: 999,
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#ca2061';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ca2061';
              }}
            >
              Register Today
            </button>
          </div>
        </div>
      </div>

      {/* Centered ChevronDown Icon */}
      <div
        style={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          animation: 'bounce 2s infinite',
        }}
      >
        <button
          type="button"
          onClick={scrollToAbout}
          className="scroll-icon-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s',
            color: 'black',
          }}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
        <style>{`
          .scroll-icon-btn:hover svg {
            stroke: #ca2061;
            transition: stroke 0.3s;
            transform: scale(1.15);
          }
          .scroll-icon-btn:active svg {
            transform: scale(0.95);
          }
          .scroll-icon-btn svg {
            transition: stroke 0.3s, transform 0.3s;
          }
        `}</style>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @media (max-width: 768px) {
          .hero-content {
            margin: 0 auto !important;
            max-width: 95vw !important;
            text-align: center !important;
          }
          .hero-content h1 {
            font-size: 1.8rem !important;
          }
          .hero-content div {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
