import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type Props = PropsWithChildren<{
  to: string;
}>;

export const CustomLink: React.FC<Props> = ({ to, children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return <button onClick={handleClick}>{children}</button>;
};
