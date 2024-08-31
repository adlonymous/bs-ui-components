import DailyQuests from "./components/Quest/DailyQuests";
import WeeklyQuests from "./components/Quest/WeeklyQuests";
import BananasEarned from "./components/Quest/BananasEarned";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen  bg-[#fdfced] text-black gap-4 justify-center md:items-start items-center md:p-16 md:px-32 p-8 ">
        <div className="flex md:flex-row flex-col-reverse md:max-w-[1000px] w-full justify-between">
          <div id="quest-area" className="w-full md:pr-8 flex flex-col gap-8">
            <DailyQuests />
            <WeeklyQuests />
          </div>
          <BananasEarned />
        </div>
      </main>
      <img
        src="/footer.png"
        alt="footer graphic"
        className="w-full h-[240px] object-cover bg-inherit -mb-[241px] hidden md:block"
      />
      <Footer />
    </div>
  );
}
