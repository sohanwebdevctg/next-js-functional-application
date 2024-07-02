'use client'

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ViewFavourite = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      {/* content section start */}
      {
        toggle ? <FaHeart onClick={() => setToggle(!toggle)} className="text-red-500 text-lg md:text-sm xl:text-xl cursor:pointer"></FaHeart> : <FaHeart onClick={() => setToggle(!toggle)} className="text-slate-200 text-lg md:text-sm xl:text-xl cursor:pointer"></FaHeart>
      }
      {/* content section end */}
    </div>
  );
};

export default ViewFavourite;