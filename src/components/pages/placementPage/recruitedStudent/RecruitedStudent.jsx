import React from "react";

import one from '../../../../assets/1PraveenTiwari.jpg'
import two from '../../../../assets/14Devbrat.jpg'
import three from '../../../../assets/ABHIJEET-PATHAK.jpg'
import four from '../../../../assets/ABHISHEKKUMAR.jpg'
import five from '../../../../assets/ABHISHEKSHRIVAS.jpg'
import six from '../../../../assets/Aditya.jpg'
import seven from '../../../../assets/ADITYAVIKRAMSINGH.jpg'
import eight from '../../../../assets/AjayChandravanshi.jpg'
import nine from '../../../../assets/AKASHMANIKPURI.jpg'
import ten from '../../../../assets/Altaf.jpg'
import eleven from '../../../../assets/Amankhan.jpg'
import twelve from '../../../../assets/AMANKUNWAR.jpg'
import thirteen from '../../../../assets/amitnavale.jpg'
import fourteen from '../../../../assets/Anand-Kumar-Yadav.jpg'
import fifteen from '../../../../assets/ANILKUGUPTA.jpg'
import sixteen from '../../../../assets/ANUP01.jpg'
import seventeen from '../../../../assets/Asad-ansaree.jpg'
import eighteen from '../../../../assets/Ashok-Sahu.jpg'
import nineteen from '../../../../assets/ASHWINI-KUMAR-SINHA.jpg'
import twenty from '../../../../assets/BHEDPRAKSH-SAHU.jpg'
import twentyone from '../../../../assets/BhuwanPal.jpg'
import twentytwo from '../../../../assets/chandrama.jpg'
import twentythree from '../../../../assets/Deepakkumarsahu.jpg'
import twentyfour from '../../../../assets/DEVENDRA-YADAV.jpg'
import twentyfive from '../../../../assets/Duleshwar.jpg'
import twentysix from '../../../../assets/G-Raju.jpg'
import twentyseven from '../../../../assets/GULSHAN.jpg'
import twentyeight from '../../../../assets/Harish-Khan.jpg'
import twentynine from '../../../../assets/IshwarSingh.jpg'
import thirty from '../../../../assets/JAVED-SINGH.jpg'
import thirtyone from '../../../../assets/Jay-Prakash-Banjare.jpg'
import thirtytwo from '../../../../assets/KHAGESHWAR-LAHAREY.jpg'
import thirtythree from '../../../../assets/KISHANYADAV.jpg'
import thirtyfour from '../../../../assets/LAKHANLAL-MANHAR.jpg'
import thirtyfive from '../../../../assets/LAXMAN-PORTE.jpg'
import thirtysix from '../../../../assets/LILURAM.jpg'
import thirtyseven from '../../../../assets/LUKENDRA-KUMAR-SHAU.jpg'
import thirtyeight from '../../../../assets/MANISHKUMAR.jpg'
import thirtynine from '../../../../assets/MANISHSURYAVANSHI.jpg'
import forty from '../../../../assets/MD-IMRAN-KHAN.jpg'
import fortyone from '../../../../assets/MDShadafh.jpg'
import fortytwo from '../../../../assets/Niyazkhan.jpg'
import fortythree from '../../../../assets/prithvibareth.jpg'
import fortyfour from '../../../../assets/ShivamGupta.jpg'
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const teamMembers = [
  { name: "Praveen Tiwari", image: one },
  { name: "Devbrat", image: two },
  { name: "Abhijeet Pathak", image: three },
  { name: "Abhishek Kumar", image: four },
  { name: "Abhishek Shrivas", image: five },
  { name: "Aditya", image: six },
  { name: "Aditya Vikram Singh", image: seven },
  { name: "Ajay Chandravanshi", image: eight },
  { name: "Akash Manikpuri", image: nine },
  { name: "Altaf", image: ten },
  { name: "Aman Khan", image: eleven },
  { name: "Aman Kunwar", image: twelve },
  { name: "Amit Navale", image: thirteen },
  { name: "Anand Kumar Yadav", image: fourteen },
  { name: "Anil Kumar Gupta", image: fifteen },
  { name: "Anup", image: sixteen },
  { name: "Asad Ansaree", image: seventeen },
  { name: "Ashok Sahu", image: eighteen },
  { name: "Ashwini Kumar Sinha", image: nineteen },
  { name: "Bhed Prakash Sahu", image: twenty },
  { name: "Bhuwan Pal", image: twentyone },
  { name: "Chandrama", image: twentytwo },
  { name: "Deepak Kumar Sahu", image: twentythree },
  { name: "Devendra Yadav", image: twentyfour },
  { name: "Duleshwar", image: twentyfive },
  { name: "G Raju", image: twentysix },
  { name: "Gulshan", image: twentyseven },
  { name: "Harish Khan", image: twentyeight },
  { name: "Ishwar Singh", image: twentynine },
  { name: "Javed Singh", image: thirty },
  { name: "Jay Prakash Banjare", image: thirtyone },
  { name: "Khageshwar Laharey", image: thirtytwo },
  { name: "Kishan Yadav", image: thirtythree },
  { name: "Lakhanlal Manhar", image: thirtyfour },
  { name: "Laxman Porte", image: thirtyfive },
  { name: "Liluram", image: thirtysix },
  { name: "Lukendra Kumar Shau", image: thirtyseven },
  { name: "Manish Kumar", image: thirtyeight },
  { name: "Manish Suryavanshi", image: thirtynine },
  { name: "Md Imran Khan", image: forty },
  { name: "Md Shadafh", image: fortyone },
  { name: "Niyaz Khan", image: fortytwo },
  { name: "Prithvi Bareth", image: fortythree },
  { name: "Shivam Gupta", image: fortyfour },
];

const RecruitedStudent = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Placed Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                {/* Optional: Company & Designation if you want to add */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RecruitedStudent;
