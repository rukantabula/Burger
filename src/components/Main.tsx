import React from "react"
import Lottie from "react-lottie-player"
import lottieJson from '../assets/animations/burger-logo.json';
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import './Main.css';

export const Main: React.FC = () => {
    return (
        <div className="container">
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}} >
                <header className="App-header">
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                    <h1 className="title">Burger Fanatics &trade;</h1>
                </header>
                
            </div>
            <div>
                <Home />
                <About />
                <Contact />
            </div>
        </div>

    )
}