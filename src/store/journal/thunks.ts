import { collection, doc, setDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import {
	addNewEmptyNote,
	setActiveNote,
	startSavingNewNote,
	updateNote,
	deleteNoteById,
	Note,
	setNotes,
	setSaving,
} from "./journalSlice";

export const startNewNote = (newNote: Partial<Note>) => {
	return async (dispatch: any, getState: any) => {
		dispatch(startSavingNewNote());

		const { uid } = getState().auth;

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewEmptyNote(newNote as Note));
		dispatch(setActiveNote(newNote as Note));
		dispatch(setSaving());
	};
};

export const startLoadingNotes = () => {
	return async (dispatch: any, getState: any) => {
		dispatch(startSavingNewNote());

		const { uid } = getState().auth;

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes as Note[]));
		dispatch(setSaving());
	};
};

export const startSavingNote = () => {
	return async (dispatch: any, getState: any) => {
		dispatch(startSavingNewNote());

		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		dispatch(updateNote(note));

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

		await setDoc(docRef, noteToFirestore, { merge: true });
		dispatch(setSaving());
	};
};
