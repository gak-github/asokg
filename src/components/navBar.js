import React from 'react';
import { Link } from 'gatsby';
const Navbar = () => {
    return (
        <nav>
            <h1 class="logo">Asokumar Gurusamy</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;