import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "kemey – Learn Tigrinya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg,#000,#111)",
          color: "white",
          textAlign: "center",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -1,
            marginBottom: 16,
          }}
        >
          kemey
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Learn Tigrinya the new way
        </div>
        <div style={{ fontSize: 24, opacity: 0.7, marginTop: 24 }}>kemey.app</div>
      </div>
    ),
    {
      ...size,
    }
  );
}


