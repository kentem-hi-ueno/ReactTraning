import React from "react";

type ButtonProps = {
  handleClick: (text: string) => void;
};
const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div className="btn">
      <button onClick={() => handleClick("prev")}>前へ</button>
      <button onClick={() => handleClick("next")}>次へ</button>
    </div>
  );
};

export default Button;
