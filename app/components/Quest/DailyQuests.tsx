import React from "react";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";

import QuestClose from "./QuestClose";
import QuestCloseMobile from "./QuestCloseMobile";
import QuestOpen from "./QuestOpen";

type Props = {};

const DailyQuests = (props: Props) => {
  return (
    <div id="daily-quests" className="flex flex-col gap-4 w-full">
      <div id="daily-header" className="flex flex-col w-full">
        <div className="flex flex-row items-center w-full justify-between ">
          <h1 className="text-xl font-bold">Daily</h1>
          <p>
            Refreshes in <span className="p-1 bg-white text-sm rounded-md">23H</span>
            <span className="p-1 ml-1 bg-white text-sm rounded-md">21M</span>
          </p>
        </div>
        <div className="flex flex-row items-center w-full justify-start pt-2 gap-4">
          <p className="text-sm text-left">
            <span className="text-lg">0&nbsp;</span>/&nbsp;4
          </p>
          <Progress value={75} />
        </div>
      </div>
      <div id="daily-quests-list-desktop" className=" hidden md:flex flex-col gap-4">
        <Dialog>
          <DialogTrigger className="w-full">
            <QuestClose />
          </DialogTrigger>
          <DialogContent className="w-full">
            <QuestOpen completed1={true} completed2={false} />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="w-full">
            <QuestClose completed={true} multi={false} />
          </DialogTrigger>
          <DialogContent className="w-full">
            <QuestOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="w-full">
            <QuestClose completed={true} multi={false} />
          </DialogTrigger>
          <DialogContent className="w-full">
            <QuestOpen />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="w-full">
            <QuestClose completed={true} multi={true} />
          </DialogTrigger>
          <DialogContent className="w-full">
            <QuestOpen />
          </DialogContent>
        </Dialog>
      </div>
      <div id="daily-quests-list-mobile" className="md:hidden flex flex-col gap-4">
        <Drawer>
          <DrawerTrigger>
            <QuestCloseMobile />
          </DrawerTrigger>
          <DrawerContent>
            <QuestOpen />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <QuestCloseMobile completed={true} />
          </DrawerTrigger>
          <DrawerContent>
            <QuestOpen />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <QuestCloseMobile completed={true} multi={true} />
          </DrawerTrigger>
          <DrawerContent>
            <QuestOpen />
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <QuestCloseMobile completed={true} />
          </DrawerTrigger>
          <DrawerContent>
            <QuestOpen />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default DailyQuests;
