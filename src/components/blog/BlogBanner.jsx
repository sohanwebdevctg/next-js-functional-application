

const BlogBanner = () => {
  return (
    <div className="blogBanner h-96 sm:h-80 md:h-80 lg:h-96 xl:h-[420px]">
      {/* content section start */}
      <div className="h-full flex justify-center items-center">
        {/* item section start */}
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-red-600">Blog Post</h1>
          <p className="text-white text-base sm:text-sm md:text-sm lg:text-base xl:text-md my-3">Please alway follow our blog post we want to post our every day blog<br></br>that can helps our customers</p>
          <button className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm uppercase text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm">blog</button>
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default BlogBanner;