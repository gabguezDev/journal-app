import { useAppSelector } from "../store";
import {
	authSelector,
	journalSelector,
} from "../store/selectors/useCustomSelectors";

export const useAppStore = () => {
	const auth = useAppSelector(authSelector);
	const journal = useAppSelector(journalSelector);
	// const pokemon = useAppSelector(pokemonSelector);
	// const todos = useAppSelector(todosSelector);

	return {
		auth,
		journal,
		// todos,
	};
};
