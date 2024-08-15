import Image from "next/image";
import user from '../../../public/user/user.png'


const UserProfile = () => {
  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className="container  h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12">
        <div className="flex justify-center items-center gap-5 xl:gap-8 bg-[#F5F5F5] w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-1/2 mx-auto py-5 rounded-sm">
          {/* image section start */}
          <div>
            <Image src={user} width={300} height={300} alt="this is user profile" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44 rounded-full mx-auto text-center"></Image>
          </div>
          {/* image section end */}
          {/* details section start */}
          <div className="">
            <ul className="space-y-1 2xl:space-y-2">
              <li className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"><strong>Name: </strong> Enter John</li>
              <li className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"><strong>Email: </strong> enterjhon@gmail.com</li>
              <li className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"><strong>Price: </strong> $1000</li>
              <li className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"><strong>Quantity: </strong> 5</li>
            </ul>
          </div>
          {/* details section end */}
        </div>

      </div>
      {/* content section end */}
    </div>
  );
};

export default UserProfile;