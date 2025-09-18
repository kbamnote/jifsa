import React from 'react'
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

const LandingPage = () => {
  return (
   <>
   <Header/>
   <Navbar/>
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
   <Footer/>
   </>
  )
}

export default LandingPage