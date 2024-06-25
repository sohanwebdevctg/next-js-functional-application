import Image from 'next/image';
import success from '../../../../public/blog/success.jpg'

const BlogGallery = () => {
  return (
    <div className="px-5 sm:px-4 md:px-4 my-10">
      {/* content section start */}
      <div className='container mx-auto p-6 xl:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {/* item1 section start */}
          <div>
            {/* left item1 section start */}
            <div className='xl:h-52 w-full'>
              <Image src={success} alt="this is success section" className='h-full w-full'></Image>
            </div>
            {/* left item1 section end */}
            {/* left item2 section start */}
            <div className='xl:h-52 w-full mt-5'>
              <Image src={success} alt="this is success section" className='h-full w-full'></Image>
            </div>
            {/* left item2 section end */}
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div>
            {/* middle item section start */}
            <div className='xl:h-full w-full'>
              <Image src={success} alt="this is success section" className='h-full w-full'></Image>
            </div>
            {/* middle item section end */}
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div>
            {/* right item1 section start */}
            <div className='xl:h-52 w-full'>
              <Image src={success} alt="this is success section" className='h-full w-full'></Image>
            </div>
            {/* right item1 section end */}
            {/* right item2 section start */}
            <div className='xl:h-52 w-full mt-5'>
              <Image src={success} alt="this is success section" className='h-full w-full'></Image>
            </div>
            {/* right item2 section end */}
          </div>
          {/* item3 section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default BlogGallery;