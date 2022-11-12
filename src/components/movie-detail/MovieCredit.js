import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import MovieCreditItem from "./MovieCreditItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieCredit = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <>
      <h2 className="mb-6 text-2xl text-white font-bold lg:mb-10 2xl:text-3xl">
        Credits
      </h2>
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
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper overflow-hidden rounded-[20px]"
      >
        {cast.length > 0 &&
          cast.map((el) => (
            <SwiperSlide key={el.id}>
              <MovieCreditItem item={el}></MovieCreditItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MovieCredit;
