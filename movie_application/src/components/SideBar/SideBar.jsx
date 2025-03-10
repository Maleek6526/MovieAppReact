import React from 'react'
import Style from "../SideBar/SideBar.module.css"
import { useNavigate } from 'react-router-dom'

function SideBar() {

    const navigate = useNavigate();
  return (
    <div className={Style.sideBar}>
      <ul className={Style.options}>
        <li onClick ={()=>navigate("/topRatedMovies")}>Top rated</li>
        <li onClick ={()=>navigate("/topRatedMovies")}>Popular movies</li>
        <li onClick ={()=>navigate("/upcomingMovies")} >UpComing soon</li>
        <li onClick ={()=>navigate("/nowPlayingMovies")} >Now playing</li>
      </ul>
    </div>
  )
}

export default SideBar
