import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>My name is Jared Rinaldi.</h1>
            <h1>I'm a web developer.</h1>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'>
                Explore the projects I've worked on.
                </Button>  
            </div>
        </div>
    )
}

export default HeroSection