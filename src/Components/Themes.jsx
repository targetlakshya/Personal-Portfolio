import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemesItem from './ThemesItem';
import {FaCog} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import "./themes.css"

const getStorageColor = () => {
    let color = 'hsl(252,35%,51%)';
    if (localStorage.getItem('color') ) {
        color = localStorage.getItem('color')
    }

    return color;
}

const Themes = ()  => {

    const [showSwitcher, setShowSwitcher] = useState(false)

    const [color,setColor] = useState(getStorageColor())

    const changeColor = (color) => {
        setColor(color);
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color',color)
    }, [color])


    return ( 
        <div >
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>

                <div className="theme__toggler">
                    <BsMoon />
                </div>

                <h3 className="style__switcher-title">Styke Switcher</h3>

                <div className="styke__switcher-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemesItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>

                <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>
                    &times;
                </div>
            </div>
        </div>
     );
}

export default Themes;