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
          background: "radial-gradient(circle at 50% 30%, #222 0%, #000 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: "900px",
            height: "440px",
            background: "#ff3b30",
            opacity: 0.12,
            filter: "blur(120px)",
            top: "100px",
          }}
        />

        {/* Brand */}
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-1px",
            marginBottom: "20px",
          }}
        >
          kemey
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#ddd",
            marginBottom: "50px",
          }}
        >
          Learn Tigrinya the new way
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 30,
            color: "#888",
          }}
        >
          kemey.app
        </div>

        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            width: "14px",
            height: "14px",
            background: "#ff9500",
            borderRadius: "50%",
            opacity: 0.7,
            top: "180px",
            left: "250px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "18px",
            height: "18px",
            background: "#ffcc00",
            borderRadius: "50%",
            opacity: 0.6,
            bottom: "180px",
            right: "250px",
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

