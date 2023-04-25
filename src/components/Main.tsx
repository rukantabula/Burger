import React from "react"
import Lottie from "react-lottie-player"
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import lottieJson from '../assets/animations/burger-logo.json';
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { CustomNavbar } from "./CustomNavbar";
import './Main.css';

export const Main: React.FC = () => {
    return (

        <div className="container">
            <Router>
                <CustomNavbar />
                <Routes>
                    <Route path="/home" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </Router>

{/**
 * 
 *  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }} >
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
                <div className="container">
                    <div className="card mt-4">
                        <h2 className="title">Sign in</h2>
                    </div>
                </div>

            </div>
 */}
           
        </div>

    )
}