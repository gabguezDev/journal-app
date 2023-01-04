import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import {
	DeleteOutline,
	DeleteOutlined,
	SaveOutlined,
	UploadOutlined,
} from "@mui/icons-material";
import { ImageGallery } from "../components";
import { useAppStore } from "../../hooks/useAppStore";
import { useForm } from "../../auth/hooks/useForm";
import {
	startSavingNote,
	startUploadingFiles,
} from "../../store/journal/thunks";
import { useAppDispatch } from "../../store/store";
import { useEffect, ChangeEvent, useRef } from "react";
import { setActiveNote } from "../../store/journal";
import Swal from "sweetalert2";
import { startDeletingNote } from "../../store/auth/thunks";

export const NoteView = () => {
	const dispatch = useAppDispatch();
	const { active: note, isSaving, messageSaved } = useAppStore().journal;

	const onSaveNoteClick = () => {
		dispatch(startSavingNote());
	};

	const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files?.length === 0) return;

		dispatch(startUploadingFiles(e.target.files as FileList));
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

	const {
		formState,
		onInputChange,
		date,
		body: bodyFromUseForm,
		title: titleFromUseForm,
	} = useForm(note as any);

	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (!!messageSaved && messageSaved?.length > 0) {
			Swal.fire(
				"Notificación",
				!!messageSaved ? (messageSaved as string) : "",
				"success"
			);
		}
	}, [messageSaved]);

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					{date.toLocaleString()}
				</Typography>
			</Grid>
			<Grid item>
				<input
					hidden
					type="file"
					ref={fileInputRef}
					multiple
					onChange={onFileInputChange}
				/>
				<IconButton
					disabled={isSaving}
					color="primary"
					onClick={() => fileInputRef.current?.click()}
				>
					<UploadOutlined />
				</IconButton>
				<Button
					color="primary"
					sx={{ p: 2 }}
					onClick={onSaveNoteClick}
					disabled={isSaving}
				>
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
					name="title"
					onChange={onInputChange}
					value={titleFromUseForm}
					sx={{ border: "none", mb: 1 }}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Qué sucedió en el día de hoy?"
					minRows={5}
					name="body"
					onChange={onInputChange}
					value={bodyFromUseForm}
					sx={{ border: "none", mb: 1 }}
				/>
			</Grid>
			<Grid container justifyContent="end">
				<Button onClick={onDelete} color="error" startIcon={<DeleteOutlined />}>
					Borrar
				</Button>
			</Grid>

			{/* Image gallery */}
			<ImageGallery {...note} />
		</Grid>
	);
};
