import { FaArrowRight } from "react-icons/fa";

const OurGoal = () => {
  return (
    <div className='my-20 sm:my-14 xl:my-20 px-5'>
      {/* content section start */}
      <div className="container mx-auto">
        {/* item section start */}
        <div className='sm:flex sm:justify-between sm:items-center gap-5'>
          {/* left section start */}
          <div className='flex-1 bg-slate-300 h-[100%]'>
          </div>
          {/* left section end */}
          {/* right section start */}
          <div className='flex-1 space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-5 mt-5 sm:mt-0'>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">Grow Up Our Workflow <br></br><span className="text-red-600">Speed</span></h1>
            <p className='w-full lg:w-[86%] xl:w-[82%] text-xs sm:text-[13px] md:text-sm lg:text-[15px] xl:text-base italic text-gray-500'>Welcome to our world of innovation and excellence. We specialize in Industry, committed to delivering unparalleled Products & Services that exceed expectations. With a focus on quality, creativity, and customer satisfaction, we strive to redefine Industry standards. Join us on our journey of innovation and success.</p>
            <p className='w-full lg:w-[86%] xl:w-[82%] text-xs sm:text-[13px] md:text-sm lg:text-[15px] xl:text-base italic text-gray-500'>Discover excellence with us. We specialize in our Industry/Field, delivering innovative [Products/Services] with a focus on quality and customer satisfaction. Join our journey of success today!</p>
            <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm uppercase text-[10px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm flex items-center gap-2"> <span> Follow Us</span> <FaArrowRight></FaArrowRight></button>
          </div>
          {/* right section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurGoal;