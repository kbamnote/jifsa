import React from 'react'
import QualificationHero from './QualificationHero'
import SafetyCourseTable from '../../../tables/SafetyCourseTable'
import Navbar from '../../../common/Navbar'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'
import SEO from '../../../seo/SEO'

const CoursePage = () => {
  return (
  <>
  <SEO 
    title="Fire Safety Courses & Diploma in India | Best Fire Institute | JIFSA"
    description="Enroll in our comprehensive fire safety courses, diploma, and degree programs. NSQF certified courses in fire and safety, industrial safety with 100% placement assistance."
    keywords="fire safety courses, diploma in fire and safety, fire safety institute, industrial safety course, fire institute, safety institute, fire & safety course, job oriented course, certificate in fire and safety, advance diploma fire safety, bachelor fire safety, NSQF fire safety course, CV Raman university fire safety, fire fighter course, university fire safety course"
  />
  <Header/>
  <Navbar/>
  <QualificationHero/>
  <SafetyCourseTable/>
  <Footer/>
  
  </>
  )
}

export default CoursePage