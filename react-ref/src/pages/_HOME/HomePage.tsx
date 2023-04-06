import React, { useState } from "react";
import ReactLogo from "@/assets/react.svg";
import "./HomePage.css";
import Hamburger from "@/components/Hamburger";
import "react-icons/fa";
import { FaGithub, FaRegMoon, FaSearch, FaSun } from "react-icons/fa";
import navData from "@/data/navData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import SearchModal from "@/features/search/components/SearchModal";

export default function HomePage() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const themeToggle = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};
	// HAMBURGER LOGIC
	// const [hamOpen, setHamOpen] = useState(false);
	const [hamOpen, setHamOpen] = useLocalStorage("hamOpen", false);
	const [searchMenuOpen, setSearchMenuOpen] = useState<boolean>(false);

	const hamburgerMenuToggle = () => {
		if (!hamOpen) setSearchMenuOpen(false);
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	const [searchInput, setSearchInput] = useState<string>("");
	const closeSearch = () => {
		setSearchMenuOpen(false);
		// setSearchInput("");
	};
	const openSearch = () => {
		setHamOpen(false);
		setSearchMenuOpen(true);
	};
	// const searchMenuToggle = () => {
	// 	setSearchMenuOpen((prev) => !prev);
	// };

	const pathname = window.location.href;

	const handleHomeClick = (e: any) => {
		e.preventDefault();
		closeMenu();
		if (typeof window === "undefined") return;
		window.location.assign("/");
	};

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
						<a
							href="#"
							onClick={handleHomeClick}
						>
							<img
								src={ReactLogo}
								alt="React Logo"
							/>
						</a>
					</div>
					<div className="navWrapper">
						<div className="searchWrapper">
							<button>
								<FaSearch
									title="search open button"
									className="searchIcon"
									color={theme === "dark" ? "white" : "black"}
									size={20}
									onClick={openSearch}
								></FaSearch>
							</button>
							{searchMenuOpen && (
								<SearchModal
									// searchMenuOpen={searchMenuOpen}
									searchInput={searchInput}
									setSearchInput={setSearchInput}
									closeSearch={closeSearch}
								/>
							)}
						</div>
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
