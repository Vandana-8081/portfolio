import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// LinkedIn / WhatsApp par link share karne pe ye image dikhegi
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const layers = [
    { name: "React", color: "#9497ff" },
    { name: "Express + Node.js", color: "#f2a93b" },
    { name: "MongoDB", color: "#34c3b0" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#12152a",
          color: "#eceef8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: "-0.03em" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 44, color: "#a3a8c6", marginTop: 8 }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {layers.map((layer) => (
            <div
              key={layer.name}
              style={{
                display: "flex",
                padding: "18px 28px",
                borderRadius: 18,
                border: `3px solid ${layer.color}`,
                color: layer.color,
                fontSize: 34,
              }}
            >
              {layer.name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
