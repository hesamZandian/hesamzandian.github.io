import React from "react";
import styles from "../EducationDetails.module.scss";
import {portfolioInfoProps} from "../../../constants/types";

interface EducationProps {
    data: Pick<portfolioInfoProps, "graduate_degree" | "graduate_duration" | "university">
}

const Education: React.FC<EducationProps> = (props) => {
    const {data} = props;
    return (
        <div className={styles.EducationDetails__section}>
            <h3 className={styles.EducationDetails__section__title}>EDUCATION</h3>
            <span className={styles.Education__degree}>{data.graduate_degree}</span>
            <p className={styles.Education__university}>{data.university}</p>
            <p className={styles.Education__time}>{data.graduate_duration}</p>
        </div>
    );
};

export default Education;
