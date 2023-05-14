import React, { useContext } from "react";
import styles from "./WorkExperiences.module.scss";
import WorkExperience from "./WorkExperience/WorkExperience";
import { DarkModeContext } from "../../context/DarkModeContext";
import { WorkExperienceProps, portfolioInfoProps } from "../../constants/types";

interface WorkExperiencesProps {
  data: Pick<portfolioInfoProps, "work_experiences">;
}

const WorkExperiences: React.FC<WorkExperiencesProps> = ({ data }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? styles["WokExperiences--dark"] : ""}>
      <div className={styles.WorkExperiences}>
        <h3 className={styles.WokExperiences__title}>WORK EXPERIENCES</h3>
        {data?.work_experiences.map((work_experience: WorkExperienceProps) => {
          return (
            <WorkExperience data={work_experience} />
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperiences;
