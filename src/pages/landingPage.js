import React from "react";
import './components/landingPage/landingPage.css'
import {ReactComponent as Clouds} from './components/landingPage/assets/clouds.svg';
import {ReactComponent as MouseOutline} from './components/landingPage/assets/mouseOutline.svg';
import {ReactComponent as MouseScroll} from './components/landingPage/assets/mouseScroll.svg';
import {ReactComponent as Island} from './components/landingPage/assets/island.svg';
import {ReactComponent as Sea} from './components/landingPage/assets/sea.svg';

export default function LandingPage() {

    return (
        <div className="landingpage">
            <div className="landingpage--clouds">
                <Clouds className="clouds--svg"/>

            </div>
            <div className="landingpage--island">
                    <Sea className="sea--svg" />
                    <Island className="island--svg"/>
            </div>
            <MouseOutline className="landingpage--mouseoutline"/>
            <MouseScroll className="landingpage--mousescroll"/>
        </div> 
    );
}