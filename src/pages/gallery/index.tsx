import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import GalerryCards from "../../components/galery-cards";

const GalleryPage = () => {
  return (
    <>
      <Banner title={"Photo gallery"}/>
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <div className="container">
          <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-5">
            <Link to={"/"}>Home /</Link>{" "}
            <Link to={"/gallery"} className="text-custom-dark-green">
              Photo gallery
            </Link>
          </div>
          <GalerryCards galeryData={GalleryData} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;

const GalleryData = [
  {
    id: 1,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 2,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 3,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 4,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 5,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 6,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 7,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 8,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 9,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 10,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 11,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 12,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 13,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 14,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 15,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 16,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 17,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 18,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 19,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 20,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 21,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 22,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 23,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
  {
    id: 24,
    mainImage: "galery image",
    images: ["galery image", "galery image", "galery image", "galery image"],
  },
];
