import styles from "./Hamburger.module.css";

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
										pathname == `/${section.title}`
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
								return (
									<>
										<div
											role="separator"
											className="separator"
										></div>
										<ul>
											<li
												className={
													pathname == `/${section.title}/${header.title}`
														? styles.hamburgerLinkActive
														: styles.hamburgerLink
												}
												key={header.title}
											>
												<h3>
													<a href={`/${section.title}/${header.title}`}>
														{header.title}
													</a>
												</h3>
												{header.topics.map((topic: Topic) => {
													return (
														<ul>
															<li
																className={
																	pathname ==
																	`/${section.title}/${header.title}/${topic.title}`
																		? styles.hamburgerLinkActive
																		: styles.hamburgerLink
																}
																key={topic.title}
															>
																<a
																	href={`/${section.title}/${header.title}/${topic.title}`}
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
