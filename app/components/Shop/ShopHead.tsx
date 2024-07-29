import React from "react";

type Props = {};

const ShopHead = (props: Props) => {
  return (
    <div className="w-full bg-gradient-to-t from-[#184623] from-50% to-[#184623] ">
      <img src="head1.png" alt="header image" className="w-[1440px] h-[180px]" />
      <p className="text-center font-space font-bold text-4xl -mt-16 text-yellow-100 ">Shop</p>
    </div>
  );
};

export default ShopHead;
