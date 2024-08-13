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
                <SkillList src={checkMarkIcon} skill="C/C++" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="SQL" />
                <SkillList src={checkMarkIcon} skill="AWS" />
                <SkillList src={checkMarkIcon} skill="Git" />
            </div>
            <hr/>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Selenium" />
                <SkillList src={checkMarkIcon} skill="Flask" />
                <SkillList src={checkMarkIcon} skill="PostgreSQL" />
                <SkillList src={checkMarkIcon} skill="SQLite" />
                <SkillList src={checkMarkIcon} skill="Firebase" />
            </div>
            <hr/>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Javascript" />
                <SkillList src={checkMarkIcon} skill="TypeScript" />
                <SkillList src={checkMarkIcon} skill="Next.js" />
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="React Native" />
                <SkillList src={checkMarkIcon} skill="HTML/CSS" />
            </div>
        </section>
    )
}


export default Skills;