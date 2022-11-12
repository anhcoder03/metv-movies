import React from "react";
import BannerMovieDetail from "../components/movie-detail/BannerMovieDetail";
import MovieCredit from "../components/movie-detail/MovieCredit";

const MovieDetailPage = () => {
  return (
    <div className="no-scrollbar ml-[10%] h-screen overflow-scroll w-[68%] bg-[#252229] ">
      <BannerMovieDetail></BannerMovieDetail>
      <div className="p-10">
        <MovieCredit></MovieCredit>
      </div>
    </div>
  );
};

export default MovieDetailPage;
