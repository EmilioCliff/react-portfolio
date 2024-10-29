import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ReactComponent as GithubIcon } from "../assets/github-fill.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin-fill.svg";
import { ReactComponent as WhatsappIcon } from "../assets/whatsapp-fill.svg";
import contactImage from "../assets/contact__img.jpg";

function ContactUsForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
			)
			.then((response) => {
				console.log(response);
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});

				toast.success(
					"Thank you for showing interest. Message sent successful."
				);
			})
			.catch((error) => {
				console.log(error);
				toast.error("Error submitting form");
			});
	};

	return (
		<>
			<section className='section contact' id='contact'>
				<h1 className='section__title'>Contact</h1>
				<h2 className='section__subtitle'>Contact Details</h2>
				<div className='contact__container'>
					<div className='contact__content'>
						<h2 className='section__subtitle'>Let's Get In Touch</h2>
						<img src={contactImage} alt='' />
						<p>Connect with me:</p>
						<div className='contact__socials'>
							<a href='' className='contact__socials-icon'>
								<GithubIcon className='contact__socials-icon__comp' />
							</a>
							<a href='' className='contact__socials-icon'>
								<LinkedInIcon className='contact__socials-icon__comp' />
							</a>
							<a href='' className='contact__socials-icon'>
								<WhatsappIcon className='contact__socials-icon__comp' />
							</a>
						</div>
					</div>
					<div className='contact__form'>
						<h2>Connect</h2>
						<form onSubmit={onSubmit}>
							<div className='contact__input-box'>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={onChange}
									required
								/>
								<label htmlFor=''>Name</label>
							</div>
							<div className='contact__input-box'>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={onChange}
									required
								/>
								<label htmlFor=''>Email</label>
							</div>
							<div className='contact__input-box'>
								<input
									type='tel'
									name='phone'
									required
									value={formData.phone}
									onChange={onChange}
								/>
								<label htmlFor=''>Phone</label>
							</div>
							<div className='contact__input-box message'>
								<textarea
									name='message'
									placeholder=''
									id='message'
									cols='30'
									rows='10'
									value={formData.message}
									onChange={onChange}
								></textarea>
								<label htmlFor=''>Message</label>
							</div>
							<input
								type='submit'
								className='contact__form-submit btn'
								value='Submit'
								name=''
								id=''
							/>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactUsForm;
