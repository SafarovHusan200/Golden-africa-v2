import { Link } from "react-router-dom";
import gold from "../../assets/images/╨╖╨╛╨╗╨╛╤В╨╛ 1.png";
import gold2 from "../../assets/images/╨Ч╨╛╨╗╨╛╤В╨╛ 2.png";

const Footer = () => {
  return (
    <footer className="container" id="contact">
      <div className="relative rounded-[10px] overflow-hidden">
        <div className="flex items-center px-20">
          <div className="hidden xl:block">
            <img src={gold} alt="gold image" />
          </div>
          <div className="second-bg w-full h-full absolute top-0 left-0 -z-10"></div>
          <div className="max-w-[523px] w-full pt-4 pb-7 mx-auto md:py-10 2xl:py-[74px] text-custom-white">
            <div className="mb-[8px] md:mb-[8px]">
              <h2 className="font-roboto font-bold text-[24px] mb-2 md:text-center lg:text-[40px]">
                Join GOLD
              </h2>
              {/* max-w-[640px] */}
              <p className="font-roboto font-normal max-w-[355px] text-[14px] md:text-[16px]  md:mx-auto md:text-center">
                Leave your details and we will call you back within 15 minutes!
              </p>
            </div>

            <form className="text-[#3d3d3d] font-roboto font-normal text-[14px] md:text-[16px] flex w-full flex-col gap-y-[10px]">
              <input
                type="text"
                placeholder="Your E-mail"
                className="rounded-[10px] w-full bg-custom-white py-[18px] px-5 outline-0"
              />
              <input
                placeholder="Your telegram"
                type="text"
                className="rounded-[10px] w-full bg-custom-white py-[18px] px-5 outline-0"
              />
              <button
                type="submit"
                className="w-full outline-0 backdrop-blur-100 bg-custom-gradient transition-all duration-150 hover:bg-custom-gradient-hover active:bg-[#eab24e] rounded-[10px] py-[19px] px-[33px] font-roboto font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#201500]"
              >
                To send
              </button>
            </form>
          </div>
          <div className="hidden xl:block mb-14">
            <img src={gold2} alt="gold image" />
          </div>
        </div>
      </div>
      <div className="rounded-[10px] grid grid-cols-1 md:grid-cols-3 align-items-center gap-x-[300px] xl:gap-x-[425px] mt-[30px] p-[27px_42px] overflow-hidden second-bg w-full h-ful">
        <p className="w-max text-custom-white font-roboto text-[18px]">
          © 2024. All rights reserved.
        </p>
        <Link className="w-max text-custom-white font-roboto text-[18px] " to="/">
          политика конфеденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
