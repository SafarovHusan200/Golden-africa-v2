import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewsItem = ({
  mode = "default",
  newsData,
  titleVisable = true,
  count,
}: {
  mode?: string;
  newsData: any;
  titleVisable?: boolean;
  count?: number | null;
}) => {
  const [visibleNews, setVisibleNews] = useState(4); // For "default" mode
  const [currentPage, setCurrentPage] = useState(1); // For "pagination" mode
  const itemsPerPage = count || 12;
  const navigate = useNavigate();

  // Paginated data for "pagination" mode
  const paginatedNews = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination click
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Show more news for "default" mode
  const handleShowMore = () => {
    setVisibleNews((prev) => Math.min(prev + 4, newsData.length));
  };

  return (
    <section className="news mb-10">
      <div className="container">
        <div className="w-100 mx-auto ">
          {titleVisable && (
            <h2 className="font-roboto font-bold text-[24px] text-[#002c29] mb-2 md:text-center lg:text-[40px]">
              News
            </h2>
          )}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
              mode === "pagination" ? "gap-x-10" : "gap-10"
            }`}
          >
            {mode === "default"
              ? newsData?.slice(0, visibleNews)?.map((news: any) => (
                  <div
                    key={news?.id}
                    className="border rounded-lg bg-[#F8F6EF] overflow-hidden"
                  >
                    <img
                      src={news?.image}
                      alt={news?.title}
                      className="w-full  object-cover"
                    />
                    <div className="p-[16px_10px]">
                      <h3 className="text-[20px] font-roboto font-medium leading-[119%] mb-[10px] text-[#00271C]">
                        {news?.title}
                      </h3>
                      <p className="font-normal font-roboto text-[#00271C] mb-2">
                        {news?.date}
                      </p>
                      <p className="text-[#888] mb-2 text-ellipsis overflow-hidden font-normal text-[18px] leading-[145%] font-roboto  line-clamp-3">
                        {news?.description}
                      </p>
                      <button
                        className={`backdrop-blur-50 text-custom-black border border-[#F0B345] w-full bg-transparent rounded-[10px] font-medium font-roboto text-[16px] py-[19px]
														 
												  `}
                      >
                        Читать полностью
                      </button>
                    </div>
                  </div>
                ))
              : paginatedNews?.map((news: any) => (
                  <div
                    key={news?.id}
                    className={`border ${
                      mode === "pagination"
                        ? "rounded-md rounded-b-none"
                        : "rounded-md"
                    } bg-[#F8F6EF] shadow-md overflow-hidden`}
                  >
                    <img
                      src={news?.image}
                      alt={news?.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className={`p-4`}>
                      <h3 className="font-semibold text-lg">{news?.title}</h3>
                      <p className="text-gray-500 text-sm">{news?.date}</p>
                      <p className="text-gray-700 mt-2 mb-[10px] line-clamp-3">
                        {news?.description}
                      </p>
                      <button
                        onClick={() => navigate(`/news/${news?.id}`)}
                        className={`backdrop-blur-50 text-custom-black border border-[#F0B345] w-full bg-transparent rounded-[10px] font-medium font-roboto text-[16px] py-[19px]
														 
												  `}
                      >
                        Читать полностью
                      </button>
                    </div>
                  </div>
                ))}
          </div>

          {/* Default Mode: Show More Button */}
          {mode === "default" && visibleNews < newsData.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-12 py-4 bg-custom-gradient text-custom-black font-medium rounded-xl backdrop-blur-50 text-[16px] font-roboto"
              >
                Watch everything
              </button>
            </div>
          )}

          {/* Pagination Mode: Pagination Controls */}
          {mode === "pagination" && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from(
                { length: Math.ceil(newsData?.length / itemsPerPage) },
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
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsItem;
