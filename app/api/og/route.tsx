import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "400px",
            background: "#ff9500",
            opacity: 0.15,
            filter: "blur(100px)",
            top: "50px",
          }}
        />

        {/* Brand */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: "20px",
          }}
        >
          kemey
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "#e0e0e0",
            marginBottom: "40px",
          }}
        >
          Learn Tigrinya the new way
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 32,
            color: "#999",
          }}
        >
          kemey.app
        </div>

        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            background: "#ff9500",
            borderRadius: "50%",
            opacity: 0.6,
            top: "150px",
            left: "200px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "16px",
            height: "16px",
            background: "#ffcc00",
            borderRadius: "50%",
            opacity: 0.5,
            bottom: "150px",
            right: "200px",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

