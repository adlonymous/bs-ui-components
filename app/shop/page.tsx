"use client";
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ShopItems from "../components/Shop/ShopItems";
import { Checkbox } from "@/components/ui/checkbox";
import Airdrops from "../../public/svgs/airdrops.svg";
import Endorsements from "../../public/svgs/endorsements.svg";
import Merch from "../../public/svgs/merch.svg";
import Raffles from "../../public/svgs/raffles.svg";
import Events from "../../public/svgs/events.svg";
import Gen2 from "../../public/svgs/gen2.svg";
import Gen3 from "../../public/svgs/gen3.svg";
import GenBoth from "../../public/svgs/genboth.svg";
import Globe from "../../public/svgs/globe.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shop() {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#fdfced] text-black font-dm gap-4 items-center justify-start md:px-14 px-6 py-8">
        <div className="flex flex-col items-center justify-start max-w-[1000px] w-full gap-4">
          <div
            id="filter-bar"
            className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 justify-between md:items-end w-full sticky top-0 z-[1000] bg-[#fdfced] rounded-b-md py-2 "
          >
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
                    <>
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
                    </>
                  )}
                </div>
                <div id="search-mobile" className="md:hidden">
                  <Drawer>
                    <DrawerTrigger className="bg-white p-2 border-[0.5px] border-black rounded-md">
                      <IconSearch stroke={1} />
                    </DrawerTrigger>
                    <DrawerContent className="">
                      <DrawerHeader className="">
                        <DrawerTitle className="text-black text-left text-2xl">Search</DrawerTitle>
                      </DrawerHeader>
                      <div className=" p-4 mx-4 mb-4 flex flex-row justify-around border-[0.5px] border-black items-center max-h-[24px] gap-2 text-black rounded-md">
                        <IconSearch stroke={1} />
                        <Input
                          type="text"
                          placeholder="Search"
                          className="bg-white w-[300px] max-h-[30px] border-none text-black"
                        />
                        <DrawerClose>X</DrawerClose>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
                <div id="filter" className="drawer hidden md:block">
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
                      <div id="filter-head">
                        <p className="text-black text-left text-2xl">Filter</p>
                      </div>
                      <div id="filter-full" className="text-black px-4">
                        <div id="filter-categories">
                          <div
                            id="categories-header"
                            className="flex flex-row justify-between items-center"
                          >
                            <p className="text-sm">Categories</p>
                            <p className="text-green-500 text-xs">Reset</p>
                          </div>
                        </div>
                        <div id="categories-list" className="w-full">
                          <div
                            id="category"
                            className="flex flex-col justify-start gap-3 py-4 items-center w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Airdrops />
                                <p>Airdrops</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Endorsements />
                                <p>Endorsements</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Merch />
                                <p>Merch</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Raffles />
                                <p>Raffles</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Events />
                                <p>Events</p>
                              </div>
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                        <Separator className="w-full" />
                        <div
                          id="exclusive-drops-header"
                          className="flex pt-4 flex-row justify-between items-center"
                        >
                          <p className="text-sm">Exclusive Drops</p>
                          <p className="text-green-500 text-xs">Reset</p>
                        </div>
                        <div id="exclusive-drops-list" className="w-full">
                          <div
                            id="drops"
                            className="flex flex-col justify-start gap-3 py-4 items-center w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Gen2 />
                                <p>Gen 2</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Gen3 />
                                <p>Gen 3</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <GenBoth />
                                <p>Both</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Globe />
                                <p>Oceania</p>
                              </div>
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="filter-mobile" className="md:hidden">
                  <Drawer>
                    <DrawerTrigger className="bg-white p-2 border-[0.5px] border-black rounded-md cursor-pointer">
                      <IconFilter stroke={1} />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="flex flex-col gap-4">
                        <DrawerTitle className="text-black text-left text-2xl">Filter</DrawerTitle>
                        <Separator />
                      </DrawerHeader>
                      <div id="filter-full" className="text-black px-4">
                        <div id="filter-categories">
                          <div
                            id="categories-header"
                            className="flex flex-row justify-between items-center"
                          >
                            <p className="text-sm">Categories</p>
                            <p className="text-green-500 text-xs">Reset</p>
                          </div>
                        </div>
                        <div id="categories-list" className="w-full">
                          <div
                            id="category"
                            className="flex flex-col justify-start gap-3 py-4 items-center w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Airdrops />
                                <p>Airdrops</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Endorsements />
                                <p>Endorsements</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Merch />
                                <p>Merch</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Raffles />
                                <p>Raffles</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Events />
                                <p>Events</p>
                              </div>
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                        <Separator className="w-full" />
                        <div
                          id="exclusive-drops-header"
                          className="flex pt-4 flex-row justify-between items-center"
                        >
                          <p className="text-sm">Exclusive Drops</p>
                          <p className="text-green-500 text-xs">Reset</p>
                        </div>
                        <div id="exclusive-drops-list" className="w-full">
                          <div
                            id="drops"
                            className="flex flex-col justify-start gap-3 py-4 items-center w-full"
                          >
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Gen2 />
                                <p>Gen 2</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Gen3 />
                                <p>Gen 3</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <GenBoth />
                                <p>Both</p>
                              </div>
                              <Checkbox />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-start items-center gap-2">
                                <Globe />
                                <p>Oceania</p>
                              </div>
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
              <div id="sort">
                <Select>
                  <SelectTrigger className="w-[180px] relative z-[900]">
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
              className="flex flex-row justify-between p-4 items-center w-[202px] bg-green-100 border-[0.5px] border-gray-500 rounded-md"
            >
              <p className="text-green-950 text-xs font-semibold tracking-wider -mb-1">BANANAS</p>
              <div className="flex flex-row justify-end items-center gap-2">
                <img src="/bananacoin.png" alt="bananacoin" />
                <p className="font-bold -mb-1">10289</p>
              </div>
            </div>
          </div>
          <ShopItems />
        </div>
      </main>
      <img
        src="/footer.png"
        alt="footer graphic"
        className="w-full h-[240px] object-cover bg-inherit -mb-[241px] hidden md:block"
      />
      <Footer />
    </div>
  );
}
