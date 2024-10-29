import React, { useEffect, useContext } from "react";
import BlogsContext from "../context/BlogsContext.js";
import { ReactTyped } from "react-typed";
import { toast } from "react-toastify";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Slider from "../components/Slider";
import ScrollUp from "../components/ScrollUp";
import ContactUsForm from "../components/ContactUsForm.jsx";
import homeImage from "../assets/home__img.png";
import meImage from "../assets/2020-08-271598537877.jpg";
import aboutImage from "../assets/about__img.png";
import { ReactComponent as GithubIcon } from "../assets/github-fill.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin-fill.svg";
import { ReactComponent as WhatsappIcon } from "../assets/whatsapp-fill.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram-fill.svg";
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
			{/* <section className='home section' id="home">
				<div className='home__data'>
					<h1 className='home__title'>
						Hi, <br /> I'am <span className='home__title-color'>Emilio</span>
						<br />
						<ReactTyped
							strings={[
								"This is a typing effect!",
								"React makes things easy.",
								"Try adding more text.",
							]}
							typeSpeed={70}
							backSpeed={50}
							loop
						/>
					</h1>
					<a href='#' className='btn'>
						Contact
					</a>
				</div>

				<div className='profile__socials'>
						<a href='' className='profile__socials-icon'>
							<GithubIcon className="profile__socials-icon_logo" />
						</a>
						<a href='' className='profile__socials-icon'>
							<LinkedInIcon className="profile__socials-icon_logo" />
						</a>
						<a href='' className='profile__socials-icon'>
							<img src={instagramIcon} alt='' />
						</a> 
						<a href='' className='profile__socials-icon'>
							<WhatsappIcon className="profile__socials-icon_logo" />
						</a>
					</div>

				<svg
					className='home__blob'
					viewBox='0 0 200 187'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
				>
					<mask id='mask0' mask-type='alpha'>
						<path
							d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
						/>
					</mask>
					<g mask='url(#mask0)'>
						<path
							d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
						/>
						<image className='home__blob-img' xlinkHref={homeImage} />
					</g>
				</svg>
			</section> */}
			<section className='profile section' id='home'>
				<div>
					<img src={meImage} alt='' className='profile__img' />
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
						]}
						typeSpeed={70}
						backSpeed={50}
						loop
					/>
					<div className='profile_btns'>
						<a href='/cv.pdf' download='My_CV.pdf' className='btn'>
							Download CV
						</a>
						<a href='#contact' className='btn'>
							Contact Info
						</a>
					</div>
					<div className='profile__socials'>
						<a href='' className='profile__socials-icon'>
							<GithubIcon className='profile__socials-icon_logo' />
						</a>
						<a href='' className='profile__socials-icon'>
							<LinkedInIcon className='profile__socials-icon_logo' />
						</a>
						<a href='' className='profile__socials-icon'>
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
						I am a <span>Backend Developer</span> specializing in{" "}
						<strong>Golang and Python</strong>, with a strong foundation in
						system architecture and API development. I am also a{" "}
						<span>Technical Writer</span> with 2-3 years of experience sharing
						knowledge and insights about backend development and system design.
						<br />
						<br />
						Over the last <strong>2 years</strong>, I have built a solid
						foundation in the technology industry while pursuing my{" "}
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
						. My journey has been marked by continuous learning and practical
						application, starting from my transformative{" "}
						<a
							href='https://www.kplc.co.ke/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='KPLC Home Page'
						>
							<span>internship at Kenya Power Limited Company (KPLC)</span>
						</a>
						, where I first discovered my passion for coding. At KPLC, I
						collaborated with a team of interns to create a{" "}
						<span>Meeting Room Management System (Flask)</span>, solving the
						tedious traditional booking process through a secretary. <br />{" "}
						<br /> What sets my journey apart is my progression from Python to
						Golang and my deep dive into microservices architecture . After my
						initial success at KPLC, I embarked on a structured learning journey
						through comprehensive courses like{" "}
						<a
							href='https://www.udemy.com/course/100-days-of-code/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Alpha_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=ROW-English&language=EN&product=Course&test=&audience=DSA&topic=Python&priority=Alpha&utm_content=deal4584&utm_term=_._ag_162511578924_._ad_696197165262_._kw__._de_c_._dm__._pl__._ti_dsa-1705455366924_._li_9073682_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pqcCecFsGx-jE46HVa_tW07H4GhmGRuG7N-XXWHMNWryYid-UVLnAaApTXEALw_wcB'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Python Pro Bootcamp'
						>
							{" "}
							<span>"100 Days of Code: Complete Python Pro Bootcamp"</span>
						</a>
						. Graduating from this program gave me the confidence to{" "}
						<strong>start freelancing</strong>, where I worked on numerous
						projects, enhancing my understanding of how to build and deploy
						functional, scalable systems.
						<br /> <br /> My next milestone was an{" "}
						<a href=''>
							<span>
								internship at the Communications Authority of Kenya (CAK)
							</span>
						</a>
						, where I was exposed to the{" "}
						<span>corporate technology landscape</span>, particularly in
						licensing and proposal analysis. This experience introduced me to{" "}
						<span>Golang</span>, sparking a passion for its simplicity and power
						in backend development. Pursuing this interest, I completed the
						<a
							href='https://www.udemy.com/course/backend-master-class-golang-postgresql-kubernetes/?couponCode=2021PM25'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Backend Masterclass Pro Bootcamp'
						>
							<span>
								"Backend Masterclass [Golang + Postgres + Kubernetes + gRPC]"
							</span>
						</a>
						course, which transformed my approach to backend engineering and
						opened doors to building complex microservices architectures. These
						weren’t just courses –{" "}
						<span>
							they were stepping stones that shaped my approach to backend
							development.
						</span>{" "}
						<br /> <br /> My professional experience spans across{" "}
						<span>significant organizations in Kenya’s tech landscape.</span>{" "}
						From <strong>KPLC’s ICT department</strong> to the{" "}
						<strong>Communications Authority of Kenya (CAK) </strong>
						and now at <strong>Laini Technologies</strong>, I’ve had the
						opportunity to work on diverse projects that impact thousands of
						users. At Laini Technologies, I’m part of the team{" "}
						<span>revolutionizing HR and payroll systems in Kenya</span>,
						building robust solutions that bridge the gap between traditional
						and modern business processes.
						<br /> <br /> Currently at{" "}
						<a
							href='https://lainitech.com/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Laini Technologies Home Page'
						>
							<span>Laini Technologies</span>
						</a>
						, I’m working on modernizing payment and HR systems, while
						continuously <span>exploring new technologies</span> and{" "}
						<span>sharing my knowledge through technical writing.</span>{" "}
						Teaching and sharing what I know has become a core part of my
						journey. My articles focus on{" "}
						<span>
							backend development best practices, system architecture,
						</span>{" "}
						and{" "}
						<span>
							practical implementations of modern development concepts
						</span>
						. I’m particularly proud of my contribution to{" "}
						<strong>
							transforming the PayPlus system from an offline solution to a
							modern, online platform.
						</strong>{" "}
						<br />
						<br />
						Check out some of my{" "}
						<a href='#projects'>
							<span>recent projects</span>
						</a>{" "}
						and{" "}
						<a href='#blogs'>
							<span>technical articles</span>
						</a>{" "}
						below.
					</p>
					<img src={aboutImage} alt='' className='about__content-img' />
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Distinctio, delectus repudiandae magnam dolorem reprehenderit
									nemo cum fuga facere reiciendis aspernatur aperiam nihil
									voluptatem accusamus pariatur. Vel neque laudantium eaque
									suscipit.
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Distinctio, delectus repudiandae magnam dolorem reprehenderit
									nemo cum fuga facere reiciendis aspernatur aperiam nihil
									voluptatem accusamus pariatur. Vel neque laudantium eaque
									suscipit.
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
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Distinctio, delectus repudiandae magnam dolorem reprehenderit
									nemo cum fuga facere reiciendis aspernatur aperiam nihil
									voluptatem accusamus pariatur. Vel neque laudantium eaque
									suscipit.
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
