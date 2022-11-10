import React, { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import useDebounce from "../../hooks/useDebunce";
import MovieItem from "./MovieItem";

const MovieSearch = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const filterDebounce = useDebounce(filter, 500);
  const { data } = useSWR(url, fetcher);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027&page=${nextPage}`
  );
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
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

export default MovieSearch;
