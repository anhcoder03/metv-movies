import React from "react";
import BannerTvSeries from "../components/banner/BannerTvSeries";
import TvSeriesPopular from "../components/tvseris/TvSeriesPopular";
import TvSeriesTopRated from "../components/tvseris/TvSeriesTopRated";

const TvSeries = () => {
  return (
    <div className="no-scrollbar ml-[10%] h-screen overflow-scroll w-[68%] bg-[#252229] ">
      <div className="p-10">
        <BannerTvSeries></BannerTvSeries>
        <div className="relative">
          <section className="pb-5">
            <h2 className="text-white font-bold text-3xl mb-10">
              Popular TV series
            </h2>
            <TvSeriesPopular></TvSeriesPopular>
          </section>
          <section className="pb-5">
            <h2 className="text-white font-bold text-3xl mb-10">
              Top rated TV series
            </h2>
            <TvSeriesTopRated></TvSeriesTopRated>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
