import React from "react";
// import { useParams } from "react-router-dom";
// import useSWR from "swr";
// import { apiKey, fetcher } from "../../config";

const Trailer = () => {
  //   const { movieId } = useParams();
  //   const { data } = useSWR(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  //     fetcher
  //   );
  //   if (!data) return null;
  //   console.log(data);
  return (
    <div className="relative col-span-1  text-white lg:col-span-12">
      <h4 className=" text-2xl font-bold lg:mb-10 2xl:text-3xl">Trailers</h4>
      <div className="py-10 text-center"></div>
    </div>
  );
};

export default Trailer;
