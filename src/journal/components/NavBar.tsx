import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { startLogout } from "../../store/auth/thunks";
import { resetJournalStore } from "../../store/journal";

type Props = {
	drawerWidth: number;
};

export const NavBar = ({ drawerWidth }: Props) => {
	const dispatch = useAppDispatch();

	const onLogout = () => {
		dispatch(startLogout());
		dispatch(resetJournalStore());
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="menu"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography component="div" variant="h6" noWrap>
						JournalApp
					</Typography>
					<IconButton color="inherit" aria-label="logout" onClick={onLogout}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
