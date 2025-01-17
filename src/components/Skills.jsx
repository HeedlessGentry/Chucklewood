import React from "react";
import '../styles/Skills.css';

function Skills() {
    return (
        <div>
            <div className="skills-section">
                <h1 style={{color: 'maroon', fontWeight: 'bold', fontSize: '24px'}}>Skills</h1>
                <div className="skills-cards">
                    <div className="skill-card">
                        <figure>
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tWmNiq3s3OrmiNGABCypogZymakw3wbVzg&s"
                            alt="html-Img"
                            width={"20px"}
                            />
                            <figcaption>HTML<br /><br />3 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card">
                        <figure>
                            <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz41cPuVdAr6Pam-0w4kWHSMIBBlbta3liTg&s"
                            alt="Js"
                            width={"20px"}
                            />
                            <figcaption>JavaScript<br /><br />3 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skill-card">
                        <figure>
                            <img
                            src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp"
                            alt="py"
                            width={"20px"}
                            />
                            <figcaption>Python<br /><br />1/2 years experience</figcaption>
                        </figure>
                    </div>
                    <div className="skills-card">
                        <figure>
                            <img
                            src="https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp"
                            alt="gHub"
                            width={"20px"}
                            />
                            <figcaption>GitHub<br /><br />1 year experience</figcaption>
                        </figure>
                    </div>
                    <div className="skills-card">
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

export default Skills;