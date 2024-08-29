import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Remove from "../../../public/svgs/remove.svg";
import { SelectGroup } from "@radix-ui/react-select";

export default function CartView() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Card className="w-[450px] bg-green-50 flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold">Cart</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-start space-y-4 pt-0">
        <div className="space-y-4">
          <div id="cart-item" className="flex items-center space-x-4">
            <Image
              src="/singaporef1.png"
              alt="Item image"
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex-col gap-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <p className="font-semibold">Item name</p>
                <Remove />
              </div>
              <div className="flex flex-row justify-between w-full pt-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-500 text-sm">Limit x entries</h3>
                  <div className="flex flex-row gap-2 w-[122px] px-2 items-center border-[0.5px]  border-gray-300 rounded-md">
                    <a onClick={decrementQuantity}>
                      <MinusIcon className="h-4 w-4" />
                    </a>
                    <Input
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="h-10 text-center px-4 bg-inherit"
                      min={1}
                    />
                    <a onClick={incrementQuantity}>
                      <PlusIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center -mb-5">
                  <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
                  <p className="font-semibold text-md">1000</p>
                </div>
              </div>
            </div>
          </div>
          <div id="cart-item" className="flex items-center space-x-4">
            <Image
              src="/singaporef1.png"
              alt="Item image"
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex-col gap-4 w-full">
              <div className="flex flex-row justify-between w-full">
                <p className="font-semibold">Item name</p>
                <Remove />
              </div>
              <div className="flex flex-row justify-between w-full pt-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-500 text-sm">Limit x entries</h3>
                  <div className="flex flex-row gap-2 w-[122px] px-2 items-center border-[0.5px]  border-gray-300 rounded-md">
                    <a onClick={decrementQuantity}>
                      <MinusIcon className="h-4 w-4" />
                    </a>
                    <Input
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="h-10 text-center px-4 bg-inherit"
                      min={1}
                    />
                    <a onClick={incrementQuantity}>
                      <PlusIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center -mb-5">
                  <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
                  <p className="font-semibold text-md">1000</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">AIRDROP WALLET</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose wallet" />
              </SelectTrigger>
              <SelectContent className="text-black">
                <SelectGroup>
                  <SelectItem value="wallet1">4MJ8...mJco</SelectItem>
                  <SelectItem value="wallet2">5MJ8...mJco</SelectItem>
                  <SelectItem value="wallet3">6MJ8...mJco</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator className="w-full" />
        <div className="space-y-3">
          <div className="flex justify-between w-full">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg flex flex-row gap-2 justify-end items-center">
              <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
              <p>1000</p>
            </span>
          </div>
          <div className="flex justify-between w-full text-sm">
            <span>Available</span>
            <span className="flex flex-row gap-2 justify-end items-center">
              <img src="/bananacoin.png" alt="banana-img" className="w-4 h-4" />
              <p className="font-semibold text-gray-500">3989</p>
            </span>
          </div>
          <Button className="w-full bg-green-900 hover:bg-green-950 text-white py-5 text-lg">
            Buy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
