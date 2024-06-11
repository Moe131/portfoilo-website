import React from "react";

function ProjectCard(props) {
    return (
        <a href={props.link} target= "_blank">
            <img className="hover" src={props.src} alt={props.title+ " logo"}/>
            <h2> {props.title}</h2>
            <p>{props.description} </p>
        </a>
    )
}

export default ProjectCard;