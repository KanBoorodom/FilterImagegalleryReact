import React from 'react'
import Img from './Img'
import './Imagesgallery.css'

function Imagesgallery({images,setImages}) {
    return (
        <div className = 'imagesGallery'>
            {images.map(image => (
                <Img  image = {image} images = {images} setImages = {setImages} key = {image.id}/>
            ))}
        </div>
    )
}

export default Imagesgallery
