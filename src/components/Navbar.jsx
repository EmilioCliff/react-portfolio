import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import BlogsContext from "../context/BlogsContext";

function Navbar() {
	const { documentTitle } = useContext(BlogsContext);

	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__links'>
					<ul className='navbar__links-list'>
						<li className='navbar__links-link'>
							<a
								href='/'
								className='navbar__links-logo'
								style={{ fontSize: "1.25rem" }}
							>
								{/* EC */}
							</a>
						</li>
						<div
							className={`navbar__links-swap ${documentTitle ? "title" : ""}`}
						>
							<li className='navbar__links-link'>
								<NavLink
									to={""}
									className={({ isActive }) =>
										isActive
											? "navbar__links-link_active"
											: "navbar__links-link_pending"
									}
								>
									HOME
								</NavLink>
							</li>
							<li className='navbar__links-link'>
								<NavLink
									to={"/blogs"}
									className={({ isActive }) =>
										isActive
											? "navbar__links-link_active"
											: "navbar__links-link_pending"
									}
								>
									BLOGS
								</NavLink>
							</li>
							<li className='navbar__links-link'>
								<a
									href='https://github.com/EmilioCliff'
									className='navbar__links-link_pending'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='GitHub Profile'
								>
									GITHUB
								</a>
							</li>
							<div className='nav-blog__title-cont'>
								<p className='nav-blog__title'></p>
							</div>
						</div>
					</ul>
				</div>
				{/* <div className={`navbar__buttons ${documentTitle ? "title" : ""}`}>
					<div className='navbar__buttons-button'>Subscribe</div>
				</div> */}
			</div>
		</div>
	);
}

export default Navbar;
