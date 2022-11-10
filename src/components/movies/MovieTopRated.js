import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieItem from "./MovieItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import useSWR from "swr";
import { fetcher } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=95f2419536f533cdaa1dadf83c606027
const MovieTopRated = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=95f2419536f533cdaa1dadf83c606027",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="movies-list">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem item={item}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieTopRated;
