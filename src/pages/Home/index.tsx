import { Link } from "react-router-dom";
import { InputFieldRef } from "../../components/InputFieldRef";
import { InputFieldState } from "../../components/InputFieldState";
import { useThemeContext } from "../../contexts/ThemeContextProvider/utils";

export const Home: React.FC = () => {
  const { setLightMode, setDarkMode } = useThemeContext();

  return (
    <div>
      <button onClick={() => setLightMode()}>Light</button>
      <button onClick={() => setDarkMode()}>Dark</button>
      <nav>
        <Link to="/items">Items</Link>
      </nav>

      <h1>Home</h1>
      {/* <ToggleShow>
        <div>Hello World</div>
        <Chrono />
      </ToggleShow> */}
      <InputFieldState />
      <InputFieldRef />
    </div>
  );
};
