import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

import samImg from "../../assets/images/sam.png";
import heroBackDarkImg from "../../assets/images/hero-back-dark.png";
import heroBackLightImg from "../../assets/images/hero-back-light.png";

import { portfolioInfoProps } from "../../constants/types";
import SocialMedia from "../SocialMedia/SocialMedia";

interface HeroProps {
  data: Pick<portfolioInfoProps, "full_name" | "role" | "about_me">;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = (props) => {
  const { data, darkMode } = props;

  return (
    <div
      className={`${styles.HeroContainer} ${
        darkMode ? styles["HeroContainer--dark"] : ""
      }`}
    >
      <div className={styles.Hero}>
        <div className={styles.HeroContent}>
          <div className={styles.HeroContent__title} id="Hero__title">
            <span>Hi I'm</span>
            <h2 className={styles.HeroContent__title__name}>
              {data.full_name}
            </h2>
            <span className={styles.HeroContent__title__role}>{data.role}</span>
          </div>
          <div className={styles.HeroContent__Icons}>
            <SocialMedia />
            <a
              href={`https://drive.google.com/file/d/16uzJHH6B-AJcwGBukONPNy9WwPCLY1cv/view?usp=share_link`}
              target="_blank"
              rel="noreferrer"
            >
              <Button className={styles.HeroContent__button}>
                Download CV
              </Button>
            </a>
          </div>
        </div>
        <svg className={styles.HeroClipPath}>
          <clipPath id="heroClipPath" clipPathUnits="objectBoundingBox">
            <path d="M1,0.465 C1,0.721,0.724,1,0.402,0.999 C0.123,1,0,0.974,0,0.717 C0,0.461,0.192,0.001,0.546,0.001 C0.797,0.001,1,0.209,1,0.465"></path>
          </clipPath>
        </svg>
        <div className={styles.HeroImgContainer}>
          <div className={styles.HeroImgContainer__heroBack}>
            <img loading="lazy" src={darkMode ? heroBackDarkImg: heroBackLightImg} alt="Hero back" height={"100%"} />
            <div className={styles.HeroImgContainer__clipPath}>
              <img
                loading="lazy"
                alt="Hesam Zandian"
                className={styles.HeroImgContainer__clipPath__img}
                src={samImg}
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.HeroContainer__AboutMe}>{data.about_me}</p>
    </div>
  );
};

export default Hero;
