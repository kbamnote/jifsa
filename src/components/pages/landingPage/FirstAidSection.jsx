import React from "react";
import { Flame } from "lucide-react";
import firstAidImg from "../../../assets/FirstAidWeb.jpg"; 

const FirstAidSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-orange-500 w-5 h-5" />
          <p className="text-sm font-semibold uppercase text-gray-700">
            First Aid Training Centre
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          DGMS Approved First Aid
        </h2>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* Left: Image */}
          <div>
            <img
              src={firstAidImg}
              alt="DGMS Approved First Aid"
              className="max-h-[400px] rounded-lg shadow-md w-full max-w-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="text-gray-800 text-lg md:text-xl space-y-8">
            <p className="leading-relaxed">
              Now JIFSA is DGMS approved training centre and it’s established as per
              provisions laid down under The Gazette of India Extraordinary, Part
              II-Section 3-Sub section(i) No. 430 of 4th August 2021, Notification no.
              G.S.R. 529(E) dated 4th August, 2021 and approved by DGMS vide letter No.
              DGMS/HO(HQ)/First Aid/04/2021/167 Dhanbad 2nd May, 2022.
            </p>
            <p className="leading-relaxed">
              First aid competency certificate authorized by DGMS is compulsory for any
              employment application posted by Mining enterprises like coal india etc.
            </p>

            {/* Contact Info */}
            <p className="font-medium text-gray-900">
              Please call for information and admission{" "}
              <a href="tel:9407939795" className="text-blue-600 underline">
                9407939795
              </a>{" "}
              /{" "}
              <a href="tel:7879842744" className="text-blue-600 underline">
                7879842744
              </a>
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-block bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-red-700 transition"
            >
              Know More...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstAidSection;
