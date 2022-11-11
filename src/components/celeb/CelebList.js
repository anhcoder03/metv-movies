import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import CelebItem from "./CelebItem";

const CelebList = () => {
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/person/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );

  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="celeb-list grid grid-cols-5 gap-3">
      {movies.length > 0 &&
        movies.map((item) => <CelebItem key={item.id} item={item}></CelebItem>)}
    </div>
  );
};

export default CelebList;
