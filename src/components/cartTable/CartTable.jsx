"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdInvertColors } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartTable = () => {
  //cartData set in state
  const [cartData, setCartData] = useState([]);

  


  //get cartData from localStorage
  useEffect(() => {
    const data = localStorage.getItem("cartData");

    //check this parse
    if (data) {
      const parseData = JSON.parse(data);
      setCartData(parseData);
    }
  }, []);

  //delete functionality
  const deleteFun = (data) => {
    const newData = cartData.filter(
      (item) => !(item.id === data.id && item.name === data.name)
    );
    localStorage.setItem("cartData", JSON.stringify(newData));
    setCartData(newData);
  };

  // modalRef
  const modalRef = useRef(null);

  //buyFunction
  const userData = (event) => {
    event.preventDefault();
    const data = event.target;
    const name = data.name.value;
    const number = data.number.value;

    if(name && number){
      const newData = localStorage.removeItem('cartData')
      setCartData(newData);
      // Close the modal
      if (modalRef.current) {
        modalRef.current.close();
        toast("Successfully Buy");
      }
    }
    

  };

  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className="container bg-[#F5F5F5] h-full w-full mx-auto p-10 overflow-x-auto">
        {/* search section start */}
        <div className="bg-white w-[520px] sm:w-11/12 md:w-full xl:w-full flex justify-center mx-auto p-2 ml-2 md:ml-0">
          <div className="w-full flex justify-center gap-1 mx-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="search product name"
                className="input input-bordered input-xs sm:input-xs md:input-sm w-[125px] sm:w-28 md:w-full xl:w-full"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="search price"
                className="input input-bordered input-xs sm:input-xs md:input-sm w-[125px] sm:w-28 md:w-full xl:w-full"
              />
            </div>
            <div className="w-full">
              <select className="select select-bordered select-xs sm:select-xs md:select-sm w-[125px] sm:w-28 md:w-full xl:w-full">
                <option disabled selected>
                  Price
                </option>
                <option>High to Low</option>
                <option>Low to High</option>
              </select>
            </div>
            <div className="w-full">
              {cartData?.length > 0 ? (
                <button
                  onClick={() =>
                    document.getElementById("my_modal_0").showModal()
                  }
                  className="btn btn-sm text-sm bg-green-500 hover:bg-green-500 text-white block w-full text-center"
                >
                  Buy
                </button>
              ) : (
                <button className="btn btn-sm text-sm bg-red-500 hover:bg-red-500 text-white block w-full text-center">
                  Not Buy
                </button>
              )}
            </div>
          </div>
        </div>
        {/* search section end */}
        {/* table section start */}
        <table className="table mt-5">
          <thead className="bg-red-500 text-white">
            <tr className="text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          {cartData?.length > 0 ? (
            <tbody>
              {cartData.map((data, index) => (
                <tr key={index} className="hover:bg-red-100 text-center">
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    {++index}
                  </td>
                  <td
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base "
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    <button className="btn btn-xs bg-green-500 text-white hover:bg-green-500">
                      Image
                    </button>
                    {/* modal section start */}
                    <dialog id={`my_modal_${index}`} className="modal">
                      <div className="modal-box grid grid-cols-3 gap-3">
                        {data?.image?.map((img, index) => (
                          <Image
                            key={index}
                            src={img}
                            alt="show"
                            width={100}
                            height={100}
                            className="w-full h-28 sm:h-32 md:h-32 lg:h-40 xl:h-40 2xl:h-44 "
                          ></Image>
                        ))}
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                    {/* modal section end */}
                  </td>
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    {data.name}
                  </td>
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-2xl">
                    <MdInvertColors
                      className="text-center mx-auto"
                      style={{ color: data.color }}
                    ></MdInvertColors>
                  </td>
                  <td className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    {data.quantity}
                  </td>
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    ${data.price}
                  </td>
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    ${data.total}
                  </td>
                  <td>
                    <button
                      className="btn btn-xs bg-red-500 text-white hover:bg-red-500"
                      onClick={() => deleteFun(data)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr className="text-center text-red-600 text-lg">
                <td>No data</td>
              </tr>
            </tbody>
          )}
        </table>
        {/* table section end */}
        {/* form modal section start */}
        <dialog ref={modalRef} id="my_modal_0" className="modal">
          <div className="modal-box">
            <form onSubmit={userData}>
              <div className="form-control space-y-5">
                <input type="text" name="name" placeholder="enter your name" className="input input-bordered" required />
                <input type="number" name="number" placeholder="enter your account number" className="input input-bordered" required />
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-success text-white">Buy</button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* form modal section end */}
      </div>
      {/* content section end */}
      <ToastContainer />
    </div>
  );
};

export default CartTable;
