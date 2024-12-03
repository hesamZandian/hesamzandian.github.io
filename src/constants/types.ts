interface IExperienceItem {
    company_logo: string;
    company_name: string;
    id: number;
    role: string;
    country: string;
    city: string;
    start_date: string;
    end_date?: string;
    responsibilities: string[];
}

interface ISkill {
    title: string;
    still_learning?: boolean;
    skills: string[];
}

interface IProjectItem {
    title: string;
    role: string;
    description: string;
    demo_link?: string;
    teck_stacks: string[];
}

interface IPortfolio {
    full_name: string;
    role: string;
    resume_link: string;
    graduate_degree: string;
    graduate_location: string;
    graduate_duration: string;
    university: string;
    certificate: string;
    experiences: IExperienceItem[];
    skills: ISkill[];
    projects: IProjectItem[];
}

export type { IPortfolio, ISkill, IExperienceItem }