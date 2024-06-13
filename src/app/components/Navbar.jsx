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
      <div className="container mx-auto h-24">
        <div className="flex justify-between items-center h-full">
          {/* logo section start */}
            <Image src={Logo} alt='logo' className='w-[10%] h-10'></Image>
          {/* logo section end */}
          {/* link section start */}
          <ul className='flex items-center justify-center gap-8'>
            <li className='xl:text-sm'><Link className={`link ${pathname === '/' ? 'xl:text-sm font-bold' : 'xl:text-sm'}`} href="/">HOME</Link></li>
            <li className='xl:text-sm'><Link className={`link ${pathname === '/shop' ? 'xl:text-sm font-bold' : 'xl:text-sm'}`} href="/shop">SHOP</Link></li>
            <li className='xl:text-sm'><Link className={`link ${pathname === '/about' ? 'xl:text-sm font-bold' : 'xl:text-sm'}`} href="/about">ABOUT</Link></li>
            <li className='xl:text-sm'><Link className={`link ${pathname === '/contact' ? 'xl:text-sm font-bold' : 'xl:text-sm'}`} href="/contact">CONTACT</Link></li>
            <li className='xl:text-sm'><Link className={`link ${pathname === '/blog' ? 'xl:text-sm font-bold' : 'xl:text-sm'}`} href="/blog">BLOG</Link></li>
          </ul>
          {/* link section end */}
          {/* icon section start */}
          <ul className='flex items-center justify-center gap-5'>
            <li className='xl:text-[16px]'><Link href="/"><FaShoppingCart></FaShoppingCart></Link></li>
            <li className='xl:text-[16px]'><Link href="/"><FaHeart></FaHeart></Link></li>
            <li className='xl:text-[16px]'><Link href="/"><FaSearch></FaSearch></Link></li>
          </ul>
          {/* icon section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;