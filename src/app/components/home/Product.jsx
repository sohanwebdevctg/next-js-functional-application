"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../../public/productcard/roomsofa/image1.png'
import image2 from '../../../../public/productcard/roomsofa/image2.png'
import image3 from '../../../../public/productcard/roomsofa/image3.png'
import image4 from '../../../../public/productcard/roomsofa/image4.png'
import image5 from '../../../../public/productcard/roomsofa/image5.png'
import { FaHeart, FaStar } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';

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
          className="itemSwiper">
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
      {/* productCard section start */}
      <div className="xl:mt-10">
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
          {/* item1 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image1} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item1 end */}
          {/* item2 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image2} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item2 end */}
          {/* item3 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image3} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item3 end */}
          {/* item4 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image4} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item4 end */}
          {/* item5 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image5} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item5 end */}
          {/* item6 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image3} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item6 end */}
          {/* item7 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image1} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item7 end */}
          {/* item8 start */}
          <SwiperSlide className="px-1 py-3">
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={image5} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">Bed Room</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">this is bed room</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">4.7</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
          </SwiperSlide>
          {/* item8 end */}
        </Swiper>
      </div>
      {/* productCard section end */}
      {/* content section end */}
    </div>
  );
};

export default Product;