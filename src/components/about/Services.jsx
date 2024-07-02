import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const Services = () => {
  return (
    <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-12 bg-black bg-opacity-35">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-5 md:px-5 lg:px-10 xl:px-12'>
        {/* item section start */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {/* item1 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">3000+</h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">Industry Expert</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Our Expert worker 99.99%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item1 section end */}
          {/* item2 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">91%</h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">Success Ratio</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Our working rate 96.56%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item2 section end */}
          {/* item3 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">230+</h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">Companies</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Our export companies 80.56%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item3 section end */}
          {/* item4 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">200+</h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">Expert</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Expert worker 90.56%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item4 section end */}
          {/* item5 section start */}
          <ul>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">100%</h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">Successful</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Our Success 100%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item5 section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Services;