import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import linkedIn from '../images/linked-in-small.png';
import github from '../images/github-32px.png';

const Navbar = () => {
	return (
		<nav>
			<div className="navbar">
				<h1>
					<Link href="/">Asokumar Gurusamy</Link>
				</h1>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li id="linked-in-li">
						<a
							href="https://www.linkedin.com/in/asokumargurusamy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={linkedIn} alt="linkedIn" />
						</a>
					</li>
					<li id="git-logo">
						<a
							href="https://www.github.com/gak-github/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={github} alt="github" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
