import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import line_1_mobile from "../../assets/images/line_1_mobile.svg";
import line_1 from "../../assets/images/line_1.svg";
import line_2 from "../../assets/images/line_2.svg";
import line_3 from "../../assets/images/line_3.svg";
import logoDesktop from "../../assets/images/logo-desktop.png";
import diagram_svg from "../../assets/images/diagram_svg.svg";
import diagram2_svg from "../../assets/images/diagram2_svg.svg";
import line_last from "../../assets/images/line_last.svg";

const AccessTokenMain = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Ekran o'lchamiga qarab `count`ni o'zgartiruvchi funksiya
    const updateCount = () => {
      if (window.innerWidth <= 460) {
        setMobile(true);
      } else {
        // Boshqa holatlar
        setMobile(false);
      }

      console.log(window.innerWidth);
    };

    // Ilk marta ishga tushirish
    updateCount();

    // Ekran o'lchami o'zgarganda kuzatish
    window.addEventListener("resize", updateCount);

    // Component unmount bo'lganda kuzatuvni to'xtatish
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  return (
    <>
      <div className="container overflow-hidden">
        <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-[39px]">
          <Link to={"/"}>Home / </Link>
          <Link to={"/access-token"} className="text-custom-dark-green">
            Digital Assets Tokens
          </Link>
        </div>

        <div className="max-w-[1360px] w-[100%] mx-auto bg-white sm:mb-[50px] mb-5 sm:pt-[50px] pt-3 sm:pb-[24px] pb-2 sm:px-4 px-0">
          <h2 className="text-[#002C29] font-roboto  lg:text-[40px] md:text-[20px] sm:text-[18px] text-[14px] text-center font-bold  sm:mb-[50px] mb-5 ">
            TOKEN - ISSUANCE, DISTRIBUTION, MINING
          </h2>

          {mobile ? (
            <div className="flex justify-center">
              <img src={line_1_mobile} alt="img" />
            </div>
          ) : (
            <div className="lines relative min-h-40  max-w-[1000px] w-full mx-auto lg:scale-[1] lg:-translate-x-12 md:scale-[0.75] md:-translate-x-36 sm:scale-[0.6] sm:-translate-x-36 scale-[0.4] -translate-x-[135px]">
              <div className="inline-block absolute top-[40px] left-10">
                <div className=" flex flex-col items-center">
                  <button className="py-2 px-6 bg-[#002C29] text-white rounded-[10px] text-[20px] mb-[11px]">
                    01
                  </button>
                  <p className="text-[#002C29] text-[18px] font-roboto font-[500]">
                    Pre-registration
                  </p>
                </div>
              </div>

              <img
                className="absolute top-[44px] left-[150px]"
                src={line_1}
                alt="line"
              />

              <div className="inline-block absolute top-[125px] left-[320px]">
                <div className=" flex flex-col items-center">
                  <p className="text-[#002C29] text-[18px] font-roboto font-[500] mb-[11px]">
                    Open-oddering
                  </p>
                  <button className="py-2 px-6 bg-[#002C29] text-white rounded-[10px] text-[20px] ">
                    02
                  </button>
                </div>
              </div>

              <img
                className="absolute top-[50px] left-[425px]"
                src={line_2}
                alt="line"
              />

              <div className="inline-block absolute top-[45px] left-[600px]">
                <div className=" flex flex-col items-center">
                  <button className="py-2 px-6 bg-[#002C29] text-white rounded-[10px] text-[20px] mb-[11px]">
                    03
                  </button>
                  <p className="text-[#002C29] text-[18px] font-roboto font-[500]">
                    Issue token
                  </p>
                </div>
              </div>

              <img
                className="absolute top-[55px] left-[700px]"
                src={line_3}
                alt="line"
              />

              <div className="w-[155px] inline-block absolute top-[145px] left-[880px]">
                <div className=" flex flex-col items-center">
                  <p className="text-[#002C29] text-[18px] font-roboto font-[500] mb-[11px]">
                    Commerce mining
                  </p>
                  <button className="py-2 px-6 bg-[#002C29] text-white rounded-[10px] text-[20px] ">
                    04
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center sm:mt-[125px] mt-4">
            <img className="sm:w-[190px] w-[72px]" src={logoDesktop} alt="" />
          </div>
        </div>

        <div className="max-w-[1360px] w-[100%] relative mx-auto bg-white sm:mb-[50px] mb-5 sm:pt-[50px] pt-5  px-4">
          <h2 className="text-[#002C29] font-roboto  lg:text-[40px] md:text-[20px] sm:mt-[75px] mt-10 md:mt-0 sm:text-[18px] text-[14px] text-center font-bold  sm:mb-[50px] mb-3">
            TOKEN - ISSUANCE, DISTRIBUTION, MINING
          </h2>

          <img
            className="absolute md:top-[20px] top-3 md:left-[18px] left-[50%] md:translate-x-[0] translate-x-[-50%] sm:w-[190px] w-[72px]"
            src={logoDesktop}
            alt=""
          />

          <div className="diagram flex justify-center">
            <img src={diagram_svg} alt="img" />
          </div>
        </div>

        <div className="max-w-[1360px] w-[100%] relative mx-auto bg-white sm:mb-[50px] mb-5 sm:pt-[50px] pt-3 pb-2  px-4">
          <h2 className="text-[#002C29] font-roboto  lg:text-[40px] md:text-[20px] sm:text-[18px] text-[14px] text-center font-bold sm:mb-[50px] mb-2">
            TOKEN DISTRIBUTION
          </h2>

          <img
            className="absolute sm:bottom-[20px] sm:left-[18px] bottom-[8px] left-[6px] lg:w-[190px] md:w-[150px] sm:w-[75px] w-[55px]"
            src={logoDesktop}
            alt=""
          />

          <div className="diagram flex justify-center">
            <img src={diagram2_svg} alt="icon" />
          </div>
        </div>

        <div className="max-w-[1360px] w-[100%] relative mx-auto bg-white sm:mb-[50px] mb-5 sm:pt-[50px] pt-3 pb-4  px-4">
          <h2 className="text-[#002C29] font-roboto  lg:text-[40px] md:text-[20px] sm:text-[18px] text-[14px] text-center font-bold sm:mb-[50px] mb-2">
            Timeline
          </h2>

          <img
            className="absolute sm:top-[20px] sm:left-[18px] top-[8px] left-[6px] lg:w-[190px] md:w-[150px] sm:w-[75px] w-[55px]"
            src={logoDesktop}
            alt=""
          />

          <div className="diagram flex justify-center">
            <img src={line_last} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessTokenMain;
