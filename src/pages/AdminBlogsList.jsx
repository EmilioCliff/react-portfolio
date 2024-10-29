import React, { useEffect, useContext } from "react";
import BlogsContext from "../context/BlogsContext";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { ReactComponent as UpdateIcon } from "../assets/external-link-fill.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete-bin-6-line.svg";
import { toast } from "react-toastify";
import "../styles/admin-blogs.css";
import Spinner from "../components/Spinner";

function AdminBlogsList() {
	const {
		blogs,
		ctxLoading,
		listBlogs,
		listMoreBlogs,
		publishBlog,
		deleteBlog,
		lastFetchedListing,
	} = useContext(BlogsContext);

	const navigate = useNavigate();

	useEffect(() => {
		listBlogs().then((value) => {
			if (!value) {
				toast.error("Error listing blogs");
			}
		});
	}, []);

	const listMoreDocs = async () => {
		listMoreBlogs().then((value) => {
			if (!value) {
				toast.error("error listing more blogs");
			}
		});
	};

	const deletingBlog = async (blogId, title) => {
		if (confirm(`Are you sure you want to delete this blog: ${title}??`)) {
			deleteBlog(blogId);
		}
	};

	const logOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (ctxLoading) {
		return <Spinner />;
	}

	return (
		<>
			<div className='section admin__blogs'>
				<div className='btn logout' onClick={logOut}>
					Log Out
				</div>
				{blogs.map((blog, index) => (
					<div className='admin__blogs-blog' key={index}>
						<img src={blog.data.coverImage} alt='' />
						<div className='admin__blogs-blog-content'>
							<p>{blog.data.category}</p>
							<h2>{blog.data.title}</h2>
							<p>{blog.data.description}</p>
							<p>
								Published:{" "}
								{blog.data.published ? (
									<span className='true'>TRUE</span>
								) : (
									<span className='false'>FALSE</span>
								)}
								&middot; {blog.data.readingTime} MIN
							</p>
							<p>
								{formatDate(blog.data.updatedAt)} &middot;{" "}
								{formatDate(blog.data.createdAt)}
							</p>
							{!blog.data.published && (
								<button className='btn' onClick={() => publishBlog(blog.id)}>
									Publish Blog
								</button>
							)}
						</div>
						<div className='action__icons'>
							<UpdateIcon
								className='action__icon'
								onClick={() => navigate(`/admin/blogs/${blog.id}`)}
							/>
							<DeleteIcon
								className='action__icon'
								onClick={() => deletingBlog(blog.id, blog.data.title)}
							/>
						</div>
					</div>
				))}
			</div>
			<br />
			<br />
			{lastFetchedListing && (
				<p className='loadMore' onClick={listMoreDocs}>
					Load More
				</p>
			)}
		</>
	);
}

export default AdminBlogsList;

function formatDate(timestamp) {
	// Convert the Firebase Timestamp to a JavaScript Date object
	const date = timestamp.toDate();

	const day = date.getDate();
	const month = date
		.toLocaleString("default", { month: "short" })
		.toUpperCase();
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
}
