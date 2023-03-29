export const stringToUrl = (str: string): string => {
	const whitespaceRegex = /\s/g;
	return str.replace(whitespaceRegex, "-");
};
