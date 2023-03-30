import { stringToUrl } from "@/utils/stringToUrl";
import { useEffect } from "react";
import styles from "./Hamburger.module.css";

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
	// TODO: abstract further so function can take any callback function to execute when space/enter is pressed
	// function toggleOnEnter(event: React.KeyboardEvent): any {
	// 	const keyCode: string = event.code;
	// 	if (keyCode === "Enter" || keyCode == "Space") {
	// 		menuToggle(event);
	// 	}
	// 	// The event has not been handled, so return true
	// 	return true;
	// }

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
					{/* 
						for every section
								loop through headers
									add horizontal line
									list header title
										loop through topics
						*/}
					<div className={styles.sitemapNavWrapper}>
						{navData.sections.map((section: Section) => {
							const headers = section?.headers || [];
							if (!headers.length) return;

							const headerTopicRender = headers.map(
								(header: SectionHeader, i: number) => {
									let headerTitleUrlPath: string;
									if (header.title.includes(" "))
										headerTitleUrlPath = stringToUrl(header.title);
									else headerTitleUrlPath = header.title;

									return (
										<div key={`${headerTitleUrlPath}-WRAP`}>
											<div
												role="separator"
												className={styles.separator}
											></div>
											<ul key={`${headerTitleUrlPath}-UL`}>
												<li
													className={
														urlPath == `${section.title}/${headerTitleUrlPath}`
															? styles.hamburgerLinkActive
															: styles.hamburgerLink
													}
													key={`${headerTitleUrlPath}-LI`}
												>
													<h3
														key={`${headerTitleUrlPath}-header`}
														className={styles.sitemapNavHeader}
													>
														{header.title}
													</h3>
													{header.topics.map((topic: Topic) => {
														let topicTitleUrlPath: string;
														if (topic.title.includes(" "))
															topicTitleUrlPath = stringToUrl(topic.title);
														else topicTitleUrlPath = topic.title;

														return (
															<ul key={`${topicTitleUrlPath}-UL`}>
																<li
																	className={`${styles.sitemapNavTopic} ${
																		urlPath ==
																		`${section.title}/${headerTitleUrlPath}/${topicTitleUrlPath}`
																			? styles.hamburgerLinkActive
																			: styles.hamburgerLink
																	}`}
																	key={`${topicTitleUrlPath}-LI`}
																>
																	<a
																		href={`/${section.title}/${headerTitleUrlPath}/${topicTitleUrlPath}`}
																		onClick={() => closeMenu()}
																	>
																		{topic.title}
																	</a>
																</li>
															</ul>
														);
													})}
												</li>
											</ul>
										</div>
									);
								}
							);

							return headerTopicRender;
						})}
					</div>
				</nav>
			</aside>
		</div>
	);
}
