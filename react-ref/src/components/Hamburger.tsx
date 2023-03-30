import { stringToUrl } from "@/utils/stringToUrl";
import { useEffect } from "react";
import styles from "./Hamburger.module.css";
import SitemapNavHam from "./SitemapNav";

type hamburgerProps = {
	pathname: string | null;
	navData: NavData;
	hamOpen: boolean;
	// TODO: fix this event handler type: must handle mouse clicking button and
	// keyboard using enter/space to active button
	// menuToggle:
	// 	| React.MouseEventHandler<HTMLButtonElement>
	// 	| React.KeyboardEventHandler<HTMLButtonElement>;
	menuToggle: any;
	closeMenu: any;
	theme: "dark" | "light";
};

export default function Hamburger({
	pathname,
	navData,
	hamOpen,
	menuToggle,
	closeMenu,
	theme,
}: hamburgerProps) {
	if (pathname?.includes("localhost")) console.log("local environment");

	const urlPath = pathname?.split("/").slice(3).join("/");

	const handleHamMenuFocus = (e: any) => {};

	const themeStyle = {
		theme: (theme: string): any => ({
			backgroundColor: theme === "light" ? "black" : "",
			color: theme === "light" ? "black" : "",
		}),
	};

	return (
		<div
			className={styles.hamburgerWrapper}
			data-testid="hamburger"
			role="navigation"
			aria-label="Main menu"
		>
			<button
				// className={`${styles.hamburgerBox} ${
				// 	hamOpen ? styles.hamburgerBoxActive : ""
				// }`}
				className={styles.hamburgerBox}
				onClick={menuToggle}
				// onKeyUp={toggleOnEnter}
				aria-label={"Open the menu"}
				aria-expanded={hamOpen}
				onFocus={handleHamMenuFocus}
			>
				<div
					className={`${hamOpen ? styles.hamburgerLineOne : ""}`}
					style={themeStyle.theme(theme)}
					aria-hidden={"true"}
				></div>
				<div
					className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}
					style={themeStyle.theme(theme)}
					aria-hidden={"true"}
				></div>
				<div
					className={`${hamOpen ? styles.hamburgerLineThree : ""}`}
					style={themeStyle.theme(theme)}
					aria-hidden={"true"}
				></div>
			</button>
			<aside
				data-testid="hamburger-active-menu"
				// className={hamOpen ? styles.hamburgerMenuActive : styles.hamburgerMenu}
				className={`${hamOpen ? styles.hamburgerMenuActive : ""} ${
					styles.hamburgerMenu
				}`}
			>
				<nav className={styles.navWrapper}>
					<ul className={styles.sectionNavWrapper}>
						{navData.sections.map((section: Section, i: number) => {
							return (
								<li
									className={
										urlPath == `${section.title}`
											? styles.sectionLinkActive
											: styles.sectionLink
									}
									key={i}
								>
									<a
										href={`${section.title}`}
										onClick={() => closeMenu()}
									>
										{section.title.toUpperCase()}
									</a>
								</li>
							);
						})}
					</ul>
					<SitemapNavHam
						navData={navData}
						urlPath={urlPath}
						closeMenu={closeMenu}
					/>
				</nav>
			</aside>
		</div>
	);
}
