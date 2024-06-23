

const ContactBanner = () => {
  return (
    <div className="contactBanner h-full xl:h-[420px]">
      {/* content section start */}
      <div className="h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="xl:text-4xl font-bold text-red-600">Contact Informations</h1>
          <p className="text-white xl:text-md my-3">Please contact us directly if you want to know anything.We provide direct <br></br>service to our customers</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-sm uppercase xl:text-sm">contact us</button>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default ContactBanner;