import { MdInvertColors } from "react-icons/md";

const tableData = [
  {
    id: 1,
    name: 'chair',
    quantity: 3,
    price: 30,
    color: 'black'
  },
  {
    id: 2,
    name: 'chair',
    quantity: 3,
    price: 30,
    color: 'black'
  },
  {
    id: 3,
    name: 'chair',
    quantity: 3,
    price: 30,
    color: 'black'
  },
  {
    id: 4,
    name: 'chair',
    quantity: 3,
    price: 30,
    color: 'black'
  }
]

const CartTable = () => {



  return (
    <div className="my-10 px-4">
      {/* content section start */}
      <div className="container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-16 px-3 sm:px-5 md:px-2 lg:px-10 xl:px-12">
        <div className="overflow-x-auto space-y-5">
        {/* search section start */}
        <div className="bg-white w-2/3 p-2 mx-auto">
          <ul className="flex w-full justify-center gap-2">
            <li><input type="text" placeholder="search product name" className="input input-bordered input-sm w-full" /></li>
            <li><input type="text" placeholder="search quantity" className="input input-bordered input-sm w-full" /></li>
            <li><input type="text" placeholder="search price" className="input input-bordered input-sm w-full" /></li>
            <li className="w-"><select className="select select-bordered select-sm w-full">
              <option disabled selected>Price</option>
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
              {
                tableData.map((data, index)=><tr key={data.id} className="hover:bg-red-100 text-center">
                <td className="xl:text-sm">{++index}</td>
                <td className="xl:text-sm">Image</td>
                <td className="xl:text-sm">{data.name}</td>
                <td className="xl:text-sm">{data.quantity}</td>
                <td className="xl:text-xl"><MdInvertColors className={`text-${data.color} text-center mx-auto`}></MdInvertColors></td>
                <td>$ {data.price}</td>
                <th>
                  <button className="btn btn-xs bg-red-500 text-white hover:bg-red-500">Delete</button>
                </th>
              </tr>)
              }

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
