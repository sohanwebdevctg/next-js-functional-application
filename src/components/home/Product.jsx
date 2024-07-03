"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../public/productcard/roomsofa/image1.png'
import { FaHeart, FaStar } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import { furniture } from '@/utilities/furniture';

//product items
const products = [
  {
    id:1,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'this is bed room',
    rating: 4.7
  },
]

const Product =  () => {

  // furniture fetching data
  const furnitureData = furniture;
  console.log(furnitureData)



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
              slidesPerView: 3,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 6,
            },
          }}
          className="itemSwiper">
            {/* furniture button section start */}
            {
              furnitureData.map((item, index) => <SwiperSlide key={item.id} className="py-[3px] text-center text-[11px] sm:text-xs md:text-xs lg:text-[11px] xl:text-[13px] text-white bg-red-500 rounded-3xl">{item.name}</SwiperSlide>)
            }
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

          {products.map((data) => 
          <SwiperSlide key={data.id} className="px-1 py-3">
            {/* item start */}
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={data.image} alt="logo" className='w-full h-52'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href={`../../single/${data.id}`}>
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">{data.name}</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">{data.details}</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">{data.rating}</span>
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
            {/* item end */}
        </SwiperSlide>)}


        </Swiper>
      </div>
      {/* productCard section end */}
      {/* content section end */}
    </div>
  );
};

export default Product;