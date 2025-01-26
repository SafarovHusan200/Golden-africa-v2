import { useNavigate } from "react-router-dom";
import Button from "../../shared/button";

const Banner = ({
  title,
  subTitle,
  extraClass,
}: {
  title: string | JSX.Element;
  subTitle?: string;
  extraClass?: boolean;
}) => {
  const navigate = useNavigate();

  const onChangeLink = () => {
    navigate("/nft");
  };

  return (
    <section className={`home-banner ${subTitle && !extraClass ? "h-[100vh] pt-[158px]" : subTitle && extraClass ? "pt-[158px]" : "h-[60vh] flex items-center justify-center"}`}>
      <div className="container">
        <div className={`flex flex-col pb-[30px] md:pb-0 ${subTitle && !extraClass ? "custom-h md:h-auto lg:items-center justify-between" : subTitle && extraClass ? "h-[40vh] justify-end" : "h-[60vh]"} pt-0 lg:pt-[40px] 3xl:pt-[125px] justify-center`}>
          <div>
            <h1 className={`font-roboto font-bold ${extraClass ? "text-[30px] lg:text-[40px]" : "text-[30px] sm:text-[64px] xl:text-[80px] xl:mx-auto 3xl:text-[90px]"} leading-[100%] text-custom-white mb-[18px] xl:mb-[33px] ${!extraClass && "lg:text-center"}`}>
              {title}
            </h1>

            {subTitle && (
              <p className={`font-roboto font-bold text-[14px] mb-10 lg:mb-20 md:text-[18px] leading-[135%] lg:text-[20px] text-white sm:mb-10 ${!extraClass && "lg:text-center lg:mx-auto max-w-[690px]"}`}>
                {subTitle}
              </p>
            )}
          </div>

          {subTitle && !extraClass && (
            <Button
              click={onChangeLink}
              extraClass="w-max py-[19px] px-[33px] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]"
            >
              Buy NFT and take ownership
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
