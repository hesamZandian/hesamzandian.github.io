import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;
  const { darkMode } = useContext(DarkModeContext);
  return (
    <button
      className={`${styles.button} ${darkMode ? styles["button--dark"] : ""} ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
