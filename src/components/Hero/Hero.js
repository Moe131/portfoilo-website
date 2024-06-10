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
import data from '../../assets/data.json'

function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? lightIcon : darkIcon;
    const twitterIcon = theme === 'light' ? lighttwitterIcon : darktwitterIcon;
    const githubIcon = theme === 'light' ? lightgithubIcon : darkgithubIcon;
    const linkedinIcon = theme === 'light' ? lightlinkedinIcon : darklinkedinIcon;

    return (
    <section id="hero" className={styles.container}> 
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Mohammad Mirzaei Profile Picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1> {data.firstname} <br/> {data.lastname}  </h1>
            <h2>{data.position}</h2>
            <span>
            <a href={data.twitterlink}  target="_blank">
                <img src={twitterIcon} al="Twitter icon" />
            </a>
            <a href={data.githublink}  target="_blank">
                <img src={githubIcon} al="Github icon" />
            </a>
            <a href={data.linkedinlink}  target="_blank">
                <img src={linkedinIcon} al="LinkedIn icon" />
            </a>
            </span>
            <p className="styles.description">
            {data.description} 
            </p>
            <a href={CV} download>
                <button className="hover">
                    Downlaod Resume
                </button>
            </a>
        </div>
    </section>
    )
}

export default Hero;