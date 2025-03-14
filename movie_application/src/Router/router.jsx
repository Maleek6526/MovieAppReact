import { createBrowserRouter } from "react-router-dom";
import TopRatedMovies from "../movie/TopRatedMovies.jsx";
import UpcomingMovies from "../movie/UpcomingMovies.jsx";
import NowPlayingMovies from "../movie/NowPlayingMovies.jsx";
import PopularMovies  from "../movie/PopularMovies.jsx";
import Layout from "../layout/layout"
import Search from "../movie/Search.jsx"
import MovieDetails from "../movie/MovieDetails.jsx"

const BrowserRouter = createBrowserRouter([

    {path:"/",
    element:<Layout/>,

    children:[{
        path:"/topRatedMovies",
        element:<TopRatedMovies/>
    }, 
    
    {
        path:"/upcomingMovies",
        element: <UpcomingMovies/>
    }, 

    {
        path:"/popularMovies",
        element: <PopularMovies/>
    }, 

    {
        path:"/moviesDetails",
        element: <MovieDetails/>
    }, 

    {
        path:"/search/:query",
        element: <Search/>
    }, 

    {
        path:"/nowPlayingMovies",
        element: <NowPlayingMovies/>
    }]

    }
])

export default BrowserRouter;