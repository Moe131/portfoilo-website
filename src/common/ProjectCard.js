import React from "react";

function ProjectCard(props) {
    return (
        <a style={{ margin: "10px 0px" }}  href={props.link} target= "_blank">
            <img className="hover" src={props.src} alt={props.title+ " logo"}/>
            <h2 style={{ margin: "10px 0px" }} > {props.title}</h2>
            <p style={{fontSize:16}}>{props.description} </p>
        </a>
    )
}

export default ProjectCard;