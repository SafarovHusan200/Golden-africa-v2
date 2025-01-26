import Banner from "../../components/banner";
import Footer from "../../components/footer";
import TriangleContent from "../../components/triangle-content";

const GoldenTrainglePage = () => {
  return (
    <>
      <Banner title={"Золотой треугольник Замбии"}/>
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <div className="container">
          <TriangleContent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default GoldenTrainglePage;
