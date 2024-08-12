"use client";
import ShopItemClose from "../components/Shop/ShopItemClose";
import ShopItemOpen from "../components/Shop/ShopItemOpen";
import { IconSearch } from "@tabler/icons-react";
import { IconFilter } from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialogshop";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Shop() {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#fdfced] text-black font-dm gap-4 items-center justify-start md:p-16 px-8 py-16">
      <div className="flex flex-col items-center justify-start max-w-[1000px] w-full gap-4">
        <div id="filter-bar" className="flex flex-row justify-between items-end w-full">
          <div
            id="filter-part"
            className="flex flex-row gap-2 md:justify-start justify-between items-center"
          >
            <div id="filter" className="flex flex-row gap-2 justify-start items-center">
              <div className="bg-white p-2 border-[0.5px] border-black rounded-md hidden md:block">
                {!searchOpen && (
                  <IconSearch stroke={1} onClick={handleSearchOpen} className="cursor-pointer" />
                )}
                {searchOpen && (
                  <div className=" p-2 flex flex-row justify-around items-center max-h-[24px] gap-2">
                    <IconSearch stroke={1} />
                    <Input
                      type="text"
                      placeholder="Search"
                      className="bg-white w-[200px] border-none"
                    />
                    <p onClick={handleSearchClose} className="cursor-pointer">
                      &#8569;
                    </p>
                  </div>
                )}
              </div>
              <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */}
                  <div className="bg-white p-2 border-[0.5px] border-black rounded-md drawer-button">
                    <label htmlFor="my-drawer" className="drawer-button">
                      <IconFilter stroke={1} className="cursor-pointer" />
                    </label>
                  </div>
                </div>
                <div className="drawer-side z-[1000] ">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay z-[900]"
                  ></label>
                  <div className="menu bg-[#fdfced] text-base-content min-h-full w-80 p-4 rounded-2xl z-[1001]">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sort" className="">
              <Select>
                <SelectTrigger className="w-[180px] relative z-[1000]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="relative z-[1100]">
                  <SelectItem value="light">Bananas - High to Low</SelectItem>
                  <SelectItem value="dark">Bananas - Low to High</SelectItem>
                  <SelectItem value="system">Gen 2 First</SelectItem>
                  <SelectItem value="system">Gen 3 First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div
            id="bananas"
            className="hidden md:flex md:flex-row justify-between p-4 items-center w-[202px] bg-green-100 border-[0.5px] border-gray-500 rounded-md"
          >
            <p className="text-green-950 text-xs font-semibold tracking-wider -mb-1">BANANAS</p>
            <div className="flex flex-row justify-end items-center gap-2">
              <img src="/bananacoin.png" alt="bananacoin" />
              <p className="font-bold -mb-1">10289</p>
            </div>
          </div>
        </div>
        <div
          id="shop-items"
          className="z-[100] grid grid-cols-1 justify-between md:grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-2 w-full justify-items-center"
        >
          <Dialog>
            <DialogTrigger className="z-auto">
              <ShopItemClose />
            </DialogTrigger>
            <DialogContent className="w-full z-[1100]">
              <ShopItemOpen />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <ShopItemClose />
            </DialogTrigger>
            <DialogContent className="w-full z-[1100]">
              <ShopItemOpen />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <ShopItemClose />
            </DialogTrigger>
            <DialogContent className="w-full z-[1100]">
              <ShopItemOpen />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <ShopItemClose />
            </DialogTrigger>
            <DialogContent className="w-full z-[1100]">
              <ShopItemOpen />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <ShopItemClose />
            </DialogTrigger>
            <DialogContent className="w-full z-[1100]">
              <ShopItemOpen />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
