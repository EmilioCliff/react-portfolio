import React, { useEffect, useContext } from "react";
import BlogsContext from "../context/BlogsContext.js";
import { ReactTyped } from "react-typed";
import { toast } from "react-toastify";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Slider from "../components/Slider";
import ScrollUp from "../components/ScrollUp";
import ContactUsForm from "../components/ContactUsForm.jsx";
// import meImage from "../assets/bg-1.png";
import meImage from "../assets/WhatsApp_Image_2024-11-09_at_17.24.45-removebg-preview.png";
import { ReactComponent as GithubIcon } from "../assets/github-fill.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin-fill.svg";
import { ReactComponent as WhatsappIcon } from "../assets/whatsapp-fill.svg";
import { skills, projects } from "../data/data.js";
import "../styles/home.css";

function Home() {
	const { publishedBlogs, getPublishedBlogs } = useContext(BlogsContext);
	useEffect(() => {
		if (publishedBlogs.length === 0) {
			getPublishedBlogs().then((value) => {
				if (!value) {
					toast.error("error getting blogs");
				}
			});
		}
	}, []);

	return (
		<>
			<section className='profile section' id='home'>
				<div>
					{/* <img src={meImage} alt='' className='profile__img' /> */}
					<svg
						className='home__blob'
						viewBox='0 0 550 591'
						xmlns='http://www.w3.org/2000/svg'
					>
						<mask id='maskBlob' mask-type='alpha'>
							<path
								d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
							/>
						</mask>
						<g mask='url(#maskBlob)'>
							<path
								d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
							/>

							<rect x='37' width='476' height='630' fill='url(#pattern0)' />
						</g>

						<rect x='37' width='476' height='300' fill='url(#pattern1)' />

						<defs>
							<pattern
								id='pattern0'
								patternContentUnits='objectBoundingBox'
								width='1'
								height='1'
							>
								<use
									href='#imageBlob'
									transform='matrix(0.00143057 0 0 0.00108108 0.0404062 0)'
								/>
							</pattern>

							<pattern
								id='pattern1'
								patternContentUnits='objectBoundingBox'
								width='1'
								height='1'
							>
								<use
									href='#imageBlob'
									transform='matrix(0.00143057 0 0 0.00226984 0.0404062 0)'
								/>
							</pattern>

							<image
								className='home__img'
								id='imageBlob'
								width='640'
								height='925'
								href={meImage}
								// href='https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2Fbg-1.png?alt=media&token=90604583-d3fc-4587-836a-dab19c29dafa'
							/>
						</defs>
					</svg>
				</div>
				<div className='profile__content'>
					<p>Hello, I'm</p>
					<h2>
						<span className='name__span'>Emilio</span> Cliff
					</h2>
					<ReactTyped
						strings={[
							"Fullstack Developer",
							"Golang Gopher",
							"Backend Developer",
							"Technical Writer",
						]}
						typeSpeed={70}
						backSpeed={50}
						loop
					/>
					<div className='profile_btns'>
						<a href='/emilio.pdf' download='emilio.pdf' className='btn'>
							Download CV
						</a>
						<a href='#contact' className='btn'>
							Contact Info
						</a>
					</div>
					<div className='profile__socials'>
						<a
							href='https://github.com/EmilioCliff'
							target='_blank'
							rel='noopener noreferrer'
							className='profile__socials-icon'
						>
							<GithubIcon className='profile__socials-icon_logo' />
						</a>
						<a
							href='https://www.linkedin.com/in/emilio-cliff/'
							target='_blank'
							rel='noopener noreferrer'
							className='profile__socials-icon'
						>
							<LinkedInIcon className='profile__socials-icon_logo' />
						</a>
						<a
							href='https://wa.me/254718750145'
							target='_blank'
							rel='noopener noreferrer'
							className='profile__socials-icon'
						>
							<WhatsappIcon className='profile__socials-icon_logo' />
						</a>
					</div>
				</div>
			</section>
			<section className='section about'>
				<h1 className='section__title'>ABOUT ME</h1>
				<h2 className='section__subtitle'>Who am I?</h2>
				<div className='about__content'>
					<p className='about__content-description'>
						I'm a <span>Backend Developer</span> specializing in{" "}
						<strong>Golang and Python</strong>, with a strong background in
						system architecture, API development, and microservices with over{" "}
						<strong>2 years</strong> of experience. While pursuing my{" "}
						<a
							href='https://discover.jkuat.ac.ke/course-of-the-week-b-sc-telecommunication-and-information-engineering/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='JKUAT TIE Discover'
						>
							<span>
								Telecommunications and Information Engineering degree at JKUAT
							</span>
						</a>
						, I discovered my passion for backend development during an{" "}
						<a
							href='https://www.kplc.co.ke/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='KPLC Home Page'
						>
							<span>internship at Kenya Power Limited Company (KPLC)</span>
						</a>
						, where I helped create a
						<span> Meeting Room Management System with Flask</span>,
						streamlining traditional processes.
						<br />
						<br />A key moment came at the{" "}
						<a
							href='https://www.ca.go.ke/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='CAK Home Page'
						>
							<span>Communications Authority of Kenya (CAK)</span>
						</a>
						, where I was introduced to{" "}
						<span>Golang and the world of microservices</span>. Fascinated by
						Golang's simplicity and power, I deepened my expertise through a
						comprehensive backend course, mastering{" "}
						<strong>Golang, PostgreSQL, Kubernetes, and gRPC.</strong>
						<br />
						<br />
						My journey evolved from Python to Golang, culminating in advanced
						courses and freelancing projects that strengthened my expertise in
						scalable systems. This knowledge has proven invaluable in my current
						role at{" "}
						<a
							href='https://lainitech.com/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Laini Technologies Home Page'
						>
							<span>Laini Technologies</span>
						</a>
						, where I'm part of a team revolutionizing{" "}
						<span>HR and payroll systems</span> in Kenya where I contribute in
						modernizing the PayPlus system into an online platform.
						<br />
						<br />
						As a <span>Technical Writer</span>, I share insights on backend best
						practices and system design, making complex concepts accessible to
						the tech community.
						<br />
						<br />
						Explore my{" "}
						<a href='#projects'>
							<span>recent projects</span>
						</a>{" "}
						and{" "}
						<a href='#blogs'>
							<span>technical articles</span>
						</a>{" "}
						below. I also write on{" "}
						<a
							href='https://medium.com/@emiliocliff'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Medium Profile'
						>
							<span>Medium</span>
						</a>
					</p>
					<img
						src='https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2Fabout__img.png?alt=media&token=3887ace9-aeb0-4c01-a877-65fb6f620366'
						alt=''
						className='about__content-img'
					/>
				</div>
				<div className='about__skills'>
					<h2 className='section__subtitle'>Skills</h2>
					<div className='about__skills-container'>
						{skills.map((skill, index) => (
							<Skills skillImg={skill.img} skillName={skill.name} key={index} />
						))}
					</div>
				</div>
				<div className='about__experience' id='about__experience'>
					<h2 className='section__subtitle'>Experience</h2>
					<div className='timeline-items'>
						<div className='timeline-item'>
							<div className='timeline-dot'></div>
							<div className='timeline-date'>May 2024 - August 2024</div>
							<div className='timeline-content'>
								<h3>Junior Developer</h3>
								<h4>Laini Technologis Limited, Nairobi</h4>
								<p>
									Currently, as a Junior Developer at Laini Technologies, I work
									on both backend and full-stack projects, supporting the
									development and maintenance of client websites and HR/payroll
									management systems. I participate in transitioning PayPlus, a
									payroll solution, from an offline system to an online
									platform, gaining valuable experience throughout this
									migration process. I work closely with teams across various
									functions, contributing to API design, managing data flow, and
									enhancing the user experience. This collaborative environment
									allows me to continuously learn and refine my skills while
									ensuring a seamless UI/UX across applications.
								</p>
							</div>
						</div>
						<div className='timeline-item'>
							<div className='timeline-dot'></div>
							<div className='timeline-date'>May 2023 - August 2023</div>
							<div className='timeline-content'>
								<h3>Licensing Intern</h3>
								<h4>Communication Authority of Kenya, Waiyaki way</h4>
								<p>
									I participated in the technical evaluation of licensing
									proposals from major telecommunications companies, gaining
									extensive exposure to the regulatory frameworks governing the
									industry. I initiated the learning and implementation of
									Golang-based systems, analyzing technical documentation and
									proposal requirements. My contributions to the development of
									internal tools using Golang further solidified my expertise in
									the language.
								</p>
							</div>
						</div>
						<div className='timeline-item'>
							<div className='timeline-dot'></div>
							<div className='timeline-date'>May 2022 - August 2022</div>
							<div className='timeline-content'>
								<h3>ICT intern</h3>
								<h4>KPLC Stima plaza, Nairobi</h4>
								<p>
									I lead a team of fellow Interns in the design and development
									of a Meeting Room Management System to modernize room booking
									processes. I built the backend in Flask, implementing APIs for
									user authentication, room reservations, and amenities
									listings, and designed a database schema focused on efficient
									room availability tracking and usage analytics. The project
									gained traction within the department and was adopted as a
									pilot solution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='section projects' id='projects'>
				<h1 className='section__title'>PROJECTS</h1>
				<h2 className='section__subtitle'>My Projects</h2>
				<div className='projects__grid'>
					{projects.map((project, key) => (
						<Project project={project} key={key} />
					))}
				</div>
			</section>
			<section className='section home-blogs' id='blogs'>
				<h1 className='section__title'>Blogs</h1>
				<h2 className='section__subtitle'>Recent Articles</h2>
				<div className='blogs-container'>
					{/* {blogs.map((blog, index) => (
						<Blog blog={blog} key={index} />
					))} */}
					<Slider blogs={publishedBlogs} />
				</div>
			</section>
			<ContactUsForm />
			<ScrollUp />
		</>
	);
}

export default Home;
