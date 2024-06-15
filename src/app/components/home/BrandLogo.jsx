"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

import Image from 'next/image';
import brand1 from '../../../../public/brandlogo/brand1.png'
import brand2 from '../../../../public/brandlogo/brand2.png'
import brand3 from '../../../../public/brandlogo/brand3.png'
import brand4 from '../../../../public/brandlogo/brand4.png'
import brand5 from '../../../../public/brandlogo/brand5.png'
import brand6 from '../../../../public/brandlogo/brand6.png'
import brand7 from '../../../../public/brandlogo/brand7.png'
import brand8 from '../../../../public/brandlogo/brand8.png'
import brand9 from '../../../../public/brandlogo/brand9.png'
import brand10 from '../../../../public/brandlogo/brand10.png'
import brand11 from '../../../../public/brandlogo/brand11.png'
import brand12 from '../../../../public/brandlogo/brand12.png'



const BrandLogo = () => {
  return (
    <div className='bg-slate-300'>
      <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-10">
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
            <Image src={brand1} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand1 section end */}
        {/* brand2 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand2} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand2 section end */}
        {/* brand3 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand3} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand3 section end */}
        {/* brand4 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand4} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand4 section end */}
        {/* brand5 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand5} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand5 section end */}
        {/* brand6 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand6} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand6 section end */}
        {/* brand7 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand7} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand7 section end */}
        {/* brand8 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand8} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand8 section end */}
        {/* brand9 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand9} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand9 section end */}
        {/* brand10 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand10} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand10 section end */}
        {/* brand11 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand11} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand11 section end */}
        {/* brand12 section start */}
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={brand12} alt="brandlogo" className="w-full h-16"/>
          </div>
        </SwiperSlide>
        {/* brand12 section end */}

      </Swiper>

      {/* content section end */}
    </div>
    </div>
  );
};

export default BrandLogo;