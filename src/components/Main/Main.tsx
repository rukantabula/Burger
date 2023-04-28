import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "@mui/material";
import Lottie from "react-lottie-player";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import lottieJson from '../../assets/animations/burger-logo.json';
import { Home } from "./../Home/Home";
import { About } from "./../About/About";
import { Contact } from "./../Contact/Contact";
import { CustomNavbar } from "./../Shared/CustomNavbar";
import { User } from "src/model/user";
import { isAuthenticatedWithMicrosoft, loginWithMicrosoft } from "src/controller/MainController";
import './Main.css';

export const Main: React.FC = () => {
    const [user, setUser] = useState<User>();
    const [isMicrosoftAuthenticated, setMicrosoftAuthenticated] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {}, [showLogin]);

    const signWithMicrosoft = () => {
        loginWithMicrosoft()
            .then(user => {
                setUser(user);
                setMicrosoftAuthenticated(isAuthenticatedWithMicrosoft())
                setShowLogin(isMicrosoftAuthenticated)
            }).catch(() => {/*show error message visually*/ });

    }

    const buttons = [
        <Button key="key-1" onClick={() => { signWithMicrosoft(); }}>Sign in with Microsoft</Button>,
        <Button key="key-2" onClick={() => { /*implement like microsoft authentication*/ }}>Sign in with Google</Button>,
        <Button key="key-3" onClick={() => { /*implement like microsoft authentication*/ }}>Sign in with Apple</Button>,
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
                                style={{ width: 150, height: 150 }} />
                        </header>
                    </div>
                    <Card variant="outlined" sx={{ minWidth: 175 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            <h1 className="title">Burger Fanatics &trade;</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="outlined" >
                                {buttons}
                            </ButtonGroup>
                        </div>
                        <div className="title" style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            OR
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                            <Button variant="contained" key="key-4" onClick={() => { }}>Create Account</Button>
                        </div>
                    </Card>
                </div>
            }
        </div>
    )
}