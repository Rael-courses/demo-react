import { useParams } from "react-router-dom";

export const Item: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();

  if (!itemId) {
    return null;
  }

  return (
    <div>
      <h1>Item id: {itemId}</h1>
    </div>
  );
};
