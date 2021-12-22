import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Redux App</Link>
            <div>
                <Link to="/contact/add" className="btn btn-sm btn-warning">Create Contact</Link>
                <Link to="/allPosts" className="btn btn-sm btn-info ms-1">All Posts</Link>
            </div>
        </div>
        </nav>
    )
}

export default NavBar
