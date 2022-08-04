import React, {useState} from "react";
import './App.css';
import LandingPage from "./pages/landingPage"
import About from "./pages/about"
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import PageEn from "./pages/en";
import PagePt from "./pages/pt";
import {ReactComponent as ButtonEng} from './pages/components/landingPage/assets/buttonEng.svg';
import {ReactComponent as ButtonPt} from './pages/components/landingPage/assets/buttonPt.svg';

export const Lang = React.createContext()


export default function App()  {
    const[lingua, setLingua] = useState(true)

    return (
        <div className="page">
            <LandingPage />
            {(lingua) ? <PagePt/> : <PageEn/>}
            <div className="landingpage--buttons">
                <div className="landingpage--buttonEng" onClick={() => setLingua(false)}>
                    <ButtonEng/>
                </div>
                <div className="landingpage--buttonPt" onClick={() => setLingua(true)}>
                     <ButtonPt/>
                </div>
            </div>
            <About />
            <Projects />
            <Contact />
            
        </div>
    );
}