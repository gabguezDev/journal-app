import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,

			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		// const errorCode = error.code;
		// const errorMessage = error.message;

		return {
			ok: false,
			// errorMessage,
		};
	}
};
export const registerUserWithEmailAndPassword = async (
	displayName: string,
	email: string,
	password: string
) => {
	try {
		const resp = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		const { email: registeredEmail } = resp.user;

		!!FirebaseAuth.currentUser &&
			updateProfile(FirebaseAuth.currentUser, { displayName });

		console.log("registerUserWithEmailAndPassword -> resp -> ", resp);

		return {
			ok: true,
			displayName,
			registeredEmail,
		};
	} catch (error) {
		return {
			ok: false,
			error,
		};
	}
};

export const loginUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	try {
		const resp = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		const { displayName, email: userEmail, uid } = resp.user;

		return {
			ok: true,
			displayName,
			userEmail,
			uid,
		};
	} catch (error) {
		return {
			ok: false,
			error,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
