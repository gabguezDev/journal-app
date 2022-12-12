import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

export const NothingSelectedView = (props: Props) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: "calc(100vh - 110px)",
				backgroundColor: "primary.main",
				borderRadius: 3,
				p: 4,
			}}
		>
			<Grid item xs={12}>
				<StarOutline sx={{ fontSize: 100, color: "white" }} />
			</Grid>
			<Grid item xs={12}>
				<Typography color="white" variant="h5">
					Selecciona o crea una entrada
				</Typography>
			</Grid>
		</Grid>
	);
};
