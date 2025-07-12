import React, { useEffect, useContext, useState } from 'react';
import BlogsContext from '../context/BlogsContext.js';
import { useLocation, useParams, useNavigate } from 'react-router';
import Prism from '../assets/prism.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { useTitleSlug } from '../hooks/useTitleSlug.js';
import Spinner from './Spinner.jsx';
import { toast } from 'react-toastify';
import '../styles/prism.css';
import '../styles/read-blog.css';

function ReadBlog() {
	const { setDocumentTitle, getPublishedBlogs, publishedBlogs, ctxLoading } =
		useContext(BlogsContext);
	const { slugToTitle, titleToSlug } = useTitleSlug();
	const { blogId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [blog, setBlog] = useState(location.state?.blog);

	useDocumentTitle(blog?.title);

	useEffect(() => {
		if (!blog) {
			if (blogId) {
				getPublishedBlogs().then((value) => {
					if (!value) {
						toast.error('error getting blogs');
						return;
					}
				});
			} else {
				navigate(`/`);
			}
		}

		if (titleToSlug(blog.title) !== blogId) {
			const foundBlog = publishedBlogs.find(
				(publishedBlog) => titleToSlug(publishedBlog.data.title) === blogId
			);
			if (foundBlog) {
				setBlog(foundBlog.data);
			} else {
				toast.error('Blog not found');
				navigate(`/`);
			}
		}

		window.addEventListener('scroll', handleScroll);
		Prism.highlightAll();

		document.title = blog?.title;

		return () => {
			document.title = 'Emilio Cliff - Software Engineer';
			setDocumentTitle(false);
			if (document.querySelector('.nav-blog__title-cont')) {
				document.querySelector('.nav-blog__title-cont').style.display =
					'none';
			}

			window.removeEventListener('scroll', handleScroll); // Clean up the listener
		};
	}, [location.pathname, blog]);

	useEffect(() => {
		if (blogId) {
			publishedBlogs.forEach((publishedBlog) => {
				if (titleToSlug(publishedBlog.data.title) === blogId) {
					setBlog(publishedBlog.data);
				}
			});
		}
	}, [ctxLoading, publishedBlogs]);

	const onScroll = () => {
		if (window.scrollY >= 500) {
			document.querySelector('.nav-blog__title-cont').style.opacity = '1';
			document.querySelector('.nav-blog__title-cont').style.display =
				'block';
			setDocumentTitle(true);
		} else {
			if (document.querySelector('.nav-blog__title-cont')) {
				document.querySelector('.nav-blog__title-cont').style.opacity =
					'0';
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

	if (ctxLoading) {
		return <Spinner />;
	}

	return (
		<div className="read__blog-container section">
			<p className="l-blog__content-category">{blog?.category}</p>
			<h1 className="l-blog__content-title">{blog?.title}</h1>
			<div className="read__blog-container-img">
				<img src={blog?.coverImage} alt="" />
			</div>
			<div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
		</div>
	);
}

export default ReadBlog;
