import React from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const CelebItem = ({ item }) => {
  const { profile_path, name } = item;
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 rounded-[20px] bg-[#33292E] bg-opacity-60 p-3 text-center transition-all hover:scale-95 hover:cursor-pointer hover:bg-opacity-100">
      <div className=" relative w-full">
        <img
          className=" h-[230px] w-full rounded-[10px] object-cover lg:h-[200px] 2xl:h-[300px]"
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          alt="actor img"
          loading="lazy"
        />
      </div>
      <p className="mt-2 inline-block w-full truncate font-medium text-[#ececec] transition-all hover:text-white">
        {name}
      </p>
    </div>
  );
};

export default CelebItem;
export const CelebItemSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 rounded-[20px] bg-[#33292E] bg-opacity-60 p-3 text-center transition-all hover:scale-95 hover:cursor-pointer hover:bg-opacity-100">
      <div className=" relative w-full">
        <LoadingSkeleton
          width="100%"
          height="230px"
          radius="10px"
          className="lg:h-[200px] 2xl:h-[300px]"
        ></LoadingSkeleton>
      </div>
      <LoadingSkeleton
        height="30px"
        width="100%"
        radius="10px"
        className="mt-2 inline-block w-full truncate font-medium text-[#ececec] transition-all hover:text-white"
      ></LoadingSkeleton>
    </div>
  );
};
