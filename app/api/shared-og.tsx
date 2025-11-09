export function generateOGImage(variant: "og" | "twitter") {
  const isTwitter = variant === "twitter";
  
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: isTwitter
          ? "radial-gradient(circle at 50% 30%, #222 0%, #000 100%)"
          : "linear-gradient(135deg, #000 0%, #1a1a1a 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          width: isTwitter ? "900px" : "800px",
          height: isTwitter ? "440px" : "400px",
          background: isTwitter ? "#ff3b30" : "#ff9500",
          opacity: isTwitter ? 0.12 : 0.15,
          filter: isTwitter ? "blur(120px)" : "blur(100px)",
          top: isTwitter ? "100px" : "50px",
        }}
      />

      {/* Brand */}
      <div
        style={{
          fontSize: isTwitter ? 110 : 120,
          fontWeight: 700,
          color: "white",
          letterSpacing: isTwitter ? "-1px" : "-2px",
          marginBottom: "20px",
        }}
      >
        kemey
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: isTwitter ? 44 : 48,
          fontWeight: 500,
          color: isTwitter ? "#ddd" : "#e0e0e0",
          marginBottom: isTwitter ? "50px" : "40px",
        }}
      >
        Learn Tigrinya the new way
      </div>

      {/* Domain */}
      <div
        style={{
          fontSize: isTwitter ? 30 : 32,
          color: isTwitter ? "#888" : "#999",
        }}
      >
        kemey.app
      </div>

      {/* Decorative dots */}
      <div
        style={{
          position: "absolute",
          width: isTwitter ? "14px" : "12px",
          height: isTwitter ? "14px" : "12px",
          background: "#ff9500",
          borderRadius: "50%",
          opacity: isTwitter ? 0.7 : 0.6,
          top: isTwitter ? "180px" : "150px",
          left: isTwitter ? "250px" : "200px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: isTwitter ? "18px" : "16px",
          height: isTwitter ? "18px" : "16px",
          background: "#ffcc00",
          borderRadius: "50%",
          opacity: isTwitter ? 0.6 : 0.5,
          bottom: isTwitter ? "180px" : "150px",
          right: isTwitter ? "250px" : "200px",
        }}
      />
    </div>
  );
}

