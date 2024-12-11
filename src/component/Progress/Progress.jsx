import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Progress = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing for animations
      once: true, // Animation occurs only once when scrolling
    });
  }, []);

  return (
    <div>
      <div className="2xl:container mx-auto">
        <div className="mt-20">
          <h1
            className="text-[50px] text-center text-black font-semibold font-[Inter] mb-8"
            data-aos="fade-up"
          >
            Your Archive of Progress
          </h1>

          <div className="w-[90%] md:w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2">
            {/* Left Card */}
            <div
              className="bg-[#FAFAFA] rounded-2xl mr-8"
              data-aos="fade-right"
            >
              <div className="font-[Inter] text-center mt-12">
                <h1 className="font-[Inter] font-semibold text-center">
                  Projects
                </h1>
                <p>Organize, Follow, and archive.</p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Group%20(3).png"
                  alt="Projects"
                />
              </div>
            </div>

            {/* Right Card */}
            <div
              className="bg-[#FAFAFA] rounded-3xl"
              data-aos="fade-left"
            >
              <div className="font-[Inter] text-center mt-12">
                <h1 className="font-[Inter] font-semibold text-center">
                  Member Profiles
                </h1>
                <p>Automatic portfolios of your work.</p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Group%20(2).png"
                  alt="Member Profiles"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
