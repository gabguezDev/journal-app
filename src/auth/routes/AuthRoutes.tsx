import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router";
import { LoginPage, RegisterPage } from "../pages";
import { authRoutes } from "./routes";
import { appRoutes } from "../../router/routes";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path={authRoutes.LOGINPAGE} element={<LoginPage />} />
			<Route path={authRoutes.REGISTERPAGE} element={<RegisterPage />} />

			<Route
				path={authRoutes.JOKER}
				element={<Navigate to={appRoutes.JOURNAL} />}
			/>
		</Routes>
	);
};
