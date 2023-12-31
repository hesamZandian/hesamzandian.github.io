interface WorkExperienceProps {
    company_logo: string;
    company_name: string;
    role: string;
    country: string;
    city: string;
    start_date: string;
    end_date?: string;
    responsibilities: string[];
}

interface portfolioInfoProps {
    full_name: string;
    role: string;

    about_me: string;
    graduate_degree: string;
    graduate_duration: string;
    university: string;
    certificate: string;
    work_experiences: WorkExperienceProps[];

}

export type { portfolioInfoProps, WorkExperienceProps }