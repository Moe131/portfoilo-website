import React from "react";
import styles from "./ContactStyles.module.css"
import emailLightIcon from "../../assets/email-light.png"
import emailDarkIcon from "../../assets/email-dark.png"
import { useTheme } from "../../common/ThemeContext";

function Contact(){

    const {theme, toggleTheme } = useTheme();
    const emailIcon = theme === 'light' ? emailLightIcon : emailDarkIcon;

    return (
    <section className= {styles.container}>
        <h1 className="SectionTitle">Contact</h1>
        <p> If you have any questions email me at </p>
        <div className={styles.emailbox}>
            <img className={styles.emailicon} src={emailIcon} alt="Email Icon" />
            <h3> mirzaem1@uci.edu</h3>  
        </div>

    </section>

    );
}

export default Contact;