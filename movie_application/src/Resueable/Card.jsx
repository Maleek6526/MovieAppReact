import React from 'react'
import Style from "../Resueable/Card.module.css";


function Card({data}) {
  return (
    <div className={Style.movies}>
        {
            data?.results?.map((item, index) => {
                    return (
                        
                        <div className={Style.movieBody}>
                            <div key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                                <p>{item.original_title}</p>
                                <p>{item.overview}</p>
                                <p>{item.vote_average}</p>
                            </div>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}

export default Card