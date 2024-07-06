import Image from "next/image";
import user from '../../../public/user/user.png'


const UserProfile = () => {
  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className="container  h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12">
        <div className="flex justify-center items-center gap-5 bg-[#F5F5F5] w-1/2 mx-auto py-5 rounded-sm">
          {/* image section start */}
          <div>
            <Image src={user} width={300} height={300} alt="this is user profile" className="w-40 h-40 rounded-full mx-auto text-center"></Image>
          </div>
          {/* image section end */}
          {/* details section start */}
          <div>
            <ul className="space-y-1">
              <li className="xl:text-xl"><strong>Name: </strong> Enter John</li>
              <li className="xl:text-xl"><strong>Email: </strong> enterjhon@gmail.com</li>
              <li className="xl:text-xl"><strong>Price: </strong> $1000</li>
              <li className="xl:text-xl"><strong>Quantity: </strong> 5</li>
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