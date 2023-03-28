export const fuzzySearch = (str: string) => {
	return searchData.filter((fruit) => {
		// If our first case is met, immediately return
		if (fruit.startsWith(str)) return true;

		let diffs = 0;

		// Compare + keep track of differences between input + fruit
		for (let i = 0; i < str.length; i++) {
			if (str[i] === fruit[i]) continue;
			diffs++;
		}

		// If we have more than one difference, it doesn't meet case #2
		return !(diffs > 1);
	});
};
// Test
const searchData = [
	"apple",
	"apricot",
	"banana",
	"pear",
	"mango",
	"cherry",
	"tomato",
];

const testCases = ["ap", "app", "appl", "pan", "bp"];

for (const testCase of testCases) {
	console.log(fuzzySearch(testCase));
}
