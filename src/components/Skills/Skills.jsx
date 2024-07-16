import { useContext } from "react";
import styles from "./Skills.module.scss";
import { DarkModeContext } from "../../context/DarkModeContext";

export const Skills = (props) => {
    const { data } = props;
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <h3 className={styles.Skills__title}>SKILLS</h3>
            <div className={`${styles.Skills} ${darkMode ? styles.Skills__dark: ""}`}>
                {data.map((item) => {
                    return <>
                        <h4 className={`${styles.Title} ${item?.still_learning ? styles.Learning: ``}`}>{item.title}</h4>
                        <div className={styles.List}>
                            {item.skills.map((skill) => (<span>{skill}</span>))}
                        </div>
                    </>
                })}
            </div>
        </>
    )
}
