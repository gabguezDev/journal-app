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
			state.isSaving = false;
		},
		setActiveNote: (state, { payload }: PayloadAction<Note>) => {
			state.active = payload;
			state.messageSaved = null;
		},
		savingNewNote: state => {
			state.isSaving = false;
		},
		setSaving: state => {
			state.isSaving = true;
			state.messageSaved = null;
		},
		setNotes: (state, { payload }: PayloadAction<Note[]>) => {
			state.notes = payload;
		},
		updateNote: (state, { payload }: PayloadAction<Note>) => {
			state.notes = state.notes.map(note =>
				note.id === payload.id ? payload : note
			) as Note[];

			state.isSaving = true;
			state.messageSaved = "Nota actualizada con éxito";
		},
		setPhotosURLsToActiveNote: (
			state,
			{ payload }: PayloadAction<string[]>
		) => {
			if (!!state.active) {
				state.active.imageUrls = [...state.active?.imageUrls, ...payload];
			}
			state.isSaving = false;
		},
		resetJournalStore: state => {
			state = initialState;
		},
		deleteNoteById: (state, { payload }: PayloadAction<Partial<Note>>) => {
			state.active = null;
			state.notes = state.notes.filter(
				note => note.id !== payload.id
			) as Note[];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	savingNewNote,
	setSaving,
	updateNote,
	deleteNoteById,
	setPhotosURLsToActiveNote,
	resetJournalStore,
} = journalSlice.actions;
