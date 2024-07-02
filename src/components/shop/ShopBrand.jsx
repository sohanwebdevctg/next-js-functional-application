import { shopLogo } from "@/utilities/shopLogo";
import Image from "next/image";

const ShopBrand = () => {

  //shopLogo fetching data
  const shopLogoData = shopLogo;


  return (
    <div>
      {/* content section start */}
      {/* logo section start */}
      <div className="bg-[#F5F5F5] py-3">
        <ul className="container mx-auto grid grid-cols-8 gap-3">
          {
            shopLogoData.map((data, index) => <li key={data.id}>
            <Image
              src={data.image}
              width={100}
              height={100}
              alt={`this is ${data.id} shop logo image`}
              className="mx-auto w-6 h-6 sm:w-12 sm:h-10 md:w-14 md:h-10 lg:w-2/3 lg:h-14 xl:w-3/4 xl:h-20"
            ></Image>
          </li>)
          }
        </ul>
      </div>

      {/* logo section end */}
      {/* content section end */}
    </div>
  );
};

export default ShopBrand;
