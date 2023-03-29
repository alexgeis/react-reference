import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import Hamburger from "@/components/Hamburger";

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe("Hamburger Menu Component", () => {
	const menuToggle = jest.fn();
	const closeMenu = jest.fn();
	const testNavData = {
		sections: [
			{
				title: "section1",
				headers: [
					{
						title: "section1 header1",
						topics: [
							{
								title: "section1 header1 topic1",
								subtopics: [{ title: "section1 header1 topic1 subtopic1" }],
							},
						],
					},
				],
			},
		],
	};
	const pathname = "http://localhost:5173/";

	const renderHelper = (hamOpen: boolean, theme: "light" | "dark") => {
		return render(
			<Hamburger
				pathname={pathname}
				navData={testNavData}
				menuToggle={menuToggle}
				closeMenu={closeMenu}
				hamOpen={hamOpen}
				theme={theme}
			/>
		);
	};

	// Test 1
	test("Hamburger Rendering", () => {
		renderHelper(true, "dark");
		const hamburger = screen.getByTestId("hamburger");
		expect(hamburger).toBeInTheDocument();
	});

	// Test 2
	text("Hide hamburger when hamOpen state is set to false", () => {
		renderHelper(false, "dark");
	});
});

export {};
