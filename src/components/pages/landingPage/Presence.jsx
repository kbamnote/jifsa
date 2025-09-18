import React from "react";
import { MapPin } from "lucide-react";
import bgImage from "../../../assets/presence-bg.jpg"; 

const locations = [
  "MUMBAI (Mumbai-Maharashtra)",
  "MUZZAFAR NAGAR (Jharkhand)",
  "HYDERABAD (Telangana)",
  "JAIPUR (Rajasthan)",
  "CHANDRAPUR (Maharashtra)",
  "Chhattisgarh (BASTAR)",
  "REWA (Madhya Pradesh)",
  "MUMBRA (Mumbai-Maharashtra)",
  "AHMED NAGAR (Maharashtra)",
  "JOGESHWARI (Mumbai-Maharashtra)",
  "KOLLAM-PUNALUR (Kerala)",
  "KORBA (Chhattisgarh)",
  "KUCHAINA-GEVRA (Chhattisgarh)",
  "MALAPPURAM-TIRUR (Kerala)",
  "THANE (Mumbai-Maharashtra)",
  "CHENNAI-PADI (Tamilnadu)",
  "JAMSHEDPUR (Jharkhand)",
  "LUDHIANA (Punjab)",
  "RANCHI (Jharkhand)",
];

const Presence = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Presence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
              <span className="text-sm">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presence;
