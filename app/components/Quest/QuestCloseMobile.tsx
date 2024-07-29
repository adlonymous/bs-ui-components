import React from "react";
import classNames from "classnames";

interface QuestCloseProps {
  className?: string;
  multi?: boolean;
  completed?: boolean;
}

const QuestCloseMobile = ({ className, ...props }: QuestCloseProps) => {
  return (
    <div
      className={classNames(
        `flex flex-col justify-between  bg-white border-[1px] border-gray text-black p-4 gap-4 rounded-xl w-full max-w-[800px] ${
          props.completed && `opacity-50`
        }`,
        className
      )}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="indicator relative">
          {props.completed && (
            <span className="absolute top-0 right-0 z-10">
              <img src="/greentick.png" alt="tick" height={20} width={20} />
            </span>
          )}
          <img
            src="/smb.png"
            alt="/quest-img"
            height={55}
            width={55}
            className="rounded-full  border-gray border-[1px] p-[2px] flex-shrink-0"
          />
        </div>

        <div className="flex flex-row gap-2 items-start border-gray border-[1px] p-5 py-4 ml-4 md:ml-0 rounded-xl flex-shrink-0">
          <img src="/bananacoin.png" alt="banana-img" />
          <p className="font-bold text-xl">10</p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 items-left">
        <h1 className="font-bold text-left">Monke holder</h1>
        <p className="text-left">Hold Solana Monke Business Gen2s, Gen3s or both.</p>
        {props.multi && (
          <p className="text-sm text-left">
            <span className="text-lg">0&nbsp;</span>/&nbsp;10 MESSAGES
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestCloseMobile;
