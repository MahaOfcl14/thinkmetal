import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Smooth easing effect
      once: true, // Ensures animation triggers only once
    });
  }, []);

  return (
    <div>
      <div className="2xl:container mx-auto">
        <div>
          <div
            className="w-[90%] md:w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-5"
            data-aos="fade-up" // Add animation for the grid on scroll
          >
            <div>
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Auto%20Layout%20Horizontal%20(3).png"
                alt="Centered Image"
                className="pb-10"
                data-aos="zoom-in" // Add zoom-in animation to the logo
              />
            </div>

            <div>
              <p className="font-[Inter] font-semibold pb-4" data-aos="fade-up">
                Product
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Features
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Pricing
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Changelog
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Support
              </p>
            </div>

            <div>
              <p className="font-[Inter] font-semibold pb-4" data-aos="fade-up">
                Legal
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Terms of Privacy
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Privacy Policy
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Security
              </p>
            </div>

            <div>
              <p className="font-[Inter] font-semibold pb-4" data-aos="fade-up">
                Company
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Blog
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Contact
              </p>
            </div>

            <div>
              <p className="font-[Inter] font-semibold pb-4" data-aos="fade-up">
                Social
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Dribble
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Behance
              </p>
              <p
                className="font-[Inter] font-light text-[#5F6980] hover:text-[#FD4C27] pb-3"
                data-aos="fade-up"
              >
                Discord
              </p>
            </div>
          </div>

          <p
            className="font-[Inter] pt-5 font-light text-center text-[#5F6980] hover:text-[#FD4C27] pb-16"
            data-aos="fade-up" // Animation for footer text
          >
            All rights reserved.&copy; 2024 ThinkMetal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
