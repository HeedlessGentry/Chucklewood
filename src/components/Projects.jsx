import React from "react";
import '../styles/Projects.css'

function Projects() {
    return (
        <div>
            <div className="projects">
                <h1 style={{color:'maroon', fontWeight: 'bold', fontSize: '24px'  }}>Projects</h1>
                <p>
                    <h2 style={{fontSize: '18px'}}>ISP Management Platform</h2>
                    <ul>
                        <li>Worked in a team to develop an ISP management platform with an integrated CRM and data tracking algorithm.</li>
                        <li>Leveraged  HTML, CSS and Javascript for the UI and Python for server-side logic.</li>
                    </ul>
                </p><hr />
                <p>
                    <h2 style={{fontSize: '18px'}}>Apartment booking service</h2>
                    <ul>
                        <li>Developed a online apartment booking platform that allows viewing vacant apartments and booking them for a subscription.</li>
                        <li>Integrated a payment gateway and APIs for landlords to list the vacancies.</li>
                    </ul>
                </p><hr />
                <p>
                    <h2 style={{fontSize: '18px'}}>Cloud Infrastructure</h2>
                    <ul>
                        <li>Assisted in the design and deployment of cloud-based applications and infrastructure in a junior role at IBM Cloud.</li>
                        <li>Provided technical support to clients and internal teams, troubleshooting issues, and ensuring optimal performance of cloud environments.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Projects;