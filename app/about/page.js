
import AboutHero from "@/components/about/AboutHero";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import OurImpact from "@/components/about/OurImpact";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import React from "react";

export default function page() {
  return (
    <main>
      <AboutHero/>
      <OurStory/>
   <VisionMission/>
   <OurImpact/>
   <MeetOurTeam/>
    </main>
  );
}
