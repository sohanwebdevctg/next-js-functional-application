

const RecentlyView = () => {
  return (
    <div className="my-3 px-4 ">
      {/* content section start */}
      <div className='container h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12'>
      {/* title section start */}
      <div className="mb-5text-left">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Recently View</h1>
      </div>
      {/* title section end */}
      {/* item section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 xl:gap-5">
        {/* item1 section start */}
        <div className="overflow-hidden">

        </div>
        {/* item1 section end */}
      </div>
      {/* item section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default RecentlyView;