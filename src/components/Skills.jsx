import React from "react";
import PropTypes from "prop-types";

function Skills({ skillImg, skillName }) {
	return (
		<div className='about__skills-skill'>
			<img src={skillImg} alt='' />
			<p>{skillName.toUpperCase()}</p>
		</div>
	);
}

Skills.protoTypes = {
	skillImg: PropTypes.node.isRequired,
	skillName: PropTypes.string.isRequired,
};

export default Skills;
