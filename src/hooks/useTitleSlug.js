import { useCallback } from "react";

export function useTitleSlug() {
	const titleToSlug = useCallback((title) => {
		return title
			.toLowerCase()
			.replace(/[^\w\s]/g, "")
			.replace(/\s+/g, "-")
			.trim();
	}, []);

	const slugToTitle = useCallback((slug) => {
		return slug
			.replace(/-/g, " ")
			.replace(/\b\w/g, (char) => char.toUpperCase());
	}, []);

	return { titleToSlug, slugToTitle };
}
