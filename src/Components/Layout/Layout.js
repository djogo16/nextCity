import React from "react";
import Aux from "../../hoc/Aux";
import ToolBar from "../ToolBar/ToolBar";
import Classes from "./Layout.css";

const layout = (props)=>(
    <Aux>
        <ToolBar/>
        <main className = {Classes.Content}>{props.children}</main>
    </Aux>
)

export default layout;