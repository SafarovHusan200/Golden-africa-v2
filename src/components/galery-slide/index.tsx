import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import galeryImage from "../../assets/images/galery.png";

interface GallerySlideProps {
  images: string[];
  setIsOpen: (isOpen: boolean) => void;
}

const GallerySlide = ({ images, setIsOpen }: GallerySlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 1000); // Fade duration (300ms)
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center bg-custom-white/5 bg-opacity-20 transition-all">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 p-2 rounded-full hover:scale-110 text-[28px] text-custom-dark-green"
      >
        <RiCloseLargeLine />
      </button>

      {/* Image Container */}
      <div className="relative flex items-center justify-center w-full h-[80%] px-5 md:px-0">
        {images?.length > 0 ? (
          <img
            src={galeryImage}
            alt={`Slide ${currentIndex + 1}`}
            className={`max-w-full max-h-full rounded transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <p className="text-white">No images available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-custom-dark-green border-2 border-custom-gold-liner-200 hover:bg-custom-dark-green/80"
                : "bg-custom-gold-liner-200 border border-custom-gold-liner-200 hover:bg-custom-black/80 hover:border-custom-dark-green"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default GallerySlide;