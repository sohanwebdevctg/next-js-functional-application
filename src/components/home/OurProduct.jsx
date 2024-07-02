import React from 'react';
import Product from './Product';

const OurProduct = () => {
  return (
    <div>
      {/* content section start */}
      <div className='container h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12'>
        {/* item section start */}
        <Product></Product>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurProduct;