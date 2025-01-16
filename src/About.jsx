import React from "react";

function About() {
    return (
        <div>
            <div className="profile_pic">
                <img
                src="https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small_2x/man-avatar-image-for-profile-png.png"
                alt="profilepic"
                width={"200px"}
                />
            </div>
            <div className="about_me">
            <h1>Hello, I'm Reece Chucklewood! &#x1F44B; </h1>
            <p>
            I am a full-stack developer with over three years of specialized experience in DevOps and cloud architecture. I worked with IBM Cloud, where I design and manage cloud infrastructure to support scalable, secure applications. My expertise includes setting up CI/CD pipelines, automating deployments, and optimizing cloud resources.I pride myself in bridging the gap between development and operations, ensuring smooth, efficient workflows and high-performing applications. 
            </p>
            </div>
        </div>
    );
}

export default About;