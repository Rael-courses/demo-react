import { InputFieldRef } from "../../components/InputFieldRef";
import { InputFieldState } from "../../components/InputFieldState";

export const Home: React.FC = () => {
  return (
    <div>
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
