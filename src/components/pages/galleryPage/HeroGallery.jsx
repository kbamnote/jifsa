import React, { useState } from "react";
import { motion } from "framer-motion";
import one from '../../../assets/headoffice33.jpg'
import two from '../../../assets/headoffice55.jpg'
import three from '../../../assets/headoffice66.jpg'
import four from '../../../assets/ourteam44.jpg'
import five from '../../../assets/ourteam55.jpg'
import six from '../../../assets/practicalground22.jpg'
import seven from '../../../assets/practicalground33.jpg'
import eight from '../../../assets/practicalground66.jpg'
import nine from '../../../assets/practicalground77.jpg'
import ten from '../../../assets/practicalground88.jpg'
import eleven from '../../../assets/practicalground99.jpg'
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const HeroGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [selectedImage, setSelectedImage] = useState(null);

  const filterCategories = [
    "All Photos",
    "Head Office",
    "Practical Ground",
    "Our Team",
  ];

  
  const galleryImages = [
    {
      id: 1,
      src: one,
      alt: "JIFSA Training Session 1",
      category: "All Photos"
    },
    {
      id: 2,
      src: two,
      alt: "Head Office Meeting",
      category: "Head Office"
    },
    {
      id: 3,
      src: three,
      alt: "Practical Training Session",
      category: "Practical Ground"
    },
    {
      id: 4,
      src: four,
      alt: "Office Interior",
      category: "Head Office"
    },
    {
      id: 5,
      src: five,
      alt: "Office Corridor",
      category: "Head Office"
    },
    {
      id: 6,
      src: six,
      alt: "Safety Equipment Training",
      category: "Practical Ground"
    },
    {
      id: 7,
      src: seven,
      alt: "Fire Drill Practice",
      category: "Practical Ground"
    },
    {
      id: 8,
      src: eight,
      alt: "Team Meeting",
      category: "Our Team"
    },
    {
      id: 9,
      src: nine,
      alt: "Team Discussion",
      category: "Our Team"
    },
    {
      id: 10,
      src: ten,
      alt: "Practical Training Ground",
      category: "Practical Ground"
    },
    {
      id: 11,
      src:eleven,
      alt: "Training Facility",
      category: "Practical Ground"
    },
    // {
    //   id: 12,
    //   src: "/images/gallery/students-graduation.jpg",
    //   alt: "Students Graduation",
    //   category: "Students"
    // },
    // {
    //   id: 13,
    //   src: "/images/gallery/head-office-visit.jpg",
    //   alt: "Head Office Visit",
    //   category: "Head Office Visit"
    // }
  ];

  const filteredImages = activeFilter === "All Photos" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Header/>
    <Navbar/>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-32 sm:h-40 bg-gradient-to-r from-gray-700 to-gray-800 text-white flex justify-center items-center"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl xl:text-5xl font-bold font-['Poppins'] mb-2"
          >
            Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-red-600 mx-auto"
          ></motion.div>
        </div>
      </motion.div>

      <section className="w-full bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {filterCategories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium font-['Poppins'] text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='18' font-family='Arial, sans-serif'%3E" + image.alt + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold font-['Poppins'] text-sm sm:text-base mb-1">
                        {image.alt}
                      </h3>
                      <p className="text-gray-200 text-xs font-['Poppins']">
                        {image.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg font-['Poppins']">
                No images found for this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='24' font-family='Arial, sans-serif'%3E" + selectedImage.alt + "%3C/text%3E%3C/svg%3E";
                }}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 font-['Poppins'] mb-1">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-600 font-['Poppins'] text-sm">
                Category: {selectedImage.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      <Footer/>
    </>
  );
};

export default HeroGallery;