import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BlogsContext from '../context/BlogsContext';

function Navbar() {
	const { documentTitle } = useContext(BlogsContext);
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar__links">
					<ul className="navbar__links-list">
						{/* <li className="navbar__links-link">
							<a
								href="/"
								className="navbar__links-logo"
								style={{ fontSize: '1.25rem' }}
							>
								EC
							</a>
						</li> */}
						<div
							className={`navbar__links-swap ${
								documentTitle ? 'title' : ''
							}`}
						>
							<li className="navbar__links-link">
								<Link
									to="/"
									className={
										path.startsWith('/blogs')
											? 'navbar__links-link_active'
											: path == '/'
											? 'navbar__links-link_active'
											: 'navbar__links-link_pending'
									}
								>
									BLOGS
								</Link>
							</li>
							<li className="navbar__links-link">
								<NavLink
									to={'/projects'}
									className={({ isActive }) =>
										isActive
											? 'navbar__links-link_active'
											: 'navbar__links-link_pending'
									}
								>
									PROJECTS
								</NavLink>
							</li>
							<li className="navbar__links-link">
								<NavLink
									to={'/about'}
									className={({ isActive }) =>
										isActive
											? 'navbar__links-link_active'
											: 'navbar__links-link_pending'
									}
								>
									ABOUT
								</NavLink>
							</li>
							<li className="navbar__links-link navbar__github-link">
								<a
									href="https://github.com/EmilioCliff"
									className="navbar__links-link_pending"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub Profile"
								>
									GITHUB
								</a>
							</li>
							<div className="nav-blog__title-cont">
								<p className="nav-blog__title"></p>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
