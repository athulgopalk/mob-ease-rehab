import BookConsultation from '@/components/home/BookConsultation'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import OurServicesSnapshot from '@/components/home/OurServicesSnapshot'
import PatientStories from '@/components/home/PatientStories'
import WhyMobease from '@/components/home/WhyMobease'
import React from 'react'

export default function page() {
  return (
    <main>
      <Hero/>
      <WhyMobease/>
      <FeaturedProducts/>
      <OurServicesSnapshot/>
      <PatientStories/>
      <BookConsultation/>
    </main>
  )
}
