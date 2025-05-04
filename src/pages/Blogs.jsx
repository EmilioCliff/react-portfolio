import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogsContext from '../context/BlogsContext.js';
import Blog from '../components/Blog';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import '../styles/blogs.css';
import Navbar from '../components/Navbar.jsx';

const BlogLayout = () => {
	const { getPublishedBlogs, publishedBlogs, ctxLoading } =
		useContext(BlogsContext);
	const [searchParams] = useSearchParams();
	const blogId = searchParams.get('blogId');

	useEffect(() => {
		if (publishedBlogs.length === 0) {
			getPublishedBlogs().then((value) => {
				if (!value) {
					toast.error('error getting blogs');
				}
			});
		}

		if (blogId) {
			const interval = setInterval(() => {
				const blogElement = document.getElementById(blogId);
				if (blogElement) {
					blogElement.click();
					clearInterval(interval);
				}
			}, 100);
		}
	}, [blogId]);

	const blogElements = [];

	const categoryMapBuild = {};

	for (let index = publishedBlogs.length - 1; index >= 0; index--) {
		const blog = publishedBlogs[index];
		const category = blog.data.category.toLowerCase();

		if (!categoryMapBuild[category]) {
			categoryMapBuild[category] = [];
		}

		blog.data.index = index;
		categoryMapBuild[category].push(blog.data);
	}

	for (let index = publishedBlogs.length - 1; index >= 0; index--) {
		const blog = publishedBlogs[index];

		if (index % 6 === 0) {
			// Large blog for every 6th index (0, 6, 12, ...)
			blogElements.push(
				<div className="post-card-large" key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>,
			);
		} else if (index % 6 === 1 || index % 6 === 2) {
			// Medium blogs for index 1, 2 in the cycle
			blogElements.push(
				<div className="post-card" key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>,
			);
		} else {
			// Small blogs for index 3, 4, 5 in the cycle
			blogElements.push(
				<div className="post-card-small" key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>,
			);
		}
	}

	if (ctxLoading) {
		return <Spinner />;
	}

	return (
		<div>
			{/* <Navbar /> */}
			<div className="hero-banner">
				<h1>Emilio Cliff</h1>
				<h2>
					A developer’s journal of tools, techniques, and trade-offs
				</h2>
			</div>
			<div className="blog-container section">{blogElements}</div>
		</div>
	);
};

export default BlogLayout;
