import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import {useParams} from "react-router-dom";

export default function Movies(props) {
    const { value } = useParams();
    return (
        <div className="font-main flex flex-col gap-[100px] w-[100%] justify-center items-center">
            <Hero>
                <Header />
            </Hero>
            <MovieList value={value} />
        </div>
    );
}
