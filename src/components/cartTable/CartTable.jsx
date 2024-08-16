"use client";
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
      <div className="container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12">
        <div className="overflow-x-auto space-y-5">
          {/* search section start */}
          <div className="bg-white w-96 md:w-11/12 xl:w-5/6 p-2 mx-auto ml-10 sm:ml-20 md:ml-8 lg:ml-8 xl:ml-20 2xl:ml-24">
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4">
              <li className="w-full">
                <input
                  type="text"
                  placeholder="search product name"
                  className="input input-bordered input-sm w-full"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="search quantity"
                  className="input input-bordered input-sm w-full"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="search price"
                  className="input input-bordered input-sm w-full"
                />
              </li>
              <li className="w-">
                <select className="select select-bordered select-sm w-full">
                  <option disabled selected>
                    Price
                  </option>
                  <option>High to Low</option>
                  <option>Low to High</option>
                </select>
              </li>
            </ul>
          </div>
          {/* search section end */}
          {/* table section start */}
          <table className="table">
            {/* head */}
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
            <tbody>
              {/* row 1 */}
              {cartData.length > 0 ? (
                cartData.map((data, index) => (
                  <tr key={data.id} className="hover:bg-red-100 text-center">
                    <td className="xl:text-sm">{++index}</td>
                    <td className="xl:text-sm">Image</td>
                    <td className="xl:text-sm">{data.name}</td>
                    <td className="xl:text-xl">
                      <MdInvertColors
                        className={`text-${data.color} text-center mx-auto`}
                      ></MdInvertColors>
                    </td>
                    <td className="xl:text-sm">{data.quantity}</td>
                    <td>$ {data.price}</td>
                    <td>$ {data.total}</td>
                    <th>
                      <button className="btn btn-xs bg-red-500 text-white hover:bg-red-500">
                        Delete
                      </button>
                    </th>
                  </tr>
                ))
              ) : (
                <tr className="text-center text-red-600 text-lg">No data</tr>
              )}
            </tbody>
          </table>
        </div>
        {/* table section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default CartTable;
