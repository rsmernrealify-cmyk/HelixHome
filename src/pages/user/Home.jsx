import React from 'react'
import HeroImage from '../../components/user/home/HeroImage'
import ClassRoomCourses from '../../components/user/home/ClassRoomCourses'
import ContactUs from '../../components/user/home/ContactUs'
import Testimonials from '../../components/user/home/Testimonials'
import SalientFeatures from '../../components/user/home/SalientFeatures'
import DirectorsDeskPreview from '../../components/user/home/DirectorDeskPreview'
import HeroSlider from '../../components/user/home/HeroSlider'
import SuccessStories from '../../components/user/home/SuccessStories'
import PopularCourses from '../../components/user/home/PopularCourses'


export default function Home() {
  return (
    <div>
      <HeroImage />
      <ClassRoomCourses />
      <DirectorsDeskPreview />
      <PopularCourses />
      <SalientFeatures />
      <SuccessStories />
      <Testimonials />
      <ContactUs />

    </div>
  )
}
