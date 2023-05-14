import React, {useContext} from "react";
import styles from "./EducationDetails.module.scss";
import Education from "./components/Education";
import Certificates from "./components/Certificates";

import {DarkModeContext} from "../../context/DarkModeContext";
import {portfolioInfoProps} from "../../constants/types";

interface AboutProps {
    data: Pick<portfolioInfoProps, "about_me" | "certificate" | "graduate_degree" | "graduate_duration" | "university">;
}

const EducationDetails: React.FC<AboutProps> = (props) => {
    const {data} = props;
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={`${styles.EducationDetails} ${darkMode ? styles["EducationDetails--dark"] : ""}`}>
            <Education data={data}/>
            <div className={styles.EducationDetails__section__seperator}/>
            <Certificates certificate={data.certificate}/>
        </div>

    );
};

export default EducationDetails;
