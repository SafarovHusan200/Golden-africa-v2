import foxImg from "../../assets/images/fox.png";
import goldImg from "../../assets/images/gold1.png";

const BannerNFT = () => {

  return (
    <section className="second-bg h-[524px] sm:h-[700px] lg:h-[900px] 2xl:h-[783px] pt-[120px] lg:pt-[192px] relative">
      <div className="container relative">
        <h1 className="max-w-[1200px] font-roboto relative z-20 font-bold text-[30px] text-custom-white sm:text-[56px] lg:text-[80px] 3xl:text-[100px]">
          <span className="text-[#f0b345]">NFT</span> provides partial ownership
          of the site
        </h1>
      </div>
      <div className="absolute right-0 bottom-0 grid grid-cols-2 2xl:w-[80%] h-full items-end">
        <img src={goldImg} alt="gold image" className="translate-x-1/3" />
        <img src={foxImg} alt="fox image" className="2xl:h-[80%]" />
      </div>
    </section>
  );
};

export default BannerNFT;
