import { useState } from "react";
import {ReactComponent as Logo} from './components/landingPage/assets/logo.svg';
import "./components/about/about.css"
import './components/landingPage/landingPage.css'

export default function PageEn(){
    const[lingua, setLingua] = useState(true);
    return(
        <div className="pageEn">
            <div className="landingpage--greetings" >
                HELLO THERE!<br></br>MY NAME IS
                <div className="landingpage--logo">
                    <Logo />
                </div>
                <span className="landingpage--subtitle">JUNIOR DEVELOPER</span>           
            </div>
            <div>
            <div className="about--title">
                ABOUT ME
            </div>
            <div className="about--academic">
                <p className="academic--1">Bachelor Degree in Information Systems |<br></br>UNIRIO |<br></br>04/2022 - Today</p>
                 <p className="academic--2">Discover Course |<br></br>RocketSeat |<br></br>06/2022 - Today</p>
            </div>
            <div className="about--description">
                <p>
                    <strong>Hello! My name is Carlos!</strong><br></br>I'm a brazilian I.T. student searching for specialization in the development area(uncertain about Front-end, Back-end or Full-stack). I'm always hungry for knowledge and searching for more of it.<strong><br></br><br></br>Hobbies:</strong> Games | Movier | Music
                 </p>
            </div>
            </div>
            <div>
                <div className="projects--title">
                    SKILLS AND PROJECTS
                </div>
            </div>
        </div>
    );
}



