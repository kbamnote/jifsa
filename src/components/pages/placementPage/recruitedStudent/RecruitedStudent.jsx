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
  { name: "Praveen Tiwari", image: one, company: "Magzter Digitalmags Pvt. Ltd.", designation: "Designational" },
  { name: "Devbrat", image: two, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Abhijeet Pathak", image: three, company: "TCS", designation: "Software Engineer" },
  { name: "Abhishek Kumar", image: four, company: "Company E-INFOCHIPS", designation: "Designation-It" },
  { name: "Abhishek Shrivas", image: five, company: "Infosys", designation: "System Analyst" },
  { name: "Aditya", image: six, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Aditya Vikram Singh", image: seven, company: "Company CGMPRIS", designation: "Designational" },
  { name: "Ajay Chandravanshi", image: eight, company: "Company Wipro", designation: "Designational Officer" },
  { name: "Akash Manikpuri", image: nine, company: "Tech Mahindra", designation: "Technical Associate" },
  { name: "Altaf", image: ten, company: "Company Elecon Infra Pvt. Ltd.", designation: "Peon" },
  { name: "Aman Khan", image: eleven, company: "Company Wipro", designation: "Designational Officer" },
  { name: "Aman Kunwar", image: twelve, company: "Capgemini", designation: "Analyst" },
  { name: "Amit Navale", image: thirteen, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Anand Kumar Yadav", image: fourteen, company: "Accenture", designation: "Software Developer" },
  { name: "Anil Kumar Gupta", image: fifteen, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Anup", image: sixteen, company: "HCL Technologies", designation: "IT Consultant" },
  { name: "Asad Ansaree", image: seventeen, company: "IBM India", designation: "Associate System Engineer" },
  { name: "Ashok Sahu", image: eighteen, company: "Company Wipro", designation: "Designational Officer" },
  { name: "Ashwini Kumar Sinha", image: nineteen, company: "Cognizant", designation: "Programmer Analyst" },
  { name: "Bhed Prakash Sahu", image: twenty, company: "L&T Infotech", designation: "Software Engineer" },
  { name: "Bhuwan Pal", image: twentyone, company: "Mphasis", designation: "Associate Software Engineer" },
  { name: "Chandrama", image: twentytwo, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Deepak Kumar Sahu", image: twentythree, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Devendra Yadav", image: twentyfour, company: "Persistent Systems", designation: "Software Engineer" },
  { name: "Duleshwar", image: twentyfive, company: "Company CGMPRIS", designation: "Designational" },
  { name: "G Raju", image: twentysix, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Gulshan", image: twentyseven, company: "Designational", designation: "Designational" },
  { name: "Harish Khan", image: twentyeight, company: "Zensar Technologies", designation: "Junior Developer" },
  { name: "Ishwar Singh", image: twentynine, company: "Mindtree", designation: "Software Engineer" },
  { name: "Javed Singh", image: thirty, company: "Company IT Services", designation: "Designation-It" },
  { name: "Jay Prakash Banjare", image: thirtyone, company: "Oracle India", designation: "Applications Developer" },
  { name: "Khageshwar Laharey", image: thirtytwo, company: "Syntel", designation: "Associate Consultant" },
  { name: "Kishan Yadav", image: thirtythree, company: "Hexaware Technologies", designation: "Software Engineer" },
  { name: "Lakhanlal Manhar", image: thirtyfour, company: "Cyient", designation: "Design Engineer" },
  { name: "Laxman Porte", image: thirtyfive, company: "KPIT Technologies", designation: "Software Developer" },
  { name: "Liluram", image: thirtysix, company: "Birlasoft", designation: "Technical Associate" },
  { name: "Lukendra Kumar Shau", image: thirtyseven, company: "Mastek", designation: "Trainee Engineer" },
  { name: "Manish Kumar", image: thirtyeight, company: "Company CGMPRIS", designation: "Designational Officer" },
  { name: "Manish Suryavanshi", image: thirtynine, company: "Company CGMPRIS", designation: "Designational" },
  { name: "Md Imran Khan", image: forty, company: "Larsen & Toubro", designation: "Software Engineer" },
  { name: "Md Shadafh", image: fortyone, company: "Polaris Consulting", designation: "Associate Consultant" },
  { name: "Niyaz Khan", image: fortytwo, company: "Thoughtworks", designation: "Application Developer" },
  { name: "Prithvi Bareth", image: fortythree, company: "Company Golden Key Bag Ind.", designation: "Designational-Entry" },
  { name: "Shivam Gupta", image: fortyfour, company: "Company CGMPRIS", designation: "Designational Officer" },
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
                {member.company && (
                  <p className="text-sm text-gray-600 mt-1">
                    {member.company}
                  </p>
                )}
                {member.designation && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {member.designation}
                  </p>
                )}
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