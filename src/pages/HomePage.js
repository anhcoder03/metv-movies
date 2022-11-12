import React from "react";
import Banner from "../components/banner/Banner";
import MoviePopular from "../components/movies/MoviePopular";
import MovieTopRated from "../components/movies/MovieTopRated";

const HomePage = () => {
  return (
    <div className="no-scrollbar h-screen mt-14 overflow-scroll w-full bg-[#252229] lg:w-[70%] lg:mt-0 lg:ml-[10%]">
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
    </div>
  );
};

export default HomePage;
