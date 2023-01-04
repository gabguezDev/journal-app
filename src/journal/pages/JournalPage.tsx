import { AddOutlined } from "@mui/icons-material";
import { Typography, IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { useAppDispatch } from "../../store/store";
import { logout } from "../../store";
import { startNewNote } from "../../store/journal/thunks";
import { useAppStore } from "../../hooks/useAppStore";

const newNote = {
	body: "Escriba la descripción aquí",
	date: new Date().toLocaleDateString(),
	imageUrls: [],
	title: "Nueva Nota",
};

export const JournalPage = () => {
	const dispatch = useAppDispatch();

	const { isSaving, active } = useAppStore().journal;

	const onAddNewNoteClick = () => {
		dispatch(startNewNote(newNote));
	};

	return (
		<JournalLayout>
			{!!active ? <NoteView /> : <NothingSelectedView />}

			<IconButton
				onClick={onAddNewNoteClick}
				disabled={isSaving}
				size="large"
				sx={{
					color: "white",
					backgroundColor: "error.main",
					":hover": { backgroundColor: "error.main", opacity: 0.9 },
					position: "fixed",
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined />
			</IconButton>
		</JournalLayout>
	);
};
