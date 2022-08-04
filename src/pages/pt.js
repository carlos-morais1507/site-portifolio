import { useState } from "react";
import {ReactComponent as Logo} from './components/landingPage/assets/logo.svg';
import "./components/about/about.css"
import './components/landingPage/landingPage.css'



export default function PagePt(){
    const[lingua, setLingua] = useState(true);
    return(
        <div className="pagePt">
            <div className="landingpage--greetings" >
                OLÁ!<br></br>MEU NOME É
                <div className="landingpage--logo">
                    <Logo />
                </div>
                <span className="landingpage--subtitle">DESENVOLVEDOR JÚNIOR</span>
            </div>
            <div className="about--title">
                SOBRE MIM
            </div>
            <div className="about--academic">
                <p className="academic--1">Bacharelado em Sistemas de Informação |<br></br>UNIRIO |<br></br>04/2022 - Atualmente</p>
                <p className="academic--2">Curso Discover |<br></br>RocketSeat |<br></br>06/2022 - Atualmente</p>
            </div>
            <div className="about--description">
                <p>
                <strong>Olá! Meu nome é Carlos!</strong><br></br>Sou um estudante brasileiro de Sistemas da Informação buscando se especializar na área de desenvolvimento (incerto sobre front-end, back-end e full stack). Sou faminto por conhecimento e estou sempre buscando aprender mais.<strong><br></br><br></br>Hobbies:</strong> Video-games | Filmes | Músicas
                </p>
            </div>
            <div>
                <div className="projects--title">
                    SKILLS E PROJETOS
                </div>
            </div>
        </div>       
    ); 
}