import React from 'react'
import { useGetUpComingMoviesQuery } from '../service/movie_API'
import Card from "../Resueable/Card.jsx"
import style from "./movies.module.css"


function UpcomingMovies() {

    const {data} = useGetUpComingMoviesQuery();
    console.log(data);


  return (
    <div className={style.container}>
        <Card data={data} />
    </div>
  )
}

export default UpcomingMovies
