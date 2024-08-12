import React from "react";
import { IconCalendar } from "@tabler/icons-react";

type Props = {};

const ShopItemOpen = (props: Props) => {
  return (
    <div className="flex flex-row justify-between font-dm gap-6 bg-white p-8 rounded-lg shadow-sm border-[0.5px] max-w-[848px] w-full border-gray-300 z-[1100]">
      <div id="images" className="flex flex-col gap-4 justify-center">
        <img
          src="/singaporef1.png"
          alt="singapore-img"
          className="w-[400px] h-[400px] object-cover rounded-md"
        />
        <div id="other-images" className="flex flex-row gap-4 justify-around">
          <img
            src="/singaporef1.png"
            alt="singapore-img"
            className="w-[123px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/singaporef1.png"
            alt="singapore-img"
            className="w-[123px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/singaporef1.png"
            alt="singapore-img"
            className="w-[123px] h-[100px] object-cover rounded-md"
          />
        </div>
      </div>
      <div id="shop-data" className="max-w-[352px] w-full flex flex-col gap-4 justify-between">
        <div id="descriptions" className="">
          <h1 className="font-dm font-semibold text-lg pb-4 text-black">Item name</h1>
          <p className="font-dm text-sm text-gray-500 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div id="tag" className="inline-block p-2 rounded-lg bg-gray-100 text-black">
            <span className="inline-block align-middle">
              <IconCalendar stroke={1} className="w-4 h-4" />
            </span>
            <span className="inline-block align-middle">
              <p className="inline m-0 pl-2">Events</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-end">
          <div className="flex flex-row justify-between items-center w-full text-md text-gray-700">
            <p>Limit x per person</p>
            <p>x/1000 left</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full text-black">
            <div className="flex flex-row justify-between max-w-[238px] w-full p-2 px-5 border-[0.5px] border-gray-300 rounded-lg">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div className="flex flex-row justify-start gap-2 items-center p-2 px-4 border-[0.5px] border-gray-300 rounded-lg">
              <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
              <p className="-mb-0.5">1000</p>
            </div>
          </div>
          <div className="w-full bg-[#184623] py-3 px-4 text-center rounded-lg text-white text-sm">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemOpen;
