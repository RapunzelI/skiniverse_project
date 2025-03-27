import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
 
const techList = [
  { title: "React js", description: "A JavaScript library for building UI." },
  { title: "Vue js", description: "A progressive JavaScript framework." },
  { title: "Angular js", description: "A TypeScript-based web framework." },
  { title: "Svelte js", description: "A compiler for building UI." },
  { title: "Next js", description: "A React framework for production." }
];
 
const Gallery = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
  <div className="max-w-5xl w-full min-h-[500px]"> {/* ป้องกันการเปลี่ยนขนาด */}
    <h1 className="text-4xl font-bold text-center mb-10">Auto Slide</h1>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper h-full"  // ให้ Swiper มีความสูงเต็มพื้นที่
    >
      {techList.map((tech, index) => (
        <SwiperSlide key={index}>
          {({ isActive, isPrev, isNext }) => (
            <div className={`flex justify-center transition-all duration-500 ${isActive || isPrev || isNext ? "opacity-100" : "opacity-0"}`}>
              <div className={`w-72 flex flex-col items-center justify-center rounded-lg shadow-lg transition-all duration-500 ease-in-out transform bg-white p-4 ${
                isActive ? "h-96 scale-110" : "h-40 scale-90 overflow-hidden translate-y-30"
              }`}>
                <h2 className="text-2xl font-semibold">{tech.title}</h2>
                {isActive && (
                  <p className="mt-3 text-center px-4">{tech.description}</p>
                )}
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
 
  );
};
 
export default Gallery;