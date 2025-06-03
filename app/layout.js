// app/layout.js
import Footer from "@/components/common/Footer";
import  Header  from "../components/common/Header";
import "./globals.css";

export const metadata = {
  title: "MOB-EASE Rehab | Physiotherapy & Mobility Aids in Kottayam",
  description:
    "Expert physiotherapy and mobility solutions in Kottayam, Kerala. Empowering women, children, and all with personalized care.",
  keywords: [
    "physiotherapy Kottayam",
    "mobility aids Kerala",
    "women’s health physiotherapy",
    "pediatric rehabilitation",
  ],
  openGraph: {
    title: "MOB-EASE Rehab | Physiotherapy & Mobility Aids",
    description:
      "Personalized physiotherapy and innovative mobility solutions in Kottayam, Kerala.",
    url: "https://mobeaserehab.com",
    type: "website",
    images: ["/images/og-image.jpg"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
