import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const sectionStyle = {
    padding: '5rem 0', // Vertical padding only, let grid or container handle horizontal gap
    boxSizing: 'border-box',
    width: '100%',
    background: '#fff', // or your desired section background
  };

  const containerStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headingWrapper = {
    textAlign: 'center',
    marginBottom: '4rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    marginTop: 0,
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  };

  const paragraphStyle = {
    fontSize: '0.875rem',
    color: '#64748b',
    maxWidth: 720,
    margin: '0 auto',
    lineHeight: 1.7,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    boxSizing: 'border-box',
    maxWidth: 1050,
    margin: '0 auto',
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  };

  // Background gradient circle on top-right corner for cards
  const cardBgCircle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 128,
    height: 128,
    background: 'linear-gradient(135deg, #b90a82ff, #f4aa8a)',
    opacity: 0.1,
    borderRadius: '50%',
    transform: 'translate(25%, -50%)',
    transition: 'transform 0.7s',
  };

  const iconContainerStyle = {
    width: 64,
    height: 64,
    background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  };

  const cardHeading = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1e293b',
    textAlign: 'left',
  };

  const cardText = {
    color: '#64748b',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    textAlign: 'justify',
  };

  const listItem = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    color: '#64748b',
    fontSize: '0.875rem',
    textAlign: 'justify',
  };

  const bullet = {
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginTop: 6,
    flexShrink: 0,
    backgroundColor: '#ca2061',
  };

  return (
    <section id="vision-mission" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headingWrapper}>
          <h2 style={headingStyle}>
            Our <span style={gradientTextStyle}>Vision & Mission</span>
          </h2>
          <p style={paragraphStyle}>
            Guided by our commitment to maternal health and wellbeing, we strive to create{' '}
            a world where every pregnancy journey is supported with care and compassion.
          </p>
        </div>

        <div style={gridStyle} className="vision-mission-grid">
          {/* Vision Card */}
          <div
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.querySelector('.bg-circle').style.transform =
                'translate(25%, -50%) scale(1.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('.bg-circle').style.transform =
                'translate(25%, -50%) scale(1)';
            }}
          >
            <div className="bg-circle" style={cardBgCircle}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={iconContainerStyle}>
                <Eye size={32} color="white" />
              </div>
              <h3 style={cardHeading}>Our Vision</h3>
              <p style={cardText}>
                To create a world where every expectant mother feels empowered, supported,
                and confident throughout her pregnancy journey. We envision communities
                where maternal health is prioritized and accessible to all.
              </p>
              <div>
                {[
                  'Universal access to quality maternal care',
                  'Empowered and informed mothers',
                  'Strong community support networks',
                ].map((text, idx) => (
                  <div key={idx} style={listItem}>
                    <div style={bullet}></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.querySelector('.bg-circle').style.transform =
                'translate(25%, -50%) scale(1.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('.bg-circle').style.transform =
                'translate(25%, -50%) scale(1)';
            }}
          >
            <div className="bg-circle" style={cardBgCircle}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={iconContainerStyle}>
                <Target size={32} color="white" />
              </div>
              <h3 style={cardHeading}>Our Mission</h3>
              <p style={cardText}>
                To provide comprehensive support, resources, and care for pregnant women
                by connecting them with healthcare professionals, building supportive
                communities, and ensuring access to reliable information.
              </p>
              <div>
                {[
                  'Connect mothers with healthcare professionals',
                  'Provide reliable health information',
                  'Foster supportive community connections',
                  'Advocate for maternal health rights',
                ].map((text, idx) => (
                  <div key={idx} style={listItem}>
                    <div style={bullet}></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width: 1024px) {
          .vision-mission-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
