import React from "react";
import Logo from "../../../Assets/logo.png";
import Classes from "../Logo/Logo.css";

const logo = ()=>{
    return(
        <div className = {Classes.Logo}>
            <img src = {Logo} alt = "Logo Here"/>
        </div>
    );
}
export default logo;