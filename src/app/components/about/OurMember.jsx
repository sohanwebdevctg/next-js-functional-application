import Image from "next/image";
import person1 from '../../../../public/about/person1.png'
import person2 from '../../../../public/about/person2.png'
import person3 from '../../../../public/about/person3.png'
import person4 from '../../../../public/about/person4.png'
import person5 from '../../../../public/about/person5.png'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


const OurMember = () => {
  return (
    <div className="my-20 sm:my-14 xl:my-10 px-5">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 my-10">
          {/* item1 start */}
          <div className="memberCard text-center mx-auto space-y-2 w-full h-52 sm:h-48 md:h-52 lg:h-60 xl:h-[260px] p-5 overflow-hidden">
            <Image src={person1} alt="person 1" className="image w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 shadow-lg mx-auto"></Image>
            <h2 className="font-bold text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-base">Abdullah(CEO)</h2>
            <p className="text-[11px] sm:text-[10px] md:text-[13px] lg:text-sm xl:text-sm italic text-red-600">abdullah@gmail.com</p>
            <ul className="social flex items-center justify-center gap-1 md:gap-2 xl:gap-3">
                <li><FaFacebookSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaFacebookSquare></li>
                <li><FaInstagram className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaInstagram></li>
                <li><FaLinkedin className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaTwitterSquare></li>
              </ul>
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div className="memberCard text-center mx-auto space-y-2 w-full h-52 sm:h-48 md:h-52 lg:h-60 xl:h-[260px] p-5 overflow-hidden">
            <Image src={person2} alt="person 1" className="image w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 shadow-lg mx-auto"></Image>
            <h2 className="font-bold text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-base">Hossain(COO)</h2>
            <p className="text-[11px] sm:text-[10px] md:text-[13px] lg:text-sm xl:text-sm italic text-red-600">hossain@gmail.com</p>
            <ul className="social flex items-center justify-center gap-1 md:gap-2 xl:gap-3">
                <li><FaFacebookSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaFacebookSquare></li>
                <li><FaInstagram className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaInstagram></li>
                <li><FaLinkedin className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaTwitterSquare></li>
              </ul>
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div className="memberCard text-center mx-auto space-y-2 w-full h-52 sm:h-48 md:h-52 lg:h-60 xl:h-[260px] p-5 overflow-hidden">
            <Image src={person3} alt="person 1" className="image w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 shadow-lg mx-auto"></Image>
            <h2 className="font-bold text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-base">Asad(CHR)</h2>
            <p className="text-[11px] sm:text-[10px] md:text-[13px] lg:text-sm xl:text-sm italic text-red-600">asad@gmail.com</p>
            <ul className="social flex items-center justify-center gap-1 md:gap-2 xl:gap-3">
                <li><FaFacebookSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaFacebookSquare></li>
                <li><FaInstagram className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaInstagram></li>
                <li><FaLinkedin className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaTwitterSquare></li>
              </ul>
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div className="memberCard text-center mx-auto space-y-2 w-full h-52 sm:h-48 md:h-52 lg:h-60 xl:h-[260px] p-5 overflow-hidden">
            <Image src={person4} alt="person 1" className="image w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 shadow-lg mx-auto"></Image>
            <h2 className="font-bold text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-base">Ali(CR)</h2>
            <p className="text-[11px] sm:text-[10px] md:text-[13px] lg:text-sm xl:text-sm italic text-red-600">ali@gmail.com</p>
            <ul className="social flex items-center justify-center gap-1 md:gap-2 xl:gap-3">
                <li><FaFacebookSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaFacebookSquare></li>
                <li><FaInstagram className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaInstagram></li>
                <li><FaLinkedin className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaTwitterSquare></li>
              </ul>
          </div>
          {/* item4 end */}
          {/* item5 start */}
          <div className="memberCard text-center mx-auto space-y-2 w-full h-52 sm:h-48 md:h-52 lg:h-60 xl:h-[260px] p-5 overflow-hidden">
            <Image src={person5} alt="person 1" className="image w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 shadow-lg mx-auto"></Image>
            <h2 className="font-bold text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-base">Omar(HR)</h2>
            <p className="text-[11px] sm:text-[10px] md:text-[13px] lg:text-sm xl:text-sm italic text-red-600">omar@gmail.com</p>
            <ul className="social flex items-center justify-center gap-1 md:gap-2 xl:gap-3">
                <li><FaFacebookSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaFacebookSquare></li>
                <li><FaInstagram className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaInstagram></li>
                <li><FaLinkedin className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-[21px] sm:text-xl md:text-[22px] lg:text-2xl xl:text-2xl text-red-600"></FaTwitterSquare></li>
              </ul>
          </div>
          {/* item5 end */}

        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default OurMember;
