"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

import Image from 'next/image';
import brand from '../../../../public/brandlogo/brand1.png'



const BrandLogo = () => {
  return (
    <div className='bg-slate-300'>
      <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-8">
      {/* content section start */}
      <Swiper
        spaceBetween={20}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          loop: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {/* brand1 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand1 section end */}

      </Swiper>

      {/* content section end */}
    </div>
    </div>
  );
};

export default BrandLogo;