import React from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import MovieItem from "../components/movies/MovieItem";
import { fetcher } from "../config";

const ResultSearchPage = () => {
  const { search } = useLocation();
  // https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${filterDebounce}
  // const [movies, setMovies] = useState([]);
  let query = new URLSearchParams(search);
  const filter = query.get("query");
  const { data } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${filter}`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  const loading = !data;
  return (
    <div className="no-scrollbar ml-[10%] h-screen overflow-scroll w-[68%] bg-[#252229] ">
      <div className="p-10">
        <h2 className="text-center text-white font-bold text-3xl mb-10">
          Movies Search List
        </h2>
        {loading && (
          <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
        )}
        <div className="grid grid-cols-4 gap-3">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieItem key={item.id} item={item}></MovieItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultSearchPage;
