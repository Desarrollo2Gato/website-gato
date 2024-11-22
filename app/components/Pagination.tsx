import { useEffect, useState } from "react";

interface PaginationProps {
  data: Array<any>;
  itemsPerPageMobile: number;
  itemsPerPageTablet: number;
  itemsPerPageDesktop: number;
  itemsPerPageLargeDesktop: number;
  render: (item: any) => JSX.Element;
  gridClass: string;
  dataName: string;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  itemsPerPageMobile,
  itemsPerPageTablet,
  itemsPerPageDesktop,
  itemsPerPageLargeDesktop,
  render,
  gridClass,
  dataName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageMobile);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(itemsPerPageLargeDesktop);
      } else if (window.innerWidth >= 1024) {
        setItemsPerPage(itemsPerPageDesktop);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(itemsPerPageTablet);
      } else {
        setItemsPerPage(itemsPerPageMobile);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [itemsPerPageMobile, itemsPerPageTablet, itemsPerPageDesktop, itemsPerPageLargeDesktop]);

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 when itemsPerPage changes
  }, [itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const range = 1; // Number of pages to show on each side of the current page
    const start = Math.max(2, currentPage - range);
    const end = Math.min(totalPages - 1, currentPage + range);

    // Always show the first page
    pages.push(1);

    if (start > 2) {
      pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push('...');
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div>
      <div className={`${gridClass}`}>
        {selectedData.length > 0 ? (
          selectedData.map((item: any) => render(item))
        ) : (
          <p>No hay {dataName} disponibles</p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="px-2 py-0.5 text-xs md:text-sm  mx-1 h-7 rounded bg-gray-300 text-black"
          >
            Anterior
          </button>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              className={`px-1 py-0.5 text-xs md:text-sm  aspect-square h-7 mx-1 rounded ${
                typeof page === 'number' && page === currentPage
                  ? "bg-[#4608AD] text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="px-2 py-0.5 text-xs mx-1 h-7 md:text-sm  rounded bg-gray-300 text-black"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
