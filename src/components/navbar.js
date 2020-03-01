import React from 'react';
import { Link } from 'gatsby';
const Navbar = () => {
    return (
        <nav>
            <h1 className="logo">Asokumar Gurusamy</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="https://www.linkedin.com/in/asokumargurusamy/" target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
                <li><Link to="/">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;