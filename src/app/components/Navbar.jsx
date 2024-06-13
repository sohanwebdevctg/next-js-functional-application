import Image from 'next/image';
import Logo from '../../../public/logo/logo.png'

const Navbar = () => {
  return (
    <div>
      {/* content section start */}
      <div className="container mx-auto h-24">
        <div className="flex justify-between items-center h-full">
          {/* logo section start */}
            <Image src={Logo} alt='logo' className='w-[10%] h-12'></Image>
          {/* logo section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;