import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone,faTrash,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import './ImageShow.css'

function ImageShow({image,images,setImages}) {
    const [copy,setCopy] = useState(false)
    const [del,setDel] = useState(false)
    const cpySrc = ()=>{
        var src = image.src
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = src;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        
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
                <Button
                    setName = {setCopy} 
                    btnText = 'Image Src'
                    icon = {faClone}
                    click = {cpySrc}
                    bgColor = '#00aeff'
                />
                <Button
                    setName = {setDel} 
                    btnText = 'Delete image'
                    icon = {faTrash}
                    click = {cpySrc}
                    bgColor = 'red'
                />
                {copy ? <div>Coppied</div> : ''}
                <FontAwesomeIcon icon = {faTimesCircle} className ='close' onClick = {close}/>
            </div>
        </div>
    )
}

export default ImageShow
