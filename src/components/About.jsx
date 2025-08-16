import { Heart, Users, Shield } from 'lucide-react';

const About = () => {
  const gradientBg = "linear-gradient(to bottom, #fafaf9 0%, #f3f8fe 100%)";
  return (
    <section
      id="about"
      style={{
        padding: 0,
        boxSizing: 'border-box',
        width: '100%',
        marginTop: '-32px',
        background: gradientBg,
      }}
    >
      <div
        style={{
          width: '100%',
          boxSizing: 'border-box',
           padding: '5rem 5rem', // increased horizontal padding
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#000',
            }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              9Months
            </span>
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#64748b',
              maxWidth: 720,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            9Months is a compassionate organization dedicated to supporting pregnant women
            throughout their journey to motherhood. We believe every mother deserves access
            to quality care, emotional support, and reliable information during this
            transformative time.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',

          }}
        >
          {[
            {
              icon: <Heart size={32} color="#fff" />,
              title: 'Compassionate Care',
              text: 'Providing emotional support and understanding throughout your pregnancy journey.',
            },
            {
              icon: <Users size={32} color="#fff" />,
              title: 'Community Support',
              text: 'Connecting mothers with a supportive community of peers and healthcare professionals.',
            },
            {
              icon: <Shield size={32} color="#fff" />,
              title: 'Trusted Resources',
              text: 'Access to reliable information and professional guidance for informed decisions.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: '1.5rem',
                borderRadius: '1.25rem',
                backgroundColor: '#fff',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: 'linear-gradient(to right, #ca2061, #ec7ea3ff)',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: '#000',
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: '#64748b', margin: 0, fontSize: '0.875rem' }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div
          style={{
            borderRadius: '1.25rem',
            backgroundColor: '#fff',
            padding: '2rem',
            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
            boxSizing: 'border-box',

          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#000',
                }}
              >
                Our Commitment to Mothers
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: 1.7,
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontSize: '0.875rem',
                }}
              >
                At 9Months, we understand that pregnancy is a unique and personal experience.
                Our dedicated team works tirelessly to ensure that every expectant mother has
                access to the support, resources, and care they need.
                From connecting mothers with healthcare professionals to providing educational
                resources and emotional support, we are here every step of the way. Our
                community-driven approach creates a safe space where mothers can share
                experiences, ask questions, and find comfort in knowing they are not alone.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                boxSizing: 'border-box',
              }}
            >
              {[
                ['500+', 'Mothers Supported'],
                ['50+', 'Healthcare Partners'],
                ['24/7', 'Support Available'],
                ['100%', 'Confidential'],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '0.75rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ca2061' }}>
                    {num}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
