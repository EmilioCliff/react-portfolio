import reactLogo from '../assets/react-logo.png';
import golangLogo from '../assets/golang-logo.png';
import pythonLogo from '../assets/python-logo.png';
import html5Logo from '../assets/html5-logo.png';
import cssLogo from '../assets/css-logo.png';
import javascriptLogo from '../assets/javascript-logo.png';
import flaskLogo from '../assets/flask-logo.png';
import postgresSQLLogo from '../assets/postgresql-logo.png';

export const skills = [
	{
		img: golangLogo,
		name: 'Golang',
	},
	{
		img: pythonLogo,
		name: 'Python',
	},
	{
		img: flaskLogo,
		name: 'Flask',
	},
	{
		img: postgresSQLLogo,
		name: 'PostgreSQL',
	},
	{
		img: reactLogo,
		name: 'React JS',
	},
	{
		img: html5Logo,
		name: 'HTML',
	},
	{
		img: cssLogo,
		name: 'CSS',
	},
	{
		img: javascriptLogo,
		name: 'Javascript',
	},
];

export const projects = [
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/projects%2Fhack-a-milli.png?alt=media&token=57899aa3-3563-45bd-938b-cc2c4887d0c6',
		name: 'Hack-A-Milli',
		description:
			'KeNIC Hack-a-Milli is a comprehensive full-stack platform developed for the Kenya Network Information Centre (KeNIC) hackathon. It features interconnected services including a React-based admin portal, React Native mobile app, Go-based backend services with PostgreSQL database, and a secure gateway with JWT authentication and Casbin authorization. The platform supports domain management, user administration, content management, and learning management systems.',
		actions: {
			github: 'https://hack-a-milli-kamb.vercel.app/',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2FinventorySystem.png?alt=media&token=67713c33-f905-4bda-832a-2f23aa27a9b0',
		name: 'Inventory System',
		description:
			'Utilizing Python, Flask, SQLAlchemy, Bootstrap, HTML, CSS, and JavaScript, I developed a dynamic club management solution. This transformative project streamlines operations, replacing manual record-keeping with an intuitive, visually appealing digital platform.',
		actions: {
			github: 'https://github.com/EmilioCliff/stock-management-system',
			videoDemo: 'https://youtu.be/ez4a6alwvbY',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2Fpayment-polling.png?alt=media&token=2a645112-aad9-4d39-a3ff-22e67a84fba0',
		name: 'Payment Polling Service',
		description:
			'The Payment Polling Service repository is a backend project built with a microservices architecture, using Go for the services, gRPC for communication, and RabbitMQ as the message broker. The system includes key services: Authentication, Gateway, and Payments, each serving specific purposes like user registration, authentication, and handling transactions. It integrates with the Payd API and utilizes Docker for containerization, while Testcontainers supports integration testing. This project was developed as part of a backend assessment​',
		actions: {
			github: 'https://github.com/EmilioCliff/payment-polling-service',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2Fdistribution-management.png?alt=media&token=1fb084ea-11b3-4044-bc2b-3ba555801dd1',
		name: 'Pharmaceutical Distribution Management System',
		description:
			'A distribution management system powered by Golang (backend), Python Flask (frontend), PostgreSQL (database), and Docker (deployment on Railways). Leveraged Redis for background processing, JWT for authentication, and integrated Safaricom Daraja API for seamless payments. This solution optimizes inventory tracking, transaction management, and payment processing for pharmaceutical distributors and sales personnel with well documented reports.',
		actions: {
			videoDemo: 'https://youtu.be/Y5Xl81zUBy8',
			github: 'https://github.com/EmilioCliff/inventory-system',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2FandySafaris.png?alt=media&token=f5258fef-e203-4cf4-a1f9-66802916b76f',
		name: 'Andy Safaris Kenya',
		description:
			'The site features a user-friendly interface built to showcase tour packages, facilitate bookings, and provide detailed information about safari experiences. Using React for the front end and integrating responsive design elements, the website ensures seamless navigation across devices, enhancing user engagement and business visibility.',
		actions: {
			liveDemo: 'https://andysafaris.com/',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2FcollageCLI.png?alt=media&token=16091794-f4da-4cfe-af3e-a5f12312793d',
		name: 'Collage CLI',
		description:
			'This command-line interface (CLI) tool is designed for managing student, courses and semesters in a collage/institution records efficiently. Built with the power of Go, the Cobra library, the PromptUI and sqlite as our database, it provides a user-friendly way to handle various student management tasks directly from your terminal. 🚀',
		actions: {
			github: 'https://github.com/EmilioCliff/collage-cli',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2FhouseMarketPlace.png?alt=media&token=43fde060-7f3c-4dc4-b3e5-686fa6d0972d',
		name: 'House Market Place',
		description:
			'The React House Project is a web app built with React, Tailwind CSS, and Firebase, enabling users to create accounts and manage property listings for sale or rent. With Firebase for authentication and data storage, it offers secure, real-time updates and a clean, responsive design, making property management easy and accessible.',
		actions: {
			github: 'https://github.com/EmilioCliff/learn-react/tree/main/house-market-place',
			liveDemo: 'https://learn-react-house-project.vercel.app/',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2FlainiTech.png?alt=media&token=13873829-8eb2-4e78-8908-df17a6b7e206',
		name: 'LainiTech Landing Page',
		description:
			"The LainiTech project is a prototype homepage developed as an intern task, aiming to pitch a new website design concept to the company. Built using HTML, CSS, and JavaScript, this single-page mockup was crafted to present a clean, professional look that aligns with Laini Technologies' brand, providing the company with a visual guide for a potential full-scale website redesign.",
		actions: {
			liveDemo: 'https://laini-tech.vercel.app/',
		},
	},
	{
		img: 'https://firebasestorage.googleapis.com/v0/b/react-portfolio-fb429.appspot.com/o/home%2Fensafo.png?alt=media&token=17ba494c-6177-4213-90d8-88eacd30d11c',
		name: 'Ensafo',
		description:
			'Ensafo is a project built with HTML, CSS, and JavaScript, designed to offer an informative and interactive user experience about ensafo ltd. The site showcases a polished layout with smooth navigation, visually engaging elements, and responsive design, providing a user-friendly interface that effectively communicates its content and purpose.',
		actions: {
			liveDemo: 'https://ensafo.vercel.app/',
		},
	},
];
