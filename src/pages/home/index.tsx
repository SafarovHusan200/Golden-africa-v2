import Banner from "../../components/banner";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer";
import GoldTariff from "../../components/gold-tariff";
import GoldToken from "../../components/gold-token";
import News from "../../components/news/News";
import WorkSystem from "../../components/system-work";
import WhyGold from "../../components/why-gold";

const HomePage = () => {
  return (
    <>
      <Banner
        title={
          <>
            Invest in real gold <br />
            through unique NFTs
          </>
        }
        subTitle={
          "Become a partial owner of a gold deposit and watch the mining process online."
        }
      />
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>
        <GoldTariff />
        <GoldToken />
        <WhyGold />
        <WorkSystem />
        <News />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
