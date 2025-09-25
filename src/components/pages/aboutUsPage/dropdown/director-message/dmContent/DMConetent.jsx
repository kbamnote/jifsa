import React from "react";
import img1 from "../../../../../../assets/img1.jpg";
import img2 from "../../../../../../assets/img2.jpg";

const DMConetent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-6 md:px-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
        {/* Image Card */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 w-full max-w-sm">
            <img
              src={img1}
              alt="Director"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">Ms. Priya Malhotra</h2>
              <p className="text-indigo-600 font-medium">Director</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
            “Education is the most powerful weapon which we can use to change the world.”
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Segment of Fire, Safety, Industrial Safety, Disaster, HSE and First Aid is covering
            the maximum prospects for job in all over India as well as in Middle East Countries. 
            Our mission is to nurture students and make them capable by offering them best placement 
            opportunities. Bilquis Education Society has added a wing of 
            <span className="font-semibold text-indigo-700"> JIFSA EDUCATION AND TECHNICAL SERVICES PRIVATE LIMITED</span>
            along with “Industrial Safety - National Examination Board in Occupational Safety and Health, UK”.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the first time opening for the students to opt their desired level courses and move
            forward in future for their best career not only in industries or power plants but also in
            various growth segments which are possible for undergraduate students.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our faith and positive approach has helped us witness the growth & development of our 
            organization. We admire and encourage others to step ahead and measure their prospective 
            according to the era. Best wishes for everyone!
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Card */}
        <div className="flex justify-center md:justify-start order-1 md:order-none">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 w-full max-w-sm">
            <img
              src={img2}
              alt="Associate Director"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">Mrs. Ratna Chakraborty</h2>
              <p className="text-indigo-600 font-medium">Associate Director</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
            Education enables a person to face new challenges, achieve progresses and lead a successful life.
            I, therefore, would like to encourage all students to acquire right education through right
            educational institution.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JIFSA’s vision is “Leadership through Excellence in Value-Based Educational institute” 
            is our guiding force in the past and in times to come.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jifsa is neither just about academic brilliance nor a consistent return, but an ambience 
            where culture and human skills meet together. Keeping abreast of this contemporary world 
            of cut throat competitions, we the Jifsa team, aim at creating an inter-disciplinary and 
            a holistic academic environment that enable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I do strongly believe in my spirited staff members’ capacity to build up the college as 
            one among the leading colleges in the India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DMConetent;
