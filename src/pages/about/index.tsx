import Banner from "../../components/banner";
import Footer from "../../components/footer";
import AboutMain from "../../components/about-main";

const AboutPage = () => {
  return (
    <>
      <Banner title={"About Us"} />
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>
        <AboutMain />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
