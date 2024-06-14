import Image from "next/image";
import room1 from '../../../../public/gallery/room1.jpg'
import room2 from '../../../../public/gallery/room2.jpg'
import soffa from '../../../../public/gallery/soffa.png'
import table from '../../../../public/gallery/table.jpg'
import drawer from '../../../../public/gallery/drawer.png'
import smalldrawer from '../../../../public/gallery/smalldrawer.jpg'


const OurGallery = () => {
  return (
    <div>
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-5 md:px-5 lg:px-10 xl:px-12'>
      {/* item section start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-5">
        {/* item1 section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-3">
          {/* left item start */}
          <div className="flex-1">
            <Image src={room1} alt="this is room image" className="w-full h-32 sm:h-32 md:h-28 lg:h-32 xl:h-40 border-4 border-slate-200 shadow-lg"></Image>
          </div>
          {/* left item end */}
          {/* right item start */}
          <div className="mt-3 sm:mt-0 flex-1 flex justify-between items-center gap-2">
            <div className="flex-1">
            <Image src={soffa} alt="this is soffa image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 border-4 border-slate-200 shadow-lg"></Image>
            </div>
            <div className="flex-1">
            <Image src={table} alt="this is table image" className="w-full h-20 sm:h-32 md:h-28 lg:h-32 xl:h-40 border-4 border-slate-200 shadow-lg"></Image>
            </div>
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