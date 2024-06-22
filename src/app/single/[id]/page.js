import { FaStar } from 'react-icons/fa';
import image1 from '../../../../public/productcard/bed/image1.png';
import image2 from '../../../../public/productcard/bed/image2.png';
import image3 from '../../../../public/productcard/bed/image3.png';
import image4 from '../../../../public/productcard/bed/image4.png';
import image5 from '../../../../public/productcard/bed/image5.png';

import { MdInvertColors } from "react-icons/md";
import Image from 'next/image';

//singleProduct items
const singleProduct = [
  {
    id:1,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:2,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:3,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:4,
    image : image3,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:5,
    image : image4,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:6,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:7,
    image : image3,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:8,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:9,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:10,
    image : image4,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:11,
    image : image5,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:12,
    image : image1,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  },
  {
    id:13,
    image : image2,
    name: 'Bed room',
    price: 40,
    details: 'A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping. A typical western bedroom contains as bedroom furniture one or two beds, a clothes closet, and bedside table and dressing table, both of which usually contain drawers.',
    rating: 4.7,
    quantity: 1
  }
]

const SingleProductPage = ({params}) => {
  
  // filter single data
  const singleItem = singleProduct.filter((data) => data.id == params.id)
  const {name, price,details,image, rating, quantity} = singleItem[0];



  return (
    <div className='px-5 sm:px-4 md:px-4 lg:px-0 mt-5'>
      {/* content section start */}
      <div className='container mx-auto  h-full w-full py-10 px-3 sm:px-5 md:px-4 lg:px-10 xl:px-12 shadow-lg'>
        {/* item section start */}
        <div className="sm:flex sm:justify-between sm:gap-5 ">
          {/* image section start */}
          <div className="w-full sm:w-[50%] p-10 bg-white">
            {/* selected image section start */}
            <div>
              <Image src={image} alt="this is selected image" className='w-full h-52'></Image>
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
              <span className="xl:text-4xl font-bold">{name}</span>
              <span className="xl:text-3xl text-red-700 italic font-bold">${price}</span>
            </li>
            {/* detsils */}
            <li>
              <p className='xl:text-[15px] text-gray-500 xl:w-[80%]'>{details}</p>
            </li>
            {/* rating */}
            <li className="flex items-center">
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-lg"></FaStar>
              <span className="text-xs md:text-[9px] xl:text-base ml-2"> {rating}</span>
            </li>
            {/* color */}
            <li className='flex items-center gap-6'>
              <p className="xl:text-2xl">Color:</p>
              <p className='flex gap-1'>
                <span className='text-yellow-500 text-3xl'><MdInvertColors></MdInvertColors></span>
                <span className='text-red-500 text-3xl'><MdInvertColors></MdInvertColors></span>
                <span className='text-orange-500 text-3xl'><MdInvertColors></MdInvertColors></span>
                <span className='text-gray-500 text-3xl'><MdInvertColors></MdInvertColors></span>
                <span className='text-blue-500 text-3xl'><MdInvertColors></MdInvertColors></span>
                <span className='text-black text-3xl'><MdInvertColors></MdInvertColors></span>
              </p>
            </li>
            {/* quantity */}
            <li className='flex items-center gap-5'>
              <p className="xl:text-2xl">Quantity:</p>
              <p>
                {quantity}
              </p>
            </li>
          </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default SingleProductPage;