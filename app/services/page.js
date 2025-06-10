
import KottayamClinic from "@/components/services/KottayamClinic";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import SuccessStories from "@/components/services/SuccessStories";
import React from "react";

export default function page() {
  return (
    <main>
      <ServicesHero/>
      <ServicesOverview/>
      <KottayamClinic/>
      <SuccessStories/>
    </main>
  );
}
