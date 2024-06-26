import Image from "next/image";
import image1 from '../../../../public/shop/diningtable.jpg';
import image2 from '../../../../public/shop/drawingroom.jpg';


const ViewProduct = () => {
  return (
    <div className='my-12 sm:my-14 md:my-14 lg:my-16 xl:my-20 px-5'>
      {/* content section start */}
      <div className='container mx-auto sm:px-5 lg:px-20 xl:px-36'>
        {/* title section start */}
      <div className="mb-5 text-center">
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Best Interior Items</h1>
      </div>
      {/* title section end */}
        {/* item section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-8'>
          {/* left item section start */}
          <div className='h-44 sm:h-44 md:h-52 lg:h-52 xl:h-64 w-full relative'>
              <Image src={image1} alt="this is success section" className='h-full w-full'></Image>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
                <ul className="flex justify-between items-center w-full">
                  <li><h1 className='text-sm sm:text-sm md:text-sm lg:text-base xl:text-2xl font-bold text-white'>Our Best Dining Room</h1></li>
                  <li className="text-end">
                    <button className="btn text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs px-3 xl:px-4 py-1 border-[1px] border-white rounded-md text-white">Show</button>
                  </li>
                </ul>
              </div>
          </div>
          {/* left item section end */}
          {/* right item section start */}
          <div className='h-44 sm:h-44 md:h-52 lg:h-52 xl:h-64 w-full relative'>
              <Image src={image2} alt="this is success section" className='h-full w-full'></Image>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
                <ul className="flex justify-between items-center w-full">
                  <li><h1 className='text-sm sm:text-sm md:text-sm lg:text-base xl:text-2xl font-bold text-white'>Our Best Drawing Room</h1></li>
                  <li className="text-end">
                    <button className="btn text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs px-3 xl:px-4 py-1 border-[1px] border-white rounded-md text-white">Show</button>
                  </li>
                </ul>
              </div>
          </div>
          {/* right item section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ViewProduct;