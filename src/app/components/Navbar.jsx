import Image from 'next/image';
import Logo from '../../../public/logo/logo.png'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto h-24">
        <div className="flex justify-between items-center h-full">
          {/* logo section start */}
            <Image src={Logo} alt='logo' className='w-[10%] h-12'></Image>
          {/* logo section end */}
          {/* link section start */}
          <ul className='flex items-center justify-center gap-5'>
            <li className='xl:text-sm'><Link href="/">HOME</Link></li>
            <li className='xl:text-sm'><Link href="/">SHOP</Link></li>
            <li className='xl:text-sm'><Link href="/">ABOUT US</Link></li>
            <li className='xl:text-sm'><Link href="/">CONTACT US</Link></li>
            <li className='xl:text-sm'><Link href="/">BLOG</Link></li>
          </ul>
          {/* link section end */}
          {/* icon section start */}
          <ul className='flex items-center justify-center gap-5'>
            <li className='xl:text-sm'><Link href="/"></Link></li>
          </ul>
          {/* icon section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;