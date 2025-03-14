import React, { useState } from "react";
import Style from "../NavBar/NavBar.module.css";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(search.trim()){
        navigate(`/search/${search}`);
    }
  };

  return (
    <div className={Style.navBar}>
      <div className={Style.logo}>
        <span>LOGO</span>
      </div>

      <div className={Style.optionsNavigations}>
        <ul>
          <li className={Style.list}>Home</li>
          <li className={Style.list}>About</li>
          <li className={Style.list}>Contact</li>
        </ul>
      </div>

      <div className={Style.searchMovies}>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Movies..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className={Style.submitButton} type="submit">Search</button>
        </form>
        
      </div>

    </div>
  );
}
export default NavBar;
