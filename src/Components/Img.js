import React,{useState} from 'react'
import './Img.css'
function Img({image,images,setImages}) {
    const [hover,setHover] = useState(false)
    const isHover = ()=>{
        setHover(!hover)
    }
    const clickHandle = ()=>{
        setImages(images.map(i => {
            if(i.id === image.id){
                i.show = !i.show
            }
            else{
                i.show = false
            }
            return i
        }))
    }
    return (
        <div 
            className = {`img ${hover ? 'black' : ''}`}
            onMouseEnter = {isHover}
            onMouseLeave = {isHover} 
            onClick = {clickHandle}
        >
                <img className = {hover ? 'hoverImg' : ''} src={image.src} alt={image.type}/>
        </div>
    )
}

export default Img
