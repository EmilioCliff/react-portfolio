import { useState, useRef, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [checkingStatus, setCheckingStatus] = useState(true);
	const isMounted = useRef();

	useEffect(() => {
		if (isMounted) {
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setIsLoggedIn(true);
				}
				setCheckingStatus(false);
			});
		}
	}, [isMounted]);

	return { isLoggedIn, checkingStatus };
};
