import React from "react";
import ReactLogo from "@/assets/react.svg";
import "./HomePage.css";

const styles: any = {
	App: {},
	container: {
		height: "100%",
		width: "100%",
	},
};

export default function HomePage() {
	return (
		<>
			{/* 
                HEADER
                Main content
                Footer
            */}
			<div style={styles.App}></div>
			<header style={styles.container}>
				{/* hamburger */}
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
		</>
	);
}
