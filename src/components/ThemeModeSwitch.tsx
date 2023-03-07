'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


const ThemeModeSwitch = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme, systemTheme, resolvedTheme  } = useTheme();

    const switchTheme = ( themeName : string) => {
        setTheme(themeName)
    };

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <div className="ThemeModeSwitch">
            {
                mounted && resolvedTheme === "dark" ?  
                <BsFillSunFill className="icon" onClick={() => switchTheme("light")} /> :
                <BsFillMoonFill className="icon" onClick={() => switchTheme("dark")}  /> 
            }
        </div>
    )
}

export default ThemeModeSwitch;