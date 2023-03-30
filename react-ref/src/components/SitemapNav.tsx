import { stringToUrl } from "@/utils/stringToUrl";
import styles from "./Hamburger.module.css";

type SitemapNav = {
	navData: NavData;
	urlPath: string | undefined;
	closeMenu: () => void;
};
export default function SitemapNavHam({
	navData,
	urlPath,
	closeMenu,
}: SitemapNav) {
	return (
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
	);
}
