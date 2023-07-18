import React,{useEffect} from 'react'
import '../styles/allComponents.css'
import '../styles/global.css'
import Introduction from './Introduction.js'
import SideBar from './SideBar.js'
import About from './About'
import Projects from './Projects.js'
import MoreProjects from './MoreProjects.js'
import StickySide from './StickySide.js'
import Footer from './Footer.js'
const AllComponents = () => {

    useEffect(()=>{
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    })
    return (
        <React.Fragment>
            <StickySide/>
            <div className="all-component-container">
                <SideBar />
                <div id="top-of-the-page" className="rem-page-content">
                    <Introduction />        
                    <About />
                    <Projects align="left" />
                    <Projects align="right"/>
                    <Projects align="left" />
                    <MoreProjects/>
                </div>
            </div>
            <Footer/>

        </React.Fragment>
    )
}

export default AllComponents