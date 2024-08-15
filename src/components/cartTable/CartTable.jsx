"use client";
import { useState } from "react";
import { MdInvertColors } from "react-icons/md";

const tableData = [
  {
    id: 1,
    name: "chair",
    quantity: 3,
    price: 30,
    color: "black",
  },
  {
    id: 2,
    name: "bed",
    quantity: 2,
    price: 25,
    color: "black",
  },
  {
    id: 3,
    name: "sofa",
    quantity: 8,
    price: 42,
    color: "black",
  },
  {
    id: 4,
    name: "table",
    quantity: 1,
    price: 30,
    color: "black",
  },
  {
    id: 5,
    name: "chair",
    quantity: 2,
    price: 35,
    color: "black",
  },
  {
    id: 6,
    name: "sofa",
    quantity: 2,
    price: 30,
    color: "black",
  },
  {
    id: 7,
    name: "bed",
    quantity: 6,
    price: 130,
    color: "black",
  },
  {
    id: 8,
    name: "table",
    quantity: 9,
    price: 180,
    color: "black",
  },
  {
    id: 9,
    name: "bed",
    quantity: 4,
    price: 180,
    color: "black",
  },
];

const CartTable = () => {
  const [preData, setPreData] = useState(tableData);
  const [storeData, setStoreData] = useState(preData);

  const [searchName, setSearchName] = useState("");
  const [searchQuantity, setSearchQuantity] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  // name function
  const handleNameChange = (event) => {
    setSearchName(event.target.value);
    searchFun();
  };

  // quantity function
  const handleQuantityChange = (event) => {
    setSearchQuantity(event.target.value);
    searchFun();
  };

  // price function
  const handlePriceChange = (event) => {
    setSearchPrice(event.target.value);
    searchFun();
  };

  // search function
  const searchFun = () => {
    // const filterData = storeData.filter((item) => {
    //   const matchName = item.name.toString().toLowerCase().includes(searchName.toString().toLowerCase());
    //   const matchQuantity = toString(item.quantity) == toString(searchQuantity);
    //   const matchPrice = toString(item.price) === toString(searchPrice);
    //   return matchName && matchQuantity && matchPrice;
    // })
    // setStoreData(filterData)

    const filterData = preData.filter((item) => {
      item.name.toLowerCase().includes(searchName.trim().toLowerCase());
    });
    console.log(filterData);
  };

  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className="container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12">
        <div className="overflow-x-auto space-y-5">
          {/* search section start */}
          <div className="bg-white w-96 md:w-11/12 xl:w-5/6 p-2 mx-auto ml-10 sm:ml-20 md:ml-8 lg:ml-8 xl:ml-16 2xl:ml-20">
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4">
              <li className="w-full">
                <input
                  type="text"
                  onChange={handleNameChange}
                  value={searchName}
                  placeholder="search product name"
                  className="input input-bordered input-sm w-full"
                />
              </li>
              <li>
                <input
                  type="text"
                  onChange={handleQuantityChange}
                  value={searchQuantity}
                  placeholder="search quantity"
                  className="input input-bordered input-sm w-full"
                />
              </li>
              <li>
                <input
                  type="text"
                  onChange={handlePriceChange}
                  value={searchPrice}
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
                <th>Quantity</th>
                <th>Color</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {storeData.length > 0 ? (
                storeData.map((data, index) => (
                  <tr key={data.id} className="hover:bg-red-100 text-center">
                    <td className="xl:text-sm">{++index}</td>
                    <td className="xl:text-sm">Image</td>
                    <td className="xl:text-sm">{data.name}</td>
                    <td className="xl:text-sm">{data.quantity}</td>
                    <td className="xl:text-xl">
                      <MdInvertColors
                        className={`text-${data.color} text-center mx-auto`}
                      ></MdInvertColors>
                    </td>
                    <td>$ {data.price}</td>
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
