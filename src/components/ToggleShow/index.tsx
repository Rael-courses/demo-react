import { useState, type PropsWithChildren } from "react";

export const ToggleShow: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isShow && <div>{children}</div>}
    </div>
  );
};
