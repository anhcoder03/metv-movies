import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieItem = ({ item }) => {
  const navigate = useNavigate();
  const { title, vote_average, release_date, poster_path, id } = item;
  return (
    <div className="movie-cart cursor-pointer flex flex-col h-full rounded-lg p-3 bg-[#33292e] transition-all text-white select-none hover:bg-[#3d3137]">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 truncate">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>
            {parseFloat(vote_average).toFixed(1)}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="ml-1 inline-block text-[20px] text-yellow-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
          </span>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="flex w-full items-center justify-center rounded-[10px] bg-primary py-2 font-medium outline-none transition-all hover:bg-red-400"
        >
          Watch Now
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="ml-2 hidden text-xl xl:inline-block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
export const MovieCardSkeleton = () => {
  return (
    <div className="movie-cart cursor-pointer flex flex-col h-full rounded-lg p-3 bg-[#33292e] transition-all text-white select-none hover:bg-[#3d3137]">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <LoadingSkeleton
          width="100%"
          height="20px"
          radius="8px"
          className="text-xl font-bold mb-3 truncate"
        ></LoadingSkeleton>
        <LoadingSkeleton className="flex items-center justify-between text-sm opacity-50 mb-10"></LoadingSkeleton>
        <LoadingSkeleton
          width="100%"
          height="40px"
          className="flex w-full items-center justify-center rounded-[10px] bg-primary py-2 font-medium outline-none transition-all hover:bg-red-400"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
