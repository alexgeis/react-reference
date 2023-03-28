import React, { useState } from "react";
import ReactLogo from "@/assets/react.svg";
import "./HomePage.css";
import Hamburger from "@/components/Hamburger";
import "react-icons/fa";
import { FaGithub, FaRegMoon, FaSun } from "react-icons/fa";
import navData from "@/data/navData";

export default function HomePage() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const themeToggle = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};
	// HAMBURGER LOGIC
	const [hamOpen, setHamOpen] = useState(false);

	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	const [searchInput, setSearchInput] = useState<string>("");

	const pathname = window.location.href;

	return (
		<>
			<div
				className="App"
				style={theme === "light" ? { backgroundColor: "white" } : {}}
			>
				<header className="headerWrapper">
					<div className="logoAndHamWrapper">
						<Hamburger
							pathname={pathname}
							navData={navData}
							hamOpen={hamOpen}
							menuToggle={hamburgerMenuToggle}
							closeMenu={closeMenu}
							theme={theme}
						/>
						<img
							src={ReactLogo}
							alt="React Logo"
						/>
					</div>
					<input
						type="search"
						placeholder="Search..."
						onChange={(e) => setSearchInput(e.target.value)}
						value={searchInput}
						// TODO: update search placeholder upon theme change - need to set a new class or use computed CSS values (can't be inline styled)
						style={
							theme === "light"
								? {
										backgroundColor: "#ff0",
										// color: "black",
										borderRadius: "10px",
								  }
								: { borderRadius: "10px" }
						}
					/>
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
							<FaSun
								className="lightToggle"
								title="light theme toggle"
								onClick={themeToggle}
								size={20}
							></FaSun>
						) : (
							<FaRegMoon
								color="black"
								className="darkToggle"
								title="dark theme toggle"
								onClick={themeToggle}
								size={20}
							></FaRegMoon>
						)}
						{/* github */}
						<a
							href="https://github.com/alexgeis/react-reference"
							target="_blank"
						>
							<FaGithub
								title="github logo"
								className="githubLink"
								color={theme === "dark" ? "white" : "black"}
								size={20}
							></FaGithub>
						</a>
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
