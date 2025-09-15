import React, { useState } from 'react';
import '../styles/project.css';

const projectsData = [
	{
		id: 14,
		title: 'Hack-A-Milli',
		description:
			'A platform developed for the Kenya Network Information Centre (KeNIC) hackathon. Featuring React-based admin portal, React Native mobile app, Go-based backend services, and a secure gateway with JWT authentication and Casbin authorization.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fhack-a-milli.png?alt=media&token=57899aa3-3563-45bd-938b-cc2c4887d0c6',
		category: 'Fullstack',
		link: 'https://hack-a-milli-kamb.vercel.app',
		tools: ['Go', 'React', 'ReactNative'],
	},
	{
		id: 1,
		title: 'Kokomed Finance',
		description:
			'A loan system for Afya Credit SACCO that handles applications, approvals, repayments, and user onboarding — processing Ksh 1M+ in its first 3 months.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Ffron.png?alt=media&token=47480931-2bfa-49c4-aa6b-c96e602b007b',
		category: 'Fullstack',
		link: 'https://drive.google.com/file/d/16e2V0yx4Ds-MpdD4z_91fI8aC9r9RF0n/view',
		tools: ['Go', 'React', 'MySQL'],
	},
	{
		id: 11,
		title: 'Kokomed Finance - Observability',
		description:
			'Built an observability layer for kokomed-finance using the Grafana ecosystem.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fprom.png?alt=media&token=54f049c3-9994-48f1-ab3f-c23293af93dd',
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
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fignite_help.png?alt=media&token=a3e638a9-2db5-464f-b411-0c551869e7e6',
		category: 'CLI',
		link: 'https://drive.google.com/file/d/1KJp5tLep1m-UakTRTE-lxX9KPS95AIxx/view',
		tools: ['Go', 'Hexagonal'],
	},
	{
		id: 3,
		title: 'mysql-r2-backups',
		description:
			'Automates MySQL backups on Railway and uploads them to Cloudflare R2 for easy, reliable cloud storage.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Frailways_logs.png?alt=media&token=7bb0b677-7145-480c-825e-ddc570ee19d7',
		category: 'Tools',
		link: 'https://github.com/EmilioCliff/mysql-r2-backups',
		tools: ['Go', 'MySQL', 'S3', 'Railway'],
	},
	{
		id: 4,
		title: 'MyHela Africa',
		description:
			'An AI-powered personal finance tracker that analyzes M-Pesa statements and allows users to ask questions in natural language. It gives insights like spending trends, balances, and financial tips.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fmyhela-africa.png?alt=media&token=29a30fec-1334-451f-84b2-9e3ddca0766d',
		category: 'Fullstack',
		link: 'https://myhela.africa/',
		tools: ['React', 'Django', 'PostgreSQL', 'OpenAI'],
	},
	{
		id: 5,
		title: 'Payment Polling Service',
		description:
			'A Go microservice built for a backend assessment that polls payment APIs and shares transaction statuses via RabbitMQ and gRPC.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fpayment-polling.png?alt=media&token=0228ef91-3a1c-4665-8ae0-e88de9e074cc',
		category: 'Backend',
		link: 'https://github.com/EmilioCliff/payment-polling-service',
		tools: ['Microservice', 'Go', 'SwaggerAPI'],
	},
	{
		id: 6,
		title: 'Inventory Club Management System',
		description:
			'A Python Flask app for managing club inventory with a clean UI and efficient tracking of stock and employees.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2FinventorySystem.png?alt=media&token=2bbc5cfc-9bac-47ca-ae46-b4a8ae37ec1e',
		category: 'Fullstack',
		link: 'https://youtu.be/ez4a6alwvbY',
		tools: ['Flask', 'Bootstrap5', 'SQLite'],
	},
	{
		id: 7,
		title: 'Collage CLI',
		description:
			'A terminal-based student management system for handling students, courses, and semesters with a focus on speed and simplicity.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2FcollageCLI.png?alt=media&token=64e0faf2-3c20-4e2f-95ab-90d9d8b6115e',
		category: 'CLI',
		link: 'https://github.com/EmilioCliff/collage-cli',
		tools: ['Go', 'SQLite', 'PromptUI', 'Cobra'],
	},
	{
		id: 10,
		title: 'Andy Safaris Kenya',
		description:
			"A travel site showcasing Andy Safaris Kenyan's, safari packages, booking features, and engaging content.",
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2FandySafaris.png?alt=media&token=93748a7a-bde8-4243-89b2-efbf5fb1246e',
		category: 'Website',
		link: 'https://andysafaris.com',
		tools: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 9,
		title: 'Ensafo Ltd',
		description:
			"Ensafo Ltd's corporate website, designed for an engaging browsing experience.",
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fensafo.png?alt=media&token=6862b93a-e457-4891-a6b1-5713c2853801',
		category: 'Website',
		link: 'https://ensafo.vercel.app',
		tools: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 8,
		title: 'PharmaTrack',
		description:
			'A pharmaceutical distribution system that manages sales reps, generatre invoices and tracks their sales, streamlining operations and business insights.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fdistribution-management.png?alt=media&token=1db32c80-0936-47a9-8fc5-ebd7a390bbf5',
		category: 'Fullstack',
		link: 'https://youtu.be/Y5Xl81zUBy8',
		tools: ['Go', 'Flask', 'PostgreSQL'],
	},
	{
		id: 12,
		title: 'Boffo Diapers Kenya',
		description:
			'A proposal for Boffo, a Kenyan baby diapers company, showcasing a potential website design with product highlights—currently with placeholder content and missing images.',
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fboffo.png?alt=media&token=056836c5-1f26-4196-8a73-5383b796b815',
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
							src={project.imageUrl}
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
