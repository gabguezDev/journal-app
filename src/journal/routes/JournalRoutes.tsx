import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { JournalPage } from "../pages";
import { journalRoutes } from "./routes";

export const JournalRoutes = () => {
	return (
		<Routes>
			<Route path={journalRoutes.JOURNALPAGE} element={<JournalPage />} />
			<Route
				path={journalRoutes.JOKER}
				element={<Navigate to={journalRoutes.JOURNALPAGE} />}
			/>
		</Routes>
	);
};
