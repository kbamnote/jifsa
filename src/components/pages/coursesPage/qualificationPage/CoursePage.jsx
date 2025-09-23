import React from 'react'
import QualificationHero from './QualificationHero'
import SafetyCourseTable from '../../../tables/SafetyCourseTable'
import Navbar from '../../../common/Navbar'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'

const CoursePage = () => {
  return (
  <>
  <Header/>
  <Navbar/>
  <QualificationHero/>
  <SafetyCourseTable/>
  <Footer/>
  
  </>
  )
}

export default CoursePage