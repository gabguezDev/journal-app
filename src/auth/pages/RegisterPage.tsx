import { Typography, Grid, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { authRoutes } from "../routes";

type Props = {};

export const RegisterPage = (props: Props) => {
	return (
		<AuthLayout title="Register">
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre completo"
							type="text"
							placeholder="Cosme Fulanito"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							placeholder="Correo electrónico"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							placeholder="Contraseña"
							fullWidth
						/>
					</Grid>

					<Grid container spacing={2} sx={{ my: 1 }}>
						<Grid item xs={12}>
							<Button variant="contained" fullWidth>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography>¿Ya tienes cuenta?</Typography>
						<Link
							component={RouterLink}
							color="inherit"
							to={`..${authRoutes.LOGINPAGE}`}
							sx={{ ml: 1 }}
						>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
