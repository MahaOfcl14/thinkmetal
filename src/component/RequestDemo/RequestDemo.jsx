import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RequestDemo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: true, // Ensures animation runs only once
    });
  }, []);

  return (
    <div>
      <div className="2xl:container mx-auto mt-16">
        <div>
          <hr
            className="my-4 border-t border-gray-50"
            data-aos="fade-in" // Add fade-in animation for the divider
          />

          <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1">
            <div className="pt-6 pb-40" data-aos="fade-up"> {/* Fade-up animation */}
              <div className="flex justify-center items-center mb-5" data-aos="zoom-in"> {/* Zoom-in animation */}
                <img
                  src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Auto%20Layout%20Horizontal%20(3).png"
                  alt="Centered Image"
                  className="h-[100px]"
                />
              </div>
              <h1
                className="text-[40px] font-[Inter] font-semibold text-center"
                data-aos="fade-up"
              >
                Increase your team's visibility and alignment
              </h1>
              <p
                className="text-center text-[30px] text-[#5F5F5F] font-[Inter] pt-3"
                data-aos="fade-up"
                data-aos-delay="200" // Delayed animation
              >
                Start for free, flexible for all teams.
              </p>

              <div
                className="flex justify-center mt-8 space-x-2"
                data-aos="fade-up"
                data-aos-delay="400" // Additional delay for buttons
              >
                <button className="bg-white py-2 px-4 shadow-lg font-medium rounded-full text-black hover:bg-blue-500">
                  <a href="#">Request a demo</a>
                </button>

                <button className="bg-[#FD4C27] py-2 px-4 rounded-full text-white hover:bg-blue-500">
                  <a href="#">Start for free</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
