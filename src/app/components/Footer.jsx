import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo/logo.png'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      {/* content section start */}
      <div className="container mx-auto">
        {/* upper section start */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-1 md:gap-4 xl:gap-10 h-full w-full py-10 md:py-10 lg:py-10 xl:py-10 px-4 sm:px-5 md:px-5 lg:px-10 xl:px-12">
          {/* item1 section start */}
          <div>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>About Us</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Our History</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>FAQ by Support</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>News & Update</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Performance</Link></li>
            </ul>
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>Contact Us</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Blog Site</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Support Line</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Social Media</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Our Website</Link></li>
            </ul>
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div>
            <h1 className='text-sm sm:text-xs md:text-sm lg:text-sm xl:text-lg uppercase font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2'>Help</h1>
            <ul className='space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-1 xl:space-y-2'>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>About Us</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Careers</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Newsroom</Link></li>
              <li className='hover:text-red-500 duration-300 text-gray-500'><Link href="/" className='text-xs sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]'>Contact Us</Link></li>
            </ul>
          </div>
          {/* item3 section end */}
          {/* item4 section start */}
          <div className='bg-black bg-opacity-55 shadow-xl rounded-tl-[60px] rounded-br-[60px] pr-3 sm:pr-5 md:pr-5 lg:pr-5 xl:pr-5 flex flex-col justify-center gap-0 xl:gap-2'>
            <ul className="text-right">
              <li><Link href="/" className="text-[9px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-xs text-gray-300">+8801632937291</Link></li>
              <li><Link href="/" className="text-[9px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-xs text-red-500">xcodeemail@gmail.com</Link></li>
            </ul>
            <ul className="text-right">
              <li><Link href="/" className="text-[9px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-xs text-gray-300">900-140 10th Avenue SE</Link></li>
              <li><Link href="/" className="text-[9px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-xs text-gray-300">Calgary, AB T2G OR1</Link></li>
            </ul>
          </div>
          {/* item4 section end */}

        </div>
        {/* upper section end */}
        {/* bottom section start */}
        <hr className='px-5 sm:px-5 md:px-5 lg:px-10 xl:px-16'></hr>
        <div className='sm:flex sm:justify-between sm:items-center h-full w-full py-5 xl:py-10 px-5 sm:px-5 md:px-5 lg:px-10 xl:px-10 space-y-2 sm:space-y-0'>
          {/* left start */}
        <div className="flex-1">
          <p className="text-[11px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px] text-center sm:text-left">Copyright 2024 Xcode Software, All right reserved.</p>
        </div>
          {/* left end */}
          {/* right start */}
          {/* right end */}
        <div className="flex-1 text-right">
        <ul className="flex gap-5 items-center justify-center sm:justify-end">
          <li className="text-[11px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]">Privacy Policy</li>
          <li className="text-[11px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-[15px]">Terms of Use</li>
        </ul>
        </div>
        {/* right end */}
        </div>
        {/* bottom section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Footer;