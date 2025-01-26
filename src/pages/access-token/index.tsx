import Banner from "../../components/banner";
import Footer from "../../components/footer";
import AccessTokenMain from "../../components/access-token";

const AccessToken = () => {
  return (
    <>
      <Banner title={"Digital Assets Tokens"} />
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <AccessTokenMain />
        <Footer />
      </div>
    </>
  );
};

export default AccessToken;
