import Image from "next/image";
import image1 from '../../../public/shop/shopItem/1.png';
import { FaStar } from "react-icons/fa";
import { shopItem } from "@/utilities/shopItem";


const FeaturedProducts = () => {

  //shopItem fetching data
  const shopItemData = shopItem;

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
        {/* item section start */}
        {
          shopItemData.map((data, index) => <div key={data.id} className="overflow-hidden productCon">
          <Image src={data.image} width={300} height={300} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-52"></Image>
          <ul className=" mt-2 p-2 bg-black bg-opacity-50 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">{data.title}</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: ${data.price}</span></li>
          </ul>
        </div>)
        }
        {/* item section start */}

      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default FeaturedProducts;