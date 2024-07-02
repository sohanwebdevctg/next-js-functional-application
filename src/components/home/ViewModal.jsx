"use client";

import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ViewModal = ({data}) => {
  console.log(data)
  return (
    <div>
      {/* content section start */}
      {/* button section start */}
      <AiFillPlusCircle
        className=" text-slate-200 text-xl md:text-sm xl:text-xl"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      ></AiFillPlusCircle>
      {/* button section end */}
      {/* data section start */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#F5F5F5]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* details section start */}
          <div className="sm:flex sm:justify-between sm:items-center gap-5 py-5 px-2">
            {/* left item section start */}
            <div className="w-full sm:w-[65%]">
              <Image src={data.image} alt={`this is ${data.id} image`} width={300} height={300} className="w-full rounded-lg h-40 sm:h-48 md:h-52"></Image>
            </div>
            {/* left item section end */}
            {/* right item section start */}
            <div className="w-full sm:w-[35%] mt-5 sm:mt-0">
            <ul className="space-y-2">
              <li>
                <h2 className="text-base md:text-xs xl:text-lg font-bold italic">{data.title}</h2>
              </li>
              <li className='flex items-center gap-1'>
                <span className="text-sm md:text-xs xl:text-base font-bold">Price : </span>
                <span className="text-sm md:text-xs xl:text-base"> {data.price}</span>
              </li>
              <li>
                <p className="text-xs md:text-[10px] xl:text-sm"><span className="text-sm md:text-xs xl:text-base font-bold">Des : </span>{data.description}</p>
              </li>
              <li>
                <p className="text-xs md:text-[10px] xl:text-sm"><span className="text-sm md:text-xs xl:text-base font-bold">Rating : </span>{data.rating}</p>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 text-sm md:text-[9px] xl:text-sm"></FaStar>
                  <FaStar className="text-yellow-500 text-sm md:text-[9px] xl:text-sm"></FaStar>
                  <FaStar className="text-yellow-500 text-sm md:text-[9px] xl:text-sm"></FaStar>
                  <FaStar className="text-yellow-500 text-sm md:text-[9px] xl:text-sm"></FaStar>
                  <FaStar className="text-yellow-500 text-sm md:text-[9px] xl:text-sm"></FaStar>
                  
                </span>
              </li>
            </ul>
            </div>
            {/* right item section end */}

          </div>
          {/* details section end */}
        </div>
      </dialog>
      {/* data section end */}
      {/* content section end */}
    </div>
  );
};

export default ViewModal;
