import React from "react";
import "./components/contact/contact.css"
import {ReactComponent as RopeEnd} from './components/contact/assets/ropeEnd.svg';
import {ReactComponent as SleepingGuy} from './components/contact/assets/sleepingGuy.svg';

export default function Contact(){
    return(
        <div className="contact">
            <RopeEnd className="contact--ropeend" />
            <div className="contact--end" />
            <SleepingGuy className="contact--speepingguy" />
        </div>
    );
}