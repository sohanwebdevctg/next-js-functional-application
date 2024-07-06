'use client'

import Image from "next/image";

const InteriorModal = ({data, id}) => {
  

  return (
    <div>
      {/* content section start */}
      {/* button section start */}
      <button className=" text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs px-3 xl:px-4 py-1 border-[1px] border-white rounded-md text-white" onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>Show</button>
      {/* button section end */}
      {/* item section start */}
      <dialog id={`my_modal_${id}`} className="modal bg-black bg-opacity-60">
        <div className="modal-box p-3">
          {/* top section start */}
          <div>
            <Image src={data.image} width={300} height={300} alt={`this is ${data.id} image`} className="w-full h-36 sm:h-44 md:h-44 lg:h-48 xl:h-56 rounded-sm"></Image>
          </div>
          {/* top section end */}
          {/* bottom section start */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            {
              data.images.map((data, index) => <div key={index}>
                <Image src={data} width={300} height={300} alt={`this is ${data.id} image`} className="w-full h-20 sm:h-24 md:h-24 lg:h-24 xl:h-32 rounded-sm"></Image>
              </div>)
            }
          </div>
          {/* bottom section end */}
          
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* item section end */}
      {/* content section end */}
    </div>
  );
};

export default InteriorModal;
