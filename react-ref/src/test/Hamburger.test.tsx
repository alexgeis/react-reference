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
	render(
		<Hamburger
			pathname={"http://localhost:5173/"}
			navData={testNavData}
			hamOpen={true}
			menuToggle={menuToggle}
			closeMenu={closeMenu}
			theme={"dark"}
		/>
	);
	const hamburger = screen.getByTestId("hamburger");

	// Test 1
	test("Hamburger Rendering", () => {
		expect(hamburger).toBeInTheDocument();
	});
});

export {};
