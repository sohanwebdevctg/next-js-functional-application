"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import { furniture } from '@/utilities/furniture';
import { useState } from 'react';


const Product =  () => {

  // furniture fetching data
  const furnitureData = furniture;

  const fetchData =  furnitureData.flatMap(category => category.items)
  
  //btn data and fetching data
  const [btnData, setBtnData] = useState(fetchData)
  const [sortData, setSortData] = useState('all')

  //btnFun 
  const btnFun = (name) => {
    const value = furnitureData.filter((data) => data.name === name)
    const sortData = value.length > 0 ? value[0]?.items : [];
    setBtnData(sortData)

    const check = furnitureData.filter((data) => data.name === name)
    setSortData(check[0]?.name)
  }

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
              slidesPerView: 2,
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
            <SwiperSlide onClick={() => setBtnData(fetchData)} className={`${sortData === 'all' ? 'hover:bg-red-500 bg-red-500 text-white' : 'bg-white hover:bg-white text-black'} btn btn-xs py-[3px] text-center text-[11px] sm:text-xs md:text-xs lg:text-[11px] xl:text-[13px]  rounded-3xl`}><span onClick={() => setSortData('all')}>All</span></SwiperSlide>
            {
              furnitureData.map((item) => <SwiperSlide onClick={() => btnFun(item.name)} key={item.id} className={`${sortData === item.name ? 'hover:bg-red-500 bg-red-500 text-white' : 'bg-white hover:bg-white text-black'} btn btn-xs py-[3px] text-center text-[11px] sm:text-xs md:text-xs lg:text-[11px] xl:text-[13px]  rounded-3xl`}><span onClick={() => setSortData(item.name)}>{item.name}</span></SwiperSlide>)
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
          {
          btnData?.map((item,index) => <SwiperSlide key={index} className="px-1 py-3">
            {/* item start */}
            <div>
            {/* image section start */}
            <div className="bg-white">
              <Image src={item.image} width={100} height={100} alt={`this is ${item.id} image`} className='w-full h-48'></Image>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link href={`../../single/${item.id}`}>
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">{item.name}</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">{item.details}</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">{item.rating}</span>
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
        </SwiperSlide>)
          }
        </Swiper>
      </div>
      {/* productCard section end */}
      {/* content section end */}
    </div>
  );
};

export default Product;