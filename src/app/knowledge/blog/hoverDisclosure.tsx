import { useState } from "react";
import { motion } from "framer-motion";



const cards = [
  { title: "THE CRAFT", icon: "✨", content: "Crafting digital experiences." },
  { title: "CSS ANIMATION", icon: "📝", content: "Learn smooth CSS animations." },
  { title: "SVG FILTERS", icon: "🎨", content: "Explore powerful SVG effects." },
  { title: "SCROLL ANIMATION", icon: "🌌", content: "Tasteful scroll animations." },
  { title: "TAMING CANVAS", icon: "🎨", content: "Master the HTML5 Canvas API." },
  { title: "LAYOUT TRICKS", icon: "⚙️", content: "Responsive and dynamic layouts." },
  { title: "MASTERING TIME", icon: "⌛", content: "Control animations like a pro." }
];

export default function HoverCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Desktop View - Only visible on screens wider than 768px */}
      <div className="hidden md:flex gap-3">
        {cards.map((card, index) => (
          <motion.div
            key={`desktop-${index}`}
            className="relative w-20 h-80 bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden flex flex-col justify-between items-center"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ width: "5rem" }}
            animate={{ width: activeIndex === index ? "16rem" : "5rem" }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Title that moves left on hover */}
            <motion.div 
              className="absolute top-3 w-full flex"
              initial={{ justifyContent: "center" }}
              animate={{ 
                justifyContent: activeIndex === index ? "flex-start" : "center" 
              }}
              transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
            >
              <motion.span 
                className="text-sm font-semibold writing-vertical whitespace-nowrap transform rotate-180" 
                style={{ writingMode: "vertical-rl" }}
                animate={{ 
                  marginLeft: activeIndex === index ? "0.75rem" : "0rem" 
                }}
                transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                {card.title}
              </motion.span>
            </motion.div>

            {/* Content area */}
            <div className="w-full flex-grow flex flex-col justify-end mt-32">
              {activeIndex === index && (
                <motion.div
                  className="px-4 w-full"
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
                >
                  <p className="text-xs mb-8">{card.content}</p>
                </motion.div>
              )}
              
              {/* Icon that moves left on hover */}
              <motion.div
                className="w-full pb-4"
                initial={{ display: "flex", justifyContent: "center" }}
                animate={{ 
                  justifyContent: activeIndex === index ? "flex-start" : "center" 
                }}
                transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    marginLeft: activeIndex === index ? "0.75rem" : "0rem" 
                  }}
                  transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                  {card.icon}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View - Only visible on screens narrower than 768px */}
      <div className="md:hidden flex flex-col gap-3 w-full px-4">
        {cards.map((card, index) => (
          <motion.div
            key={`mobile-${index}`}
            className="relative w-full h-16 bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden flex flex-col justify-start"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            animate={{ 
              height: activeIndex === index ? "10rem" : "4rem"
            }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Header with title and icon side by side */}
            <div className="flex justify-between items-center p-3 h-16">
              <span className="text-sm font-semibold">{card.title}</span>
              <span className="text-2xl">{card.icon}</span>
            </div>
            
            {/* Content that appears when expanded */}
            {activeIndex === index && (
              <motion.div
                className="px-4"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, delay: 0.05, ease: "easeOut" }}
              >
                <p className="text-sm">{card.content}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}