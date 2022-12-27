import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { useAppDispatch } from "../store/store";
import { login, logout } from "../store";

import { useAppStore } from "./useAppStore";

export const useCheckAuth = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppStore().auth;

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, user => {
			if (!user) return dispatch(logout(null));

			dispatch(
				login({
					displayName: user.displayName,
					email: user.email,
					uid: user.uid,
				})
			);
		});
	}, []);

	return status;
};
