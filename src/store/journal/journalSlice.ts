import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = {
	id: string;
	title: string;
	body: string;
	date: Date | string | number;
	imageUrls: string[];
};

interface JournalState {
	isSaving: boolean;
	messageSaved: string | null;
	notes: Note[] | [];
	active: Note | null;
}

export const initialState: JournalState = {
	isSaving: false,
	messageSaved: null,
	notes: [],
	active: null,
};

export const journalSlice = createSlice({
	name: "journal",
	initialState,
	reducers: {
		addNewEmptyNote: (state, { payload }: PayloadAction<Note>) => {
			state.notes = [payload, ...state.notes];
		},
		setActiveNote: (state, { payload }: PayloadAction<Note>) => {
			state.active = payload;
		},
		startSavingNewNote: state => {
			state.isSaving = true;
			state.messageSaved = null;
		},
		setSaving: state => {
			state.isSaving = false;
			state.messageSaved = null;
		},
		setNotes: (state, { payload }: PayloadAction<Note[]>) => {
			state.notes = payload;
		},
		updateNote: (state, { payload }: PayloadAction<Note>) => {
			state.notes = state.notes.map(note =>
				note.id === payload.id ? payload : note
			) as Note[];

			state.messageSaved = "Nota actualizada con éxito";
		},
		deleteNoteById: state => {},
	},
});

// Action creators are generated for each case reducer function
export const {
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	startSavingNewNote,
	setSaving,
	updateNote,
	deleteNoteById,
} = journalSlice.actions;
