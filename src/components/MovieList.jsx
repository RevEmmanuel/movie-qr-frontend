import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import loader from "../images/loader.gif";

export default function MovieList(props) {
  const { value } = props;
  const [movieData, setMovieData] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [cantFetch, setCantFetch] = useState(false);

  useEffect(() => {

    fetch(
      `https://qr-code-generator-nestjs-production.up.railway.app/movies/${value}`
    )
      .then((response) => response.json())
      .then((response) => {
        setHasFetched(true);
        setCantFetch(false);
        console.log(response);
        return setMovieData(response);
      })
      .catch((err) => {
        setCantFetch(true);
        return console.error(err);
      });
  }, []);

  // console.log(movieData);

  const movieCardEls = movieData.slice(0, 10).map((data) => {
    return (
      <MovieCard
        id={data.id}
        title={data.title}
        path={data.image}
        key={data.id}
        genre={data.genre}
        date={data.release_date}
        rating={data.rating}
      />
    );
  });

  // console.log(movieCardEls);

  return (
    <div className="flex flex-col w-[100%] gap-16 items-center">
      <div className="flex justify-between w-[80%]">
        <h3 className="text-4xl font-bold">Featured Movies</h3>

        <p className="text-mainRed cursor-pointer">
          See more <span className="font-bold">{">"}</span>
        </p>
      </div>

      {cantFetch ? (
        <div className="text-lg">Something went wrong, check your network connection...</div>
      ) : (
        ""
      )}

      <div className={` movie-list grid relative`}>
        <img
          src={loader}
          className={`${
            hasFetched ? "hidden" : "block"
          } absolute top-[0%] left-[50%] translate-x-[-50%]`}
          alt=""
        />
        {hasFetched ? movieCardEls : ""}
      </div>
      {/*{hasFetched ? props.children : ""}*/}
    </div>
  );
}
