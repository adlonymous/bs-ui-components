import React from "react";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";
import QuestClose from "./QuestClose";
import QuestOpen from "./QuestOpen";
import QuestCloseMobile from "./QuestCloseMobile";

type Props = {};

const WeeklyQuests = (props: Props) => {
  return (
    <div id="weekly-quests" className="flex flex-col gap-4 w-full font-dm">
      <div id="weekly-header" className="flex flex-col w-full">
        <div className="flex flex-row items-center w-full justify-between ">
          <h1 className="text-xl font-bold">Weekly</h1>
          <p>
            Refreshes in
            <span className="p-1 bg-white text-sm rounded-md border-[1px] border-slate-400">
              4D
            </span>
            <span className="p-1 ml-1 bg-white text-sm rounded-md border-[1px] border-slate-400">
              23H
            </span>
            <span className="p-1 ml-1 bg-white text-sm rounded-md border-[1px] border-slate-400">
              21M
            </span>
          </p>
        </div>
        <div className="flex flex-row items-center w-full justify-start pt-2 gap-4">
          <p className="text-sm text-left">
            <span className="text-lg font-bold">1&nbsp;</span>/&nbsp;1
          </p>
          <Progress value={100} />
        </div>
      </div>
      <div id="weekly-quests-list-desktop" className="hidden md:flex flex-col gap-4">
        <Dialog>
          <DialogTrigger className="w-full">
            <QuestClose className="opacity-50" />
          </DialogTrigger>
          <DialogContent className="w-full">
            <QuestOpen />
          </DialogContent>
        </Dialog>
      </div>
      <div id="weekly-quests-list-mobile" className="md:hidden flex flex-col gap-4">
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

export default WeeklyQuests;
