import { Routes, Route, Navigate } from "react-router-dom";

import { JournalRoutes } from "../journal/routes";

import { CheckingAuth } from "../ui";
import { AuthStatusEnum } from "../store";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AuthRoutes } from "../auth/routes";

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === AuthStatusEnum.checking) return <CheckingAuth />;

	return (
		<Routes>
			{status === AuthStatusEnum.authenticated ? (
				<Route path="/*" element={<JournalRoutes />} />
			) : (
				<Route path="/auth/*" element={<AuthRoutes />} />
			)}

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};
