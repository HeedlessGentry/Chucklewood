import React from "react";
import { useState, useEffect } from "react";

const LandingPage = () => {
    const slides = [
        {
            image: "https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Slide+1",
            text: "Welcome to Our Website",
            buttonText: "Learn More",
        },
        {
            image: "https://via.placeholder.com/1200x400/33FF57/FFFFFF?text=Slide+2",
            text: "Explore Our Skills and Projects",
            buttonText: "View Projects",
        },
        {
            image: "https://via.placeholder.com/1200x400/3357FF/FFFFFF?text=Slide+3",
            text: "Recommendations Await",
            buttonText: "See Recommendations",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [animation, setAnimation] = useState(false);

    useEffect (() => {
        const interval = setInterval(() => {
            setAnimation(true); //Trigger the fade-out animation
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.lenght); //Update to the next slide
                setAnimation(false); //Trigger the fade-in animation
            }, 500); //Delay matches the animation duration
        }, 4000); //Change slide every 4secs

        return () => clearInterval(interval); //Cleanup the interval when the component unmounts
    }, [slides.length]);

    return (
        
    );
}