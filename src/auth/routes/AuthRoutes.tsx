import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={<LoginPage />} />
			<Route path="register" element={<RegisterPage />} />

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};
