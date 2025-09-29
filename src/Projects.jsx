import './Projects.css'
import Project from "./Project"
    
function Projects () {
    return <section className="projects-container">
    <Project projectName="E-commerce Platform" projectDiscription="Building a modern online shopping experience" membersNum="8" date="2/15/2024"/>
    <Project projectName="Mobile App" projectDiscription="Cross-platform mobile application development" membersNum="5" date="3/1/2024"/>
    <Project projectName="Analytics Dashboard" projectDiscription="Real-time data visualization and reporting" membersNum="3" date="2/15/2024"/>
    </section>
}

export default Projects
