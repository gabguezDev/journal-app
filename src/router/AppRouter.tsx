import { Routes, Route } from "react-router-dom";

import { AuthRoutes } from "../auth/routes";
import { JournalRoutes } from "../journal/routes";

import { appRoutes } from "./routes";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={appRoutes.AUTH} element={<AuthRoutes />} />

			<Route path={appRoutes.JOURNAL} element={<JournalRoutes />} />
		</Routes>
	);
};
