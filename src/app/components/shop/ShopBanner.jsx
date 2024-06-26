import Image from 'next/image';
import brand1 from '../../../../public/brandlogo/brand1.png';
import brand2 from '../../../../public/brandlogo/brand4.png';
import brand3 from '../../../../public/brandlogo/brand5.png';
import brand4 from '../../../../public/brandlogo/brand6.png';
import brand6 from '../../../../public/brandlogo/brand11.png';
import brand7 from '../../../../public/brandlogo/brand12.png';

const ShopBanner = () => {
  return (
    <div className="shopBanner h-96 sm:h-80 md:h-80 lg:h-96 xl:h-[420px]">
      {/* content section start */}
      <div className="h-full flex justify-center items-center">
        {/* item section start */}
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-red-600">Shop Post</h1>
          <p className="text-white text-base sm:text-sm md:text-sm lg:text-base xl:text-md my-3">Please show our best product in this page you can find out<br></br>your best products</p>
          <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm uppercase text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm">shop</button>
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
      {/* logo section start */}
      <div className='bg-[#F5F5F5] py-3'>
        <ul className='container mx-auto grid grid-cols-8 gap-3'>
          <li>
            <Image src={brand1} alt="logo1" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand2} alt="logo2" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand4} alt="logo3" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand3} alt="logo6" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand6} alt="logo6" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand2} alt="logo6" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand7} alt="logo6" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
          <li>
            <Image src={brand3} alt="logo6" className='mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20'></Image>
          </li>
        </ul>
      </div>
      
      {/* logo section end */}
    </div>
  );
};

export default ShopBanner;