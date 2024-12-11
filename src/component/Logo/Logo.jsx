import { motion } from "framer-motion";

const Logo = () => {
  const fadeInScaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div class="2xl:container mx-auto py-5">
        {/* Desktop View */}
        <div class="hidden md:block">
          <motion.div
            class="w-[90%] md:w-[85%] mx-auto grid grid-cols-7 py-5 space-x-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInScaleVariants}
          >
            <motion.div className="py-4 px-3" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(9).png" />
            </motion.div>
            <motion.div className="px-3" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(10).png" />
            </motion.div>
            <motion.div className="py-3 px-3" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(11).png" />
            </motion.div>
            <motion.div className="py-3 px-3" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(12).png" />
            </motion.div>
            <motion.div className="py-1 px-4" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(13).png" />
            </motion.div>
            <motion.div className="py-3 px-[1px]" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(14).png" />
            </motion.div>
            <motion.div className="py-1 px-3" variants={fadeInScaleVariants}>
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(15).png?updatedAt=1733803065029"
                className="h-[55px]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div class="block md:hidden">
          <motion.div
            class="w-[90%] md:w-[85%] mx-auto grid grid-cols-2 py-5 px-1 space-x-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInScaleVariants}
          >
            <motion.div className="py-7 px-3 ml-[60px]" variants={fadeInScaleVariants}>
              <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(12).png" />
            </motion.div>
            <motion.div className="py-3 px-4" variants={fadeInScaleVariants}>
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(13).png"
                className="h-[65px]"
              />
            </motion.div>
            <motion.div className="px-3" variants={fadeInScaleVariants}>
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(15).png?updatedAt=1733803065029"
                className="h-[90px]"
              />
            </motion.div>
            <motion.div className="py-3 px-[2px]" variants={fadeInScaleVariants}>
              <img
                src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Frame%20(14).png"
                className="h-[60px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
