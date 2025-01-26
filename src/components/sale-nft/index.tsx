import { useState } from "react";
import CardList from "../card";

const SaleNFT = () => {
  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <section className="mb-10 lg:mb-[60px] 2xl:mb-[100px]">
      <div className="container">
        <h2 className="font-roboto font-bold text-[24px] text-[#002c29] mb-5 md:mb-8 lg:text-[40px]">
          To buy NFT
        </h2>
        <ul className="flex gap-x-[10px] lg:gap-x-5 mb-5 lg:mb-8">
          <li>
            <button
              onClick={() => setActiveBtn(true)}
              className={`${
                activeBtn
                  ? "text-custom-white border border-[#002c29] bg-[#002c29]"
                  : "border border-[#002c29] bg-transparent text-[#002c29]"
              } py-[15px] px-[24px] rounded-[10px] font-medium font-roboto text-[18px] 2xl:text-[20px]`}
            >
              Rare
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveBtn(false)}
              className={`${
                !activeBtn
                  ? "text-custom-white border border-[#002c29] bg-[#002c29]"
                  : "border border-[#002c29] bg-transparent text-[#002c29]"
              } py-[15px] px-[24px] rounded-[10px] font-medium font-roboto text-[18px] 2xl:text-[20px]`}
            >
              By price
            </button>
          </li>
        </ul>
        <CardList />
      </div>
    </section>
  );
};

export default SaleNFT;
