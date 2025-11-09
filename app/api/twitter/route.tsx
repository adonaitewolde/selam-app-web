import { ImageResponse } from "next/og";
import { generateOGImage } from "../shared-og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(generateOGImage("twitter"), {
    width: 1200,
    height: 630,
  });
}

