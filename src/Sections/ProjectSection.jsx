import Card from "../Components/Card";

import projectImage00 from '../assets/images/project_00.png';
import projectImage01 from '../assets/images/project_01.png';
import projectImage02 from '../assets/images/project_02.png';
import projectImage03 from '../assets/images/project_03.png';
import projectImage04 from '../assets/images/project_04.png';

const ProjectSection = () => {
    return (
        <section id='projects'>
            <div className=" bg-[var(--custom-bg)] p-25 flex-col gap-10 flex items-center justify-between">
                <h1 className="text-6xl text-white font-bold ">My Projects</h1>

                <Card image={projectImage00} title="Z B Z Landing Page" desc="
            Understanding of userflows, moodboards, styleguide
            "></Card>

                <Card image={projectImage01} title="Neplease Khana Application" desc="
            Understanding of userflows, moodboards, styleguide
            "></Card>

                <Card image={projectImage02} title="Restaurant Landing Webpage" desc="
            Understanding of userflows, moodboards, styleguide
            "></Card>

                <Card image={projectImage03} title="E-Commerce Web Design" desc="
            Understanding of userflows, moodboards, styleguide
            "></Card>

                <Card image={projectImage04} title="Travels and Tours Landing Page" desc="
            Understanding of userflows, moodboards, styleguide
            "></Card>
            </div>
        </section>
    );
}

export default ProjectSection;