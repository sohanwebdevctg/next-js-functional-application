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

  const quantityIncrement = (data) => {
    console.log(data)
  }
  const quantityDecrement = (data) => {
    console.log(data)
  }
  console.log(quantity)


  // loading function checkbox
  if(!itemData){
    return <p>Loading.....</p>
  }

  return (
    <div>
          <div className='px-5 sm:px-4 md:px-4 lg:px-0 mt-5'>
      {/* content section start */}
      <div className='container mx-auto  h-full w-full py-10 px-3 sm:px-5 md:px-4 lg:px-10 xl:px-12 shadow-lg'>
        {/* item section start */}
        <div className="sm:flex sm:justify-between sm:gap-5 ">
          {/* image section start */}
          <div className="w-full sm:w-[50%] p-10 bg-white">
            {/* selected image section start */}
            <div className="overflow-hidden">
              <Image src={selectImage ? selectImage : (imageData ? imageData[0] : '/no-data')} width={300} height={300} alt="this is selected image" className='w-96 h-56 mx-auto'></Image>
              <div className='flex  items-center justify-around gap-2 mt-5 overflow-hidden bg-[#F5F5F5] py-2'>
                {
                  imageData?.map((data,index) => <Image key={index} src={data} width={100} height={100} alt={`this is ${data.id} image`} className='w-24 h-20' onClick={() => setSelectImage(data)}></Image>)
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
          <div className="w-full sm:w-[50%] bg-[#F5F5F5] p-10">
          <ul className='xl:space-y-3'>
            {/* name and price */}
            <li className='flex items-center justify-between'>
              <span className="xl:text-4xl font-bold">{itemData?.name}</span>
              <span className="xl:text-3xl text-red-700 italic font-bold">$ {itemData?.price}</span>
            </li>
            {/* detsils */}
            <li>
              <p className='xl:text-[15px] text-gray-500 xl:w-[80%]'>{itemData?.details}</p>
            </li>
            {/* rating */}
            <li className="flex items-center">
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <span className="text-xs md:text-[9px] xl:text-base ml-2"> {itemData?.rating}</span>
            </li>
            {/* color */}
            <li className='flex items-center gap-6'>
              <p className="xl:text-2xl">Color:</p>
              <p className='flex gap-1'>
              {
                itemData?.colorItem?.map((data, index) => <span key={index} className={`text-${data.color}-500 text-3xl`} onClick={() => colorImage(data.image)}><MdInvertColors></MdInvertColors></span>)
              }
              </p>
            </li>
            {/* quantity */}
            <li className='flex items-center gap-5'>
              <p className="xl:text-2xl">Quantity:</p>
              <div className='flex justify-center items-center gap-2 '>
              <FaPlusSquare className="text-xl text-green-500"/>
              {quantity}
              <FaMinusSquare className="text-xl text-red-500"/>
              </div>
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