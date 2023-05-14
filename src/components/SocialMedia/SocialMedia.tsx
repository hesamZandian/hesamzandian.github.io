import React, {useContext} from "react";
import styles from "./SocialMedia.module.scss";

import {ReactComponent as LinkedInIcon} from "../../assets/svg/linkedIn.svg";
import {ReactComponent as GithubIcon} from "../../assets/svg/github.svg";
import {DarkModeContext} from "../../context/DarkModeContext";

const socialMedias = [
    {
        icon: LinkedInIcon,
        href: "https://ir.linkedin.com/in/hesam-zandian-98155a120"
    },
    {
        icon: GithubIcon,
        href: "https://github.com/hesamZandian"
    },
];

const SocialMedia = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={`${styles.SocialMedia} ${darkMode ? styles["SocialMedia--dark"] : ""}`}>
            {socialMedias.map((socialMedia, socialMediaIndex) => {
                const Icon = socialMedia.icon;
                return <a href={socialMedia.href} key={socialMediaIndex} className={styles.SocialMediaIcon}><Icon/></a>;
            })}
        </div>
    );
};

export default SocialMedia;
