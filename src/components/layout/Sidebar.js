import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import handleQueryChange from "../movies/MovieSearch";
const Sidebar = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="h-[68px] overflow-hidden no-scrollbar fixed bottom-0 left-0 right-0 z-[100] flex w-full flex-col bg-[#181818] pb-4 text-[#ececec] transition-all duration-200 ease-in lg:relative  lg:z-auto  lg:h-screen lg:w-[22%] lg:overflow-scroll lg:border-l-2 lg:border-[#353535] lg:pb-5 xl:w-[22%] 2xl:w-[22%]">
      <div className="px-4">
        <div className="sticky top-0 z-50 flex bg-[#181818] bg-opacity-95 py-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Type here to search..."
              className="w-full p-4 bg-[#252229] text-white rounded-l-lg outline-none"
              onChange={handleQueryChange}
            />
          </div>
          <button className="p-4 bg-[#252229] text-white rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-5 grid overflow-scroll no-scrollbar my-10">
          <div className="flex flex-col gap-y-5">
            <h2 className="mb-5 text-2xl font-medium text-[#ECECEC]">
              Movies Trending
            </h2>
            <div className="flex flex-col gap-y-[15px]">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MoviesTrendingItem
                    key={item.id}
                    item={item}
                  ></MoviesTrendingItem>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function MoviesTrendingItem({ item }) {
  const { poster_path, title, vote_average, release_date } = item;
  return (
    <div className="grid grid-cols-12 rounded-[20px] bg-[#33292E] bg-opacity-60 p-3 text-[#ECECEC] transition-all hover:scale-[102%] hover:cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original//${poster_path}`}
        alt="poster film"
        className="col-span-3 my-auto w-full rounded-[10px] object-cover sm:col-span-2 lg:col-span-12 lg:h-[145px] lg:object-top xl:col-span-4 2xl:col-span-3 2xl:h-[135px]"
      />
      <div className="col-span-9 ml-[10px] flex flex-col justify-between  sm:col-span-10 lg:col-span-12 lg:ml-0 lg:gap-y-1 xl:col-span-8 xl:ml-[10px] 2xl:col-span-9">
        <div>
          <h4 className="truncate sm:text-xl lg:text-[17px]">{title}</h4>
          <div className="flex justify-between text-sm text-[#AFAFAF] sm:mt-2 sm:text-base lg:mt-0 lg:text-[13.5px] xl:mt-1">
            <p className="py-auto">{new Date(release_date).getFullYear()}</p>
            <p>
              {vote_average}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="ml-1 mb-1 inline-block text-[20px] text-yellow-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </p>
          </div>
          <div className="row-span-1 flex flex-wrap gap-x-2 gap-y-1">
            <p className="flex-1 flex items-center justify-center rounded-[10px] border-2 border-[#474749] px-2 py-[2px] text-center text-sm transition-all hover:cursor-pointer hover:border-white md:text-base lg:text-sm 2xl:py-1">
              Mystery
            </p>
            <p className="flex-1 flex items-center justify-center rounded-[10px] border-2 border-[#474749] px-2 py-[2px] text-center text-sm transition-all hover:cursor-pointer hover:border-white md:text-base lg:text-sm 2xl:py-1">
              Adventure
            </p>
            <p className="flex-1 flex items-center justify-center rounded-[10px] border-2 border-[#474749] px-2 py-[2px] text-center text-sm transition-all hover:cursor-pointer hover:border-white md:text-base lg:text-sm 2xl:py-1">
              Crime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
