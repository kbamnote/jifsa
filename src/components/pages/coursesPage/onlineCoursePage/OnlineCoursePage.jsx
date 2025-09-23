import React from 'react'
import OnlineCourseHero from './OnlineCourseHero'
import Header from '../../../common/Header'
import Navbar from '../../../common/Navbar'
import Footer from '../../../common/Footer'
import OnlineCoursesTable from '../../../tables/OnlineCourseTable'

const OnlineCoursePage = () => {
  return (
   <>
   <Header/>
   <Navbar/>
   <OnlineCourseHero/>
   <OnlineCoursesTable/>
   <Footer/>
   
   
   </>
  )
}

export default OnlineCoursePage