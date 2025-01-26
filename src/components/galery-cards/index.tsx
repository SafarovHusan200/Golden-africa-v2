import { Key, useState } from "react";
import galleryImg from "../../assets/images/galery.png";
import GallerySlide from "../galery-slide";

interface IGallery {
  id: number;
  mainImage: string;
  images: string[];
}

const GalerryCards = ({ galeryData }: { galeryData: IGallery[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // For "pagination" mode
  const itemsPerPage = 20;

  const paginatedGallery = galeryData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="mb-10 sm:mb-[60px] md:mb-[80px] xl:mb-[100px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {paginatedGallery?.map(
          (item: IGallery, index: Key | null | undefined) => (
            <>
              <div key={index} className="relative mx-auto">
                <img src={galleryImg} alt={item?.mainImage} />
                <div
                  onClick={() => setIsOpen(true)}
                  className="w-full absolute bottom-0 left-0 flex justify-between cursor-pointer rounded-[9px] backdrop-blur-lg bg-white/20 py-[10px] pr-[10px] pl-[22px] hover:backdrop-blur-xl"
                >
                  <p className="text-custom-white font-medium text-xl font-roboto">
                    some name
                  </p>
                  <span>
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 35.625H15C15.5312 35.625 15.9769 35.805 16.3369 36.165C16.6969 36.525 16.8763 36.97 16.875 37.5C16.8737 38.03 16.6937 38.4756 16.335 38.8369C15.9762 39.1981 15.5312 39.3775 15 39.375H7.5C6.96875 39.375 6.52375 39.195 6.165 38.835C5.80625 38.475 5.62625 38.03 5.625 37.5V30C5.625 29.4687 5.805 29.0237 6.165 28.665C6.525 28.3062 6.97 28.1262 7.5 28.125C8.03 28.1237 8.47562 28.3037 8.83687 28.665C9.19812 29.0262 9.3775 29.4712 9.375 30V33L13.875 28.5C14.2188 28.1562 14.6563 27.9844 15.1875 27.9844C15.7188 27.9844 16.1562 28.1562 16.5 28.5C16.8438 28.8437 17.0156 29.2812 17.0156 29.8125C17.0156 30.3437 16.8438 30.7812 16.5 31.125L12 35.625ZM35.625 12L31.125 16.5C30.7812 16.8438 30.3438 17.0156 29.8125 17.0156C29.2812 17.0156 28.8438 16.8438 28.5 16.5C28.1562 16.1562 27.9844 15.7188 27.9844 15.1875C27.9844 14.6562 28.1562 14.2188 28.5 13.875L33 9.375H30C29.4688 9.375 29.0238 9.195 28.665 8.835C28.3062 8.475 28.1262 8.03 28.125 7.5C28.1238 6.97 28.3038 6.525 28.665 6.165C29.0263 5.805 29.4713 5.625 30 5.625H37.5C38.0312 5.625 38.4769 5.805 38.8369 6.165C39.1969 6.525 39.3763 6.97 39.375 7.5V15C39.375 15.5312 39.195 15.9769 38.835 16.3369C38.475 16.6969 38.03 16.8762 37.5 16.875C36.97 16.8737 36.525 16.6937 36.165 16.335C35.805 15.9762 35.625 15.5312 35.625 15V12Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {isOpen && (
                <GallerySlide images={item?.images} setIsOpen={setIsOpen} />
              )}
            </>
          )
        )}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from(
          { length: Math.ceil(galeryData?.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default GalerryCards;
