import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const Services = () => {
  return (
    <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-12 bg-black bg-opacity-40">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-5 md:px-5 lg:px-10 xl:px-12'>
        {/* item section start */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-5 md:gap-3 lg:gap-5 xl:gap-5'>
          {/* item1 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <MdAddShoppingCart className="text-center mx-auto text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600"></MdAddShoppingCart>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-lg md:text-xs lg:text-sm xl:text-md font-bold">Free Shipping</p>
                <p className="text-center text-[10px] sm:text-sm md:text-[10px] lg:text-[11px] xl:text-xs text-white">Order Complete 99.99%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item1 section end */}

        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Services;