import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useGetTodos } from "../../api/getTodos";
import { CustomLink } from "../../components/CustomLink";

export const Items: React.FC = () => {
  const { data: todos } = useGetTodos();
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <br />
        {todos?.map((todo) => (
          <Fragment key={todo.id}>
            <CustomLink to={`/items/${todo.id}`}>
              {todo.id} - {todo.title}
            </CustomLink>
            <br />
          </Fragment>
        ))}
      </nav>
      <h1>Items</h1>
      <p>This is the items page.</p>

      <Outlet />
    </div>
  );
};
