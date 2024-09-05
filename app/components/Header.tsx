"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IconShoppingCart } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import CartView from "./Shop/CartView";
import QuestHead from "./Quest/QuestHead";
import ShopHead from "./Shop/ShopHead";
import BurgerMenu from "../../public/svgs/burgermenu.svg";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="flex md:flex-row flex-row w-full justify-between relative items-center bg-[#184623] md:px-16 h-[66px] px-4 mt-1 top-0 z-[1001]">
        <div className="flex flex-row items-center justify-normal gap-4 shrink-0">
          <img src="/bananalogo.png" alt="logo" className="w-[28px] h-[22px]" />
          <h1 className="font-roc font-semibold text-lg -mb-1 tracking-wide">Banana Stand</h1>
        </div>

        <div className="hidden md:flex flex-row items-center justify-between h-[66px] font-dm">
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

        <div className="hidden md:flex flex-row items-center gap-8">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button onClick={() => setOpen(!open)}>
                <IconShoppingCart stroke={2} />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <CartView />
            </PopoverContent>
          </Popover>
          <a className="flex flex-row items-center gap-2" href="/profile">
            <img src="/smb.png" alt="User photo" className="w-[30px] h-[30px] rounded-full" />
            <p className="font-dm -mb-1 pl-1">Username</p>
          </a>
        </div>

        <div id="mobile-menu" className="w-[24px] fixed right-4 drawer md:hidden z-[1001]">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
              <BurgerMenu />
            </label>
          </div>
          <div className="drawer-side text-white">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div
              id="mobile-menu"
              className="menu bg-[#0f2b15] text-white min-h-full w-full min mt-16 p-4 font-dm"
            >
              <div className="flex flex-col gap-4 font-dm">
                <div className="flex flex-row justify-between items-center pb-2">
                  <IconShoppingCart stroke={2} />
                  <a className="flex flex-row items-center gap-2" href="/profile">
                    <img
                      src="/smb.png"
                      alt="User photo"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <p className="font-dm -mb-1 pl-1">Username</p>
                  </a>
                </div>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Quests
                </a>
                <a
                  href="/shop"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Shop
                </a>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Members
                </a>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Staking
                </a>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Profile
                </a>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  History
                </a>
                <a
                  href="/"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Settings
                </a>
                <a
                  href="/login"
                  className="text-sm font-dm text-center py-6 px-4 hover:border-[0.5px] hover:border-[#A5E5B3] hover:rounded-md hover:bg-gradient-to-b from-white/0 to-white/15"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {pathname === "/" && <QuestHead />}
      {pathname === "/shop" && <ShopHead />}
    </div>
  );
};

export default Header;
