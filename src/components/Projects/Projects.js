import React from "react";
import styles from "./ProjectsStyles.module.css"
import searchEngineLogo from "../../assets/search-engine.png"
import ProjectCard from "../../common/ProjectCard";


function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer} >
                <ProjectCard 
                src={searchEngineLogo} 
                link="https://github.com/Moe131/Search_engine_web_app"
                title="Search Engine Web Application"
                description = "Search engine web application developed with Python and Flask that allows searching over hundreds of thousand of websites."
                />
            </div>
        </section>
    )
}

export default Projects;