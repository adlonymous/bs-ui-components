"use client";
import React from "react";
import QuestHead from "./Quest/QuestHead";
import { usePathname } from "next/navigation";
import ShopHead from "./Shop/ShopHead";
import { IconShoppingCart } from "@tabler/icons-react";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex flex-row items-center md:justify-around justify-between bg-[#184623] md:px-16 h-[66px] px-4 mt-1 sticky top-0 z-[1001]">
        <div className="flex flex-row items-center justify-normal gap-4">
          <img src="/bananalogo.png" alt="logo" className="w-[28px] h-[22px]" />
          <h1 className="font-roc font-semibold text-lg -mb-1 tracking-wide">Banana Stand</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center justify-between h-[66px] font-dm">
            <a
              href="/"
              className={`${
                pathname === "/"
                  ? "border-b border-[#A5E5B3] bg-gradient-to-b from-white/0 to-white/15 h-full pt-5 px-4"
                  : "h-full pt-5 px-4"
              }`}
            >
              Quests
            </a>
            <a
              href="/shop"
              className={`${
                pathname === "/shop"
                  ? "border-b border-[#A5E5B3] bg-gradient-to-b from-white/0 to-white/15 h-full pt-5 px-4"
                  : "h-full pt-5 px-4"
              }`}
            >
              Shop
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-8">
            <a href="/">
              <IconShoppingCart stroke={2} />
            </a>
            <a className="flex flex-row items-center gap-2" href="/profile">
              <img src="/smb.png" alt="User photo" className="w-[30px] h-[30px] rounded-full" />
              <p className="font-dm -mb-1 pl-1">Username</p>
            </a>
          </div>
        </div>
      </nav>
      {pathname === "/" ? <QuestHead /> : null}
      {pathname === "/shop" ? <ShopHead /> : null}
    </div>
  );
};

export default Header;
