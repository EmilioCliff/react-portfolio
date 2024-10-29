import React from "react";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import googleIcon from "../assets/googleIcon.svg";

function Oauth() {
	const navigate = useNavigate();

	const onGoogleLogin = async () => {
		try {
			const auth = getAuth();

			const provider = new GoogleAuthProvider();

			const result = await signInWithPopup(auth, provider);
			const user = result.user;

			const docRef = doc(db, "users", user.uid);
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) {
				toast.error("You are a user please read blogs!!");
			}

			navigate("/admin/blogs");
		} catch (error) {
			toast.error("You are a user please read blogs!!");
		}
	};
	return (
		<div className='socialLogin'>
			<p>Sign in with</p>
			<button type='button' className='socialIconDiv' onClick={onGoogleLogin}>
				<img className='socialIconImg' src={googleIcon} alt='' />
			</button>
		</div>
	);
}

export default Oauth;
