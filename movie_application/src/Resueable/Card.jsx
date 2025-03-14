import React from 'react'
import Style from "../Resueable/Card.module.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 


function Card({data}) {

    const navigate = useNavigate();

  return (
    <div className={Style.movies}>
        {
            data?.results?.map((item, index) => {
                    return (
                        
                        <div className={Style.movieBody} key={index}>
                            <div className={Style.image}  onClick={()=>navigate("/moviesDetails", {state:{movie:item}})}>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                                <p>{item.original_title}</p>
                                <p>{item.overview}</p>
                                <p><strong><FontAwesomeIcon icon={faStar} /></strong> {item.vote_average}</p>
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