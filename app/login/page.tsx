import Marquee from "@/components/magicui/marquee";
import Twitter from "../../public/svgs/twitter.svg";
import Discord from "../../public/svgs/discord.svg";
import Matrica from "../../public/svgs/matrica.svg";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeicif2cwovikfulk7hd5mt2yvse4jdppeal7cbpiveagpfbi2y2qly/3233.png",
  },
  {
    name: "Monke",
    img: "https://arweave.net/ceDznUwzgalOVxf9Lvl49Jvih9lWTLm3IRrGbsB3YK8",
  },
  {
    name: "Monke",
    img: "https://arweave.net/hBGl6OoMh06-Yr0qpuFZ397Z612uUkjI124JfVnYYFY",
  },
  {
    name: "Monke",
    img: "https://arweave.net/Ce5mYtUH279KMNFgy8ykgpy7L5JYSW_fysX5Y3pHy7s",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeidnrascqow337kjz6nqut72y734zgdjj52xvhznvxb55evny6gpw4/2033.png",
  },
  {
    name: "Monke",
    img: "https://arweave.net/AILQ7BTEnWvU7-mnwwhOv_Y8ddFSAcI9Vx8GOTYJCmc",
  },
  {
    name: "Monke",
    img: "https://arweave.net/8OFaRBKu7tfHImAJTaS3m6L_05Lio7bo7gw6boNMj50",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeiguk52hv3xpbvm5lwmtme6srh6sgfxg5yuhlfomt4mawwwjuqykhq/1133.png",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeihhnjgqj2ppgswdosnwo4c4wrk4knj6diwccoochjbgzaffhwia6i/11343.png",
  },
  {
    name: "Monke",
    img: "https://arweave.net/vEo8OVg8VfudtfkRT5V9jyJJ4C8qI3qT3uhlPInoT5A",
  },
  {
    name: "Monke",
    img: "https://arweave.net/GcGmej5ouKyGWs2roJ-0XujtHNj2uni8CPeYMicOu3A",
  },
  {
    name: "Monke",
    img: "https://arweave.net/Qx8aK1mZLTocjV_qQn42NZtPOYeFv09rr4AIu-pjLCk",
  },
  {
    name: "Monke",
    img: "https://arweave.net/8YrkKJI0-M5-GxR0DhO1rUhT5dr9iOUpmnIONtd-RoA",
  },
  {
    name: "Monke",
    img: "https://arweave.net/SpeM4lhtPEywhyAl3xJrp_ez9V3QMiW5Ktj4RxmFX5E",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeifjveryn5oba3nulav53q7gxz7xzhc7mjxrcv43idiv3hu3liu2le/4948.png",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeif6w2mkakpz4kh2cclaloiwcsmfukiveymf2qk7sgxd5m3buej72i/4848.png",
  },
  {
    name: "Monke",
    img: "https://nftstorage.link/ipfs/bafybeidmo7yhap24tvzybldmx7wsdka3ze4icp4pbyndswu3prbpqrbtk4/3648.png",
  },
];

export default function Login() {
  return (
    <div className="h-screen bg-loginbg bg-cover bg-center text-black">
      <img src="/loginbg.png" alt="login background" className="h-full w-full" />
      <div id="container">
        <div
          id="main-container"
          className="z-[1000] fixed inset-0 flex flex-col items-center justify-center -mt-20"
        >
          <div
            id="carousel"
            className="relative z-[999] -mb-[354px] h-[400px] hidden md:flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-inherit "
          >
            <Marquee pauseOnHover className="[--duration:20s]">
              {carouselItems.map((item) => (
                <img
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  width={111}
                  height={111}
                  className="rounded-md"
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {carouselItems.map((item) => (
                <img
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  width={111}
                  height={111}
                  className="rounded-md"
                />
              ))}
            </Marquee>
          </div>
          <div
            id="login-container"
            className="z-[1000] flex flex-col justify-center gap-12 items-center md:py-20 md:px-24 py-10 px-12 bg-[#FDFBE8] rounded-xl
              border-8 border-green-900/20
            "
          >
            <div className="flex flex-row justify-center items-center gap-4">
              <img src="/bananalogo.png" alt="Banana Stand" className="w-[51px] h-[40px]" />
              <p className="font-dm text-3xl font-bold tracking-tight">Banana Stand</p>
            </div>
            <div
              id="login-button"
              className="py-2 px-12 flex flex-row justify-center items-center gap-4 bg-[#184623] rounded-lg"
            >
              <Matrica />
              <p className="font-dm text-white font-semibold">Login with Matrica</p>
            </div>
          </div>
        </div>
        <div
          id="footer-container"
          className="fixed bottom-0 w-full z-[1000] flex flex-row justify-between items-center pb-12 px-12"
        >
          <img src="/daologo.png" alt="MonkeDAO logo" height={32} width={82} />
          <div className="flex flex-row gap-8">
            <a href="https://twitter.com/MonkeDAO" target="_blank">
              <Twitter />
            </a>
            <a href="https://twitter.com/MonkeDAO" target="_blank">
              <Discord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
