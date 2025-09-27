import React, { memo } from 'react'
import Header from '../../common/Header'
import Navbar from '../../common/Navbar'
import HeroCaraousel from './HeroCaraousel'
import HonourPage from './HonourPage'
import RungtaSection from './RungtaSection'
import BvocCourses from './BvocCourses'
import EmphasizeSection from './EmphasizeSection'
import FirstAidSection from './FirstAidSection'
import CoursesTableOne from '../../tables/CoursesTableOne'
import CoursesTableTwo from '../../tables/CoursesTableTwo'
import CoursesTableThree from '../../tables/CoursesTableThree'
import ConnectExperts from './ConnectExperts'
import CareerFlowchart from './CareerFlowchart'
import JifsaSuccess from './JifsaSuccess'
import Presence from './Presence'
import PlacementSection from './PlacementSection'
import RecruiterAndVideos from './RecriterAndVideos'
import StudentReviews from './StudentReviews'
import ContactForm from './ContactForm'
import Footer from '../../common/Footer'
import SEO from '../../seo/SEO'

const LandingPage = () => {
  return (
   <>
   <SEO 
      title="JIFSA Careers - Fire & Safety Education and Training | Top Placement"
      description="JIFSA Careers offers professional fire and safety education, training programs, and guaranteed placement assistance. Join India's leading fire safety institute for career growth."
      keywords="JIFSA careers, fire safety training, safety education, fire safety courses, placement assistance, fire safety certification, industrial safety, fire fighting courses, safety training institute, JIFSA Nagpur, fire safety jobs, safety officer training"
    />
   <Header/>
   <Navbar/>
   <main>
     <HeroCaraousel/>
     <HonourPage/>
     <RungtaSection/>
     <BvocCourses/>
     <EmphasizeSection/>
     <FirstAidSection/>
     <CoursesTableOne/>
     <CoursesTableTwo/>
     <CoursesTableThree/>
     <ConnectExperts/>
     <CareerFlowchart/>
     <JifsaSuccess/>
     <Presence/>
     <PlacementSection/>
     <RecruiterAndVideos/>
     <StudentReviews/>
     <ContactForm/>
   </main>
   <Footer/>
   </>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(LandingPage)