import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const Intro: React.FC<CardProps> = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full lg:h-90 sm:w-auto md:w-auto lg:w-80  h-90 md:h-auto rounded-xl overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ภาพพื้นหลัง */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Title ที่แสดงตลอด แต่หายไปเมื่อ hover */}
      <motion.div
        className="absolute bottom-4 left-4"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </motion.div>

      {/* Overlay สีดำ เลื่อนลงมา */}
      <motion.div
        className="absolute inset-0 bg-black/50 flex flex-col justify-start p-6"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isHovered ? "0%" : "-100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* เนื้อหา ค่อยๆ แสดงจากซ้ายไปขวา */}
        <motion.div
          className="text-white"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: isHovered ? "0%" : "-100%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;