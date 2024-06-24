import Image from "next/image";
import person1 from '../../../../public/about/person1.png'
import person2 from '../../../../public/about/person2.png'
import person3 from '../../../../public/about/person3.png'
import person4 from '../../../../public/about/person4.png'
import person5 from '../../../../public/about/person5.png'


const OurMember = () => {
  return (
    <div className="my-20 sm:my-14 xl:my-20 px-5">
      {/* content section start */}
      <div className="container mx-auto">
        {/* title section start */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">
            Our Member
          </h1>
        </div>
        {/* title section end */}
        {/* item section start */}
        <div className="grid grid-cols-5 gap-5 my-10">
          {/* item1 start */}
          <div className="text-center mx-auto space-y-2">
            <Image src={person1} alt="person 1" className="w-48 h-48 rounded-full shadow-lg mx-auto bg-slate-300 p-1"></Image>
            <h2 className="font-bold text-lg">Abdullah(CEO)</h2>
            <p className="text-sm italic text-gray-500">abdullah@gmail.com</p>
          </div>
          {/* item1 end */}
          {/* item1 start */}
          <div className="text-center mx-auto space-y-2">
            <Image src={person2} alt="person 1" className="w-48 h-48 rounded-full shadow-lg mx-auto bg-slate-300 p-1"></Image>
            <h2 className="font-bold text-lg">Abdullah(COO)</h2>
            <p className="text-sm italic text-gray-500">abdullah@gmail.com</p>
          </div>
          {/* item1 end */}
          {/* item1 start */}
          <div className="text-center mx-auto space-y-2">
            <Image src={person3} alt="person 1" className="w-48 h-48 rounded-full shadow-lg mx-auto bg-slate-300 p-1"></Image>
            <h2 className="font-bold text-lg">Abdullah(HR)</h2>
            <p className="text-sm italic text-gray-500">abdullah@gmail.com</p>
          </div>
          {/* item1 end */}
          {/* item1 start */}
          <div className="text-center mx-auto space-y-2">
            <Image src={person4} alt="person 1" className="w-48 h-48 rounded-full shadow-lg mx-auto bg-slate-300 p-1"></Image>
            <h2 className="font-bold text-lg">Abdullah(MD)</h2>
            <p className="text-sm italic text-gray-500">abdullah@gmail.com</p>
          </div>
          {/* item1 end */}
          {/* item1 start */}
          <div className="text-center mx-auto space-y-2">
            <Image src={person5} alt="person 1" className="w-48 h-48 rounded-full shadow-lg mx-auto bg-slate-300 p-1"></Image>
            <h2 className="font-bold text-lg">Abdullah(CR)</h2>
            <p className="text-sm italic text-gray-500">abdullah@gmail.com</p>
          </div>
          {/* item1 end */}

        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurMember;
