import Image from 'next/image';
import brand1 from '../../../../public/brandlogo/brand1.png';
import brand2 from '../../../../public/brandlogo/brand4.png';
import brand3 from '../../../../public/brandlogo/brand5.png';
import brand4 from '../../../../public/brandlogo/brand6.png';
import brand6 from '../../../../public/brandlogo/brand11.png';
import brand7 from '../../../../public/brandlogo/brand12.png';


const ShopBrand = () => {
  return (
    <div>
      {/* content section start */}
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
      {/* content section end */}
    </div>
  );
};

export default ShopBrand;