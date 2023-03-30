import { stringToUrl } from "./stringToUrl";
import styles from "@/components//Hamburger.module.css";

export const renderNavSitemap = (array: NavData, currentUrl: string) => {
	// desctructure sections
	const { sections } = array; // Section[]

	const sectionRender = sections.map((section: Section) => {
		// check for empty headers array
		const headers = section?.headers || [];
		if (!headers.length) return;

		const headerRender = headers.map((header: SectionHeader) => {
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
								currentUrl == `${section.title}/${headerTitleUrlPath}`
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
												currentUrl ==
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
		});
	});
};
