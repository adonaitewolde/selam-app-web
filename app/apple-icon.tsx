import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "system-ui",
            letterSpacing: "-2px",
          }}
        >
          kemey
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

