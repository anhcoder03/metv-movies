import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerTvSeries = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const movies = data?.results || [];
  const loading = !data;
  return (
    <section className="banner page-container mb-10 overflow-hidden">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-4 border-t-transparent mx-auto animate-spin mb-10"></div>
      )}
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { name, vote_average, backdrop_path } = item;

  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="Banner-over"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="w-full text-white absolute bottom-10 left-10">
        <h2 className="font-bold text-3xl mb-3">{name}</h2>
        <p className="mr-1 flex items-center mb-3 text-base font-bold lg:text-xl">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="mr-1 inline-block text-[20px] text-yellow-400 lg:mr-2 lg:text-[26px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
          </svg>
          {vote_average}
          <span className="test-base font-bold text-[#545454]">/10</span>
        </p>
        <button className="py-3 px-6 bg-primary rounded-lg font-semibold">
          Watch Now
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="ml-1 inline-block text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BannerTvSeries;
