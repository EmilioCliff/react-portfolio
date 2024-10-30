import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../context/BlogsContext";
import { Link, useLocation } from "react-router-dom";
import Blog from "./Blog";
import { toast } from "react-toastify";
import { useTitleSlug } from "../hooks/useTitleSlug";

function Footer() {
	const { publishedBlogs, getPublishedBlogs } = useContext(BlogsContext);
	const [footerPrevBlog, setFooterPrevBlog] = useState(null);
	const [footerNextBlog, setFooterNextBlog] = useState(null);
	const [relatedBlogs, setRelatedBlogs] = useState(null);
	const location = useLocation();
	const { titleToSlug } = useTitleSlug();

	let {
		currentBlogIndex = 0,
		categories = null,
		blog = null,
	} = location.state || {};

	useEffect(() => {
		if (location.pathname.startsWith("/blogs/") && blog) {
			if (publishedBlogs.length === 0) {
				getPublishedBlogs().then((value) => {
					if (!value) {
						toast.error("error getting blogs");
					}
				});
			}

			const blogCategory = blog.category.toLowerCase();

			const prevIndex = currentBlogIndex > 0 ? currentBlogIndex - 1 : null;
			const nextIndex =
				currentBlogIndex < publishedBlogs.length - 1
					? currentBlogIndex + 1
					: null;

			const prevBlog = prevIndex !== null ? publishedBlogs[prevIndex] : null;
			const nextBlog = nextIndex !== null ? publishedBlogs[nextIndex] : null;

			if (nextBlog) {
				setFooterNextBlog(
					<div className='post-card-small'>
						<Blog
							blog={nextBlog.data}
							currentBlogIndex={nextIndex}
							categories={categories}
						/>
					</div>
				);
			}
			if (prevBlog) {
				setFooterPrevBlog(
					<div className='post-card-small'>
						<Blog
							blog={prevBlog.data}
							currentBlogIndex={prevIndex}
							categories={categories}
						/>
					</div>
				);
			}

			if (categories[blogCategory].length > 1) {
				const filteredCategories = categories[blogCategory]
					.filter(
						(relatedBlog) =>
							relatedBlog.title.toLowerCase() !== blog.title.toLowerCase()
					)
					.slice(0, 3);

				setRelatedBlogs(
					<div
						className='footer__more-read__categories post-card-small'
						style={{ padding: ".8rem 1rem" }}
					>
						<p style={{ marginBottom: "1rem", opacity: 1 }}>
							<span>MORE IN</span>{" "}
							<Link
								style={{ fontWeight: "700" }}
								to={`/blogs/category/${titleToSlug(
									blog.category.toLowerCase()
								)}`}
								state={{
									category: blog.category,
								}}
							>
								{blog.category}
							</Link>
						</p>
						<ul className=''>
							{filteredCategories.map((categoryBlog, index) => (
								<li style={{ marginBottom: "1.5rem" }} key={index}>
									<Link
										to={`/blogs/${titleToSlug(categoryBlog.title)}`}
										state={{
											blog: categoryBlog,
											currentBlogIndex: categoryBlog.index,
											categories: categories,
										}}
									>
										{categoryBlog.title}
									</Link>
									<p>
										{formatDate(categoryBlog.createdAt)} -{" "}
										{categoryBlog.readingTime} min read
									</p>
								</li>
							))}
						</ul>
						{categories[blogCategory].length > 3 && (
							<Link
								to={`/blogs/category/${titleToSlug(
									blog.category.toLowerCase()
								)}`}
							>
								<p className='btn'>
									See all {categories[blogCategory].length} posts &#8594;
								</p>
							</Link>
						)}
					</div>
				);
			}
		}

		return () => {
			setFooterNextBlog(null);
			setFooterPrevBlog(null);
			setRelatedBlogs(null);
		};
	}, [location.pathname, publishedBlogs, categories, blog]);

	return (
		<div className='footer section' style={{ marginBottom: "0" }}>
			<div className='footer__container'>
				<div className='footer__more-read'>
					{relatedBlogs}
					{footerNextBlog}
					{footerPrevBlog}
				</div>
				<div className='footer__content'>
					<p>emiliocliff &copy; 2024</p>
					<div>
						<Link className='hover' to={"/blogs"}>
							Latest Posts
						</Link>
						&middot;
						<a
							href='https://github.com/EmilioCliff'
							className='hover'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub Profile'
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

function formatDate(timestamp) {
	let date;

	if (timestamp && typeof timestamp.toDate === "function") {
		date = timestamp.toDate();
	} else if (
		typeof timestamp === "object" &&
		timestamp.seconds &&
		timestamp.nanoseconds
	) {
		date = new Date(
			timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000)
		);
	} else if (typeof timestamp === "string" || typeof timestamp === "number") {
		date = new Date(timestamp);
	} else {
		throw new Error("Invalid timestamp provided");
	}

	const day = String(date.getDate()).padStart(2, "0");
	const month = date
		.toLocaleString("default", { month: "short" })
		.toUpperCase();
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
}
