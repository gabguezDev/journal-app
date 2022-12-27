import {
	Typography,
	Grid,
	TextField,
	Button,
	Link,
	Alert,
} from "@mui/material";
import { AuthLayout } from "../layout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../hooks";
import { FormEvent } from "react";
import { startRegisterUserWithEmailAndPassword } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useAppStore } from "../../hooks/useAppStore";

const formData = {
	displayName: "",
	email: "",
	password: "",
};

const formValidations = {
	email: [
		(value: string) => value.includes("@"),
		"El correo debe de tener una @",
	],
	password: [
		(value: string) => value.length >= 6,
		"El password debe de tener al menos 6 caracteres",
	],
	displayName: [
		(value: string) => value.length >= 1,
		"El nombre es obligatorio",
	],
};

export const RegisterPage = () => {
	const dispatch = useAppDispatch();

	const { errorMessage } = useAppStore().auth;
	const {
		setIsFormSubmitted,
		isFormSubmitted,
		isFormValid,
		formValidation,
		formState,
		onInputChange,
	} = useForm(formData, formValidations);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(
			startRegisterUserWithEmailAndPassword(
				formState.displayName,
				formState.email,
				formState.password
			)
		);
	};

	return (
		<AuthLayout title="Register">
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre completo"
							type="text"
							name="displayName"
							placeholder="Cosme Fulanito"
							fullWidth
							onChange={onInputChange}
							value={formState.displayName}
							error={isFormSubmitted && !!formValidation["displayNameValid"]}
							helperText={isFormSubmitted && formValidation["displayNameValid"]}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							name="email"
							placeholder="Correo electrónico"
							fullWidth
							onChange={onInputChange}
							value={formState.email}
							error={isFormSubmitted && !!formValidation["emailValid"]}
							helperText={isFormSubmitted && formValidation["emailValid"]}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							name="password"
							placeholder="Contraseña"
							fullWidth
							onChange={onInputChange}
							value={formState.password}
							error={isFormSubmitted && !!formValidation["passwordValid"]}
							helperText={isFormSubmitted && formValidation["passwordValid"]}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ my: 1 }}>
						<Grid item xs={12} display={!!errorMessage ? "" : "none"}>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12}>
							<Button variant="contained" type="submit">
								Crear cuenta
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography>¿Ya tienes cuenta?</Typography>
						<Link
							component={RouterLink}
							color="inherit"
							to="../login"
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
