import { Outlet } from "react-router-dom";
import { CustomLink } from "../../components/CustomLink";

export const Items: React.FC = () => {
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <br />
        <CustomLink to="/items/1">Item 1</CustomLink>
        <br />
        <CustomLink to="/items/2">Item 2</CustomLink>
        <br />
        <CustomLink to="/items/3">Item 3</CustomLink>
      </nav>
      <h1>Items</h1>
      <p>This is the items page.</p>

      <Outlet />
    </div>
  );
};
