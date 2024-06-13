'use client'
import Image from 'next/image';
import Logo from '../../../public/logo/logo.png'
import Link from 'next/link';
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {

  // pathname
  const pathname = usePathname()

  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto h-24 md:px-5 lg:px-10 xl:px-12">
        <div className="md:flex md:justify-between md:items-center h-full">
          {/* logo section start */}
            <Image src={Logo} alt='logo' className='md:w-[8%] lg:w-[9%] xl:w-[10%] md:h-5 lg:h-8 xl:h-10'></Image>
          {/* logo section end */}
          {/* link section start */}
          <ul className='flex items-center justify-center gap-8'>
            <li><Link className={`link ${pathname === '/' ? 'md:text-xs lg:text-[13px] xl:text-sm font-bold' : 'md:text-xs lg:text-[13px] xl:text-sm'}`} href="/">HOME</Link></li>
            <li><Link className={`link ${pathname === '/shop' ? 'md:text-xs lg:text-[13px] xl:text-sm font-bold' : 'md:text-xs lg:text-[13px] xl:text-sm'}`} href="/shop">SHOP</Link></li>
            <li><Link className={`link ${pathname === '/about' ? 'md:text-xs lg:text-[13px] xl:text-sm font-bold' : 'md:text-xs lg:text-[13px] xl:text-sm'}`} href="/about">ABOUT</Link></li>
            <li><Link className={`link ${pathname === '/contact' ? 'md:text-xs lg:text-[13px] xl:text-sm font-bold' : 'md:text-xs lg:text-[13px] xl:text-sm'}`} href="/contact">CONTACT</Link></li>
            <li><Link className={`link ${pathname === '/blog' ? 'md:text-xs lg:text-[13px] xl:text-sm font-bold' : 'md:text-xs lg:text-[13px] xl:text-sm'}`} href="/blog">BLOG</Link></li>
          </ul>
          {/* link section end */}
          {/* icon section start */}
          <ul className='flex items-center justify-center gap-5'>
            <li className='md:text-xs lg:text-[14px] xl:text-[16px]'><Link href="/"><FaShoppingCart></FaShoppingCart></Link></li>
            <li className='md:text-xs lg:text-[14px] xl:text-[16px]'><Link href="/"><FaHeart></FaHeart></Link></li>
            <li className='md:text-xs lg:text-[14px] xl:text-[16px]'><Link href="/"><FaSearch></FaSearch></Link></li>
          </ul>
          {/* icon section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;