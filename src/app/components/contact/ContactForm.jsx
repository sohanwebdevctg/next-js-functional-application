import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutube, FaFax } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";


const ContactForm = () => {
  return (
    <div className="px-0 sm:px-4 md:px-4 my-16">
      {/* content section start */}
      <div className='container mx-auto bg-[#F5F5F5] h-full w-full p-10'>
        <div className="sm:flex sm:justify-around">
          {/* left item section start */}
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="xl:text-5xl">Let's talk <br></br>on something <span className="text-red-600">great</span> <br></br>together</h3>
            <ul className="space-y-8">
              <li>
                <BsFillTelephoneFill></BsFillTelephoneFill>
                <span>+234 8993 98043</span>
              </li>
              <li>
                <CgMail></CgMail>
                <span>andreal@gmail.com</span></li>
              <li>
                <FaFax></FaFax>
                <span>855-555-5544</span>
                </li>
              <li>
                <FaLocationDot></FaLocationDot>
                <span>123 Ctg, Bangladesh</span>
              </li>
            </ul>
            {/* icon section start */}
            <ul className="flex gap-5 items-center">
                <li><FaFacebookSquare className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaFacebookSquare></li>
                <li><FaInstagram className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaInstagram></li>
                <li><FaLinkedin className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaTwitterSquare></li>
                <li><FaYoutube className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl hover:text-red-500 duration-500"></FaYoutube></li>
            </ul>
            {/* icon section end */}
          </div>
          {/* left item section end */}
          {/* right item section start */}
          <div className="flex-1">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consequuntur repellendus quae fugit sed, expedita ratione delectus. Blanditiis obcaecati odio labore praesentium explicabo qui nam debitis dolorem sapiente assumenda, dolor harum mollitia ex, animi nemo ullam ab aliquam! Necessitatibus cupiditate est magnam. Quod nisi earum minus, provident nam consectetur alias asperiores fugit praesentium nulla omnis natus voluptas labore sit architecto fugiat optio amet, libero iure dolore. Corrupti sunt dolorum eaque omnis perferendis doloribus eligendi aperiam nam? Laborum ipsum quis optio, voluptatem in ipsa eaque labore repellendus, iusto quae animi quibusdam! Aliquam, sint esse odio ad cupiditate voluptatem. Iste repellendus harum reprehenderit similique dolor doloribus ex, dolorem facere consequatur, perferendis dolorum ducimus beatae esse voluptatum pariatur soluta explicabo laborum delectus quod provident unde quam laudantium. Vero sunt voluptatum sequi! Explicabo temporibus beatae quod porro recusandae et officiis voluptates similique officia, fuga minus est vitae ut ipsam eveniet odio! Aut commodi consequuntur rem atque officia? Quisquam vel nulla asperiores corporis nam possimus est ea dolore quis quasi, nemo rerum qui. Inventore cupiditate nihil, ad suscipit fugiat magnam quasi similique quaerat incidunt expedita eius molestiae dolorem, qui earum repellat quibusdam illo. Totam hic suscipit maiores, sunt numquam eaque mollitia dolorum. Modi, explicabo placeat?</p>l
          </div>
          {/* right item section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default ContactForm;