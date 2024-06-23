import React from 'react';

const MapItem = () => {
  return (
    <div className='h-96 sm:px-4 md:px-4 w-[90%] mx-auto text-center my-16 xl:my-20'>
      {/* content section start */}
      <div className='container mx-auto py-4 px-4 sm:px-5 md:px-4 lg:px-10 xl:px-8 h-full w-full bg-white shadow-lg'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.75658880244!2d91.65422540320962!3d22.35731206162862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1719163819998!5m2!1sen!2sbd" className='w-full h-full'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* content section end */}
    </div>
  );
};

export default MapItem;