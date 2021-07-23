import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './ImageShow.css'

function ImageShow({image,images,setImages}) {
    const [bounce,setBounce] = useState(false)
    const clickHandle = ()=>{
        var src = image.src
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = src;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        setBounce(!bounce)
    }
    const leaveHandle = ()=>{
        setBounce(false)
    }
    const close  = ()=>{
        setImages(images.map(i => {
            if(i.id === image.id){
                i.show = false
            }
            return i
        }))
    }
    return (
        <div className = {image.show ? 'imgShow' : 'imgHide'}>
            <img  src={image.src} alt={image.type}/>
            <div className="info">
                <div>Image Type: {image.type}</div>
                <p>Image Info: {image.info}</p>
                <button  
                    onClick = {clickHandle} 
                    onMouseUp = {leaveHandle}
                    onMouseLeave = {leaveHandle}
                    className = {bounce ? 'gelatine' : ''}>
                        image src
                        <FontAwesomeIcon icon={faClone} className = 'clone'/>
                </button>
                <div className = {bounce ? 'show' : 'hide'}>Coppied</div>
                <FontAwesomeIcon icon = {faTimesCircle} className ='close' onClick = {close}/>
            </div>
        </div>
    )
}

export default ImageShow
