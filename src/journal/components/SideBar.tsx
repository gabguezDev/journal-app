import React from "react";
import {
	Box,
	Drawer,
	Typography,
	Toolbar,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useAppStore } from "../../hooks/useAppStore";
import { SidebarItem } from "./SidebarItem";
import { setActiveNote } from "../../store/journal";
import { useAppDispatch } from "../../store/store";

type Props = {
	drawerWidth: number;
};

export const SideBar = ({ drawerWidth }: Props) => {
	const { displayName } = useAppStore().auth;
	const { notes } = useAppStore().journal;

	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography component="div" variant="h6" noWrap>
						{displayName}
					</Typography>
				</Toolbar>

				<Divider />

				<List>
					{notes.map(note => (
						<SidebarItem key={note.id} {...note} />
					))}
				</List>
			</Drawer>
		</Box>
	);
};
