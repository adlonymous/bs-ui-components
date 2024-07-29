import React from "react";
import classNames from "classnames";

interface QuestCloseProps {
  className?: string;
  multi?: boolean;
  completed?: boolean;
}

const QuestClose = ({ className, ...props }: QuestCloseProps) => {
  return (
    <div
      className={classNames(
        `flex flex-row justify-between  bg-white border-[1px] border-gray text-black p-4 md:gap-16 rounded-xl w-full max-w-[800px] ${
          props.completed && `opacity-50`
        }`,
        className
      )}
    >
      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-row gap-2 items-start relative">
          <div className="indicator relative flex-shrink-0">
            {props.completed && (
              <span className="absolute top-0 right-0 z-10">
                <img
                  src="/greentick.png"
                  alt="tick"
                  height={20}
                  width={20}
                  className="flex-shrink"
                />
              </span>
            )}
            <img
              src="/smb.png"
              alt="quest-img"
              height={50}
              width={50}
              className="rounded-full border-gray border-[1px] p-[1px] flex-shrink-0"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-bold ">Monke holder</h1>
            <p className="text-left">Hold Solana Monke Business Gen2s, Gen3s or both.</p>
          </div>
        </div>
        {props.multi && (
          <p className="text-sm text-left">
            <span className="text-lg">0&nbsp;</span>/&nbsp;10 MESSAGES
          </p>
        )}
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-2 items-center border-gray border-[1px] p-5 py-8 ml-4 md:ml-0 rounded-xl flex-shrink-0">
        <img src="/bananacoin.png" alt="banana-img" />
        <p className="font-bold text-xl">10</p>
      </div>
    </div>
  );
};

export default QuestClose;
