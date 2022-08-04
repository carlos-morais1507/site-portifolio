import React from "react";
import {ReactComponent as ListPoints} from "./components/about/assets/listPoints.svg"
import {ReactComponent as Cave} from "./components/about/assets/cave.svg"
import {ReactComponent as PickGuy} from "./components/about/assets/pickGuy.svg"
import "./components/about/about.css"

export default function About() {

    return( 
        <div className="about">
            <ListPoints className="about--listpoints"/>
            <Cave className="about--cave" />
            <PickGuy className="about--pickguy" />
        </div>
    )
}