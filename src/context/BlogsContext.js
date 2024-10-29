import React, { createContext, useState } from "react";
import { db } from "../firebase.config.js";
import {
	doc,
	serverTimestamp,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
	query,
	where,
	orderBy,
	limit,
	startAfter,
	collection,
	addDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
	const [publishedBlogs, setPublishedBlogs] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const [ctxLoading, setCtxLoading] = useState(false);
	const [lastFetchedListing, setLastFetchedListing] = useState(null);
	const [documentTitle, setDocumentTitle] = useState(false);

	const getPublishedBlogs = async () => {
		setCtxLoading(true);
		try {
			const blogsRef = collection(db, "blogs");
			const q = query(
				blogsRef,
				where("published", "==", true),
				orderBy("createdAt", "asc")
			);

			const docsSnap = await getDocs(q);
			let result = [];
			docsSnap.forEach((doc) => {
				return result.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setPublishedBlogs(result);
			setCtxLoading(false);

			return true;
		} catch (error) {
			console.log(error);
		}

		setCtxLoading(false);
	};
	const listBlogs = async () => {
		setCtxLoading(true);

		try {
			const blogsRef = collection(db, "blogs");
			const q = query(blogsRef, orderBy("createdAt", "desc"), limit(10));

			const docSnaps = await getDocs(q);

			setLastFetchedListing(docSnaps.docs[docSnaps.docs.length - 1]);

			let result = [];
			docSnaps.forEach((doc) => {
				return result.push({
					id: doc.id,
					data: doc.data(),
				});
			});

			setBlogs(result);
			setCtxLoading(false);

			return true;
		} catch (error) {
			console.log(error);
		}

		setCtxLoading(false);
	};
	const listMoreBlogs = async () => {
		setCtxLoading(true);
		try {
			const blogsRef = collection(db, "blogs");
			const q = query(
				blogsRef,
				orderBy("createdAt", "desc"),
				limit(10),
				startAfter(lastFetchedListing)
			);
			const docSnap = await getDocs(q);
			setLastFetchedListing(docSnap.docs[docSnap.docs.length - 1]);
			let result = [];
			docSnap.forEach((doc) => {
				return result.push({
					id: doc.id,
					data: doc.data(),
				});
			});
			setBlogs((prevState) => [...prevState, ...result]);
			setCtxLoading(false);

			return true;
		} catch (error) {
			console.log(error);
		}
		setCtxLoading(false);
	};
	const deleteBlog = async (blogId) => {
		setCtxLoading(true);
		const blogRef = doc(db, "blogs", blogId);
		const deleted = await deleteDoc(blogRef);
		setCtxLoading(false);
		window.location.reload();
	};
	const editBlog = async (data, blogId) => {
		try {
			setCtxLoading(true);

			const docRef = doc(db, "blogs", blogId);
			const result = await updateDoc(docRef, {
				title: data.title,
				description: data.description,
				category: data.category,
				coverImage: data.coverImage,
				readingTime: data.readingTime,
				content: data.content,
				updatedAt: serverTimestamp(),
			});

			setCtxLoading(false);
			return true;
		} catch (error) {
			toast.error("failed editing blog");
		}
		setCtxLoading(false);
	};
	const getBlog = async (blogId) => {
		setCtxLoading(true);

		const docRef = doc(db, "blogs", blogId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			setCtxLoading(false);

			return {
				id: docSnap.id,
				data: docSnap.data(),
			};
		} else {
			toast.error("Blog doesnot exists");
		}

		setCtxLoading(false);
	};

	const createBlog = async (data) => {
		setCtxLoading(true);

		try {
			data.createdAt = serverTimestamp();
			data.updatedAt = serverTimestamp();
			data.published = false;

			const docRef = await addDoc(collection(db, "blogs"), data);

			setCtxLoading(false);
			return true;
		} catch (error) {
			toast.error("error creating blog");
		}

		setCtxLoading(false);
	};

	const publishBlog = async (blogId) => {
		try {
			setCtxLoading(true);

			const blogRef = doc(db, "blogs", blogId);
			const updated = await updateDoc(blogRef, {
				published: true,
			});

			window.location.reload();
		} catch (error) {
			toast.error("error publishing doc");
		}

		setCtxLoading(false);
	};

	return (
		<BlogsContext.Provider
			value={{
				blogs,
				lastFetchedListing,
				ctxLoading,
				publishedBlogs,
				documentTitle,
				getBlog,
				createBlog,
				editBlog,
				publishBlog,
				deleteBlog,
				listBlogs,
				listMoreBlogs,
				getPublishedBlogs,
				setDocumentTitle,
			}}
		>
			{children}
		</BlogsContext.Provider>
	);
};

export default BlogsContext;
