import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/prism.css";
import "../assets/prism.js";

function BlogForm({ initialData = {}, submitHandler }) {
	const [formData, setFormData] = useState({
		title: initialData?.data?.title || "",
		description: initialData?.data?.description || "",
		category: initialData?.data?.category || "",
		coverImage: initialData?.data?.coverImage || "",
		readingTime: initialData?.data?.readingTime || 0,
		content: initialData?.data?.content || "",
	});

	const editorRef = useRef(null);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		submitHandler(formData);
	};

	// Calculate reading time
	const calculateReadingTime = (content) => {
		const wordsPerMinute = 200;
		const text = content.replace(/<[^>]*>/g, "");
		const words = text.trim().split(/\s+/).length;
		return Math.ceil(words / wordsPerMinute);
	};

	const handleEditorChange = (content, editor) => {
		const time = calculateReadingTime(content);
		setFormData((prevData) => ({
			...prevData,
			readingTime: time,
		}));

		if (editorRef.current) {
			setFormData((prevData) => ({
				...prevData,
				content,
				// content: editorRef.current.getContent()
			}));
		}
	};

	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};

	// const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className='editor__input-div'>
					<input
						type='text'
						name='title'
						value={formData.title}
						onChange={onChange}
						required
					/>
					<label>Title</label>
				</div>
				<div className='editor__input-div'>
					<input
						type='text'
						name='description'
						value={formData.description}
						onChange={onChange}
						required
					/>
					<label>Blog Description</label>
				</div>
				<div className='editor__input-div'>
					<input
						type='text'
						name='category'
						value={formData.category}
						onChange={onChange}
						required
					/>
					<label>Category</label>
				</div>
				<div className='editor__input-div'>
					<input
						type='text'
						name='coverImage'
						value={formData.coverImage}
						onChange={onChange}
					/>
					<label>Cover Image Url</label>
				</div>
				<Editor
					apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
					onInit={(_evt, editor) => (editorRef.current = editor)}
					initialValue={initialData?.data?.content}
					onEditorChange={handleEditorChange}
					init={{
						selector: "textarea#editor__input-div__textarea",
						plugins:
							"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
						editimage_cors_hosts: ["picsum.photos"],
						menubar: "file edit view insert format tools table help",
						toolbar:
							"undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
						autosave_ask_before_unload: true,
						autosave_interval: "30s",
						autosave_prefix: "{path}{query}-{id}-",
						autosave_restore_when_empty: false,
						autosave_retention: "2m",
						image_advtab: true,
						link_list: [
							{ title: "My page 1", value: "https://www.tiny.cloud" },
							{ title: "My page 2", value: "http://www.moxiecode.com" },
						],
						image_list: [
							{ title: "My page 1", value: "https://www.tiny.cloud" },
							{ title: "My page 2", value: "http://www.moxiecode.com" },
						],
						image_class_list: [
							{ title: "None", value: "" },
							{ title: "Some class", value: "class-name" },
						],
						importcss_append: true,
						file_picker_callback: (callback, value, meta) => {
							/* Provide file and text for the link dialog */
							if (meta.filetype === "file") {
								callback("https://www.google.com/logos/google.jpg", {
									text: "My text",
								});
							}

							/* Provide image and alt text for the image dialog */
							if (meta.filetype === "image") {
								callback("https://www.google.com/logos/google.jpg", {
									alt: "My alt text",
								});
							}

							/* Provide alternative source and posted for the media dialog */
							if (meta.filetype === "media") {
								callback("movie.mp4", {
									source2: "alt.ogg",
									poster: "https://www.google.com/logos/google.jpg",
								});
							}
						},
						codesample_global_prismjs: true,
						codesample_languages: [
							{ text: "HTML/XML", value: "markup" },
							{ text: "CSS", value: "css" },
							{ text: "JavaScript", value: "javascript" },
							{ text: "React JSX", value: "reactjsx" },
							{ text: "PHP", value: "php" },
							{ text: "Python", value: "python" },
							{ text: "C", value: "c" },
							{ text: "Go", value: "go" },
							{ text: "Rust", value: "rust" },
							{ text: "Docker", value: "docker" },
							{ text: "SQL", value: "sql" },
							{ text: "Makefile", value: "makefile" },
							{ text: "YAML", value: "yaml" },
						],
						height: 600,
						image_caption: true,
						quickbars_selection_toolbar:
							"bold italic | quicklink h2 h3 blockquote quickimage quicktable",
						noneditable_class: "mceNonEditable",
						toolbar_mode: "sliding",
						contextmenu: "link image table",
						// skin: useDarkMode ? "oxide-dark" : "oxide",
						// content_css: useDarkMode ? "dark" : "default",
						content_style:
							"body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
					}}
				/>
				{formData.readingTime > 0 && (
					<div className='reading-time'>
						Estimated reading time: {formData.readingTime} minute
						{formData.readingTime !== 1 ? "s" : ""}
					</div>
				)}
				<input
					type='hidden'
					name='readingTime'
					id='readingTime'
					value={formData.readingTime}
				/>
				<input
					type='hidden'
					name='content'
					id='content'
					value={formData.content}
				/>
				<button type='submit'>Save Blog</button>
			</form>
			<button onClick={log}>Log editor content</button>
		</>
	);
}

export default BlogForm;
