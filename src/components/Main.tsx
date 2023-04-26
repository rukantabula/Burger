import React, { useState } from "react"
import Lottie from "react-lottie-player"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import lottieJson from '../assets/animations/burger-logo.json';
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { CustomNavbar } from "./Shared/CustomNavbar";
import './Main.css';
import { Button, ButtonGroup, Card } from "@mui/material";

export const Main: React.FC = () => {
    const [showLogin, setShowLogin] = useState(true);
    const logIn = (value: boolean) => {
        setShowLogin(value);
    }

    const buttons = [
        <Button key="key-1" onClick={() => { logIn(false); }}>Sign in with Microsoft</Button>,
        <Button key="key-2" onClick={() => { logIn(false); }}>Sign in with Google</Button>,
        <Button key="key-3" onClick={() => { logIn(false); }}>Sign in with Apple</Button>,
    ];


    return (
        <div className="container">
            {!showLogin &&
                <Router>
                    <CustomNavbar />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="" Component={About} />
                        <Route path="" Component={Contact} />
                    </Routes>
                </Router>
            }
            {showLogin &&
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 50px' }} >
                        <header className="App-header">
                            <Lottie
                                loop
                                animationData={lottieJson}
                                play
                                style={{ width: 150, height: 150 }}
                            />
                        </header>

                    </div>
                    <Card variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            <h1 className="title">Burger Fanatics &trade;</h1>


                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="outlined"
                            >
                                {buttons}
                            </ButtonGroup>

                        </div>
                        <div className="title" style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            OR
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>

                            <Button variant="contained" key="key-4" onClick={() => { logIn(false); }}>Create Account</Button>
                        </div>
                    </Card>
                </div>
            }
        </div>

    )
}