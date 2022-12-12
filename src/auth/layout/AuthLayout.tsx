import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	title: string;
};

export const AuthLayout = ({ children, title }: Props) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh", backgroundColor: "primary.main", p: 4 }}
		>
			<Grid
				item
				className="box-shadow"
				xs={12}
				sx={{
					width: { sm: 400, md: 450, lg: 500 },
					backgroundColor: "white",
					p: 3,
					borderRadius: 2,
				}}
			>
				<Typography variant="h5" sx={{ mb: 1 }}>
					{title}
				</Typography>
				{children}
			</Grid>
		</Grid>
	);
};
