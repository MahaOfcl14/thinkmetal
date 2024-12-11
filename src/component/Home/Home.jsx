import { motion } from "framer-motion";

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div class="2xl:container mx-auto ">
        {/* Desktop View */}
        <div class="hidden md:block">
          <motion.div
            class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 py-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div>
              <motion.h1
                className="leading-none text-[75px] text-center font-medium font-[Inter]"
                variants={fadeInVariants}
              >
                Create, inspect, and apply <br />
                synthetic surveillance broadly.
              </motion.h1>

              <motion.p
                className="text-center text-[#5F5F5F] font-[Inter] pt-3"
                variants={fadeInVariants}
              >
                Start with a stunning homepage. Stay motivated without hurting
                your pocket.
              </motion.p>
              <motion.div
                className="flex justify-center pt-8"
                variants={fadeInVariants}
              >
                <button className="bg-[#FD4C27] py-3 px-8 rounded-full text-white hover:bg-blue-500">
                  <a href="#">Start for free</a>
                </button>
              </motion.div>
              <motion.div
                className="flex justify-center space-x-2 pt-2"
                variants={fadeInVariants}
              >
                <p className="pt-5 text-center text-[#bab8b8] font-[Inter]">
                  Want to talk or get a live demo?
                </p>
                <p className="pt-5 text-center text-black font-[Poppins] flex items-center justify-center space-x-2 hover:text-[#FD4C27]">
                  Get in touch
                  <img
                    src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Arrow%20-%20Right.png"
                    alt="Right Arrow"
                    className="w-4 h-4 hover:bg-[#FD4C27]"
                  />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div class="sm:block md:hidden">
        <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1">
          <div>
            <motion.h1
              className="text-[50px] font-semibold font-[Inter]"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Create, inspect, and
            </motion.h1>
            <motion.h1
              className="text-[50px] font-semibold font-[Inter]"
              variants={fadeInVariants}
            >
              apply synthetic
            </motion.h1>
            <motion.h1
              className="text-[50px] font-semibold font-[Inter]"
              variants={fadeInVariants}
            >
              surveillance broadly.
            </motion.h1>

            <motion.p
              className=" text-[#5F5F5F] font-[Inter] pt-6"
              variants={fadeInVariants}
            >
              Start with a stunning homepage. Stay <br />
              motivated without hurting your pocket.
            </motion.p>
            <motion.div
              className="flex justify-start pt-10"
              variants={fadeInVariants}
            >
              <button className="bg-[#FD4C27] py-3 px-8 rounded-full text-white hover:bg-blue-500">
                <a href="#">Start for free</a>
              </button>
            </motion.div>
            <motion.div
              className="block md:hidden flex justify-center pt-8"
              variants={fadeInVariants}
            >
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/WhatsApp%20Image%202024-12-11%20at%209.57.31%20AM.jpeg" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <motion.div
          className="flex justify-center"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/WhatsApp%20Image%202024-12-11%20at%209.57.31%20AM.jpeg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
