import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

function JournalApp() {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	);
}

export default JournalApp;
