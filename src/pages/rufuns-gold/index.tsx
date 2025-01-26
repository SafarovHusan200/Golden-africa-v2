import Banner from "../../components/banner";
import Footer from "../../components/footer";
import RufunsGoldContent from "../../components/rufuns-gold";

const RufunsGold = () => {
  return (
    <>
      <Banner title={"RUFUNS GOLD"}/>
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <div className="container">
          <RufunsGoldContent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RufunsGold;
