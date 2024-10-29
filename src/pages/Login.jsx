import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Oauth from "../components/Oauth";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { useNavigate } from "react-router";
import { ReactComponent as EyeOn } from "../assets/eye-fill.svg";
import { ReactComponent as EyeOff } from "../assets/eye-off-fill.svg";
import "../styles/login.css";

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const { email, password } = formData;

	// const provider = new GoogleAuthProvider();

	// const auth = getAuth();
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access the Google API.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;
	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		// IdP data available using getAdditionalUserInfo(result)
	// 		// ...
	// 	})
	// 	.catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.customData.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (userCredentials.user) {
				navigate("/admin/blogs");
			}
		} catch (error) {
			toast.error("Bad User Credentials");
		}
	};

	return (
		<div className='login__container'>
			<form onSubmit={onSubmit}>
				<div className='login__content'>
					<h1 className='section__title'>Welcome Back</h1>
					<h2 className='section__subtitle'>Emilio</h2>
				</div>
				<div className='login__input-box'>
					<input
						type='email'
						id='email'
						value={email}
						onChange={onChange}
						required
					/>
					<label htmlFor='email'>Email</label>
				</div>
				<div className='login__input-box password'>
					<input
						type={showPassword ? "text" : "password"}
						id='password'
						value={password}
						onChange={onChange}
						required
					/>
					<label htmlFor='password'>Password</label>
					{showPassword ? (
						<EyeOff
							className='visibility'
							onClick={() => {
								setShowPassword((prevState) => !prevState);
							}}
						/>
					) : (
						<EyeOn
							className='visibility'
							onClick={() => {
								setShowPassword((prevState) => !prevState);
							}}
						/>
					)}
				</div>
				<button className='btn' type='submit'>
					Login
				</button>

				<Oauth />
			</form>
		</div>
	);
}

export default Login;
