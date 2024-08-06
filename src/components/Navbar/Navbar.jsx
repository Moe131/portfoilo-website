
import React from "react";
import whiteMenuIcon from "../../assets/menu-white.png"
import blackMenuIcon from "../../assets/menu-black.png"
import logo from "../../assets/logo.jpg"
import lightIcon from '../../assets/light-icon.svg'
import darkIcon from '../../assets/dark-icon.svg'
import blackCross from '../../assets/back-cross.png'
import whiteCross from '../../assets/white-cross.png'
import { useTheme } from "../../common/ThemeContext"
import "./Navbar.css"



function Navbar(props) {
    const [menuChecked, setMenu] = React.useState(true)

    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? lightIcon : darkIcon;
    const menuIcon = theme === 'light' ? blackMenuIcon : whiteMenuIcon;
    const menuCloseIcon = theme === 'light' ? blackCross : whiteCross;

    function handleChange(event){
        setMenu(!menuChecked)
    }

    function handleLinkClick() {
        setMenu(true);
    }

    return (
        <div className="navbar">
            <a href="" className="logo-container"> 
                <img className="logo" src={logo} alt="Logo" />
                <h2>Moe131</h2>
            </a>
            <ul onClick= {() => setMenu(true)} className={ menuChecked ? "nav-list" : "nav-list-res"}>
                <a className="navbar-item" href="#hero"><p>About</p></a>
                <a className="navbar-item" href="#projects"><p>Projects</p></a>
                <a className="navbar-item" href="#skills"><p>Skills</p></a>
                <a className="navbar-item" href="#contact"><p>Contact</p></a>
            </ul>
            <div className="colorMode" onClick={toggleTheme}>
                <img src={themeIcon} alt="Color mode icon" />
                <p>Light Mode</p>
            </div>
            <input type="checkbox" onChange={handleChange} value={menuChecked} id="check" name="check"/>
            <label  htmlFor="check" className="check-btn">
                <img className="menu-icon" src={menuChecked? menuIcon : menuCloseIcon} alt="menu icon" />
            </label>
        </div>
    )
}

export default Navbar;
