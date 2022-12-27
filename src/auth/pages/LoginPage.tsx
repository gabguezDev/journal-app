import { FormEvent } from "react";

import { Link as RouterLink } from "react-router-dom";

import {
	Grid,
	Typography,
	TextField,
	Button,
	Link,
	Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout";

import { useForm } from "../hooks";
import { useAppDispatch } from "../../store/store";
import {
	checkingAuthentication,
	startGoogleSignIn,
	startLoginUserWithEmailAndPassword,
} from "../../store/auth/thunks";
import { useAppStore } from "../../hooks/useAppStore";

export const LoginPage = () => {
	const dispatch = useAppDispatch();
	const { errorMessage } = useAppStore().auth;

	const { formState, onInputChange } = useForm({
		email: "",
		password: "",
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formState", formState);
		dispatch(checkingAuthentication());
		dispatch(
			startLoginUserWithEmailAndPassword(formState.email, formState.password)
		);
	};

	const onGoogleSignIn = () => {
		dispatch(checkingAuthentication());
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title="Login">
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							name="email"
							placeholder="correo@google.com"
							fullWidth
							value={formState.email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							name="password"
							placeholder="contraseña"
							fullWidth
							value={formState.password}
							onChange={onInputChange}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ my: 1 }}>
						<Grid item xs={12} display={!!errorMessage ? "" : "none"}>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" fullWidth type="submit">
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" fullWidth onClick={onGoogleSignIn}>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Link component={RouterLink} color="inherit" to="../register">
							Crea una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
