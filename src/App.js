import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import { BlogsProvider } from './context/BlogsContext';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import AdminBlogsList from './pages/AdminBlogsList';
import Categories from './pages/Categories';
import ReadBlog from './components/ReadBlog';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
	return (
		<>
			<BlogsProvider>
				<Router>
					<Navbar />
					<div className="main-container">
						<div className="main-container__content">
							<ScrollToTop />
							<Routes>
								{/* <Route path='/' element={<Home />} /> */}
								<Route path="/" element={<Blogs />} />
								<Route
									path="/blogs/:blogId"
									element={<ReadBlog />}
								/>
								<Route
									path="/blogs/category/:category"
									element={<Categories />}
								/>
								<Route
									path="/projects"
									element={<Projects />}
								/>
								<Route path="/about" element={<About />} />

								{/* Admin Routes */}
								<Route
									path="/admin/blogs"
									element={<PrivateRoute />}
								>
									<Route
										path="/admin/blogs"
										element={<AdminBlogsList />}
									/>
								</Route>
								<Route
									path="/admin/blogs/create-blog"
									element={<PrivateRoute />}
								>
									<Route
										path="/admin/blogs/create-blog"
										element={<CreateBlog />}
									/>
								</Route>
								<Route
									path="/admin/blogs/:blogId"
									element={<PrivateRoute />}
								>
									<Route
										path="/admin/blogs/:blogId"
										element={<EditBlog />}
									/>
								</Route>
								<Route path="/login" element={<Login />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</div>
					</div>
					<Footer />
				</Router>
				<ToastContainer />
			</BlogsProvider>
		</>
	);
}

export default App;
