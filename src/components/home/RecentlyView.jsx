import Image from "next/image";
import view1 from '../../../public/recentlyview/view1.jpg'
import view2 from '../../../public/recentlyview/view2.jpg'
import view3 from '../../../public/recentlyview/view3.png'
import view4 from '../../../public/recentlyview/view4.jpeg'
import { FaStar } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";


const RecentlyView = () => {
  return (
    <div className="my-3 px-4 ">
      {/* content section start */}
      <div className='container h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-8'>
      {/* title section start */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Recently View</h1>
      </div>
      {/* title section end */}
      {/* item section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 lg:gap-2 xl:gap-3">
        {/* item1 section start */}
        <div className="overflow-hidden rounded-lg shadow-lg mainCon">
          <Image src={view1} alt="this is view image" className="w-full h-40 sm:h-40 md:h-36 lg:h-36 xl:h-48"></Image>
          {/* details section start */}
          <div className="subCon bg-black bg-opacity-30 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-slate-200 font-bold italic">Bed Room</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ 40</p>
              </li>
              <li><p className="text-xs md:text-[10px] xl:text-xs text-slate-200">this is bed room</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">4.7</span>
                </span>
                <span className="flex items-center gap-1">
                  <AiFillPlusCircle className="text-slate-200 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                  <FaHeart className="text-slate-200 text-lg md:text-sm xl:text-xl"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item1 section end */}
        {/* item2 section start */}
        <div className="overflow-hidden rounded-lg shadow-lg mainCon">
          <Image src={view2} alt="this is view image" className="w-full h-40 sm:h-40 md:h-36 lg:h-36 xl:h-48"></Image>
          {/* details section start */}
          <div className="subCon bg-black bg-opacity-30 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-slate-200 font-bold italic">Window Room</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ 80</p>
              </li>
              <li><p className="text-xs md:text-[10px] xl:text-xs text-slate-200">this is window room</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">4.9</span>
                </span>
                <span className="flex items-center gap-1">
                  <AiFillPlusCircle className="text-slate-200 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                  <FaHeart className="text-slate-200 text-lg md:text-sm xl:text-xl"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item2 section end */}
        {/* item3 section start */}
        <div className="overflow-hidden rounded-lg shadow-lg mainCon">
          <Image src={view3} alt="this is view image" className="w-full h-40 sm:h-40 md:h-36 lg:h-36 xl:h-48"></Image>
          {/* details section start */}
          <div className="subCon bg-black bg-opacity-30 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-slate-200 font-bold italic">Hotel Room</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ 40</p>
              </li>
              <li><p className="text-xs md:text-[10px] xl:text-xs text-slate-200">this is hotel room</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">5.0</span>
                </span>
                <span className="flex items-center gap-1">
                  <AiFillPlusCircle className="text-slate-200 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                  <FaHeart className="text-slate-200 text-lg md:text-sm xl:text-xl"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item3 section end */}
        {/* item4 section start */}
        <div className="overflow-hidden rounded-lg shadow-lg mainCon">
          <Image src={view4} alt="this is view image" className="w-full h-40 sm:h-40 md:h-36 lg:h-36 xl:h-48"></Image>
          {/* details section start */}
          <div className="subCon bg-black bg-opacity-30 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-slate-200 font-bold italic">Luxury Room</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ 120</p>
              </li>
              <li><p className="text-xs md:text-[10px] xl:text-xs text-slate-200">this is private room</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">6.0</span>
                </span>
                <span className="flex items-center gap-1">
                  <AiFillPlusCircle className="text-slate-200 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                  <FaHeart className="text-slate-200 text-lg md:text-sm xl:text-xl"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item4 section end */}
      </div>
      {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default RecentlyView;