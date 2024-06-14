

import Image from 'next/image';
import brand from '../../../../public/brandlogo/brand1.png'

const BrandLogo = () => {
  return (
    <div className='h-20'>
      <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-10 bg-slate-400">
      {/* content section start */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}
        {/* brand1 section start */}
        <div className='overflow-hidden'>
          <Image src={brand} alt="brandlogo" className="w-full h-10"/>
        </div>
        {/* brand1 section end */}


      {/* content section end */}
    </div>
    </div>
  );
};

export default BrandLogo;