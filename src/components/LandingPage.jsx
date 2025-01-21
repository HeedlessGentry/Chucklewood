import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css';

const LandingPage = () => {
    const slides = [
        {
            image: "https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010150.jpg",
            text: "Welcome to Our Website",
            buttonText: "Learn More",
            link: "/about",
        },
        {
            image: "https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010150.jpg",
            text: "Explore Our Skills and Projects",
            buttonText: "View Projects",
            link: "/projects",
        },
        {
            image: "https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010150.jpg",
            text: "Recommendations Await",
            buttonText: "See Recommendations",
            link: "/recommendations",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [animation, setAnimation] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {
        const interval = setInterval(() => {
            setAnimation(true); //Trigger the fade-out animation
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length); //Update to the next slide
                setAnimation(false); //Trigger the fade-in animation
            }, 500); //Delay matches the animation duration
        }, 4000); //Change slide every 4secs

        return () => clearInterval(interval); //Cleanup the interval when the component unmounts
    }, [slides.length]);

    return (
        <div className="landing-page">
            <div className="slideshow">
                <img 
                src={slides[currentSlide].image}
                alt="Slide"
                className={`slide-image ${animation ? "fade-out" : "fade-in"}`}
                />
                <div className={`slide-text ${animation ? "fade-out" : "fade-in"}`}>
                    <h2>{slides[currentSlide].text}</h2>
                    <button 
                    className="slide-button"
                    onClick={() => navigate(slides[currentSlide].link)}
                    >{slides[currentSlide].buttonText}</button>
                </div>
            </div>
            <div className="brief">
                <div className="about_me">
                <h2>Who are we?!</h2>
                <p>I am a full-stack developer with over three years of specialized experience in DevOps and cloud architecture. I worked with IBM Cloud, where I design and manage cloud infrastructure to support scalable, secure applications. My expertise includes......</p>
                </div>
                <div className="profile_pic">
                    <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small_2x/man-avatar-image-for-profile-png.png"
                    alt="profilepic"
                    width={"150px"}
                    border={"inset"}
                    borderRadius={"10px"}
                    />
                </div>
            </div>
            <div className="button">
                <a href="/skills">
                <button className="click">See More...</button>
                </a>
            </div>
            <div className="skills-section">
                <h1 style={{color: 'maroon', fontWeight: 'bold', fontSize: '24px'}}>Our Services</h1>
                <div className="skills-cards">
                    <div className="skill-card" onClick={() => navigate("/skills")}>
                        <figure>
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tWmNiq3s3OrmiNGABCypogZymakw3wbVzg&s"
                            alt="html-Img"
                            width={"20px"}
                            />
                            <figcaption>HTML<br /><br />3 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card" onClick={() => navigate("/skills")}>
                        <figure>
                            <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz41cPuVdAr6Pam-0w4kWHSMIBBlbta3liTg&s"
                            alt="Js"
                            width={"20px"}
                            />
                            <figcaption>JavaScript<br /><br />3 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card" onClick={() => navigate("/skills")}>
                        <figure>
                            <img
                            src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp"
                            alt="py"
                            width={"20px"}
                            />
                            <figcaption>Python<br /><br />1/2 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card" onClick={() => navigate("/skills")}>
                        <figure>
                            <img
                            src="https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp"
                            alt="gHub"
                            width={"20px"}
                            />
                            <figcaption>GitHub<br /><br />1 year experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card" onClick={() => navigate("/skills")}>
                        <figure>
                            <img
                            src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-seo-logo-design-png-image_4783100.jpg"
                            alt="seo"
                            width={"20px"}
                            />
                            <figcaption>SEO<br /><br />2 years experience</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;