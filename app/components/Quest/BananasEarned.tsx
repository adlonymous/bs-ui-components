import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const BananasEarned = (props: Props) => {
  return (
    <div
      id="bananas-earned"
      className="flex flex-col md:justify-start justify-center md:items-stretch items-center gap-4 md:max-w-[168px]  w-full py-8 md:py-0"
    >
      <h1 className="font-semibold font-dm">Bananas Earned</h1>
      <div className="flex flex-row justify-between gap-4 bg-green-50 border-[1px] rounded-xl border-green-700 items-center w-full">
        <div className="flex flex-col p-4 gap-2 font-dm">
          <p className="text-sm font-semibold text-[#184623]">TODAY</p>
          <div className="flex flex-row gap-2 items-center">
            <img src="bananacoin.png" alt="Banana Coin" />
            <span className="font-dm text-2xl -mb-1 font-bold bg-gradient-to-r from-[#EC7400] to-[#207533] text-transparent bg-clip-text">
              40
            </span>
          </div>
        </div>
        <img src="earnanasleaf.png" alt="banana leaves" className="rounded-r-xl" />
      </div>
      <div className="flex md:flex-col flex-row md:justify-between justify-normal gap-20 md:gap-4 bg-green-50 border-[1px] rounded-xl border-green-700 p-4 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#184623]">THIS WEEK</p>
          <div className="flex flex-row gap-2 items-center">
            <img src="bananacoin.png" alt="Banana Coin" />
            <span className="font-dm text-xl -mb-1 font-semibold">10839</span>
          </div>
        </div>
        <Separator className="hidden md:block" />
        <div className="flex flex-col gap-2 ">
          <p className="text-sm font-semibold text-[#184623]">ALL-TIME</p>
          <div className="flex flex-row gap-2 items-center">
            <img src="bananacoin.png" alt="Banana Coin" />
            <span className="font-dm text-xl -mb-1 font-semibold">62562</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BananasEarned;
