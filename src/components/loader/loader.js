import React from "react";

import classes from './loader.module.css'

export default function Loader(props) {
    return (
        <div style = {{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <img className = {classes.loader} src = '/images/mainPage/loader.gif' alt = 'loader'/>
        </div>
    )
}
