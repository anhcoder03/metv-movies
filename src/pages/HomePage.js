import React from "react";
import useSWR from "swr";
import Banner from "../components/banner/Banner";
import MoviePopular from "../components/movies/MoviePopular";
import MovieTopRated from "../components/movies/MovieTopRated";
import { fetcher } from "../config";

const HomePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  // const Movies = data?.results || [];
  const loading = !data;
  return (
    <div className="no-scrollbar h-screen mt-14 overflow-scroll w-full bg-[#252229] lg:w-[70%] lg:mt-0 lg:ml-[10%]">
      {loading && (
        <div className="w-10 h-10 mt-10 rounded-full border-4 border-primary border-t-4 border-t-transparent mx-auto animate-spin mb-10"></div>
      )}
      {!loading && (
        <div className="px-3 py-10 lg:p-10">
          <Banner></Banner>
          <div className="relative">
            <section className="pb-5">
              <h2 className="text-white font-bold text-3xl mb-10">
                Popular movies
              </h2>
              <MoviePopular></MoviePopular>
            </section>
            <section className="pb-5">
              <h2 className="text-white font-bold text-3xl mb-10">
                Top rated movies
              </h2>
              <MovieTopRated></MovieTopRated>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
