import React from "react";
import "./components/projects/projects.css"
import {ReactComponent as IslandBottom} from './components/projects/assets/islandBottom.svg';
import {ReactComponent as DiverGuy} from './components/projects/assets/diverGuy.svg';
import {ReactComponent as Interests} from './components/projects/assets/interests.svg';
import {ReactComponent as Skills} from './components/projects/assets/skills.svg';
import {ReactComponent as ProjectLinks} from './components/projects/assets/projectLinks.svg';
import {ReactComponent as GitHubIcon} from './components/projects/assets/github.svg';

export default function Projects() {
    return(
        <div className="projects">
           <IslandBottom className="projects--islandbottom"/> 
           <DiverGuy className="projects--dverguy"/>
           <div className="projects--flashlight" />
           <Interests className="projects--interests" />
           <Skills className="projects--skills" />
           <ProjectLinks className="projects--projectlinks" />
           <a href="https://github.com/carlos-morais1507">
            <GitHubIcon className="projects--githubicon" />
           </a>
        </div>
    );
}