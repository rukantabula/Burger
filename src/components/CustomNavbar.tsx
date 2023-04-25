import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import Lottie from "react-lottie-player";
import './Home/Home.css';
import lottieJson from '../assets/animations/burger-logo.json';

export const CustomNavbar: React.FC = () => {
    return (

        <Navbar bg="light" expand="lg" className="title">
        <Container>
            <Navbar.Brand href="">
            <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: 50, height: 50 }}
                    />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Burger Fanatics &trade;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/">Sign out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}