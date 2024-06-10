import React from "react"
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg'
import themeIcon from '../../assets/theme-icon.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/resume.pdf'


function Hero() {
    return (
    <section id="hero"> 
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Mohammad Mirzaei Profile Picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
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