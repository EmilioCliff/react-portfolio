import React, { useEffect, useContext } from "react";
import BlogsContext from "../context/BlogsContext.js";
import {
	useLocation,
	useParams,
	useNavigate,
	createSearchParams,
} from "react-router";
import Prism from "../assets/prism.js";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { useTitleSlug } from "../hooks/useTitleSlug.js";
import "../styles/prism.css";
import "../styles/read-blog.css";

function ReadBlog() {
	const { setDocumentTitle, getBlogByTitle } = useContext(BlogsContext);
	const { slugToTitle } = useTitleSlug();
	const { blogId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	let blog = location.state?.blog;

	useDocumentTitle(blog?.title);

	useEffect(() => {
		if (!blog) {
			navigate(`/blogs?blogId=${blogId}`);
		}

		window.addEventListener("scroll", handleScroll);
		Prism.highlightAll();

		document.title = blog?.title;

		return () => {
			document.title = "Emilio Cliff - Software Engineer";
			setDocumentTitle(false);
			if (document.querySelector(".nav-blog__title-cont")) {
				document.querySelector(".nav-blog__title-cont").style.display = "none";
			}

			window.removeEventListener("scroll", handleScroll); // Clean up the listener
		};
	}, [location.pathname, blog]);

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

	return (
		<div className='read__blog-container section'>
			<p className='l-blog__content-category'>{blog?.category}</p>
			<h1 className='l-blog__content-title'>{blog?.title}</h1>
			<div className='read__blog-container-img'>
				<img src={blog?.coverImage} alt='' />
			</div>
			<div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
		</div>
	);
}

export default ReadBlog;
