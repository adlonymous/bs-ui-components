import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialogshop";
import ShopItemClose from "./ShopItemClose";
import ShopItemOpen from "./ShopItemOpen";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ShopItemOpenMobile from "./ShopItemOpenMobile";

type Props = {};

const ShopItems = (props: Props) => {
  return (
    <>
      <div
        id="shop-items-desktop"
        className="z-[100] md:grid hidden grid-cols-1 justify-between md:grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-2 w-full justify-items-center"
      >
        <Dialog>
          <DialogTrigger>
            <ShopItemClose />
          </DialogTrigger>
          <DialogContent>
            <ShopItemOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <ShopItemClose />
          </DialogTrigger>
          <DialogContent>
            <ShopItemOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <ShopItemClose />
          </DialogTrigger>
          <DialogContent>
            <ShopItemOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <ShopItemClose />
          </DialogTrigger>
          <DialogContent>
            <ShopItemOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <ShopItemClose />
          </DialogTrigger>
          <DialogContent>
            <ShopItemOpen />
          </DialogContent>
        </Dialog>
      </div>
      <div
        id="shop-items-mobile"
        className="z-[100] md:hidden grid grid-cols-1 justify-between md:grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-2 w-full justify-items-center"
      >
        <Drawer>
          <DrawerTrigger>
            <ShopItemClose />
          </DrawerTrigger>
          <DrawerContent>
            <ShopItemOpenMobile />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <ShopItemClose />
          </DrawerTrigger>
          <DrawerContent>
            <ShopItemOpenMobile />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <ShopItemClose />
          </DrawerTrigger>
          <DrawerContent>
            <ShopItemOpenMobile />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <ShopItemClose />
          </DrawerTrigger>
          <DrawerContent>
            <ShopItemOpenMobile />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default ShopItems;
