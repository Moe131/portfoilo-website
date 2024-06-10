import React from "react";
import styles from "./SkillsStyles.module.css"
import lightcheckMarkIcon from "../../assets/checkmark-light.svg"
import darkcheckMarkIcon from "../../assets/checkmark-dark.svg"
import { useTheme } from "../../common/ThemeContext";
import SkillList from "../../common/SkillList";

function Skills() {

    const {theme, toggleTheme } = useTheme();
    const checkMarkIcon = theme === 'light' ? lightcheckMarkIcon : darkcheckMarkIcon;

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