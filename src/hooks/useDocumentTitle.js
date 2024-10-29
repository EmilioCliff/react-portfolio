import { useEffect } from "react";

export const useDocumentTitle = (title) => {
	useEffect(() => {
		const swapLinks = document.querySelector(".nav-blog__title");
		swapLinks.innerHTML = "- " + title;
	}, [title]);
};
