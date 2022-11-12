import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import BannerMovieDetail from "../components/movie-detail/BannerMovieDetail";
import MovieCredit from "../components/movie-detail/MovieCredit";
import SimilarMovie from "../components/movie-detail/SimilarMovie";
import Trailer from "../components/movie-detail/Trailer";
import { apiKey, fetcher } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  const loading = !data;
  return (
    <div className="no-scrollbar h-screen mt-14 overflow-scroll w-full bg-[#252229] lg:w-[70%] lg:mt-0 lg:ml-[10%]">
      {loading && (
        <div className="w-10 h-10 mt-10 rounded-full border-4 border-primary border-t-4 border-t-transparent mx-auto animate-spin mb-10"></div>
      )}
      <BannerMovieDetail></BannerMovieDetail>
      <div className="px-3 py-10 lg:p-10">
        <MovieCredit></MovieCredit>
        <Trailer></Trailer>
        <SimilarMovie></SimilarMovie>
      </div>
    </div>
  );
};

export default MovieDetailPage;
