import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieCreditItem from "./MovieCreditItem";

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
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={6}
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
          cast.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCreditItem item={item}></MovieCreditItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MovieCredit;
