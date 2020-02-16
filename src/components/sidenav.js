import React from 'react';
import Images from './image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const SideNav = () => {
    const images = Images();
    return (
        <div className="sidenav">
            <Img fixed={images.fixed} className="profile-img" alt="Profile picture" /> 
            <ul>
                <li><Link className="link" to="/">Skills</Link></li>
                <li><Link className="link" to="/">Experience</Link></li>
                <li><Link className="link" to="/">Blog</Link></li>
            </ul>
        </div>
    )
}

export default SideNav;
