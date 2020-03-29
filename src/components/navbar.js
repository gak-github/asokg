import React from 'react';
import { Link } from 'gatsby';
import linkedIn from '../images/linked-in-small.png';
import github from '../images/github-32px.png';


const Navbar = () => {
    return (
        <nav>
            <h1 className="logo">Asokumar Gurusamy</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li id="linked-in-li"><a href="https://www.linkedin.com/in/asokumargurusamy/" target="_blank" rel="noopener noreferrer" ><img src={linkedIn} alt="linkedIn" /></a></li>
                <li id="git-logo"><a href="https://www.github.com/gak-github/" target="_blank" rel="noopener noreferrer" ><img src={github} alt="github" /></a></li>            
            </ul>
        </nav>
    );
};

export default Navbar;