import { CircularProgress, Grid } from "@mui/material";
import React from "react";

type Props = {};

export const CheckingAuth = (props: Props) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh", backgroundColor: "primary.main", p: 4 }}
		>
			<Grid item xs={12}>
				<CircularProgress size="5rem" color="warning" />
			</Grid>
		</Grid>
	);
};
