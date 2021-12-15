import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Contact App</Link>
            <div>
                <Link to="/contact/add" className="btn btn-warning">Create Contact</Link>
            </div>
        </div>
        </nav>
    )
}

export default NavBar
