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
        <div>
          <Image src={image1} alt="this is shop product" className="w-full h-24 sm:h-32 md:h-36 lg:h-40 xl:h-44"></Image>
          <ul className="flex justify-between items-center mt-2 px-1">
            <li className="text-[13px] sm:text-sm md:text-sm lg:text-bas xl:text-base font-bold">Single Sofa</li>
            <li className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">$120</li>
          </ul>
        </div>
        {/* item1 section start */}
      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default FeaturedProducts;