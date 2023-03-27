import React, { useState } from "react";
import ReactLogo from "@/assets/react.svg";
import "./HomePage.css";
import Hamburger from "@/components/Hamburger";

export default function HomePage() {
	// HAMBURGER LOGIC
	const [hamOpen, setHamOpen] = useState(false);

	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	const pages = ["about", "listen", "contact"];
	const pathname = window.location.href;
	return (
		<>
			<div className="App">
				<header className="headerWrapper">
					{/* hamburger */}
					<Hamburger
						pathname={pathname}
						pages={pages}
						hamOpen={hamOpen}
						menuToggle={hamburgerMenuToggle}
						closeMenu={closeMenu}
					/>
					<div className="logoSearchWrapper">
						<img
							src={ReactLogo}
							alt="React Logo"
						/>
						<div>SEARCH</div>
					</div>
					<div className="navWrapper">
						<nav>
							<ul>
								<li>
									<a href="link1.html">link 1</a>
								</li>
								<li>
									<a href="link2.html">link 2</a>
								</li>
								<li>
									<a href="link3.html">link 3</a>
								</li>
								<li>
									<a href="link4.html">link 4</a>
								</li>
							</ul>
						</nav>

						{/* light / dark toggle */}
						<img
							src=""
							alt="Theme Toggle"
						/>
						{/* github */}
						<img
							src=""
							alt="GitHub Repository Link"
						/>
					</div>
				</header>

				<main>
					<section className="hero"></section>
				</main>

				<footer className="footer">Footer</footer>
			</div>
		</>
	);
}
