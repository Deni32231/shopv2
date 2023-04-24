import React, { FC } from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: any;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      data-testid="btn"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
