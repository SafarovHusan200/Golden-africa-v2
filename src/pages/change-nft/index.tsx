import BannerPurchases from "../../components/banner-purchases";
import Table from "./table";

const PurchaseNFT = () => {
  return (
    <>
      <BannerPurchases />
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 py-[35px] lg:py-[50px] left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>
        <div className="container">
          <form>
              <input
                id="search"
                type="search"
                placeholder="Введите название монеты"
                className="w-full bg-custom-white outline-0 bottom-0 font-roboto font-medium text-[20px] text-black/60 placeholder-[#d6d6d6] px-7 py-4 mb-7 rounded-[10px]"
              />
          </form>
          <Table />
        </div>
      </div>
    </>
  );
};

export default PurchaseNFT;
