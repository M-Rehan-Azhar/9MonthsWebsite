import { UserCheck, Stethoscope, QrCode } from 'lucide-react';
import qrPlaceholder from '../assets/qr-placeholder.png';

const QRRegister = () => {
  // Brand gradients/colors
  const mainGradient = 'linear-gradient(to right, #ca2061, #ec7ea3ff)';
  const lightPink = "#ffffff";
  const cardShadow = "0 2px 8px 0 rgba(202,32,97,0.15)";
  const accentColor = "#ca2061";

  return (
    <section
      id="register"
      style={{
        padding: "5rem 0",
        background: lightPink,
        fontFamily: "Inter, system-ui, sans-serif",
        boxShadow: '0 4px 15px #ecdde7ff',
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem", 
 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Join Our{" "}
            <span
              style={{
                background: mainGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >Community</span>
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Take the first step towards a supported pregnancy journey. Register as an expecting 
            mother or healthcare professional to access our comprehensive support network.
          </p>
        </div>

        {/* Registration Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: 950,
            margin: "0 auto",
          }}
          className="qrreg-cards-grid"
        >
          {/* Mothers */}
          <div
            style={{
              background: "#fff",
              borderRadius: "2rem",
              boxShadow: cardShadow,
              padding: "2.5rem 1.5rem",
              textAlign: "center",
            }}
            className="qrreg-card"
          >
            <div
              style={{
                width: 80,
                height: 80,
                background: mainGradient,
                borderRadius: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <UserCheck size={48} color="#fff" />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "1rem", color: "#000000ff", }}>
              For Expecting Mothers
            </h3>
            <p style={{ color: "#64748b", marginBottom: "2rem", lineHeight: 1.6, fontSize: "0.875rem", textAlign: "center" }}>
              Join our supportive community of mothers. Access resources, connect with 
              healthcare professionals, and share your journey with others who understand.
            </p>
            <div
              style={{
                background: lightPink,
                borderRadius: "1.25rem",
                padding: "1.5rem 1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <QrCode size={24} color={accentColor} />
                <span style={{ fontWeight: 500, color: accentColor }}>Scan to Register</span>
              </div>
              <div
                style={{
                  width: 140,
                  height: 140,
                  margin: "0 auto 0.8rem",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: cardShadow,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={qrPlaceholder}
                  alt="QR Code for Mother Registration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <p style={{ fontSize: "0.875rem", color: "#8a8198", marginBottom: 0 }}>
                Scan with your phone camera or QR reader
              </p>
            </div>
            {/* Features list */}
            <div>
              {[
                "Access to support groups",
                "Educational resources",
                "Healthcare professional network",
                "24/7 support access",
              ].map((txt, idx) => (
                <div key={txt} style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem", textAlign: "left" }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      background: accentColor,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    {txt}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Doctors */}
          <div
            style={{
              background: "#fff",
              borderRadius: "2rem",
              boxShadow: cardShadow,
              padding: "2.5rem 1.5rem",
              textAlign: "center",
            }}
            className="qrreg-card"
          >
            <div
              style={{
                width: 80,
                height: 80,
                background: mainGradient,
                borderRadius: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <Stethoscope size={48} color="#fff" />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "1rem", color: accentColor, color: "#000000ff", }}>
              For Healthcare Professionals
            </h3>
            <p style={{ color: "#64748b", marginBottom: "2rem", lineHeight: 1.6, fontSize: "0.875rem", textAlign: "center" }}>
              Join our network of dedicated healthcare professionals. Help us provide 
              quality care and support to expecting mothers in our community.
            </p>
            <div
              style={{
                background: lightPink,
                borderRadius: "1.25rem",
                padding: "1.5rem 1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <QrCode size={24} color={accentColor} />
                <span style={{ fontWeight: 500, color: accentColor }}>Scan to Register</span>
              </div>
              <div
                style={{
                  width: 140,
                  height: 140,
                  margin: "0 auto 0.8rem",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: cardShadow,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={qrPlaceholder}
                  alt="QR Code for Doctor Registration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <p style={{ fontSize: "0.875rem", color: "#8a8198", marginBottom: 0 }}>
                Scan with your phone camera or QR reader
              </p>
            </div>
            {/* Features list */}
            <div>
              {[
                "Professional network access",
                "Patient referral system",
                "Continuing education resources",
                "Community impact metrics",
              ].map((txt, idx) => (
                <div key={txt} style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem", textAlign: "left" }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      background: accentColor,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    {txt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration note */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "#64748b", maxWidth: 700, margin: "0 auto", fontSize: "0.875rem", lineHeight: "1.6" }}>
            Registration is completely free and confidential. By joining 9Months, you become 
            part of a community dedicated to supporting maternal health and creating positive 
            pregnancy experiences for all.
          </p>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (min-width: 800px) {
          .qrreg-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QRRegister;
