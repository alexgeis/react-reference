import React, { useState } from "react";
import ReactLogo from "@/assets/react.svg";
import "./HomePage.css";
import Hamburger from "@/components/Hamburger";
import "react-icons/fa";
import { FaGithub, FaRegMoon, FaSun } from "react-icons/fa";

export default function HomePage() {
	const [theme, setTheme] = useState<string>("dark");

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
					<div className="logoAndHamWrapper">
						<Hamburger
							pathname={pathname}
							pages={pages}
							hamOpen={hamOpen}
							menuToggle={hamburgerMenuToggle}
							closeMenu={closeMenu}
						/>
						<img
							src={ReactLogo}
							alt="React Logo"
						/>
					</div>
					<div>SEARCH</div>
					<div className="navWrapper">
						<nav className="nav">
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
						{theme === "dark" ? (
							<FaSun title="light theme toggle"></FaSun>
						) : (
							<FaRegMoon title="dark theme toggle"></FaRegMoon>
						)}
						{/* github */}
						<FaGithub
							title="github logo"
							color={theme === "dark" ? "white" : "black"}
						></FaGithub>
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
