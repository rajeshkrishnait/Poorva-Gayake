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
    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
          ? ((top > 0 && top < innerHeight) ||
              (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
          : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
      };
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
    useEffect(()=>{

        setTimeout(()=>{
            let elements = document.getElementsByClassName('animate')
            document.addEventListener("scroll",()=>{
                for(var i = 0; i < elements.length; i++) {
                    if(elementIsVisibleInViewport(elements[i],true)){
                        if(!elements[i].className.includes('test')){
                            elements[i].className+= " " + 'test';
                        } 
                    }
                }
                
        },2000)
        
    })
    },[])
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