"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

import Image from 'next/image';
import { brandLogo } from './../../utilities/brandLogo';



const BrandLogo = () => {

  //brandLogo data fetch
  const brandData = brandLogo;


  return (
    <div className='px-4'>
      <div className="bg-[#F5F5F5] container mx-auto px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-7 lg:py-8 xl:py-8">
      {/* content section start */}
      <Swiper
        spaceBetween={20}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          loop: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper px-2"
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
        {/* brand section start */}
        {
          brandData.map((data,index) => <SwiperSlide key={index}>
          <div className='overflow-hidden'>
            <Image src={data.image} width={300} height={300} alt={`this is ${data.id} brand logo`} className="w-96 h-12"/>
          </div>
        </SwiperSlide>)
        }
        {/* brand section end */}
      </Swiper>

      {/* content section end */}
    </div>
    </div>
  );
};

export default BrandLogo;