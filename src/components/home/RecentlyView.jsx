import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { recentlyView } from "@/utilities/recentlyView";
import ViewModal from "./ViewModal";


const RecentlyView = () => {

  // recentlyData fetching
  const recentlyData = recentlyView;

  return (
    <div className="my-3 px-4 ">
      {/* content section start */}
      <div className='container h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-8'>
      {/* title section start */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Recently View</h1>
      </div>
      {/* title section end */}
      {/* items section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 lg:gap-2 xl:gap-3">
        {/* item section start */}
        {
          recentlyData.map((data, index) => <div key={data.id} className="overflow-hidden rounded-lg shadow-lg mainCon">
          <Image src={data.image} width={300} height={300} alt={`this is view ${data.id}`} className="w-full h-40 sm:h-40 md:h-36 lg:h-36 xl:h-48"></Image>
          {/* details section start */}
          <div className="subCon bg-black bg-opacity-30 py-1 px-2">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-slate-200 font-bold italic">{data.title}</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ {data.price}</p>
              </li>
              <li><p className="text-xs md:text-[10px] xl:text-xs text-slate-200">{data.description}</p></li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">{data.rating}</span>
                </span>
                <span className="flex items-center gap-1">
                  {/* <AiFillPlusCircle className="text-slate-200 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle> */}
                  <ViewModal data={data}></ViewModal>
                  <FaHeart className="text-slate-200 text-lg md:text-sm xl:text-xl"></FaHeart>
                </span>
              </li>
            </ul>
          </div>
          {/* details section end */}
        </div>)
        }
        {/* item section end */}

      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default RecentlyView;