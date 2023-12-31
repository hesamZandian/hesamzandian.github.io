import React, { useContext } from "react";
import styles from "./WorkExperience.module.scss";

import { DarkModeContext } from "../../../context/DarkModeContext";
import { WorkExperienceProps } from "../../../constants/types";

interface WorkExperienceMoreDetailsProps {
  data: WorkExperienceProps;
}

const WorkExperience: React.FC<WorkExperienceMoreDetailsProps> = (props) => {
  const { data } = props;
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${styles.WorkExperience__Company}  ${
        darkMode ? styles["WorkExperience--dark"] : ""
      }`}
      key={data.company_name}
    >
      <div className={styles.WorkExperience__CompanyDetailsContainer}>
        <div className={styles.WorkExperience__CompanyDetails}>
          <div className={styles.WorkExperience__CompanyImage}>
            <img alt="company" loading="lazy" src={data?.company_logo} />
          </div>
          <div className={styles.WorkExperience__CompanyInfo}>
            <h3 className={styles.WorkExperience__CompanyInfo__name}>
              {data?.company_name}
            </h3>
            <span className={styles.WorkExperience__CompanyInfo__role}>
              {data?.role}
            </span>
            <span className={styles.WorkExperience__CompanyInfo__details}>
              {data?.country} - {data?.city} | {data?.start_date} -{" "}
              {data?.end_date ?? "Present"}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.WorkExperience__Responsibilities}>
        <h3>Responsibilities:</h3>
        <ul>
          {data.responsibilities.map((responsibility: string, rdx) => {
            return (
              <li>
                <span key={rdx}>{responsibility}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
