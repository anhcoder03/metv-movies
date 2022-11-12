import React from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import MovieItem from "../movies/MovieItem";

const SimilarMovie = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <>
      <h2 className="my-6 text-white text-2xl font-bold lg:mb-10 2xl:text-3xl">
        Similar Movies
      </h2>
      <div className="movies-list">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            350: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            // when window width is >= 768px
            1023: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
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
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieItem item={item}></MovieItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default SimilarMovie;
