import { createSlice } from "@reduxjs/toolkit";

export enum AuthStatusEnum {
	checking = "CHECKING",
	notAuthenticated = "NOT-AUTHENTICATED",
	authenticated = "AUTHENTICATED",
}

interface AuthState {
	status: AuthStatusEnum;
	uid: string | null;
	email: string | null;
	displayName: string | null;
	photoURL: string | null;
	errorMessage: string | null;
}

export const initialState: AuthState = {
	status: AuthStatusEnum.checking,
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.displayName = action.payload.displayName;
			state.uid = action.payload.uid;
			state.photoURL = action.payload.photoURL;
			state.email = action.payload.email;
			state.status = AuthStatusEnum.authenticated;
			state.errorMessage = null;
		},
		logout: (state, { payload }) => {
			state.displayName = initialState.displayName;
			state.uid = initialState.uid;
			state.email = initialState.email;
			state.status = AuthStatusEnum.notAuthenticated;
			state.errorMessage = !!payload ? null : payload;
		},
		checkingCredentials: (state /* action */) => {
			state.status = AuthStatusEnum.checking;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
