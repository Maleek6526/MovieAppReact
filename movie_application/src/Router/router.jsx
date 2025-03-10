import { createBrowserRouter } from "react-router-dom";
import TopRatedMovies from "../movie/TopRatedMovies.jsx";
import UpcomingMovies from "../movie/UpcomingMovies.jsx";
import NowPlayingMovies from "../movie/NowPlayingMovies.jsx";
import Layout from "../layout/layout"

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
        path:"/nowPlayingMovies",
        element: <NowPlayingMovies/>
    }]

    }
])

export default BrowserRouter;