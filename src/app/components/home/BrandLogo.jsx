import Image from 'next/image';
import brand1 from '../../../../public/brandlogo/brand1.png';

const BrandLogo = () => {
  return (
    <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-10 bg-slate-400">
      {/* content section start */}
      <div className='grid grid-cols-10 gap-5'>
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand1} alt="brandlogo" className="w-full h-full"/>
        </div>
        {/* brand1 section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default BrandLogo;