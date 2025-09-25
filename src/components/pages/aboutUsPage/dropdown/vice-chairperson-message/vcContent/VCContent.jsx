import React from "react";
import leftImg from "../../../../../../assets/PR2.jpg";

const VCContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="md:w-1/3 flex flex-col">
          <img
            src={leftImg}
            alt="Chairman"
            className="w-full h-80 object-cover"
          />
          <div className="p-5 bg-gray-100 flex flex-col justify-center h-full">
            <h2 className="text-lg md:text-2xl font-bold text-blue-900">
              Mrs. Farhat Ahmad
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mt-1">
              Vice Chairperson
            </p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-2/3 w-full p-6 space-y-4">
          <p className="font-semibold text-lg text-blue-800">
            God gives us the hope when nothing is falling in place. He is the
            guiding light behind us which keeps motivating us when we feel
            rejected and stressed and forces us to be a go-getter. Love of god
            is precious and omnipresent. Real happiness lies in feeling his love
            with us every time we fail as he is there to embrace us.
          </p>

          <p>
            Every new day is a new challenge for student. Not only guidance but
            they also need motivational words from Parents and teachers so that
            they can face the world with more energy and enthusiasm and
            accomplish their goals.
          </p>

          <p>
            To reach to your goals you must start today. Do not hesitate to
            think, dream and act and one you will be a winner. Teachers have the
            onus of shaping the future of the blooming buds by giving them the
            right direction and counseling them when they feel dejected and
            defeated. But before that teachers need to be inspired and motivated
            from time to time so that they can deliver their best performance.
          </p>

          <p>
            A teacher educates hundreds of students/children/ kids and inspires
            them to lead a meaningful and purposeful life. There is nothing
            better than devoting your life to make the lives of others.
          </p>

          <p>
            Students are the torchbearer of a nation as their hard work would
            bring growth to the economy. As such people should inspire the
            students to study hard and work for the development of a nation. The
            inspirational wishes for the students can be sent through text
            message along with gifts for them to make them feel good. The wishes
            would motivate them for studying hard and finding better career
            opportunities in their life.
          </p>

          <p>
            Dear student, I send this inspirational wish to motivate you to
            bring more success and do hard work for your results. It is your
            toil and effort which will take you to your dreams and help in
            achieving them. Life is full of beautiful opportunities. Grab them
            and live life to the fullest. No problem is too big to be solved and
            no life is too difficult to be enjoyed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VCContent;
