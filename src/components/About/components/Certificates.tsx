import React from 'react'
import styles from "../EducationDetails.module.scss";

interface CertificatesProps {
    certificate: string;
}

const Certificates: React.FC<CertificatesProps> = ({certificate}) => {
    return (
        <div className={styles.EducationDetails__section}>
            <h3 className={styles.EducationDetails__section__title}>CERTIFICATES</h3>
            <p className={styles.Certificates__title}>{certificate}</p>
        </div>
    )
}

export default Certificates;