import { RootState } from "../store";

export const authSelector = (state: RootState) => state.auth;
export const journalSelector = (state: RootState) => state.journal;

// export const todosSelector = (state: RootState) => state.todos;
