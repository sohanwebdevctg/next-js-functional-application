import Image from "next/image";
import image1 from '../../../../public/shop/1.png'
import image2 from '../../../../public/shop/2.png'
import image3 from '../../../../public/shop/3.png'
import image4 from '../../../../public/shop/4.png'
import image5 from '../../../../public/shop/5.png'
import image6 from '../../../../public/shop/6.png'
import image7 from '../../../../public/shop/7.png'
import image8 from '../../../../public/shop/8.png'
import image9 from '../../../../public/shop/9.png'
import image10 from '../../../../public/shop/10.png'
import image11 from '../../../../public/shop/11.png'
import image12 from '../../../../public/shop/12.png'

import { FaStar } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className='container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-5 lg:px-10 xl:px-12'>
          {/* title section start */}
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Shop With Us</h1>
      </div>
      {/* title section end */}
      {/* items section start */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5">
        {/* item1 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image1} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Single Sofa</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $120</span></li>
          </ul>
        </div>
        {/* item1 section start */}
        {/* item2 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image2} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Leather Chair</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $90</span></li>
          </ul>
        </div>
        {/* item2 section start */}
        {/* item3 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image3} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Kids Chair</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $20</span></li>
          </ul>
        </div>
        {/* item3 section start */}
        {/* item4 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image4} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Sofa Set</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $160</span></li>
          </ul>
        </div>
        {/* item4 section start */}
        {/* item5 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image5} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Tea Table</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $60</span></li>
          </ul>
        </div>
        {/* item5 section start */}
        {/* item6 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image6} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Reading Table</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $200</span></li>
          </ul>
        </div>
        {/* item6 section start */}
        {/* item7 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image7} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Luxury Bed</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $250</span></li>
          </ul>
        </div>
        {/* item7 section start */}
        {/* item8 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image8} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Dining Table</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $320</span></li>
          </ul>
        </div>
        {/* item8 section start */}
        {/* item9 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image9} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">TV Cabinets</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $220</span></li>
          </ul>
        </div>
        {/* item9 section start */}
        {/* item10 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image10} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Showpiece Shelves</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $320</span></li>
          </ul>
        </div>
        {/* item10 section start */}
        {/* item11 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image11} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Wall Clock</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $90</span></li>
          </ul>
        </div>
        {/* item11 section start */}
        {/* item12 section start */}
        <div className="overflow-hidden productCon">
          <Image src={image12} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-35 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">Beside Table</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: $100</span></li>
          </ul>
        </div>
        {/* item12 section start */}
      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default FeaturedProducts;