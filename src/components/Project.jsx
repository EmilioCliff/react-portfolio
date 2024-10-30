import React from "react";

function Project({ project }) {
	return (
		<div className='project__project-container'>
			<img src={project.img} alt={project.name} />
			<h1>{project.name}</h1>
			<p>{project.description}</p>
			<div className='project_btns'>
				{Object.keys(project.actions).map((key) => (
					<a
						href={project.actions[key]}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub Profile'
						className='btn'
						key={key}
					>
						{key === "github"
							? "GitHub"
							: key === "videoDemo"
							? "Video Demo"
							: "Live Demo"}
					</a>
				))}
			</div>
		</div>
	);
}

export default Project;
