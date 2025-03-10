import React from 'react'
import { useGetTopRatedMoviesQuery } from '../service/movie_API'
import Card from "../Resueable/Card.jsx"
import style from "./movies.module.css"


function movie() {

  
      const {data} = useGetTopRatedMoviesQuery();
      console.log(data);

  return (
    <div className={style.container}>
        <Card data={data} />
    </div>
  )
}

export default movie
