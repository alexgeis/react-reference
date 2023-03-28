/// <reference types="vite/client" />

type SubTopic = {
	title: string;
};
type Topic = {
	title: string;
	subtopics: SubTopic[];
};
type SectionHeader = {
	title: string;
	topics: Topic[];
};
type Section = {
	title: string;
	headers: SectionHeader[];
};

type NavData = {
	sections: Section[];
};
