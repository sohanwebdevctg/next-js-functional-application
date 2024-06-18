"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Product = () => {
  return (
    <div>
      {/* content section start */}
      {/* title and item section start */}
      <div className='sm:flex sm:justify-between sm:items-center'>
        {/* title section start */}
        <div className='w-full xl:w-[45%]'>
          <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Products</h1>
        </div>
        {/* title section end */}
        {/* item section start */}
        <div className='w-full xl:w-[55%] overflow-hidden mt-2'>
          <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 5,
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
          className="mySwiper">
            <SwiperSlide className="text-sm text-red-500">Table</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">chair</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">Bed</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">Soffa</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">Table</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">chair</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">Bed</SwiperSlide>
            <SwiperSlide className="text-sm text-red-500">Soffa</SwiperSlide>
          </Swiper>
        </div>
        {/* item section end */}
      </div>
      {/* title and item section end */}
      {/* product section start */}
      {/* product section end */}
      {/* content section end */}
    </div>
  );
};

export default Product;