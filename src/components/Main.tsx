import React from "react"
import Lottie from "react-lottie-player"
import lottieJson from '../assets/animations/burger-logo.json';

export const Main: React.FC = () => {
    return (
        <div>
            <header className="App-header">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 150, height: 150 }}
                />
            </header>
        </div>
    )
}