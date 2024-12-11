import { motion } from "framer-motion";

const Feedback = () => {
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <div className="2xl:container mx-auto py-5">
        {/* Desktop View */}
        <div className="hidden md:block">
          <motion.div
            className="w-[90%] md:w-[85%] mx-auto grid grid-cols-2 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popUpVariants}
          >
            {/* Left Column */}
            <motion.div className="bg-[#FAFAFA] rounded-3xl px-[90px]" variants={popUpVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(17).png" />
            </motion.div>
            {/* Right Column */}
            <motion.div className="bg-white mt-[45px] ml-[80px]" variants={popUpVariants}>
              <button className="bg-[#FD4C27] py-1 px-6 mb-5 rounded-full text-white hover:bg-blue-500">
                Feedback
              </button>
              <div className="leading-none">
                <h1 className="text-[50px] font-semibold font-[Inter]">Better feedback at</h1>
                <h1 className="text-[50px] font-semibold font-[Inter]">the right time.</h1>
              </div>
              <div className="pt-7 text-[#bab8b8] font-[Inter]">
                <p>
                  Campsite has been instrumental in keeping designers aware of <br />
                  each others' work-in-progress in a way that was previously <br />
                  slowing us down. It's also one of the only channels where.
                </p>
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

        {/* Mobile View */}
        <div className="block md:hidden">
          <motion.div
            className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popUpVariants}
          >
            {/* Left Column */}
            <motion.div className="bg-[#FAFAFA] rounded-3xl px-12" variants={popUpVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(17).png" />
            </motion.div>
            {/* Right Column */}
            <motion.div className="bg-white mt-[45px]" variants={popUpVariants}>
              <button className="bg-[#FD4C27] py-1 px-6 mb-5 rounded-full text-white hover:bg-blue-500">
                Feedback
              </button>
              <div className="leading-none">
                <h1 className="text-[50px] font-semibold font-[Inter]">Better feedback at</h1>
                <h1 className="text-[50px] font-semibold font-[Inter]">the right time.</h1>
              </div>
              <div className="pt-7 text-[#bab8b8] font-[Inter]">
                <p>
                  Campsite has been instrumental in keeping designers aware of <br />
                  each others' work-in-progress in a way that was previously <br />
                  slowing us down. It's also one of the only channels where.
                </p>
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

export default Feedback;
