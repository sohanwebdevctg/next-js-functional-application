import { TiWorld } from "react-icons/ti";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdLocalOffer, MdLock } from "react-icons/md";

const ShopSupport = () => {
  return (
    <div className='my-10 sm:my-12 md:my-10 lg:my-14 xl:my-16 px-5'>
      {/* content section start */}
      <div className='container mx-auto px-3 sm:px-5 md:px-3 lg:px-5 xl:px-6'>
        {/* item section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-2 lg:gap-3 xl:gap-4'>
          {/* item1 section start */}
          <div className="text-center mx-auto space-y-1">
            <TiWorld className="mx-auto text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600"></TiWorld>
            <h1 className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg font-bold">Worldwide Shipping</h1>
            <p className="text-xs sm:text-sm md:text-[9px] lg:text-[13px] xl:text-base italic text-gray-500">Global delivery service with reliable logistics, ensuring timely and secure shipping worldwide</p>
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div className="text-center mx-auto space-y-1">
            <FaTruckDroplet className="mx-auto text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600"></FaTruckDroplet>
            <h1 className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg font-bold">Best Quality</h1>
            <p className="text-xs sm:text-sm md:text-[9px] lg:text-[13px] xl:text-base italic text-gray-500">n the realm of artistry, where words dance with purpose, excellence shines through clarity, precision</p>
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div className="text-center mx-auto space-y-1">
            <MdLocalOffer className="mx-auto text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600"></MdLocalOffer>
            <h1 className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg font-bold">Best Offers</h1>
            <p className="text-xs sm:text-sm md:text-[9px] lg:text-[13px] xl:text-base italic text-gray-500">Unbeatable deals and exclusive savings on a curated selection of premium products</p>
          </div>
          {/* item3 section end */}
          {/* item3 section start */}
          <div className="text-center mx-auto space-y-1">
            <MdLock className="mx-auto text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600"></MdLock>
            <h1 className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg font-bold">Secure Payment</h1>
            <p className="text-xs sm:text-sm md:text-[9px] lg:text-[13px] xl:text-base italic text-gray-500">our secure payment system, ensuring your transactions are protected with the latest technology</p>
          </div>
          {/* item3 section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ShopSupport;