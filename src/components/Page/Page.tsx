import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

import styles from "./Page.module.scss";

// svgs
import {ReactComponent as SunIcon} from "../../assets/svg/sun.svg";
import {ReactComponent as MoonIcon} from "../../assets/svg/moon.svg";

interface PageProps {
    children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
    const {children} = props;
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    return (
        <div
            className={`${styles.Page} ${darkMode ? styles["Page--dark"] : ""}`}
            {...props}
        >
            <div className={styles.Page__Content}>
                <div className={styles.Page__Content__ToggleButton} onClick={toggleDarkMode}>
                    {darkMode ? <SunIcon/> : <MoonIcon/>}
                </div>
                {children}</div>
        </div>
    );
};

export default Page;
