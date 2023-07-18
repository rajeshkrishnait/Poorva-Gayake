import React from 'react'
import '../styles/viewButton.css'
const ViewButton = (props) =>{
    let className = props.align=="left"? "thumbnail-cta-wrapper left-align w-inline-block":"thumbnail-cta-wrapper w-inline-block"
    let positionValue= props.style?'relative':''
    return (
        <React.Fragment>
             <a style={{position: positionValue}} data-w-id="cdfd08f3-229b-4b5c-e172-849166d13880" href="/bell" className={className}>
                            <div style={{width: "80px", height: "1px"}} class="cta-hr">
                            </div>
                            <h1 style={{opacity: 1}} class="cta">
                                View project
                            </h1>
                        </a>
        </React.Fragment>
    )
}

export default ViewButton;