import React from 'react'

// Styles
import './NavBar.css';

// Routing
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div className="navbar">

            <div className="menu-container">
                
                <NavLink to="/">
                    <img src="/movies-logo.png" alt="logo" />
                </NavLink>

                <div className="menu-items">

                    <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
                        Home
                    </NavLink>

                    <NavLink exact to="/tv-shows" activeStyle={{ fontWeight: "bold" }}>
                        TV Shows
                    </NavLink>

                    <NavLink exact to="/movies" activeStyle={{ fontWeight: "bold" }}>
                        Movies
                    </NavLink>

                </div>

            </div>

        </div>

    )
}

export default NavBar
