import Image from "next/image";
import view1 from '../../../../public/recentlyview/view1.jpg'
import view2 from '../../../../public/recentlyview/view2.jpg'
import view3 from '../../../../public/recentlyview/view3.png'
import view4 from '../../../../public/recentlyview/view4.jpeg'
import { FaStar } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";


const RecentlyView = () => {
  return (
    <div className="my-3 px-4 ">
      {/* content section start */}
      <div className='container h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12'>
      {/* title section start */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Recently View</h1>
      </div>
      {/* title section end */}
      {/* item section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 xl:gap-5">
        {/* item1 section start */}
        <div className="overflow-hidden rounded-lg shadow-lg relative">
          <Image src={view1} alt="this is view image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-48"></Image>
          {/* details section start */}
          <div className="absolute bg-black bg-opacity-30 left-0 right-0 bottom-0 z-10 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm text-slate-200 font-bold italic">Bed Room</h2>
                <p className="text-sm text-slate-200 font-bold">$ 40</p>
              </li>
              <li><p className="text-xs text-slate-200">this is bed room</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-[10px]"></FaStar>
                  <FaStar className="text-yellow-500 text-[10px]"></FaStar>
                  <FaStar className="text-yellow-500 text-[10px]"></FaStar>
                  <FaStar className="text-yellow-500 text-[10px]"></FaStar>
                  <FaStar className="text-yellow-500 text-[10px]"></FaStar>
                  <span className="text-[10px] text-slate-200 ml-1">4.7</span>
                </span>
                <span className="flex items-center gap-1">
                  <AiFillPlusCircle className="text-slate-200 text-xl"></AiFillPlusCircle>
                  <FaHeart className="text-slate-200 text-lg"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>
        {/* item1 section end */}
      </div>
      {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default RecentlyView;