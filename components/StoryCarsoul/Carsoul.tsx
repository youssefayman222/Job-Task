import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
const StoryCarousel = ({ slides }: { slides: any[] }) => {
  return (
    <div className='container mt-10'>
      <h1 className='heading'>Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className='!w-[500px] h-[100px] object-cover'
          >
            <Image src={slide.image} alt="Story's Photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoryCarousel;
