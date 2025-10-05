import {useSearchParams} from "react-router-dom";
import {useState} from "react";

interface PaginationProps {
  totalUsers: number;
}

export const Pagination = ({totalUsers}: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams({page: '1'})
  const [usersOnPage] = useState(30)
  let currentPage = Number(searchParams.get('page') || '1')

  const totalPages = Math.ceil( totalUsers / usersOnPage)

  return (
    <div className='flex justify-center gap-2 mt-1'>
      <button className='border-2 cursor-pointer w-1/12'
        onClick={() => {
          if (currentPage > 1 ) {
        setSearchParams({page: (--currentPage).toString()})
          }
      }}>Prev</button>
      <button className='border-2 cursor-pointer w-1/12'
        onClick={() => {
          if (currentPage < totalPages) {
        setSearchParams({page: (++currentPage).toString()})
          }
      }}>Next</button>

    </div>
  );
};