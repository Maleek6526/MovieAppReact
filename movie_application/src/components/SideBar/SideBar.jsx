import React from 'react'
import Style from "../SideBar/SideBar.module.css"
import { useNavigate } from 'react-router-dom'

function SideBar() {

    const navigate = useNavigate();
  return (
    <div className={Style.sideBar}>
      <ul className={Style.options}>
        <li onClick ={()=>navigate("/topRatedMovies")} className={Style.lists}>Top rated</li>
        <li onClick ={()=>navigate("/popularMovies")} className={Style.lists}>Popular movies</li>
        <li onClick ={()=>navigate("/upcomingMovies")}  className={Style.lists}>UpComing soon</li>
        <li onClick ={()=>navigate("/nowPlayingMovies")}  className={Style.lists}>Now playing</li>
      </ul>
    </div>
  )
}

export default SideBar
