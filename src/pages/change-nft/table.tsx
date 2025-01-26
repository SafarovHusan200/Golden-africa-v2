import { ArrowTop } from "../../components/icon";
import Button from "../../shared/button";
import godaImg from "../../assets/images/goda.png";
import usdtImg from "../../assets/images/USDT.png.png";
import { useState } from "react";

const Table = () => {
  const data = [{ id: 1, content: "salom" }];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-custom-white w-full min-w-max rounded-[10px] overflow-hidden">
          <ul className="border-b border-[#d6d6d6] font-normal text-[16px] text-left flex items-center justify-between gap-x-20">
            <li className="w-1/4 min-w-[150px] py-4 pl-[30px] lg:pl-[96px]">
              Имя
            </li>
            <li className="w-1/4 min-w-[150px] py-4">24-часовой объем</li>
            <li className="w-1/4 min-w-[150px] py-4 flex items-center gap-x-1">
              TVL <ArrowTop />
            </li>
            <li className="w-1/4 min-w-[150px] py-4 pr-[30px] lg:pr-[80px]"></li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>

          <ul className="flex justify-between gap-x-20">
            <li className="py-4 w-1/4 min-w-[150px] pl-[30px] lg:pl-[96px] flex gap-x-2 items-center">
              <div className="w-[50px] relative h-[25px]">
                <div className="h-[28px] w-[28px] absolute z-10">
                  <img
                    src={godaImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[25px] w-[25px] absolute left-[18px]">
                  <img
                    src={usdtImg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              GODA/USDT
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $781 528 <span className="text-red-500">-40.79%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px]">
              $11 420 793 <span className="text-green-500">1.67%</span>
            </li>
            <li className="py-4 w-1/4 min-w-[150px] pr-[30px] lg:pr-[80px]">
              <Button extraClass="py-[5px] px-[25px]">Перейти к обмену</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Table;
