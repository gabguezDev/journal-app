import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	Grid,
	ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

import { Note, setActiveNote } from "../../store/journal/journalSlice";
import { useAppDispatch } from "../../store/store";
import { useMemo } from "react";
import { useAppStore } from "../../hooks/useAppStore";
import { useForm } from "../../auth/hooks/useForm";

export const SidebarItem = ({ body, title, date, id, imageUrls }: Note) => {
	const dispatch = useAppDispatch();

	const cutTitle = useMemo(() => {
		if (title?.length > 20) return title.substring(0, 20) + "...";
		return title;
	}, [title]);

	const cutBody = useMemo(() => {
		if (body?.length > 20) return body.substring(0, 20) + "...";
		return body;
	}, [body]);

	const onSideBarItemClick = (note: Note) => {
		dispatch(setActiveNote(note));
	};
	return (
		<ListItem
			disablePadding
			onClick={() => onSideBarItemClick({ body, title, date, id, imageUrls })}
		>
			<ListItemButton>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container direction="column">
					<ListItemText primary={cutTitle} />
					<ListItemText
						secondary={cutBody}
						sx={{
							maxHeight: 100,
							overflow: "hidden",
						}}
					/>
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
