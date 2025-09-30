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
      title="Fire and Safety Course in India | Best Fire Safety Institute | JIFSA Careers"
      description="Leading fire and safety institute in India offering job-oriented courses, diploma, certificate, and degree programs in fire safety, industrial safety, and HSE. 100% placement assistance guaranteed."
      keywords="fire and safety course in india, fire and safety institute in india, fire institute, safety institute, fire & safety course, fire & safety institute, job oriented course, industrial safety course, career in fire and safety, diploma in fire and safety, certificate in fire and safety, best fire safety institute, fire safety training institute india, fire safety education, occupational safety course, workplace safety training, fire fighting training, safety officer course, JIFSA careers, fire safety certification india, HSE course, NEBOSH course india, IOSH course, fire safety engineering, industrial safety management"
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