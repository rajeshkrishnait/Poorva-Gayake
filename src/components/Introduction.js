import React,{useEffect,useState} from 'react'
import '../styles/intro.css'
const Introduction = () => {
    const animatedTextValue=["BEAUTIFUL","INTUITIVE","ENGAGING"]
    const [text,setText]=useState("")
    const [charIndex, setCharIndex]=useState(0)
    const [wordIndex, setWordIndex] = useState(0)
    const [fullText,setFullText]=useState("")
    const [curWordBoolean, setCurWordBoolean] = useState(false)
    useEffect(()=>{
        if(charIndex===-1 && curWordBoolean){
            setCurWordBoolean(false)            
            setCharIndex(0)
            setText("")
            setWordIndex((wordIndex+1)%3)
            setFullText(animatedTextValue[wordIndex])
        }
        if(charIndex<fullText.length &&!curWordBoolean){
            setTimeout(() => {
                setText(text + fullText[charIndex])
                setCharIndex(charIndex + 1)
              }, 100)
        }else if(charIndex!==-1) {
            setCurWordBoolean(true)
            setTimeout(() => {
            setText(text.substring(0, charIndex-1))
            setCharIndex(charIndex-1)
        },100)
        }
    }, [charIndex,wordIndex,curWordBoolean])
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let textPosition = window.scrollY
            let textElRtoL = document.getElementsByClassName("text right")
            let textElLtoR = document.getElementsByClassName("text left")

            for(let i=0;i<textElRtoL.length;i++)  {        
                textElRtoL[i].style.transform = 'translateX('+(textPosition/70)+'%)'}
            for(let i=0;i<textElLtoR.length;i++)            {
                textElLtoR[i].style.transform = 'translateX('+(-textPosition/70)+'%)'
            }

        })
    })
    return(
  <React.Fragment>
    <div className="intro-container">
      <div className="text right _3">
        <h1>I’M AN</h1>
      </div>
      <div className="text left">
        <h1>INTERACTIVE</h1>
      </div>
      <div className="text right _2">
        <h1>ART DIRECTOR</h1>
      </div>
      <div className="text left inline">
        <h1>CRAFTING</h1>
        <div className="animated-text" id="animated-text">{text}</div>
      </div>
      <div className="text right _2">
        <h1>INTERFACES</h1>
      </div>
      <div className="text left">
        <h1>MADE FOR</h1>
      </div>
      <div className="text right _3">
        <h1>HUMANS.</h1>
      </div>
    </div>
  </React.Fragment>)
};

export default Introduction;
