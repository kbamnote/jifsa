import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "JIFSA Careers",
    "url": "https://jifsacareers.com",
    "logo": "https://jifsacareers.com/iso.jpg",
    "description": "Professional fire and safety education, training programs, and career placement services.",
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
      "email": "jifsacareers@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/jifsacareers",
      "https://www.linkedin.com/company/jifsacareers"
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
    />
  );
};

export default StructuredData;