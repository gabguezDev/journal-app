import { collection, doc, setDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { fileUpload } from "../../helpers/fileUpload";
import {
	addNewEmptyNote,
	setActiveNote,
	savingNewNote,
	updateNote,
	deleteNoteById,
	Note,
	setNotes,
	setSaving,
	setPhotosURLsToActiveNote,
} from "./journalSlice";

export const startNewNote = (newNote: Partial<Note>) => {
	return async (dispatch: any, getState: any) => {
		dispatch(setSaving());

		const { uid } = getState().auth;

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewEmptyNote(newNote as Note));
		dispatch(setActiveNote(newNote as Note));
		dispatch(savingNewNote());
	};
};

export const startLoadingNotes = () => {
	return async (dispatch: any, getState: any) => {
		dispatch(setSaving());

		const { uid } = getState().auth;

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes as Note[]));
		dispatch(savingNewNote());
	};
};

export const startSavingNote = () => {
	return async (dispatch: any, getState: any) => {
		dispatch(setSaving());

		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		dispatch(updateNote(note));

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

		await setDoc(docRef, noteToFirestore, { merge: true });
		dispatch(savingNewNote());
	};
};
export const startUploadingFiles = (files: FileList | null) => {
	return async (dispatch: any) => {
		dispatch(setSaving());

		const filesUpload = [];
		if (!!files && files?.length > 0) {
			for (const file of files) {
				filesUpload.push(fileUpload(file).then(res => res.secure_url));
			}
		}

		const filesURLs = await Promise.all(filesUpload);

		dispatch(setPhotosURLsToActiveNote(filesURLs));
	};
};
