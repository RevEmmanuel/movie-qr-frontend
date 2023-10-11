import React, { useState } from "react";
import imdb from "../images/imdb.svg";
import tomato from "../images/tomato.svg";
import loader from "../images/loader.gif";

export default function MovieCard(props) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div className="relative">
        <div
          data-testid="movie-card"
          className="flex flex-col items-start w-[100%] gap-4 relative"
        >
          {/* movie poster */}
          <div className="w-[100%] relative">
            <img
              data-testid="movie-poster"
              className="w-[100%]"
              src={props.path}
              alt="movie-poster"
              onLoad={() => {
                setHasLoaded(true);
              }}
            />

            {/* loader for image */}
            <div
              className={`${
                hasLoaded ? "hidden" : "block"
              } h-[102%] w-[102%] bg-white flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
            >
              <img src={loader} alt="" />
            </div>
          </div>

          {/* movie details */}
          <div className="flex flex-col items-start gap-[6px]">
            {/* year of release and region */}
            <div className="text-movieGray">
              Release date:
              <span data-testid="movie-release-date"> {props.date}</span>
            </div>

            {/* movie title */}
            <h3 data-testid="movie-title" className="font-bold">
              {props.title}
            </h3>

            {/* rating */}
            <div className="flex w-[100%] justify-between">
              {/* imdb rating */}
              <div className="flex gap-[4px] items-center">
                <img src={imdb} className="h-[100%]" alt="" />
                <p className="text-sm">{props.rating * 10}/100</p>
              </div>

              {/* rotten tomato rating */}
              <div className="flex gap-[4px] items-center">
                <img src={tomato} className="h-[100%]" alt="" />
                <p className="text-sm">{props.rating * 10}%</p>
              </div>
            </div>

            {/* movie genre */}
            <div className="text-movieGray font-bold">
              {props.genre}
            </div>
          </div>
        </div>
    </div>
  );
}
