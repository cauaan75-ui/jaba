import { ImageResponse } from "next/og";
import { restaurantConfig } from "@/lib/config";

export const alt = restaurantConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #171717 0%, #513625 55%, #171717 100%)",
          color: "#FFFDF8",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#E87524",
            marginBottom: 28,
          }}
        >
          {restaurantConfig.tagline}
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.1 }}>
          {restaurantConfig.name}
        </div>
        <div
          style={{
            width: 180,
            height: 8,
            background: "#E87524",
            margin: "36px 0",
            borderRadius: 999,
          }}
        />
        <div style={{ fontSize: 34, color: "#F3E8D5", maxWidth: 850 }}>
          Self-service, churrasco e comida brasileira feita com carinho.
        </div>
      </div>
    ),
    size,
  );
}
