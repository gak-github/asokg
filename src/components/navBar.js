import React from 'react';
import { Link } from 'gatsby';

const Navbar = ()=> {
    return (
        <nav>
            <h1 class="logo">Asokumar Gurusamy</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;