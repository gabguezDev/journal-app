import { AddOutlined } from "@mui/icons-material";
import { Typography, IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";

type Props = {};

export const JournalPage = (props: Props) => {
	return (
		<JournalLayout>
			{/* <Typography component="h1" variant="h1">
				asdasdasd
			</Typography> */}

			<NothingSelectedView />

			{/* <NoteView /> */}

			<IconButton
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
