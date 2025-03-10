import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import SideBar from "../components/SideBar/SideBar.jsx"
import styles from "./laylout.module.css"

import React from 'react'

function layout() {
    return (
        <div>
            <NavBar />            
            <main className={styles.main}>
                <SideBar />
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default layout