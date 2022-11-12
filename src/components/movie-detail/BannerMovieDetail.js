import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";

const BannerMovieDetail = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const {
    title,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    genres,
    overview,
    production_countries,
  } = data;
  return (
    <div className="FilmDetail relative mt-[74px] grid grid-cols-1 gap-y-8 pb-[90px] transition-all lg:mt-0 lg:gap-y-12 lg:pb-0">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div
        className="coverImgFilmDetails relative col-span-1 grid bg-cover px-4 py-8 md:px-5 lg:my-auto lg:grid-cols-12 lg:gap-10 lg:py-16 lg:px-10 2xl:py-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className="z-50 lg:col-span-5 2xl:col-span-4">
          <img
            className="mx-auto w-[70%] object-cover text-primary sm:w-[50%] md:w-[40%] lg:mx-0 lg:w-full"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
          />
        </div>
        <div className="z-50 mt-8 flex flex-col justify-between text-[#ececec] lg:col-span-7 lg:mt-5 2xl:col-span-8">
          <div className="mt-8 flex flex-col justify-between lg:col-span-7 lg:mt-5">
            <div className="flex flex-col gap-y-2 text-center lg:gap-y-4 lg:text-left">
              <h1 className="text-3xl lg:text-5xl">{title}</h1>
              <h2 className="text-xl text-[#b5b5b5] lg:text-2xl">
                {title} ({new Date(release_date).getFullYear()})
              </h2>
              <p className="flex items-center justify-center lg:justify-start">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="mr-1 inline-block text-[20px] text-yellow-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
                {parseFloat(vote_average).toFixed(1)}
              </p>
            </div>
            <div className="mt-5">
              <p className="mb-1">
                <span className="mr-2  text-[#b5b5b5]">NATION:</span>
                {production_countries.map((country) => country.name).join(", ")}
              </p>
              <p className="mb-1">
                <span className="mr-2 text-[#b5b5b5]">RELEASE DATE:</span>{" "}
                {release_date}
              </p>
              <p className="mt-5 text-justify leading-[24px]">{overview}</p>
            </div>
          </div>
          <div className="mt-10 flex justify-between gap-x-4 ">
            <div className="flex gap-x-2"></div>
            {genres.length > 0 && (
              <div className="flex flex-wrap justify-end gap-x-5 gap-y-3">
                {genres.map((item) => (
                  <span
                    className="my-auto rounded-[10px] border-2 border-[#474749] bg-[#292326] bg-opacity-70 px-[10px] py-[5px] text-sm transition-all hover:cursor-pointer hover:border-white lg:text-base"
                    key={item.id}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMovieDetail;
