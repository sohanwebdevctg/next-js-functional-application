import Image from "next/image";
import { shopInterior } from "@/utilities/shopInterior";
import InteriorModal from "./InteriorModal";


const ViewProduct = () => {

  //shopInterior fetching data
  const shopInteriorData = shopInterior;


  return (
    <div className='my-12 sm:my-14 md:my-14 lg:my-16 xl:my-20 px-5'>
      {/* content section start */}
      <div className='container mx-auto sm:px-5 lg:px-20 xl:px-36'>
        {/* title section start */}
      <div className="mb-5 text-center">
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Best Interior Items</h1>
      </div>
      {/* title section end */}
        {/* items section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-8'>
          {/* item section start */}
          {
            shopInteriorData.map((data, index) => <div key={data.id} className='h-44 sm:h-44 md:h-52 lg:h-52 xl:h-64 w-full relative'>
            <Image src={data.image} width={300} height={300} alt={`this is ${data.id} image`} className='h-full w-full'></Image>
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
              <ul className="flex justify-between items-center w-full">
                <li><h1 className='text-sm sm:text-sm md:text-sm lg:text-base xl:text-2xl font-bold text-white'>{data.title}</h1></li>
                <li className="text-end">
                  {/* modal section start */}
                  <InteriorModal data={data} id={data.id}></InteriorModal>
                  {/* modal section end */}
                </li>
              </ul>
            </div>
        </div>)
          }
          
          {/* item section end */}
        </div>
        {/* items section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default ViewProduct;