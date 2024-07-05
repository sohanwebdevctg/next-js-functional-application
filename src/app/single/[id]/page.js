'use client'

import { FaStar } from 'react-icons/fa';
import { MdInvertColors } from "react-icons/md";
import Image from 'next/image';
import { furniture } from '@/utilities/furniture';
import { useEffect, useState } from 'react';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";


const SingleProductPage = ({params,searchParams}) => {

  // params and searchParams
  const {id} = params;
  const {name} = searchParams;

    // furniture fetching data
    const furnitureData = furniture;

  // find out data from params and set state
  useEffect(() => {

    if(id && name){
      const matchItem = furnitureData.find((category) => category.items.some((item) => item.id === parseInt(id) && item.name === name))

      if(matchItem){
        const item = matchItem.items.find((item) => item.id === parseInt(id) && item.name === name);
        setItemData(item)
        setImageData(item?.colorItem[0].image)
      }
    };

  },[id,name])

   // set find data
  const [itemData, setItemData] = useState([]);


   // setImageData from color plate
  const [imageData, setImageData] = useState(null);

  //  set color image function
  const colorImage = (data) => {
    setImageData(data);
    setSelectImage(data[0])
  }
  // set selected data from onClick function
  const [selectImage, setSelectImage] = useState('')

  // quantity data
  const [quantity, setQuantity] = useState(1);
  // quantity increment function
  const quantityIncrement = (data) => {
    setQuantity(data + 1)
  }
  //quantity decrement function
  const quantityDecrement = (data) => {
    if(quantity > 1){
      setQuantity(data - 1)
    }
  }

  // loading function checkbox
  if(!itemData){
    return <p>Loading.....</p>
  }

  return (
    <div>
          <div className='px-3 sm:px-4 md:px-4 lg:px-6 my-10 sm:my-10'>
      {/* content section start */}
      <div className='container mx-auto h-full w-full py-5 px-2 sm:px-5 md:px-4 lg:px-8 xl:px-12 shadow-lg'>
        {/* item section start */}
        <div className="sm:flex sm:justify-between sm:gap-5 ">
          {/* image section start */}
          <div className="w-full sm:w-[50%] p-3 sm:p-2 xl:p-10 bg-white">
            {/* selected image section start */}
            <div className="overflow-hidden">
              <Image src={selectImage ? selectImage : (imageData ? imageData[0] : '/no-data')} width={300} height={300} alt="this is selected image" className='w-full h-40 sm:w-full sm:h-44 md:w-72 md:h-48 lg:w-80 lg:h-52 xl:w-96 xl:h-60 mx-auto'></Image>
              <div className='flex items-center justify-around gap-2 mt-5 overflow-x-auto bg-[#F5F5F5] py-2'>
                {
                  imageData?.map((data,index) => <Image key={index} src={data} width={100} height={100} alt={`this is ${data.id} image`} className='w-16 h-16 sm:w-[70px] sm:h-[80px] md:w-[80px] md:h-[86px] lg:w-20 lg:h-20 xl:w-20 xl:h-24' onClick={() => setSelectImage(data)}></Image>)
                }
              </div>
            </div>
            {/* selected image section end */}
            {/* select image section start */}
            <div>
            </div>
            {/* select image section end */}
          </div>
          {/* image section end */}
          {/* details section start */}
          <div className="w-full sm:w-[50%] bg-[#F5F5F5] p-3 lg:p-5 xl:p-10 ">
          <ul className='space-y-2 sm:space-y-4 md:space-y-3 lg:space-y-3 xl:space-y-4'>
            {/* name and price */}
            <li className='flex items-center justify-between'>
              <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-bold">{itemData?.name}</span>
              <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-red-700 italic font-bold">$ {itemData?.price}</span>
            </li>
            {/* detsils */}
            <li>
              <p className='text-xs sm:text-[13px] md:text-sm lg:text-[15px] xl:text-base text-gray-500 w-full xl:w-[90%]'>{itemData?.details}</p>
            </li>
            {/* rating */}
            <li className="flex items-center">
              <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
              <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg ml-2"> {itemData?.rating}</span>
            </li>
            {/* color */}
            <li className='flex items-center gap-6 sm:gap-3 md:gap-3 lg:gap-4 xl:gp-6'>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Color:</p>
              <p className='flex gap-1'>
              {
                itemData?.colorItem?.map((data, index) => <span key={index} className={`text-${data.color}-500 text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl`} onClick={() => colorImage(data.image)}><MdInvertColors></MdInvertColors></span>)
              }
              </p>
            </li>
            {/* quantity */}
            <li className='flex items-center gap-5'>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Quantity:</p>
              <div className='flex justify-center items-center gap-2 '>
              <FaPlusSquare onClick={() => quantityIncrement(quantity)} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-green-500"/>
              <span className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{quantity}</span>
              <FaMinusSquare onClick={() => quantityDecrement(quantity)} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-500"/>
              </div>
            </li>
            <li>
              <button className='bg-red-600 text-white btn btn-xs sm:btn-xs md:btn-sm lg:btn-sm xl:btn-md hover:bg-red-600'>Add to Cart</button>
            </li>
          </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
    </div>
  );
};

export default SingleProductPage;