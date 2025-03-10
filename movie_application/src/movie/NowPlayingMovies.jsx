import React from 'react'
import { useGetNowPlayingMoviesQuery } from '../service/movie_API'
import Card from "../Resueable/Card.jsx"
import style from "./movies.module.css"


function NowPlayingMovies() {

        const {data} = useGetNowPlayingMoviesQuery();
        console.log(data);
  return (
    <div className={style.container}>
        <Card data={data} />
    </div>
  )
}

export default NowPlayingMovies
