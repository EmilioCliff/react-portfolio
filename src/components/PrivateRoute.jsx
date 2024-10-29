import { Navigate } from "react-router";
import { Outlet } from "react-router";
import Spinner from "./Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus";

function PrivateRoute() {
	const { isLoggedIn, checkingStatus } = useAuthStatus();

	if (checkingStatus) {
		return <Spinner />;
	}

	return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
