import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ handlePrevious, handleNext, page, totalPage }) => {
  return (
    <div className="flex gap-1 items-center justify-center mb-3">
      <div
        onClick={handlePrevious}
        className={`border border-[#6B7280] rounded-[3px] bg-black  cursor-pointer flex items-center p-1
         
          `}
      >
        <FaChevronLeft
          className={`
             ${!page ? "text-gray-400" : "text-white"} 
          `}
        />
      </div>
      <div className="text-white p-1 mx-1">{page + 1}</div>
      <div
        onClick={handleNext}
        className=" border border-[#6B7280] rounded-[3px] bg-black  cursor-pointer flex items-center p-1 "
      >
        <FaChevronRight
          className={`
             ${
               page + 1 === totalPage || totalPage === 0
                 ? "text-gray-400"
                 : "text-white"
             } 
          `}
        />
      </div>
    </div>
  );
};

export default Pagination;
