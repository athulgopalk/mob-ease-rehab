import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ResponsiveHeader from "@/components/common/ResponsiveHeader";
import "./globals.css";

export const metadata = {
  title: "MOB-EASE Rehab | Physiotherapy & Mobility Aids in Kottayam",
  description:
    "At Mob Ease Rehabilitation Centre, Kottayam, we specialize in Stroke Recovery, Paralysis Management, and Spinal Cord Injury Rehab. Visit us in Kottayam for evidence-based NeuroRehabilitation and personalized physiotherapy and mobility solutions in Kerala.",
  keywords: [
    "physiotherapy Kottayam",
    "mobility aids Kerala",
    "women’s health physiotherapy",
    "pediatric rehabilitation",
    "Kottayam Rehab",
    "Kottayam Physiotherapy",
    "Mob Ease Kottayam",
    "Physiotherapy Kottayam",
    "Rehab Centre Kottayam",
    "stroke rehab Kottayam",
    "NeuroRehabilitation Kottayam",
    "Stroke Recovery Kottayam",
    "Paralysis Care",
    "Spinal Cord Injury Rehab Kottayam",
    "Stroke Rehab",
    "SCI Rehab Kerala",
    "Paralysis Management",
    "Physiotherapy Clinic Kottayam",
    "Kerala Physio Care",
    "Rehabilitation India",
  ],
  icons: {
    icon: "/favicon.ico", // Path to favicon in public directory
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional: For Apple devices
  },
  openGraph: {
    title: "MOB-EASE Rehab | Physiotherapy & Mobility Aids",
    description:
      "At Mob Ease Rehabilitation Centre, Kottayam, we specialize in #StrokeRecovery, #ParalysisManagement, and #SpinalCordInjuryRehab. Visit us in #Kottayam for evidence-based #NeuroRehabilitation and personalized physiotherapy solutions. #MobEaseKottayam #KeralaPhysioCare",
    url: "https://mobeaserehab.com",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MOB-EASE Rehab Centre in Kottayam",
      },
    ],
    siteName: "MOB-EASE Rehab",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOB-EASE Rehab | Physiotherapy & Mobility Aids in Kottayam",
    description:
      "Specializing in #StrokeRecovery, #ParalysisManagement, and #SpinalCordInjuryRehab at Mob Ease Rehabilitation Centre in #Kottayam. #NeuroRehabilitation #MobEaseKottayam",
    images: ["/images/og-image.jpg"],
    creator: "@MobEaseKottayam", // Replace with your Twitter handle, if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MOB-EASE Rehabilitation Centre",
              description:
                "Specializing in Stroke Recovery, Paralysis Management, and Spinal Cord Injury Rehab in Kottayam, Kerala.",
              url: "https://mobeaserehab.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kottayam",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              telephone: "+919496095810", // Replace with your actual contact number
              image: "https://mobeaserehab.com/images/og-image.jpg",
              sameAs: [
                "https://twitter.com/MobEaseKottayam", // Replace with actual social media links
                "https://www.facebook.com/MobEaseRehab", // Add if applicable
              ],
            }),
          }}
        />
      </head>
      <body className="font-poppins">
        <ResponsiveHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
