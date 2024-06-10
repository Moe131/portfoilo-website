import React from "react"
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg'
import lightIcon from '../../assets/light-icon.svg'
import darkIcon from '../../assets/dark-icon.svg'
import lighttwitterIcon from '../../assets/twitter-light.svg'
import lightgithubIcon from '../../assets/github-light.svg'
import lightlinkedinIcon from '../../assets/linkedin-light.svg'
import darktwitterIcon from '../../assets/twitter-dark.svg'
import darkgithubIcon from '../../assets/github-dark.svg'
import darklinkedinIcon from '../../assets/linkedin-dark.svg'
import CV from '../../assets/resume.pdf'
import { useTheme } from "../../common/ThemeContext"


function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? lightIcon : darkIcon;
    const twitterIcon = theme === 'light' ? lighttwitterIcon : darktwitterIcon;
    const githubIcon = theme === 'light' ? lightgithubIcon : darkgithubIcon;
    const linkedinIcon = theme === 'light' ? lightlinkedinIcon : darklinkedinIcon;

    return (
    <section id="hero"> 
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Mohammad Mirzaei Profile Picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Mohammad <br/> Mirzaei </h1>
            <h2>Computer Science Student</h2>
            <span></span>
            <a href="https://x.com/" target="_blank">
                <img src={twitterIcon} al="Twitter icon" />
            </a>
            <a href="https://github.com/moe131" target="_blank">
                <img src={githubIcon} al="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-mirzaei-bb79b0228/" target="_blank">
                <img src={linkedinIcon} al="LinkedIn icon" />
            </a>
            <p>
                I'm a Computer Science Student here at UCI
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    )
}

export default Hero;