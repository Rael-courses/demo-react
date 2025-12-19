import { useEffect, useState, type PropsWithChildren } from "react";

export const ToggleShow: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const isShowStr = localStorage.getItem("isShow");
      const isShow = isShowStr === "true";
      setIsShow(isShow);
    };
    initialize();
  }, []);

  const handleClick = () => {
    const newIsShow = !isShow;

    localStorage.setItem("isShow", newIsShow.toString());
    setIsShow(newIsShow);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isShow && <div>{children}</div>}
    </div>
  );
};
