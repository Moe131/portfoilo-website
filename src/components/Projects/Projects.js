import React from "react";
import styles from "./ProjectsStyles.module.css"
import searchEngineLogo from "../../assets/search-engine.png"
import hotelReservationLogo from "../../assets/hotel.png"
import crawlerLogo from "../../assets/crawler.jpg"
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
                
                <ProjectCard 
                src={hotelReservationLogo} 
                link="https://github.com/Moe131/Hotel_Reservation_System"
                title="Hotel Reservation System"
                description = "Simple hotel reservation system built with Python and Tkinter to store, manage and delete bookings using SQLite database."
                />

                <ProjectCard 
                src={crawlerLogo} 
                link="https://github.com/Moe131/Web-Crawler"
                title="Web Crawler"
                description = "A Python-based web crawler designed to efficiently scrape, parse, and store data from websites avoiding loops and duplicate websites "
                />      
            </div>
        </section>
    )
}

export default Projects;