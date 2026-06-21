import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #111111 0%, #202020 55%, #f4c400 130%)",
          color: "white",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#f4c400" }}>Yolic Platform</div>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontSize: 86, lineHeight: 1.05, fontWeight: 900 }}>Building Brands. Powering Businesses.</div>
          <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.82)" }}>
            Corporate website, CMS, CRM, analytics, blog, SEO center, media library, and staff dashboard in one growth-ready platform.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
