import Image from "next/image";
import QuestClose from "./components/Quest/QuestClose";
import QuestOpen from "./components/Quest/QuestOpen";
import QuestHead from "./components/Quest/QuestHead";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DailyQuests from "./components/Quest/DailyQuests";
import WeeklyQuests from "./components/Quest/WeeklyQuests";
import BananasEarned from "./components/Quest/BananasEarned";

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-[#fdfced] text-black gap-4 justify-center md:items-start items-center md:p-16 md:px-32 p-8 ">
      <div className="flex md:flex-row flex-col-reverse md:max-w-[1000px] w-full justify-between">
        <div id="quest-area" className="w-full md:pr-8 flex flex-col gap-8">
          <DailyQuests />
          <WeeklyQuests />
        </div>
        <BananasEarned />
      </div>
    </main>
  );
}
