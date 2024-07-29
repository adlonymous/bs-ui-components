import React from "react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex md:flex-row flex-col-reverse justify-between items-center w-full md:h-[240px] bg-[#184623] md:px-40 px-4 py-8 flex-shrink">
      <div className="flex md:flex-row flex-col-reverse justify-between w-full h-full px-6 gap-16 md:gap-0">
        <div className="flex md:flex-col flex-row justify-between items-center">
          <div className="flex flex-row items-center justify-between gap-2">
            <img src="/bananalogo.png" alt="logo" className="w-[28px] h-[22px]" />
            <h1 className="font-roc font-semibold text-lg -mb-1 tracking-wide">Banana Stand</h1>
          </div>
          <div className="flex flex-row">
            <img src="/daologo.png" alt="MonkeDAO logo" height={32} width={82} />
          </div>
        </div>
        <div className="flex flex-row justify-around md:gap-6 flex-shrink font-dm">
          <a href="/">
            <IconBrandTwitter stroke={1} />
          </a>
          <a href="/">
            <IconBrandDiscord stroke={1} />
          </a>
          <a href="/">Quests</a>
          <a href="/">Shop</a>
          <div className="flex flex-col gap-6">
            <a href="/">Profile</a>
            <a href="/">History</a>
            <a href="/">Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
