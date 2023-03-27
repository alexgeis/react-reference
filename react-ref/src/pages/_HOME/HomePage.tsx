import React from "react";
import ReactLogo from "@/assets/react.svg";

const styles: any = {
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
			<header style={styles.container}>
				{/* hamburger */}
				<img
					src={ReactLogo}
					alt="React Logo"
				/>
				{/* <div>SEARCH</div> */}
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
					{/* light / dark toggle */}
					{/* <img src="" alt="GitHub Repository Link" /> */}
				</nav>
			</header>
		</>
	);
}
