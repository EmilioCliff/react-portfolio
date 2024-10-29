import React, { useContext } from "react";
import { useNavigate } from "react-router";
import BlogsContext from "../context/BlogsContext.js";
import { toast } from "react-toastify";
import BlogForm from "../components/BlogForm.jsx";
import Spinner from "../components/Spinner.jsx";

export default function CreateBlog() {
	const navigate = useNavigate();
	const { createBlog, ctxLoading } = useContext(BlogsContext);

	const creatingBlog = (data) => {
		createBlog(data).then((value) => {
			if (value) {
				toast.success("Blog created successfully");
				navigate("/admin/blogs");
			}
		});
	};

	if (ctxLoading) {
		return <Spinner />;
	}

	return <BlogForm submitHandler={creatingBlog} />;
}
