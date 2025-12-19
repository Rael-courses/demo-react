import "./App.css";
import { Router } from "./components/Router";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
