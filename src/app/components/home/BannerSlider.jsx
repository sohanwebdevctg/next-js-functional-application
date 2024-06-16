"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// image section start
import image1 from '../../../../public/bannerImg/image1.png'
import image2 from '../../../../public/bannerImg/image2.png'
import image3 from '../../../../public/bannerImg/image3.png'
import Image from 'next/image';

const BannerSlider = () => {
  return (
    <div className='sliderCon bg-black w-56 h-56 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 rounded-full mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className='overflow-hidden'>
            <Image src={image1} alt='this is image' className='w-56 h-56 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 mx-auto text-center p-5'></Image>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default BannerSlider;