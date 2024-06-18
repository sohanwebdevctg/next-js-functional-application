"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Product = () => {
  return (
    <div className='px-2'>
      {/* content section start */}
      {/* title and item section start */}
      <div className='sm:flex sm:justify-between sm:items-center'>
        {/* title section start */}
        <div className='w-full xl:w-[45%]'>
          <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Products</h1>
        </div>
        {/* title section end */}
        {/* item section start */}
        <div className='w-full xl:w-[55%] overflow-hidden mt-2 sm:mt-0'>
          <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 4,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 4,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 7,
            },
          }}
          className="productSwiper">
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Table</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">chair</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Bed</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Soffa</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Table</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">chair</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Bed</SwiperSlide>
            <SwiperSlide className="py-[2px] text-center text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base text-white bg-red-500 rounded-3xl">Soffa</SwiperSlide>
          </Swiper>
        </div>
        {/* item section end */}
      </div>
      {/* title and item section end */}
      {/* product section start */}
      <div className="mt-5">
        <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 5,
          },
        }}
        className="productCardSwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      {/* product section end */}
      {/* content section end */}
    </div>
  );
};

export default Product;