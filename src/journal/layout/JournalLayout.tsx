import { ReactNode } from "react";
import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

type Props = {
	children: ReactNode;
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
	return (
		<Box sx={{ display: "flex" }}>
			{/* Navbar drawerWidth */}
			<NavBar drawerWidth={drawerWidth} />

			{/* Sidebar drawerWidth */}
			<SideBar drawerWidth={drawerWidth} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
