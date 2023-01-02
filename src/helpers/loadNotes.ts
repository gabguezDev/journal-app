import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

import { Note } from "../store/journal/journalSlice";

export const loadNotes = async (uid: string) => {
	const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

	const docs = await getDocs(collectionRef);

	const notes: Partial<Note>[] = [];

	docs.forEach(doc => {
		notes.push({
			id: doc.id,
			...doc.data(),
		});
	});

	return notes;
};
