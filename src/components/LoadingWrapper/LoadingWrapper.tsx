import React from "react";
import styles from "./LoadingWrapper.module.scss";

interface LoadingWrapperProps {
  loading: boolean;
  children: React.ReactNode;
  darkMode: boolean;
}
const LoadingWrapper: React.FC<LoadingWrapperProps> = (props) => {
  const { loading, children, darkMode } = props;

  if (loading) {
    return (
      <div className={`${styles.LoadingWrapperContainer} ${darkMode ? styles["LoadingWrapperContainer--dark"]: ""}`}>
        <div className={styles.LoadingWrapper}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div className={styles.LoadingWrapperItem} />
            ))}
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingWrapper;
