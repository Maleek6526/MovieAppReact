import React from 'react'
import { useGetPopularMoviesQuery } from '../service/movie_API'
import Card from "../Resueable/Card.jsx"
import style from "./movies.module.css"


function PopularMovies() {

    const {data} = useGetPopularMoviesQuery();
    console.log(data);


  return (
    <div className={style.container}>
        <Card data={data} />
    </div>
  )
}

export default PopularMovies