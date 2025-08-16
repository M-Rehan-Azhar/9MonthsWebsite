import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";


const Contact = () => {
  const gradient = "linear-gradient(to right, #ca2061, #f8bbcf)";

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      description: "Follow us for daily updates and community posts",
      link: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "See inspiring stories and behind-the-scenes content",
      link: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      description: "Get real-time updates and health tips",
      link: "#",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      description: "Direct support and quick communication",
      link: "#",
    },
  ];

  const stats = [
    { number: "5k +", label: "Community Members", color: "#ca2061" },
    { number: "Daily", label: "Health Tips", color: "#ca2061" },
    { number: "24/7", label: "Community Support", color: "#ca2061" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "30px 10px",
        background: 'linear-gradient(to bottom, #fafaf9 0%, #f3f8fe 100%)', 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "0 15px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 15px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "black" }}>
            Connect With{" "}
            <span
              style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Us
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: '#64748b',
              maxWidth: "740px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Stay connected with our community across all platforms. Follow us for updates, support, inspiration,
            and connect with other mothers on their journey.
          </p>
        </div>

        {/* Social Media Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            marginBottom: "40px",
            padding: "0 15px",
          }}
        >
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                style={{
                  background: "white",
                  borderRadius: "18px",
                  padding: "15px 5px",
                  textAlign: "center",
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  minHeight: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                }}
                onClick={() => window.open(platform.link, "_blank")}
                onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#f8f5f2",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 8px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <IconComponent size={28} color="#666" />
                </div>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "9px", color: "#333" }}>
                  {platform.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: '#64748b', lineHeight: 1.4, padding: "0 5px" }}>
                  {platform.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Join the Conversation */}
        <div
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "25px 20px",
            textAlign: "center",
            boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "15px", color: "black" }}>
            Join the Conversation
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: '#64748b',
              margin: "0 auto 25px",
              lineHeight: 1.6,
              maxWidth: "700px",

            }}
          >
            Our social media communities are safe spaces where mothers share experiences, ask questions, and support
            each other. Healthcare professionals also share valuable insights and answer questions to help you make
            informed decisions.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: "center", minWidth: "100px" }}>
                <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: stat.color, marginBottom: "5px" }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "0.875rem", color: "black" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          #contact .social-card {
            min-height: 160px;
          }
        }
        @media (max-width: 768px) {
          #contact div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px;
            justify-items: center;
          }
          #contact .social-card {
            max-width: 280px;
          }
        }
        @media (max-width: 480px) {
          #contact {
            padding: 45px 0;
          }
          #contact div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            max-width: 300px;
            margin: 0 auto 30px;
            padding: 0;
          }
          #contact .social-card {
            min-height: 140px;
            padding: 20px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;