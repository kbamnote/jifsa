import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "JIFSA Careers - Best Fire and Safety Institute in India",
    "alternateName": ["JIFSA Careers", "Fire Safety Institute India", "Industrial Safety Training Institute", "Fire and Safety Course Provider"],
    "url": "https://jifsacareers.com",
    "logo": "https://jifsacareers.com/iso.jpg",
    "description": "Leading fire and safety institute in India offering comprehensive job-oriented courses, diploma, certificate, and degree programs in fire safety, industrial safety, HSE, and occupational safety with 100% placement assistance.",
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
    "keywords": "fire and safety course in india, fire and safety institute in india, fire institute, safety institute, fire & safety course, fire & safety institute, job oriented course, industrial safety course, career in fire and safety, diploma in fire and safety, certificate in fire and safety, best fire safety institute, fire safety training institute india, fire safety education, occupational safety course, workplace safety training, fire fighting training, safety officer course, fire safety certification india, HSE course, NEBOSH course india, IOSH course, fire safety engineering, industrial safety management, safety audit training, accident prevention course, risk assessment training, fire safety consultant course, safety management system, fire safety officer training, disaster management course, fire protection course, safety supervisor course, NFPA training, fire investigation course, explosion protection course, chemical safety course"
  };

  // Additional structured data for courses
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fire & Safety Education and Training Programs",
    "description": "Comprehensive fire and safety courses including diploma, advance diploma, bachelor's degree, and certificate programs in fire safety, industrial safety, and HSE.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "JIFSA Careers",
      "sameAs": "https://jifsacareers.com"
    },
    "courseMode": ["on-site", "online"],
    "educationalLevel": "Professional",
    "keywords": "fire safety course, industrial safety course, HSE course, diploma fire safety, certificate fire safety, job oriented course"
  };

  // Professional service data
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fire Safety Training Services",
    "description": "Professional fire safety training, industrial safety courses, and placement assistance services.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "JIFSA Careers"
    },
    "serviceType": ["Fire Safety Training", "Industrial Safety Course", "HSE Training", "Placement Assistance"],
    "areaServed": "India"
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
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} 
      />
    </>
  );
};

export default StructuredData;