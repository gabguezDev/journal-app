import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { theme } from "./theme";

type Props = {
	children: ReactNode;
};

export const AppTheme = ({ children }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
