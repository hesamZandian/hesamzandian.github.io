import React, {useContext} from "react";
import EducationDetails from "../../components/About/EducationDetails";
import Hero from "../../components/Hero/Hero";
import LoadingWrapper from "../../components/LoadingWrapper/LoadingWrapper";
import Page from "../../components/Page/Page";
import WorkExperiences from "../../components/WorkExperiences/WorkExperiences";
import {DarkModeContext} from "../../context/DarkModeContext";
import useHome from "../../hooks/useHome";
import { Skills } from "../../components/Skills/Skills";

const Home: React.FC = () => {
    const {darkMode} = useContext(DarkModeContext);
    const {loading, portfolioInfo} = useHome()
    return (
        <LoadingWrapper loading={loading} darkMode={darkMode}>
            <Page>
                <Hero data={portfolioInfo} darkMode={darkMode}/>
                <EducationDetails data={portfolioInfo}/>
                <WorkExperiences data={portfolioInfo}/>
                <Skills data={portfolioInfo.skills} />
            </Page>
        </LoadingWrapper>
    );
};

export default Home;
