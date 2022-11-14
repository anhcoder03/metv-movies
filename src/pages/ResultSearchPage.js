import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import MovieItem, { MovieCardSkeleton } from "../components/movies/MovieItem";
import { fetcher } from "../config";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const ResultSearchPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const { search } = useLocation();
  const navigate = useNavigate();
  let query = new URLSearchParams(search);
  const filter = query.get("query");
  const { data } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${filter}&page=${nextPage}`,
    fetcher
  );
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(parseInt(event.selected + 1));

    let pageLink = event.selected + 1;
    navigate({
      pathname: `/movies/search/page/${pageLink}`,
      search: `?query=${filter}`,
    });
  };
  const loading = !data;
  return (
    <div className="no-scrollbar h-screen mt-14 overflow-scroll w-full bg-[#252229] lg:w-[70%] lg:mt-0 lg:ml-[10%]">
      <div className="px-3 py-10 lg:p-10">
        <h2 className="text-center text-white font-bold text-3xl mb-10">
          Movies Search List
        </h2>
        {loading && (
          <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin mb-5"></div>
        )}
        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
          </div>
        )}
        {!loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieItem key={item.id} item={item}></MovieItem>
              ))}
          </div>
        )}
      </div>
      <div className="pb-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          marginPagesDisplayed={window.innerHeight <= 1024 ? 1 : 3}
          disableInitialCallback={true}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-[6px] text-[15px] text-[#ececec] lg:gap-x-3 lg:text-base lg:mb-0 "
          pageLinkClassName="bg-[#33292E] bg-opacity-80 page-link transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
          previousClassName="bg-[#33292E] bg-opacity-80  transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
          nextClassName="bg-[#33292E] nextPage bg-opacity-80  transition-all hover:bg-opacity-100 py-1 px-2 rounded-[5px]"
          activeClassName="page-active text-primary"
          disabledClassName="opacity-40"
          disabledLinkClassName="hover:cursor-default"
        />
      </div>
    </div>
  );
};

export default ResultSearchPage;
