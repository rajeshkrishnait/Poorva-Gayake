import React,{useEffect} from 'react'
import '../styles/projects.css'
import ViewButton from './ViewButton.js';

const Projects = (props) => {
    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
          ? ((top > 0 && top < innerHeight) ||
              (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
          : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
      };
    let alignProject = props.align=="left"? "projects-container":"projects-container left";
    let textAlignment = props.align!=="left"?"thumbnail-title-wrapper":"thumbnail-title-wrapper right"
    useEffect(()=>{

        setTimeout(()=>{
            let element = document.getElementById('test')
            document.addEventListener("scroll",()=>{
                console.log(element)
                if(elementIsVisibleInViewport(element,true)){
                    console.log(true)
                    document.getElementById('test').className += " " + 'test';
                }
        },2000)
        
    })
    },[])
    return (
        <React.Fragment>
            <div id="test"className={alignProject}>
                <div class="thumbnail-gap"></div>
                <div class="thumbnail-wrapper">
                    <div class="thumbnail-image-wrapper bell">
                    <div data-poster-url="https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-transcode.mp4,https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom">
                            <video  id="8050ff5c-5cd8-3ad5-5873-db9659013b41-video" loop="true" style={{backgroundImage:'url(https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-poster-00001.jpg)'}} muted="true" autoPlay="true" playsinline="true" data-wf-ignore="true" data-object-fit="cover">
                                <source src="https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-transcode.mp4" data-wf-ignore="true" />
                                <source src="https://uploads-ssl.webflow.com/63e6989d80a5c5b6403d6d74/63f181695a0b876ec198c0d2_Full-transcode.webm" data-wf-ignore="true"/>
                            </video>
                        </div>
                        <ViewButton align={props.align}/>
                    </div>
                    <div className={textAlignment}>
                        <h1 class="heading-4">
                            Bell - Vertical lift
                        </h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;