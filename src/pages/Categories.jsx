import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import BlogsContext from "../context/BlogsContext.js";
import Blog from "../components/Blog";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import "../styles/blogs.css";

const Categories = () => {
	const { categoryBlogs, getBlogsByCategory, ctxLoading } =
		useContext(BlogsContext);
	const location = useLocation();
	const { category } = location.state;

	useEffect(() => {
		if (
			categoryBlogs.length === 0 ||
			categoryBlogs[0].data.category.toLowerCase() !== category.toLowerCase()
		) {
			getBlogsByCategory(category).then((value) => {
				if (!value) {
					toast.error("error getting blogs");
				}
			});
		}
	}, []);

	const blogElements = [];

	if (ctxLoading) {
		return <Spinner />;
	}

	const categoryMapBuild = {};

	for (let index = categoryBlogs.length - 1; index >= 0; index--) {
		const blog = categoryBlogs[index];
		const category = blog.data.category.toLowerCase();

		if (!categoryMapBuild[category]) {
			categoryMapBuild[category] = [];
		}

		blog.data.index = index;
		categoryMapBuild[category].push(blog.data);
	}

	for (let index = categoryBlogs.length - 1; index >= 0; index--) {
		const blog = categoryBlogs[index];

		if (index % 6 === 0) {
			// Large blog for every 6th index (0, 6, 12, ...)
			blogElements.push(
				<div className='post-card-large' key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>
			);
		} else if (index % 6 === 1 || index % 6 === 2) {
			// Medium blogs for index 1, 2 in the cycle
			blogElements.push(
				<div className='post-card' key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>
			);
		} else {
			// Small blogs for index 3, 4, 5 in the cycle
			blogElements.push(
				<div className='post-card-small' key={index}>
					<Blog
						blog={blog.data}
						currentBlogIndex={index}
						categories={categoryMapBuild}
					/>
				</div>
			);
		}
	}

	return (
		<>
			<div className='category__page section'>
				<h1>{category}</h1>
			</div>
			<div className='blog-container section'>{blogElements}</div>
		</>
	);
};

export default Categories;
