import React from "react";
import { Link } from "react-router-dom";
import svg from "../assets/5060703_2668386.svg";

function NotFound() {
	return (
		<>
			<div className='cont-404'>
				<img src={svg} alt='svg' />
				<Link className='btn' to={"/"}>
					Back to Home
				</Link>
			</div>
		</>
	);
}

export default NotFound;
