

const AboutBanner = () => {
  return (
    <div className="aboutBanner h-96 sm:h-80 md:h-80 lg:h-96 xl:h-[420px]">
      {/* about section start */}
      <div className="h-full flex justify-center items-center">
        {/* item section start */}
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-red-600">About Information</h1>
          <p className="text-white text-base sm:text-sm md:text-sm lg:text-base xl:text-md my-3">We are passionate about revolutionizing the way business operate through<br></br> the power of technology</p>
          <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm uppercase text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm">About us</button>
        </div>
        {/* item section end */}
      </div>
      {/* about section end */}
    </div>
  );
};

export default AboutBanner;