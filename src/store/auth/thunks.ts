import {
	loginUserWithEmailAndPassword,
	registerUserWithEmailAndPassword,
	signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { logoutFirebase } from "../../firebase/providers";
import { FirebaseDB } from "../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { deleteNoteById, setNotes } from "../journal";

export const checkingAuthentication =
	(/* email: string, password: string */) => {
		return async (
			dispatch: (arg0: {
				payload: undefined;
				type: "auth/checkingCredentials";
			}) => void
		) => {
			dispatch(checkingCredentials());
		};
	};

export const startGoogleSignIn = () => {
	return async (dispatch: any) => {
		dispatch(checkingCredentials());

		const result = await signInWithGoogle();

		if (!result) dispatch(logout({ errorMessage: result }));

		dispatch(login({ ...result }));
	};
};

export const startRegisterUserWithEmailAndPassword = (
	displayName: string,
	email: string,
	password: string
) => {
	return async (dispatch: any) => {
		dispatch(checkingCredentials());

		const result: any = await registerUserWithEmailAndPassword(
			displayName,
			email,
			password
		);

		console.log("registerUserWithEmailAndPassword -> result -> ", result);

		if (!result.ok) return dispatch(logout(result.error.code as string));

		dispatch(
			login({ displayName: result.displayName, email: result.registeredEmail })
		);
	};
};

export const startLoginUserWithEmailAndPassword = (
	email: string,
	password: string
) => {
	return async (dispatch: any) => {
		dispatch(checkingCredentials());

		const result: any = await loginUserWithEmailAndPassword(email, password);

		console.log("registerUserWithEmailAndPassword -> result -> ", result);

		if (!result.ok) return dispatch(logout(result.error.code as string));

		dispatch(
			login({
				displayName: result.displayName,
				email: result.registeredEmail,
				uid: result.uid,
			})
		);
	};
};

export const startLogout = () => {
	return async (dispatch: any) => {
		await logoutFirebase();
		dispatch(logout(null));
	};
};
export const startDeletingNote = () => {
	return async (dispatch: any, getState: any) => {
		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

		await deleteDoc(docRef);

		dispatch(deleteNoteById(note.id));
		// dispatch(setNotes());
	};
};
