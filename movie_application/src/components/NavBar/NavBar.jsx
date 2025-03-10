import React from 'react'
import Style from "../NavBar/NavBar.module.css"

function NavBar() {
  return (
    <div className={Style.navBar}>
        <div className={Style.logo}>
            <span>LOGO</span>
        </div>

        <div className={Style.optionsNavigations}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Movies</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className={Style.searchMovies}>
            <input type="text" placeholder="Search Movies..." />
        </div>
      
    </div>
  )
}

export default NavBar
