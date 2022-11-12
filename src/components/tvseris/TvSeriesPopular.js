import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import useSWR from "swr";
import { fetcher } from "../../config";
import TvSeriesItem from "./TvSeriesItem";

const TvSeriesPopular = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movies-list">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          350: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          1023: {
            slidesPerView: 5,
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
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <TvSeriesItem item={item}></TvSeriesItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TvSeriesPopular;
