import { useEffect, useState } from "react";
import foxImg from "../../assets/images/fox.png";
import godaImg from "../../assets/images/goda.png";
import usdtImg from "../../assets/images/USDT.png.png";
import changeBtn from "../../assets/images/switch-button.png";
import { ChevronLeft, ChevronUp, Telegram } from "../icon";
import Button from "../../shared/button";
import { Link } from "react-router-dom";

const BannerPurchases = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1500);

  const [mainData, setMainData] = useState({
    id: 1,
    img: godaImg,
    title: "USDT",
  });

  const [mainData2, setMainData2] = useState({
    id: 2,
    img: usdtImg,
    title: "GODA",
  });

  const onChangeUSD = () => {
    const newItem = mainData;

    setMainData(mainData2);
    setMainData2(newItem);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <section className="second-bg pt-[120px] lg:pt-[192px] relative">
      <div className="container">
        <div className="pb-[54px] md:flex md:gap-x-10 max-w-[1020px]">
          <div className="">
            <div className="relative mb-5">
              <div className="flex flex-col gap-y-[10px] md:max-w-[622px]">
                <article className="rounded-[17px] p-[26px] border text-custom-white border-[#d6d6d6]">
                  <h4 className="font-roboto text-[16px] font-normal mb-3">
                    from
                  </h4>
                  <div className="flex items-center gap-x-3 mb-5">
                    <div className="w-[40%] relative flex items-center gap-2 justify-between">
                      <button className="flex justify-between gap-x-[10px] items-center">
                        <img src={mainData?.img} alt={mainData?.title} />
                        <span>{mainData?.title}</span>
                      </button>

                      <ChevronUp />
                    </div>

                    <label
                      htmlFor="inp1"
                      className="min-w-[127px] bg-custom-white rounded-[10px]"
                    >
                      <input
                        id="inp1"
                        type="number"
                        placeholder="0"
                        className="w-full bg-transparent outline-0 bottom-0 font-roboto font-medium text-[20px] text-black/60 placeholder-[#d6d6d6] px-4 py-1"
                      />
                    </label>
                  </div>
                  <div className="flex justify-between gap-x-5">
                    <h4 className="flex items-center gap-x-2 font-normal text-[16px] font-roboto text-[#d6d6d6]">
                      Balance <span className="font-medium">0</span>
                    </h4>
                    <h3 className="flex items-center gap-x-2 font-normal text-[16px] font-roboto text-[#d6d6d6]">
                      $0
                    </h3>
                  </div>
                </article>

                <button
                  onClick={onChangeUSD}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition duration-300 hover:rotate-90"
                >
                  <img src={changeBtn} alt="change btn" />
                </button>

                <article className="rounded-[17px] p-[26px] border text-custom-white border-[#d6d6d6]">
                  <h4 className="font-roboto text-[16px] font-normal mb-3">
                    to
                  </h4>
                  <div className="flex items-center gap-x-3 mb-5">
                    <div className="w-[40%] relative flex items-center gap-2 justify-between">
                      <button className="flex justify-between gap-x-[10px] items-center">
                        <img src={mainData2?.img} alt={mainData2?.title} />
                        <span>{mainData2?.title}</span>
                      </button>

                      <ChevronUp />
                    </div>

                    <label
                      htmlFor="inp1"
                      className="min-w-[127px] bg-custom-white rounded-[10px]"
                    >
                      <input
                        id="inp1"
                        type="number"
                        placeholder="0"
                        className="w-full bg-transparent outline-0 bottom-0 font-roboto font-medium text-[20px] text-black/60 placeholder-[#d6d6d6] px-4 py-1"
                      />
                    </label>
                  </div>
                  <div className="flex justify-between gap-x-5">
                    <h4 className="flex items-center gap-x-2 font-normal text-[16px] font-roboto text-[#d6d6d6]">
                      Balance <span className="font-medium">0</span>
                    </h4>
                    <h3 className="flex items-center gap-x-2 font-normal text-[16px] font-roboto text-[#d6d6d6]">
                      $0
                    </h3>
                  </div>
                </article>
              </div>
            </div>
            <Button extraClass="py-5 w-full mb-12">Подключить кошелек</Button>
          </div>

          <div className="bg-custom-gold-liner-200 w-full md:max-w-[394px] min-h-[233px] max-h-[357px] rounded-[10px] pt-[22px] pr-[17px] pb-[33px] pl-[20px] font-roboto text-custom-white">
            <h2 className="font-bold text-[24px] mb-2">
              Впервые на <br /> Web3.World?
            </h2>
            <p className="font-normal text-[14px] mb-4">
              Всего 2 шага, чтобы получить максимум от Web3.World
            </p>
            <ul className="font-normal text-[14px] mb-9 flex flex-col gap-y-1">
              <li className="flex items-center gap-x-5 hover:opacity-85">
                Подключить кошелек Venom <ChevronLeft />
              </li>
              <li className="flex items-center gap-x-5 hover:opacity-85">
                Получить Венома. Как? <ChevronLeft />
              </li>
            </ul>
            <Link to={"/"} className="font-normal text-[14px] hover:opacity-85">
              Do you have any questions?
            </Link>

            <Link
              to={"/"}
              className="font-normal text-[14px] flex gap-x-2 mt-4 hover:opacity-85"
            >
              <span>
                <Telegram />
              </span>
              Присоединяйтесь к телеграм
            </Link>
          </div>
        </div>
      </div>

      {windowWidth && (
        <div className="absolute right-0 bottom-0 items-end">
          <img src={foxImg} alt="fox image" className="2xl:h-[80%]" />
        </div>
      )}
    </section>
  );
};

export default BannerPurchases;
