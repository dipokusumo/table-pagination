import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      {/* Tombol Previous */}
      <Link
        href={`/?page=${Math.max(currentPage - 1, 1)}`}
        className={`px-4 py-2 flex items-center justify-center bg-gray-600 text-white rounded hover:bg-gray-800 transition duration-200 ${
          currentPage === 1 && "opacity-50 pointer-events-none"
        }`}
      >
        <FaArrowLeft />
      </Link>

      {/* Halaman Saat Ini */}
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      {/* Tombol Next */}
      <Link
        href={`/?page=${Math.min(currentPage + 1, totalPages)}`}
        className={`px-4 py-2 flex items-center justify-center bg-gray-600 text-white rounded hover:bg-gray-800 transition duration-200 ${
          currentPage === totalPages && "opacity-50 pointer-events-none"
        }`}
      >
        <FaArrowRight />
      </Link>
    </div>
  );
}