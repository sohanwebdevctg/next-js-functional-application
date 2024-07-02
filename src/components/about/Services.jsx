import { services } from '@/utilities/services';
import Count from './Count';



const Services = () => {

  //services fetching data
  const servicesData = services;


  return (
    <div className="py-5 sm:py-5 md:py-5 lg:py-8 xl:py-12 bg-black bg-opacity-35">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-5 md:px-5 lg:px-10 xl:px-12'>
        {/* items section start */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {/* item section start */}
          {
            servicesData.map((data,index) => <ul key={data.id}>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">
                  <Count item={data.percent}></Count>
                </h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">{data.title}</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">{data.description}</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>)
          }
          
          {/* item section end */}
        </div>
        {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Services;