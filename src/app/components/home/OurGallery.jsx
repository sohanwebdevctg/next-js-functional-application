import Image from "next/image";
import room1 from '../../../../public/gallery/room1.jpg'
import room2 from '../../../../public/gallery/room2.jpg'
import room3 from '../../../../public/gallery/room3.jpg'
import room4 from '../../../../public/gallery/room4.jpg'
import soffa from '../../../../public/gallery/soffa.png'
import table from '../../../../public/gallery/table.jpg'
import drawer from '../../../../public/gallery/drawer.png'
import smalldrawer from '../../../../public/gallery/smalldrawer.jpg'
import sofasidetable from '../../../../public/gallery/sofasidetable.jpg'
import wallShowcase from '../../../../public/gallery/wallShowcase.jpg'
import wallWrod from '../../../../public/gallery/wallWrod.jpg'
import livingroomchair from '../../../../public/gallery/livingroomchair.jpg'


const OurGallery = () => {
  return (
    <div className="py-10">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-5 md:px-5 lg:px-10 xl:px-12'>
      {/* title section start */}
      <div className="mb-5 text-center">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl">Our Gallery</h1>
      </div>
      {/* title section end */}
      {/* item section start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-5">
        {/* item1 section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-3">
          {/* left item start */}
          <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
            <Image src={room1} alt="this is room image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
            <span className="absolute bottom-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Window Room</span>
          </div>
          {/* left item end */}
          {/* right item start */}
          <div className="mt-3 sm:mt-0 flex-1 flex justify-between items-center gap-2">
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute top-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute top-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
          </div>
          {/* right item end */}
        </div>
        {/* item1 section end */}
        {/* item2 section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-3">
          {/* left item start */}
          <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
            <Image src={room1} alt="this is room image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
            <span className="absolute top-3 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Window Room</span>
          </div>
          {/* left item end */}
          {/* right item start */}
          <div className="mt-3 sm:mt-0 flex-1 flex justify-between items-center gap-2">
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute bottom-2 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute bottom-2 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
          </div>
          {/* right item end */}
        </div>
        {/* item2 section end */}
        {/* item3 section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-3">
          {/* left item start */}
          <div className="mt-3 sm:mt-0 flex-1 flex justify-between items-center gap-2">
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute bottom-2 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute bottom-2 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
          </div>
          {/* left item end */}
          {/* right item start */}
          <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
            <Image src={room1} alt="this is room image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
            <span className="absolute top-3 right-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Window Room</span>
          </div>
          {/* right item end */}
        </div>
        {/* item3 section end */}
        {/* item1 section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-3">
          {/* left item start */}
          <div className="mt-3 sm:mt-0 flex-1 flex justify-between items-center gap-2">
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute top-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
            <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
              <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
              <span className="absolute top-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Single Sofa</span>
            </div>
          </div>
          {/* left item end */}
          {/* right item start */}
          <div className="flex-1 relative border-4 border-slate-200 shadow-lg overflow-hidden">
            <Image src={room1} alt="this is room image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-40 hover:scale-105 animation duration-500"></Image>
            <span className="absolute bottom-3 left-2 bg-red-600 text-white text-[8px] py-1 px-2 rounded-md">Window Room</span>
          </div>
          {/* right item end */}
        </div>
        {/* item1 section end */}
      </div>
      {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurGallery;