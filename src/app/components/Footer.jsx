import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      {/* content section start */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-2 md:gap-4 xl:gap-10 h-full w-full py-10 md:py-10 lg:py-10 xl:py-10 px-5 sm:px-5 md:px-5 lg:px-10 xl:px-12">
          {/* item1 section start */}
          <div className='bg-slate-200'>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>About Us</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Our History</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>FAQ by Support</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>News & Update</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Performance</Link></li>
            </ul>
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div className='bg-slate-200'>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>Contact Us</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Blog Site</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Support Line</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Social Media</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Our Website</Link></li>
            </ul>
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div className='bg-slate-200'>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>Help</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>About Us</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Careers</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Newsroom</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Contact Us</Link></li>
            </ul>
          </div>
          {/* item3 section end */}
          {/* item3 section start */}
          <div className='bg-slate-200'>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>Help</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>About Us</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Careers</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Newsroom</Link></li>
              <li><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Contact Us</Link></li>
            </ul>
          </div>
          {/* item3 section end */}

        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Footer;