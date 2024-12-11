import { motion } from "framer-motion";

const Share = () => {
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <div class="2xl:container mx-auto py-5">
        {/* Desktop View */}
        <div class="hidden md:block">
          <motion.div
            class="w-[90%] md:w-[85%] mx-auto grid grid-cols-2 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popUpVariants}
          >
            {/* Left Column */}
            <motion.div className="bg-white mt-7" variants={popUpVariants}>
              <button className="bg-[#FD4C27] py-1 px-6 mb-5 rounded-full text-white hover:bg-blue-500">
                Share
              </button>
              <div className="leading-none">
                <h1 className="text-[50px] font-semibold font-[Inter]">Share anything you’re</h1>
                <h1 className="text-[50px] font-semibold font-[Inter]">working on.</h1>
              </div>
              <div className="pt-7 text-[#bab8b8] font-[Inter]">
                <p>
                  Campsite has been instrumental in keeping designers aware of <br />
                  each others' work-in-progress in a way that was previously <br />
                  slowing us down. It's also one of the only channels where.
                </p>
              </div>

              <div className="flex space-x-9 pb-6 pt-9 text-black font-[Poppins]">
                <div className="flex space-x-2">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small,%20Roundness=Circle.png" />
                  <p>Coded</p>
                </div>
                <div className="flex space-x-2">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small,%20Roundness=Circle.png" />
                  <p>100% Secure</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="hover:bg-slate-300">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small.png" />
                </button>
                <p className="text-black font-semibold font-[Inter] hover:text-[#FD4C27]">See how it works</p>
              </div>
            </motion.div>
            {/* Right Column */}
            <motion.div className="bg-[#FAFAFA] rounded-3xl" variants={popUpVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(16).png" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div class="block md:hidden">
          <motion.div
            class="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popUpVariants}
          >
            {/* Right Column */}
            <motion.div className="bg-[#FAFAFA] rounded-3xl" variants={popUpVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(16).png" />
            </motion.div>
            {/* Left Column */}
            <motion.div className="bg-white mt-7" variants={popUpVariants}>
              <button className="bg-[#FD4C27] py-1 px-6 mb-5 rounded-full text-white hover:bg-blue-500">
                Share
              </button>
              <div className="leading-none">
                <h1 className="text-[50px] font-semibold font-[Inter]">Share anything you’re</h1>
                <h1 className="text-[50px] font-semibold font-[Inter]">working on.</h1>
              </div>
              <div className="pt-7 text-[#bab8b8] font-[Inter]">
                <p>
                  Campsite has been instrumental in keeping designers aware of <br />
                  each others' work-in-progress in a way that was previously <br />
                  slowing us down. It's also one of the only channels where.
                </p>
              </div>

              <div className="flex space-x-9 pb-6 pt-9 text-black font-[Poppins]">
                <div className="flex space-x-2">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small,%20Roundness=Circle.png" />
                  <p>Coded</p>
                </div>
                <div className="flex space-x-2">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small,%20Roundness=Circle.png" />
                  <p>100% Secure</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="hover:bg-slate-300">
                  <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Size=Small.png" />
                </button>
                <p className="text-black font-semibold font-[Inter] hover:text-[#FD4C27]">
                  See how it works
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Share;
