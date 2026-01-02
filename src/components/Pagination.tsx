import React from "react";

import caretleft from '../assets/images/CaretLeft.png'
import caretRight from '../assets/images/CaretRight.png'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // build pages and ellipsis section
  const generatePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center space-x-2">

      {/* Left Arrow */}
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-40"
      >
        
        <img src={caretleft} alt="caretleft" className="w-4 h-4"/>
      </button>

      {/* Render page buttons */}
      {pages.map((p, i) =>
        typeof p === "number" ? (
          <button
            key={i}
            onClick={() => goToPage(p)}
            className={`w-8 h-8 flex items-center justify-center border rounded-md 
              ${
                currentPage === p
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {p}
          </button>
        ) : (
          <span key={i} className="px-2 text-gray-500">
            {p}
          </span>
        )
      )}

      {/* Right Arrow */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-40"
      >
                <img src={caretRight} alt="caretRight" className="w-4 h-4"/>

        
      </button>

    </div>
  );
};

export default Pagination;

