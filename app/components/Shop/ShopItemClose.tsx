import React from "react";

type Props = {};

const ShopItemClose = (props: Props) => {
  return (
    <div>
      <div></div>
      <h1>Item name</h1>
      <div>
        <div>
          <div>
            <img src="/bananacoin.png" alt="banana-img" />
            <p>1000</p>
          </div>
          <div>x/1000 left</div>
        </div>
        <div>Limit x per person</div>
      </div>
      <div>Add to cart</div>
    </div>
  );
};

export default ShopItemClose;
