import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Designers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Animate only once when scrolling
    });
  }, []);

  return (
    <div>
      <div className="2xl:container mx-auto mt-16">
        <div>
          <h1
            className="text-[50px] text-center text-black font-semibold font-[Inter] mb-8"
            data-aos="fade-up" // Animation for the heading
          >
            Loved By Designers At
          </h1>

          <div
            className="w-[90%] md:w-[80%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 space-x-4 space-y-5"
            data-aos="fade-up" // Animation for the grid container
          >
            <div className="bg-[#f9fafb] mt-2 flex justify-center rounded-2xl">
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Logo=i3.png"
                alt="Designer Logo 1"
                data-aos="zoom-in" // Animation for individual items
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes.png"
                alt="Designer Logo 2"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes%20(1).png"
                alt="Designer Logo 3"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes%20(2).png"
                alt="Designer Logo 4"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes%20(3).png"
                alt="Designer Logo 5"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes%20(5).png"
                alt="Designer Logo 6"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Logo=i4.png"
                alt="Designer Logo 7"
              />
            </div>
            <div
              className="bg-[#f9fafb] flex justify-center rounded-2xl"
              data-aos="zoom-in"
            >
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Mobile%20Switch=No,%20Dark=Yes%20(6).png"
                alt="Designer Logo 8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;
