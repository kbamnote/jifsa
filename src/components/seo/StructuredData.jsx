import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "JIFSA Careers - Fire & Safety Education and Training",
    "alternateName": "JIFSA Careers",
    "url": "https://jifsacareers.com",
    "logo": "https://jifsacareers.com/iso.jpg",
    "description": "JIFSA Careers offers professional fire and safety education, training programs, and guaranteed placement assistance. Join India's leading fire safety institute for career growth.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fire Safety Training Institute",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8855885807",
      "contactType": "Admissions Office",
      "email": "jifsacareers@gmail.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/jifsacareers",
      "https://www.linkedin.com/company/jifsacareers",
      "https://twitter.com/jifsacareers"
    ],
    "founder": {
      "@type": "Person",
      "name": "JIFSA"
    },
    "foundingDate": "2010",
    "keywords": "fire safety training, safety education, fire safety courses, placement assistance, fire safety certification, industrial safety, fire fighting courses, safety training institute, JIFSA Nagpur, fire safety jobs, safety officer training"
  };

  // Additional structured data for courses
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fire & Safety Education and Training Programs",
    "description": "Professional fire and safety education, training programs, and guaranteed placement assistance.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "JIFSA Careers",
      "sameAs": "https://jifsacareers.com"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }} 
      />
    </>
  );
};

export default StructuredData;