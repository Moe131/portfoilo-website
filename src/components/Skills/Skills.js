import React from "react";
import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-light.svg"
import SkillList from "../../common/SkillList";

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="C++" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="ReactJS" />
                <SkillList src={checkMarkIcon} skill="AWS" />
            </div>
            <hr/>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="Javascript" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
        </section>
    )
}

export default Skills;