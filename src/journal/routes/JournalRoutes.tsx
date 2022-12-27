import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { JournalPage } from "../pages";

export const JournalRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<JournalPage />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};
