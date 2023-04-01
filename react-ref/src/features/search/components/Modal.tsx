import { useState } from "react";
import styles from "./Modal.module.css";
import { FaRegStar, FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// No on save - user does not submit anything but rather clicks on links in search results
// no active item / set active item - nothing to submit

export default function Modal({}) {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [searchInput, setSearchInput] = useState<string>("");

	const toggle = () => {
		setModalOpen((modalOpen) => !modalOpen);
	};

	const handleSearchInput = (e: any) => {
		const value = e.target.value;
		setSearchInput(value);
	};

	return (
		<div
			className={styles.modalOverlay}
			onClick={toggle}
		>
			<div
				className={styles.modalContentContainer}
				onClick={(e: any) => {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					return false;
				}}
			>
				<header className={styles.docSearchBar}>
					<form
						action=""
						className={styles.docSearchForm}
					>
						<label
							htmlFor="docsearch-input"
							className={styles.docSearchIconLabel}
							id="docsearch-label"
						>
							<FaSearch
								size={15}
								color={"black"}
								className={styles.docSearchIcon}
							></FaSearch>
						</label>
						<div
							className={styles.docSearchLoadingIndicator}
							style={{ display: "none" }}
						></div>
						<input
							type="search"
							name="docsearch-input"
							id="docsearch-input"
							aria-labelledby="docsearch-label"
							maxLength={64}
							value={searchInput}
							onChange={handleSearchInput}
							placeholder="Search site"
							aria-autocomplete="both"
							autoCapitalize="off"
							autoComplete="off"
							autoCorrect="off"
							enterKeyHint="go"
							spellCheck="false"
						/>
						<button
							type="reset"
							title="Clear the query"
							className={styles.docSearchReset}
							style={{ display: "none" }}
						>
							{/* FaSistrix */}
							{/* FaCaretDown */}
							{/* FaChevronLeft */}
							<AiOutlineClose
								size={20}
								color={"white"}
							></AiOutlineClose>
						</button>
					</form>
				</header>
				<div className={styles.docSearchDropdown}>
					<div className={styles.docSearchDropdownContainer}>
						<section className={styles.docSearchResults}>
							<div className={styles.docSearchResultSource}>Recent</div>
							<ul
								role="listbox"
								aria-aria-labelledby="docsearch-label"
								id="docsearch-list"
							>
								<li
									className={styles.docSearchItem}
									id="docsearch-item-$" // TODO:
									role="option"
									aria-selected={false} // TODO:
								>
									<a href="">
										<div className={styles.docSearchItemContainer}>
											<div className={styles.docSearchItemIcon}></div>
											<div className={styles.docSearchItemContentWrapper}>
												<span className={styles.docSearchItemTitle}>
													Example
												</span>
												<span className={styles.docSearchItemPath}>
													sub header example
												</span>
											</div>
											<div className={styles.docSearchItemAction}>
												<button
													className={styles.docSearchItemActionBtn}
													title="Save this search"
												>
													<FaRegStar
														color="white"
														size={18}
													></FaRegStar>
												</button>
											</div>
											<div className={styles.docSearchItemAction}>
												<button
													className={styles.docSearchItemActionBtn}
													title="Remove this search from history"
												>
													<AiOutlineClose
														color="white"
														size={18}
													></AiOutlineClose>
												</button>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</section>
						<section className={styles.docSearchResults}>
							<div className={styles.docSearchResultSource}>Favorites</div>
							<ul
								role="listbox"
								aria-aria-labelledby="docsearch-label"
								id="docsearch-list"
							>
								<li
									className={styles.docSearchItem}
									id="docsearch-item-$" // TODO:
									role="option"
									aria-selected={false} // TODO:
								>
									<a href="">
										<div className={styles.docSearchItemContainer}>
											<div className={styles.docSearchItemIcon}></div>
											<div className={styles.docSearchItemContentWrapper}>
												<span className={styles.docSearchItemTitle}>
													Example
												</span>
												<span className={styles.docSearchItemPath}>
													sub header example
												</span>
											</div>
											<div className={styles.docSearchItemAction}>
												<button
													className={styles.docSearchItemActionBtn}
													title="Remove this search from favorites"
												>
													<AiOutlineClose
														color="white"
														size={18}
													></AiOutlineClose>
												</button>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
				<div className={styles.footer}>
					<span>hi there</span>
					<ul className={styles.docSearchCommans}>
						<li>
							<span className={styles.docSearchCommandsKey}>
								<span>key icon</span>
							</span>
							<span className={styles.docSearchLabel}>key label</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
