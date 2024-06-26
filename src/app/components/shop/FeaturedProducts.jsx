import Image from "next/image";
import image1 from '../../../../public/shop/1.png'

const FeaturedProducts = () => {
  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className='container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12'>
          {/* title section start */}
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Shop With Us</h1>
      </div>
      {/* title section end */}
      {/* items section start */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {/* item section start */}
        <div>
          <Image src={image1} alt="this is shop product" className="w-full xl:h-44"></Image>
        </div>
        {/* item section start */}
      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default FeaturedProducts;