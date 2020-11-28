import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav style={navStyle}>
            <Link style={navStyleA} to="/">Home</Link> |
            <Link style={navStyleA} to="/about"> About</Link>
        </nav>
    )
}

const navStyle = {
    height: "3rem",
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
    padding: '10px',
};

const navStyleA = {
    textDecoration:"none",
};

export default Nav;