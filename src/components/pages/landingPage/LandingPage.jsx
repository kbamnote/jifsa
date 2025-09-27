import React, { memo } from 'react'
import Header from '../../common/Header'
import Navbar from '../../common/Navbar'
import LazySection from '../../common/LazySection'

// Lazy load heavy components individually for better performance
const HeroCaraousel = React.lazy(() => import('./HeroCaraousel'))
const HonourPage = React.lazy(() => import('./HonourPage'))
const RungtaSection = React.lazy(() => import('./RungtaSection'))
const BvocCourses = React.lazy(() => import('./BvocCourses'))
const EmphasizeSection = React.lazy(() => import('./EmphasizeSection'))
const FirstAidSection = React.lazy(() => import('./FirstAidSection'))
const CoursesTableOne = React.lazy(() => import('../../tables/CoursesTableOne'))
const CoursesTableTwo = React.lazy(() => import('../../tables/CoursesTableTwo'))
const CoursesTableThree = React.lazy(() => import('../../tables/CoursesTableThree'))
const ConnectExperts = React.lazy(() => import('./ConnectExperts'))
const CareerFlowchart = React.lazy(() => import('./CareerFlowchart'))
const JifsaSuccess = React.lazy(() => import('./JifsaSuccess'))
const Presence = React.lazy(() => import('./Presence'))
const PlacementSection = React.lazy(() => import('./PlacementSection'))
const RecruiterAndVideos = React.lazy(() => import('./RecriterAndVideos'))
const StudentReviews = React.lazy(() => import('./StudentReviews'))
const ContactForm = React.lazy(() => import('./ContactForm'))
const Footer = React.lazy(() => import('../../common/Footer'))
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
     <LazySection component={HeroCaraousel} />
     <LazySection component={HonourPage} />
     <LazySection component={RungtaSection} />
     <LazySection component={BvocCourses} />
     <LazySection component={EmphasizeSection} />
     <LazySection component={FirstAidSection} />
     <LazySection component={CoursesTableOne} />
     <LazySection component={CoursesTableTwo} />
     <LazySection component={CoursesTableThree} />
     <LazySection component={ConnectExperts} />
     <LazySection component={CareerFlowchart} />
     <LazySection component={JifsaSuccess} />
     <LazySection component={Presence} />
     <LazySection component={PlacementSection} />
     <LazySection component={RecruiterAndVideos} />
     <LazySection component={StudentReviews} />
     <LazySection component={ContactForm} />
   </main>
   <LazySection component={Footer} />
   </>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(LandingPage)