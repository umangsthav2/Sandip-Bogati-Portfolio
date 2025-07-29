import Navbar from '../Components/Navbar';

import HomeSection from '../Sections/HomeSection';
import AboutSection from '../Sections/AboutSection';
import SkillSection from '../Sections/SkillSection';
import ProjectSection from '../Sections/ProjectSection';
import QualificationSection from '../Sections/QualificationSection';
import ConnectMe from '../Sections/ConnectMe';
import ThankingSection from '../Sections/ThankingSection';

const MainPage = () => {
    
    
    
    return (
        <>
            <Navbar />
            <HomeSection/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <QualificationSection/>
            <ConnectMe/>
            <ThankingSection/>
        </>


    );
}
export default MainPage;