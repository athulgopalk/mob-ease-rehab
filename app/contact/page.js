import ClinicInformation from "@/components/contact/ClinicInformation";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import FAQSection from "@/components/contact/FAQSection";
import WhatsAppSocials from "@/components/contact/WhatsAppSocials";
import React from "react";

export default function page() {
  return (
    <main>
      <ContactHero/>
      <ContactForm/>
      <ClinicInformation/>
      <WhatsAppSocials/>
      <FAQSection/>
    </main>
  );
}
