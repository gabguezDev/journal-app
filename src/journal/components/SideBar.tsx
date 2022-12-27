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

type Props = {
	drawerWidth: number;
};

export const SideBar = ({ drawerWidth }: Props) => {
	const { displayName } = useAppStore().auth;

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
					{["Enero", "Febero", "Marzo", "Abril", "Mayo"].map(month => (
						<ListItem key={month} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={month} />
									<ListItemText secondary="Lorem ipsum dolor et" />
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
