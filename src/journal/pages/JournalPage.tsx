import { AddOutlined } from "@mui/icons-material";
import { Typography, IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { useAppDispatch } from "../../store/store";
import { logout } from "../../store";
import { startNewNote } from "../../store/journal/thunks";
import { useAppStore } from "../../hooks/useAppStore";

type Props = {};

export const JournalPage = (props: Props) => {
	const dispatch = useAppDispatch();

	const { isSaving, active } = useAppStore().journal;

	const onAddNewNoteClick = () => {
		dispatch(
			startNewNote({
				body: "body",
				date: new Date().getDate(),
				imageUrls: ["urlImg1", "urlImg2"],
				title: "Nota 1",
			})
		);
	};

	return (
		<JournalLayout>
			{/* <Typography component="h1" variant="h1">
				asdasdasd
			</Typography> */}

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
