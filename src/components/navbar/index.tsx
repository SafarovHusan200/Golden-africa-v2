import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import logoDescktop from "../../assets/images/logo-desktop.png";
import { Telegram, Toggle, Translatsion } from "../icon";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Funksiya: Ekran o'lchamini tekshirish
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(false);
      }
    };

    // Dastlabki holatni tekshirish
    handleResize();

    // Tinglovchi qo'shish
    window.addEventListener("resize", handleResize);

    // Tozalash (cleanup)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center gap-x-9">
        <ul className="hidden flex-wrap gap-y-2 w-1/2 max-w-[688px] lg:flex gap-x-5 3xl:gap-x-10 rounded-[10px] bg-transparent-white py-6 pl-[40px] font-roboto font-normal text-[16px] text-custom-white">
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/about`}>About us</a>
          </li>
          <li>
            <a href={"/golden-triangle"}>Bg Golden Triangle</a>
          </li>
          <li>
            <a href={"/rufuns-gold"}>Rufuns Gold</a>
          </li>
          <li>
            <a href={"/news"}>News</a>
          </li>
          <li>
            <a href={"/gallery"}>Gallery</a>
          </li>
        </ul>

        <div className="flex items-center justify-between w-full lg:w-max mb-9 md:mb-0">
          <Link to={"/"}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={logoDescktop} />
              <img src={logo} alt="golden africa logotip" />
            </picture>
          </Link>
          <span className="lg:hidden" onClick={() => setIsVisible(true)}>
            <Toggle />
          </span>
        </div>

        <ul className="hidden flex-wrap gap-y-2 w-1/2 max-w-[688px] lg:flex lg:items-center rounded-[10px] bg-transparent-white py-6 pl-[40px] pr-2 font-roboto font-normal text-[16px] text-custom-white">
          <li className="mr-10">
            <a href={"/access-token"}>Digital Assets Tokens</a>
          </li>
          <li className="mr-7">
            <a href={"/contact"}>Contacts</a>
          </li>
          <li className="mr-[19px]">
            <Link
              to={"/purchases"}
              className="bg-[#002c29] py-[9px] px-[13px] rounded-sm"
            >
              buy tokens
            </Link>
          </li>
          <li>
            <Link to={"/"} className="flex items-center gap-x-[10px]">
              <span className="w-7 h-7 object-contain">
                <Translatsion />
              </span>{" "}
              live broadcast
            </Link>
          </li>
        </ul>
      </div>

      {isVisible && (
        <div
          className={`h-[100vh] w-full fixed top-0 z-30 backdrop-opacity-10 left-0 bg-custom-white-200/50 text-custom-white`}
        >
          <nav
            className={`${
              isVisible ? "right-0" : "-right-full"
            } transition-all duration-300
             h-full rounded-s-[10px] w-[245px] absolute top-0 right-0 pt-[72px] bg-custom-dark-green px-5 font-roboto`}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="bg-transparent absolute right-5 top-[45px] text-[28px] z-40 text-custom-white "
            >
              <IoMdClose />
            </button>
            <a
              href="/about"
              onClick={() => setIsVisible(false)}
              className="w-full mb-5 border border-[#375b59] py-[11px] px-[10px] font-roboto font-normal text-[14px]"
            >
              About the project
            </a>

            <ul
              className="font-normal text-[14px] flex flex-col gap-y-5 mt-5 mb-5"
              onClick={(e) => e.target && setIsVisible(false)}
            >
              <li>
                <a href={"/#tokenom"}>Tokenomics</a>
              </li>
              <li>
                <a href={"/#investors"}>Advantages for investors</a>
              </li>
              <li>
                <a href={"/#work"}>How does it work</a>
              </li>
              <li>
                <a href={"/contact"}>Contacts</a>
              </li>
            </ul>

            <Link
              to={"/purchases"}
              onClick={() => setIsVisible(false)}
              className="flex justify-center bg-custom-gold-liner-200  border-b rounded-sm py-[9px] px-[13px] font-semibold text-[16px]"
            >
              Buy tokens
            </Link>

            <div className="bg-[#375b59] mt-10 h-[1px] w-full"></div>

            <button className="w-full py-6 flex items-center gap-x-2 font-semibold text-[16px]">
              <span className="text-custom-white w-[42px] h-[42px]">
                <Translatsion />
              </span>{" "}
              live broadcast
            </button>

            <div className="bg-[#375b59] h-[1px] w-full mb-5"></div>

            <Link
              to={"/"}
              className="text-[29px] text-custom-white bg-[#2AABEE]"
            >
              <span>
                <Telegram />
              </span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
