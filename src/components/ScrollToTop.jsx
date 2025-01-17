import React, { useState, useEffect } from "react";
import "../styles/ScrollToTop.css";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIxwaYOGF3-2e8mhiilzrLaV0sN1yMAf5hg&s"
            alt="uplogo"
            width={"30px"}
            height={"30px"}
            />
        </button>
        )
    );
}

export default ScrollToTop;