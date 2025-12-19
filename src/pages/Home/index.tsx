import { ToggleShow } from "../../components/ToggleShow";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <ToggleShow>
        <div>Hello World</div>
      </ToggleShow>
    </div>
  );
};
