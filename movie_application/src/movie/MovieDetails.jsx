import { useLocation } from "react-router-dom";
import style from "./movieDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 


function MovieDetails() {


  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <>
    <div className={style.movieDetails}>
      <h1>{movie.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p><strong><FontAwesomeIcon icon={faStar} /></strong> {movie.vote_average}</p>
      <p>{movie.title}</p>

    </div>


    </>

  );
}

export default MovieDetails;