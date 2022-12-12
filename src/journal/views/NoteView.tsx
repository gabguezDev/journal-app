import { Grid, Typography, Button, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

type Props = {};

export const NoteView = (props: Props) => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					28 de Agosto, 2023
				</Typography>
			</Grid>
			<Grid item>
				<Button color="primary" sx={{ p: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un título"
					label="Título"
					sx={{ border: "none", mb: 1 }}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Qué sucedió en el día de hoy?"
					minRows={5}
					sx={{ border: "none", mb: 1 }}
				/>
			</Grid>

			{/* Image gallery */}
			<ImageGallery />
		</Grid>
	);
};
