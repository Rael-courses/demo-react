import { useParams } from "react-router-dom";
import { useGetTodo } from "../../api/getTodo";

export const Item: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();

  const { data: item } = useGetTodo(itemId);

  if (!itemId) {
    return null;
  }

  return (
    <div>
      <p>Item id: {itemId}</p>
      <p>Item title: {item?.title}</p>
      <p>Item completed: {item?.completed ? "Yes" : "No"}</p>
      <p>Item userId: {item?.userId}</p>
    </div>
  );
};
