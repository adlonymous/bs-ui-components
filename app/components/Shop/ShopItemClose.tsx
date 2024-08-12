import React from "react";
import { IconPlane } from "@tabler/icons-react";

type Props = {};

const ShopItemClose = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center bg-white p-4 rounded-lg shadow-sm border-[0.5px] md:w-[245px] w-[361px] border-gray-300">
      <div className=" relative flex-shrink-0 z-[801]">
        <span className="md:text-xs flex flex-row items-center gap-1 bg-white p-1 rounded-lg absolute top-2 left-2 z-[802]">
          <IconPlane stroke={1} className="md:w-4 md:h-4" />
          Category
        </span>
        <span className="md:text-xs flex flex-row items-center gap-1 bg-[#184623] text-white p-1 rounded-lg absolute top-2 right-2 z-[802]">
          New
        </span>
        <img
          src="/singaporef1.png"
          alt="singapore-img"
          className="md:h-[200px] md:w-[213px] w-[329px] h-[329px] object-cover rounded-lg z-[800]"
        />
        <span className="text-xs flex flex-row items-center gap-1 p-1 rounded-lg absolute bottom-1 left-1 z-[802]">
          <img src="/roundgen2.png" alt="roundgen2" className="w-8 h-8" />
        </span>
      </div>
      <h1 className="w-full py-3 font-dm font-semibold z-[801] text-left">Item name</h1>
      <div className="w-full font-dm z-[801]">
        <div className="w-full flex flex-row justify-between font-semibold">
          <div className="flex flex-row justify-start gap-2 items-center">
            <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
            <p className="-mb-0.5">1000</p>
          </div>
          <div>x/1000 left</div>
        </div>
        <div className="py-2 font-light text-gray-500 text-left">Limit x per person</div>
      </div>
      <div className="w-full text-center bg-[#184623] py-3 px-4 text-white rounded-lg z-[801] text-sm">
        Add to cart
      </div>
    </div>
  );
};

export default ShopItemClose;
