import React, { useEffect, useContext } from "react";
import BlogsContext from "../context/BlogsContext.js";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import Prism from "../assets/prism.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import "../styles/prism.css";
import "../styles/read-blog.css";

function ReadBlog() {
	const { setDocumentTitle } = useContext(BlogsContext);
	const location = useLocation();
	const blog = location.state?.blog;

	useDocumentTitle(blog.title);

	const onScroll = () => {
		if (window.scrollY >= 500) {
			document.querySelector(".nav-blog__title-cont").style.opacity = "1";
			document.querySelector(".nav-blog__title-cont").style.display = "block";
			setDocumentTitle(true);
		} else {
			if (document.querySelector(".nav-blog__title-cont")) {
				document.querySelector(".nav-blog__title-cont").style.opacity = "0";
			}

			setDocumentTitle(false);
		}
	};

	let ticking = false;

	const handleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				onScroll();
				ticking = false;
			});
			ticking = true;
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		Prism.highlightAll();

		return () => {
			setDocumentTitle(false);
			if (document.querySelector(".nav-blog__title-cont")) {
				document.querySelector(".nav-blog__title-cont").style.display = "none";
			}

			window.removeEventListener("scroll", handleScroll); // Clean up the listener
		};
	}, [location.pathname]);

	return (
		<div className='read__blog-container section'>
			<Helmet>
				<title>{blog.title}</title>
			</Helmet>
			<div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
		</div>
	);
}

export default ReadBlog;
