import React from "react";
import Classes from "./ToolBar.css";
import Logo from "../ToolBar/Logo/Logo";
import NavigationBar from "../ToolBar/NavigationBar/NavigationBar";
//import {Grid,Row,Col} from "reac"
// import Aux from "../../hoc/Aux";

const toolbar = (props) =>{
    return(
        <header className = {Classes.ToolBar}>
            <Logo/>
            <NavigationBar/>
        </header>
    );
}
export default toolbar;
