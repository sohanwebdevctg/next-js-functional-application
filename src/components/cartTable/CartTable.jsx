"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdInvertColors } from "react-icons/md";

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

  console.log(cartData);

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
                placeholder="search quantity"
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
          {cartData.length > 0 ? (
            <tbody>
              {cartData.map((data, index) => (
                <tr key={index} className="hover:bg-red-100 text-center">
                  <td className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
                    {++index}
                  </td>
                  <td
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base "
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    <button className="btn btn-xs bg-green-500 text-white hover:bg-green-500">Image</button>
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
                    <button className="btn btn-xs bg-red-500 text-white hover:bg-red-500">
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
        {/* modal section start */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            {
              cartData.map((data, index) => <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-3 lg:gap-5">
                {
                  data?.image.map((img, index) => <Image key={index} src={img} alt="show" width={100} height={100} className="w-full h-28 sm:h-32 md:h-32 lg:h-40 xl:h-40 2xl:h-44 "></Image>)
                }
              </div>)
            }
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* modal section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default CartTable;
