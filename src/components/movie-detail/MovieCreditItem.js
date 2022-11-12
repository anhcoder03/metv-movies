import React from "react";

const MovieCreditItem = ({ item }) => {
  const { profile_path, name } = item;
  return (
    <div className="cast-item z-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        className=" h-[250px] w-full rounded-[20px] border-2 border-[#252229] object-cover transition-all hover:cursor-pointer hover:border-2 hover:border-white lg:h-[200px] 2xl:h-[300px]"
        alt=""
      />
      <h3 className="mt-4 text-xl font-medium text-white">{name}</h3>
    </div>
  );
};

export default MovieCreditItem;
