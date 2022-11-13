import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import CelebItem, { CelebItemSkeleton } from "./CelebItem";

const CelebList = () => {
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/person/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const loading = !data;
  const movies = data?.results || [];
  return (
    <>
      {loading && (
        <div className="celeb-list grid grid-cols-2 lg:grid-cols-5 gap-3">
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
          <CelebItemSkeleton></CelebItemSkeleton>
        </div>
      )}
      <div className="celeb-list grid grid-cols-2 lg:grid-cols-5 gap-3">
        {movies.length > 0 &&
          movies.map((item) => (
            <CelebItem key={item.id} item={item}></CelebItem>
          ))}
      </div>
    </>
  );
};

export default CelebList;
