import React, { useState } from 'react';
// import apalisLogo from '../assets/apalis.webp';
import ensafoImg from '../assets/ensafo.png';
import collageCLIImg from '../assets/collageCLI.png';
import andySafaricImg from '../assets/andySafaris.png';
import inventoryImg from '../assets/inventorySystem.png';
import paymentPollingImg from '../assets/payment-polling.png';
import distributionImg from '../assets/distribution-management.png';
import kokomedFinanceImg from '../assets/fron.png';
import kokomedFinanceObserv from '../assets/prom.png';
import myhelaAfricaImg from '../assets/myhela-africa.png';
import mysql2S3Img from '../assets/railways_logs.png';
import igniteImg from '../assets/ignite_help.png';
import boffoImg from '../assets/boffo.png';
import '../styles/project.css';

const projectsData = [
	{
		id: 1,
		title: 'Kokomed Finance',
		description:
			'A loan system for Afya Credit SACCO that handles applications, approvals, repayments, and user onboarding — processing Ksh 1M+ in its first 3 months.',
		image: kokomedFinanceImg,
		category: 'Fullstack',
		link: 'https://drive.google.com/file/d/16e2V0yx4Ds-MpdD4z_91fI8aC9r9RF0n/view',
		tools: ['Go', 'React', 'MySQL'],
	},
	{
		id: 11,
		title: 'Kokomed Finance - Observability',
		description:
			'Built an observability layer for kokomed-finance using the Grafana ecosystem.',
		image: kokomedFinanceObserv,
		category: 'Tools',
		link: 'https://drive.google.com/file/d/1T6uq9OJVTXoyt8rUZwQkJxJfz_IBXBG_/view',
		tools: [
			'OpenTelemetry',
			'Alloy',
			'Prometheus',
			'Loki',
			'Tempo',
			'Grafana',
		],
	},
	{
		id: 2,
		title: 'Ignite CLI',
		description:
			'Sets up Go projects with Hexagonal Architecture by generating boilerplate code and wiring for clean, modular design.',
		image: igniteImg,
		category: 'CLI',
		link: 'https://drive.google.com/file/d/1KJp5tLep1m-UakTRTE-lxX9KPS95AIxx/view',
		tools: ['Go', 'Hexagonal'],
	},
	{
		id: 3,
		title: 'mysql-r2-backups',
		description:
			'Automates MySQL backups on Railway and uploads them to Cloudflare R2 for easy, reliable cloud storage.',
		image: mysql2S3Img,
		category: 'Tools',
		link: 'https://github.com/EmilioCliff/mysql-r2-backups',
		tools: ['Go', 'MySQL', 'S3', 'Railway'],
	},
	{
		id: 4,
		title: 'MyHela Africa',
		description:
			'An AI-powered personal finance tracker that analyzes M-Pesa statements and allows users to ask questions in natural language. It gives insights like spending trends, balances, and financial tips.',
		image: myhelaAfricaImg,
		category: 'Fullstack',
		link: 'https://myhela.africa/',
		tools: ['React', 'Django', 'PostgreSQL', 'OpenAI'],
	},
	{
		id: 5,
		title: 'Payment Polling Service',
		description:
			'A Go microservice built for a backend assessment that polls payment APIs and shares transaction statuses via RabbitMQ and gRPC.',
		image: paymentPollingImg,
		category: 'Backend',
		link: 'https://github.com/EmilioCliff/payment-polling-service',
		tools: ['Microservice', 'Go', 'SwaggerAPI'],
	},
	{
		id: 6,
		title: 'Inventory Club Management System',
		description:
			'A Python Flask app for managing club inventory with a clean UI and efficient tracking of stock and employees.',
		image: inventoryImg,
		category: 'Fullstack',
		link: 'https://youtu.be/ez4a6alwvbY',
		tools: ['Flask', 'Bootstrap5', 'SQLite'],
	},
	{
		id: 7,
		title: 'Collage CLI',
		description:
			'A terminal-based student management system for handling students, courses, and semesters with a focus on speed and simplicity.',
		image: collageCLIImg,
		category: 'CLI',
		link: 'https://github.com/EmilioCliff/collage-cli',
		tools: ['Go', 'SQLite', 'PromptUI', 'Cobra'],
	},
	{
		id: 10,
		title: 'Andy Safaris Kenya',
		description:
			"A travel site showcasing Andy Safaris Kenyan's, safari packages, booking features, and engaging content.",
		image: andySafaricImg,
		category: 'Website',
		link: 'https://andysafaris.com',
		tools: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 9,
		title: 'Ensafo Ltd',
		description:
			"Ensafo Ltd's corporate website, designed for an engaging browsing experience.",
		image: ensafoImg,
		category: 'Website',
		link: 'https://ensafo.vercel.app',
		tools: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 8,
		title: 'PharmaTrack',
		description:
			'A pharmaceutical distribution system that manages sales reps, generatre invoices and tracks their sales, streamlining operations and business insights.',
		image: distributionImg,
		category: 'Fullstack',
		link: 'https://youtu.be/Y5Xl81zUBy8',
		tools: ['Go', 'Flask', 'PostgreSQL'],
	},
	{
		id: 12,
		title: 'Boffo Diapers Kenya',
		description:
			'A proposal for Boffo, a Kenyan baby diapers company, showcasing a potential website design with product highlights—currently with placeholder content and missing images.',
		image: boffoImg,
		category: 'Website',
		link: 'https://boffo.vercel.app/',
		tools: ['React', 'v0.dev'],
	},
];

const categories = ['All', 'CLI', 'Backend', 'Fullstack', 'Tools', 'Website'];

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredProjects =
		selectedCategory === 'All'
			? projectsData
			: projectsData.filter(
					(project) => project.category === selectedCategory,
			  );

	return (
		<div className="projects">
			<p className="greeting-text">Projects!</p>
			<p>Some of the things I have been working on</p>
			<hr />

			{/* Filter Tabs */}
			<div className="project-tabs">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setSelectedCategory(cat)}
						className={`tab-button ${
							selectedCategory === cat ? 'active' : ''
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			<div className="projects-grid">
				{filteredProjects.map((project) => (
					<div key={project.id} className="project-card">
						<img
							src={project.image}
							alt={project.title}
							style={{ objectFit: 'cover', height: '280px' }}
							className="project-card__image"
						/>
						<h1 className="project-card__title">{project.title}</h1>
						<p className="project-card__description">
							{project.description}
						</p>

						{/* New: Tags */}
						<div className="project-card__tags">
							{project.tools.map((tool, index) => (
								<span key={index} className="project-card__tag">
									{tool}
								</span>
							))}
						</div>

						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="project-card__link"
						>
							Learn more →
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
