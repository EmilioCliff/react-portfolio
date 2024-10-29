import React from "react";
import { useTitleSlug } from "../hooks/useTitleSlug";
import { Link } from "react-router-dom";
import userProfile from "../assets/about__img.png";

function Blog({ blog, currentBlogIndex, categories, slider = false }) {
	const { titleToSlug } = useTitleSlug();

	return (
		<>
			{slider ? (
				<div className='blog'>
					<img src={blog.coverImage} alt='' />
					<div className='blog__content'>
						<p>{blog.category}</p>
						<h3>{blog.title}</h3>
						<p>{blog.description}</p>
						<Link
							className='btn'
							state={{
								blog: blog,
								currentBlogIndex: currentBlogIndex,
								categories: categories,
							}}
							to={`/blogs/${titleToSlug(blog.title)}`}
						>
							Read More Link
						</Link>
					</div>
				</div>
			) : (
				<>
					<Link
						to={`/blogs/${titleToSlug(blog.title)}`}
						state={{
							blog: blog,
							currentBlogIndex: currentBlogIndex,
							categories: categories,
						}}
					>
						<img src={blog.coverImage} className='l-blog__img' alt='' />
						<div className='l-blog__content'>
							<p className='l-blog__content-category'>{blog.category}</p>
							<h2 className='l-blog__content-title'>{blog.title}</h2>
							<p className='l-blog__content-description'>{blog.description}</p>
							<div className='l-blog__content-blog_info'>
								<img src={userProfile} alt='' />
								<div className='l-blog__content-blog_info-des'>
									<p className='l-blog__content-blog_info-name'>Emilio Cliff</p>
									<p className='l-blog__content-blog_info-date'>
										{formatDate(blog.createdAt)} &middot; {blog.readingTime} MIN
										READ
									</p>
								</div>
							</div>
						</div>
					</Link>
				</>
			)}
		</>
	);
}

export default Blog;

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
