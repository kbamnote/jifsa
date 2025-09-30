import React from 'react'
import OnlineCourseHero from './OnlineCourseHero'
import Header from '../../../common/Header'
import Navbar from '../../../common/Navbar'
import Footer from '../../../common/Footer'
import OnlineCoursesTable from '../../../tables/OnlineCourseTable'
import SEO from '../../../seo/SEO'

const OnlineCoursePage = () => {
  return (
   <>
   <SEO 
     title="Online Fire Safety Courses India | Distance Learning Fire Institute | JIFSA"
     description="Join our online fire safety courses and diploma programs. Distance learning fire and safety courses with certification. Best online fire safety institute in India."
     keywords="online fire safety course, distance learning fire safety, fire safety online training, digital fire safety education, virtual fire safety course, e-learning fire safety, online industrial safety course, fire safety course online india, remote fire safety training"
   />
   <Header/>
   <Navbar/>
   <OnlineCourseHero/>
   <OnlineCoursesTable/>
   <Footer/>
   
   
   </>
  )
}

export default OnlineCoursePage