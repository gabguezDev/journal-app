import { useAppSelector } from "../store";
import { authSelector } from "../store/selectors/useCustomSelectors";

export const useAppStore = () => {
	const auth = useAppSelector(authSelector);
	// const pokemon = useAppSelector(pokemonSelector);
	// const todos = useAppSelector(todosSelector);

	return {
		auth,
		// pokemon,
		// todos,
	};
};
