import { stringToUrl } from "@/utils/stringToUrl";
import styles from "./Hamburger.module.css";
console.log(stringToUrl("hello there sonny"));

type hamburgerProps = {
	pathname: string | null;
	navData: NavData;
	hamOpen: boolean;
	menuToggle: React.MouseEventHandler<HTMLDivElement>;
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

	return (
		<div className={styles.hamburgerWrapper}>
			<div
				// className={`${styles.hamburgerBox} ${
				// 	hamOpen ? styles.hamburgerBoxActive : ""
				// }`}
				className={styles.hamburgerBox}
				onClick={menuToggle}
			>
				<div
					className={`${hamOpen ? styles.hamburgerLineOne : ""}`}
					style={
						theme === "light"
							? { backgroundColor: "black", color: "black" }
							: {}
					}
				></div>
				<div
					className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}
					style={
						theme === "light"
							? { backgroundColor: "black", color: "black" }
							: {}
					}
				></div>
				<div
					className={`${hamOpen ? styles.hamburgerLineThree : ""}`}
					style={
						theme === "light"
							? { backgroundColor: "black", color: "black" }
							: {}
					}
				></div>
			</div>
			<aside
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

							const headerTopicRender = headers.map((header: SectionHeader) => {
								let headerTitleUrlPath: string;
								if (header.title.includes(" "))
									headerTitleUrlPath = stringToUrl(header.title);
								else headerTitleUrlPath = header.title;

								return (
									<>
										<div
											role="separator"
											className={styles.separator}
										></div>
										<ul>
											<li
												className={
													urlPath == `${section.title}/${headerTitleUrlPath}`
														? styles.hamburgerLinkActive
														: styles.hamburgerLink
												}
												key={headerTitleUrlPath}
											>
												<h3
													key={`${headerTitleUrlPath}-header`}
													className={styles.sitemapNavHeader}
												>
													{header.title}
													{/* <a
														href={`/${section.title}/${headerTitleUrlPath}`}
														onClick={() => closeMenu()}
													>
													</a> */}
												</h3>
												{header.topics.map((topic: Topic) => {
													let topicTitleUrlPath: string;
													if (topic.title.includes(" "))
														topicTitleUrlPath = stringToUrl(topic.title);
													else topicTitleUrlPath = topic.title;

													return (
														<ul>
															<li
																className={`${styles.sitemapNavTopic} ${
																	urlPath ==
																	`${section.title}/${headerTitleUrlPath}/${topicTitleUrlPath}`
																		? styles.hamburgerLinkActive
																		: styles.hamburgerLink
																}`}
																key={topicTitleUrlPath}
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
									</>
								);
							});

							return <>{headerTopicRender}</>;
						})}
					</div>
				</nav>
			</aside>
		</div>
	);
}
