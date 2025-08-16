import { useState } from 'react';
import { X } from 'lucide-react';
import community1 from '../assets/community-1.jpg';
import community2 from '../assets/community-2.jpg';
import community3 from '../assets/community-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const gradient = 'linear-gradient(to right, #ca2061, #ec7ea3ff)';

  const images = [
    {
      src: community1,
      title: 'Community Support',
      description: 'Bringing together expecting mothers in a supportive environment',
    },
    {
      src: community2,
      title: 'Professional Care',
      description: 'Connecting mothers with experienced healthcare professionals',
    },
    {
      src: community3,
      title: 'Wellness Programs',
      description: 'Promoting health and wellness throughout pregnancy',
    },
  ];

  return (
    <section
      id="gallery"
      style={{
            padding: '5rem 1rem',
            background: 'linear-gradient(to bottom, #fafaf9 0%, #f3f8fe 100%)', 
            boxSizing: 'border-box',
            width: '100%',
            boxShadow: '0 4px 15px #ecdde7ff',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Our{' '}
            <span
              style={{
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Community
            </span>
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#64748b',
              maxWidth: 720,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            See how 9Months brings together mothers, healthcare professionals, and supporters to
            create a caring community focused on maternal health and wellbeing.
          </p>
        </div>

        {/* Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 80%)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
                className="overlay"
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    color: 'white',
                  }}
                >
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                    {image.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              padding: '1rem',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div style={{ position: 'relative', maxWidth: '80%', maxHeight: '80%' }}>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: 0,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '0.5rem',
                }}
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
              Join Our Growing Community
            </h3>
            <p
              style={{
                color: '#64748b',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
              }}
            >
              Be part of a supportive network that celebrates the journey of motherhood.
              Share experiences, gain insights, and build lasting connections with other mothers
              and healthcare professionals who understand your journey.
            </p>
            <button
              onClick={() =>
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                background: gradient,
                color: '#fff',
                padding: '0.85rem 2rem',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(202,32,97,0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>

      {/* Simple overlay hover effect */}
      <style>{`
        .overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
