import React from "react";

interface QuestOpenProps {
  className?: string;
  multi?: boolean;
  completed1?: boolean;
  completed2?: boolean;
}

const QuestOpen = ({ className, ...props }: QuestOpenProps) => {
  return (
    <div className="bg-white md:p-8 p-4 text-black rounded-xl flex flex-col items-center md:w-[700px]">
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center w-full">
        <div className="flex flex-row gap-3 items-center w-full justify-start">
          <img
            src="/smb.png"
            alt="quest-img"
            height={60}
            width={60}
            className="rounded-full border-gray border-[1px] p-[1px]"
          />
          <h1 className="font-semibold">Repping Monke</h1>
        </div>
        <div className="flex flex-row gap-2 items-center border-gray border-[1px] md:p-5 p-2 md:w-28 w-full md:justify-start justify-center rounded-xl">
          <img src="/bananacoin.png" alt="banana-img" />
          <p className="font-bold text-xl">10</p>
        </div>
      </div>
      <div className="text-wrap pt-4 w-full pl-1 text-sm text-slate-600 font-light">
        <p>
          Use a Solana Monke Business Gen2 or Gen3 as your profile picture on X/Twitter.
          <br />
          <br />
          You can display either Gen2 or Gen3 as your profile picture, the collection type
          doesn&apos;t affect the bananas you earn from this quest
        </p>
      </div>
      <h1 className="pt-6 text-left w-full text-lg font-semibold">Requirements</h1>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between pt-4">
        <div
          className={`flex flex-col gap-4 justify-start border-slate-400 border-[1px] p-5 rounded-xl ${
            props.completed1 ? `bg-green-50` : `bg-red-50`
          }`}
        >
          <div className="flex flex-row gap-2 items-center justify-start">
            {props.completed1 ? (
              <img src="/greentick.png" alt="tick" height={15} width={15} />
            ) : (
              <img src="/redcross.png" alt="tick" height={15} width={15} />
            )}
            <p>Linked to @account</p>
          </div>
          <p className="text-slate-400 text-sm font-light">
            Image must be the exact same image as the NFT (not edited or altered).
          </p>
        </div>
        <div
          className={`flex flex-col gap-4 justify-start border-slate-400 border-[1px] p-5 rounded-xl ${
            props.completed2 ? `bg-green-50` : `bg-red-50`
          }`}
        >
          <div className="flex flex-row gap-2 items-center justify-start">
            {props.completed2 ? (
              <img src="/greentick.png" alt="tick" height={15} width={15} />
            ) : (
              <img src="/redcross.png" alt="tick" height={15} width={15} />
            )}
            <p>PFP detected</p>
          </div>
          <p className="text-slate-400 text-sm font-light">
            Image must be the exact same image as the NFT (not edited or altered).
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-start pt-8  w-full">
        <h1 className="text-lg font-semibold pb-2">Banana Breakdown</h1>
        <div className="flex flex-col gap-2 justify-start w-full ">
          <div
            className={`flex flex-row justify-between items-center w-full py-2 border-[1px] border-slate-400 rounded-xl p-5 ${
              props.completed1 ? `bg-green-50` : `bg-red-50`
            }`}
          >
            <div className="flex flex-row justify-start items-center gap-2">
              {props.completed2 ? (
                <img src="/greentick.png" alt="tick" height={15} width={15} />
              ) : (
                <img src="/redcross.png" alt="tick" height={15} width={15} />
              )}
              <img src="/roundgen2.png" alt="roundgen2" />
              <p className="text-slate-400 text-sm font-light">Hold at least one Gen2 monke</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-end">
              <img src="/bananacoin.png" alt="banana-img" />
              <p>10</p>
            </div>
          </div>
          <div
            className={`flex flex-row justify-between items-center w-full py-2 border-[1px] border-slate-400 rounded-xl p-5 ${
              props.completed1 ? `bg-green-50` : `bg-red-50`
            }`}
          >
            <div className="flex flex-row justify-start items-center gap-2">
              {props.completed2 ? (
                <img src="/greentick.png" alt="tick" height={15} width={15} />
              ) : (
                <img src="/redcross.png" alt="tick" height={15} width={15} />
              )}
              <img src="/roundgen3.png" alt="roundgen3" />
              <p className="text-slate-400 text-sm font-light">Hold at least one Gen3 monke</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-end">
              <img src="/bananacoin.png" alt="banana-img" />
              <p>8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestOpen;
