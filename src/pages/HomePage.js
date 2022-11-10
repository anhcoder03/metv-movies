import React from "react";
import Banner from "../components/banner/Banner";
import MoviePopular from "../components/movies/MoviePopular";
import MovieTopRated from "../components/movies/MovieTopRated";

const HomePage = () => {
  return (
    <div className="no-scrollbar ml-[10%] h-screen overflow-scroll w-[68%] bg-[#252229] ">
      <div className="p-10">
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
