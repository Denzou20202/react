import {useSearchParams} from "react-router-dom";

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({page: '1'})
  let currentPage = Number(searchParams.get('page') || '1')

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
        setSearchParams({page: (++currentPage).toString()})
      }}>Next</button>

    </div>
  );
};