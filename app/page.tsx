import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Highlights from "@/components/Highlights";
import ChefTips from "@/components/ChefTips";
import Promotions from "@/components/Promotions";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservations from "@/components/Reservations";
import Delivery from "@/components/Delivery";
import Location from "@/components/Location";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { restaurantConfig } from "@/lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bardojaba.com.br";

function isFilled(value: string | null | undefined): value is string {
  return typeof value === "string" && value.length > 0 && !value.includes("[PREENCHER");
}

const dayNames: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

function buildRestaurantJsonLd() {
  const { name, tagline, whatsapp, phone, instagram, address, hours, seo } =
    restaurantConfig;

  const openingHoursSpecification = Object.entries(hours)
    .filter(
      ([, day]) => !day.closed && isFilled(day.open) && isFilled(day.close),
    )
    .map(([day, dayHours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[day]}`,
      opens: dayHours.open,
      closes: dayHours.close,
    }));

  const sameAs = isFilled(instagram)
    ? [`https://instagram.com/${instagram}`]
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name,
    slogan: tagline,
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    servesCuisine: ["Brasileira", "Churrasco"],
    priceRange: "$$",
    hasMenu: `${siteUrl}/#cardapio`,
    ...(isFilled(phone)
      ? { telephone: phone }
      : isFilled(whatsapp)
        ? { telephone: `+${whatsapp}` }
        : {}),
    ...(isFilled(address.street) && isFilled(address.city)
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: isFilled(address.state) ? address.state : undefined,
            postalCode: isFilled(address.zipCode) ? address.zipCode : undefined,
            addressCountry: "BR",
          },
        }
      : {}),
    ...(address.coordinates.lat && address.coordinates.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: address.coordinates.lat,
            longitude: address.coordinates.lng,
          },
        }
      : {}),
    ...(openingHoursSpecification.length > 0
      ? { openingHoursSpecification }
      : {}),
    ...(sameAs ? { sameAs } : {}),
  };
}

export default function Home() {
  const jsonLd = buildRestaurantJsonLd();

  return (
    <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ember focus:px-6 focus:py-3 focus:font-semibold focus:text-on-accent"
      >
        Pular para o conteúdo
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <Menu />
        <ChefTips />
        <Promotions />
        <Gallery />
        <Reviews />
        <Reservations />
        <Delivery />
        <Location />
        <Hours />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
