import React, { useState, useEffect, useContext } from "react";
import BlogForm from "../components/BlogForm.jsx";
import BlogsContext from "../context/BlogsContext.js";
import { db } from "../firebase.config.js";
import { toast } from "react-toastify";
import { doc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router";
import Spinner from "../components/Spinner.jsx";

export default function EditBlog() {
	const [blog, setBlog] = useState(null);
	const params = useParams();
	const navigate = useNavigate();
	const { getBlog, editBlog, ctxLoading } = useContext(BlogsContext);

	useEffect(() => {
		getBlog(params.blogId).then((value) => {
			if (value) {
				setBlog(value);
			} else {
				navigate("/admin/blogs");
			}
		});
	}, [params.blogId]);

	const editingBlog = async (data) => {
		if (confirm("Do you want to update the edits")) {
			editBlog(data, blog.id).then((value) => {
				if (value) {
					toast.success("blog edited successfully");
					navigate("/admin/blogs");
				}
			});
		}
	};

	if (ctxLoading) {
		return <Spinner />;
	}

	return <BlogForm initialData={blog} submitHandler={editingBlog} />;
}
