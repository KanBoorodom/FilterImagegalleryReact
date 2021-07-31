import React,{useState} from 'react'
import Input from './Input'
import './GalleryName.css'
import { faPen } from '@fortawesome/free-solid-svg-icons'
function GalleryName({galname,setGalName}) {
    const [inputName,setInputName] = useState('')
    const [edit,setEdit] = useState(false)
    const nameHandle = (e)=>{
        setEdit(!edit)
    }
    const keyHandle = (e)=>{
        if(e.keyCode === 13 && e.target.value !== ''){
            setGalName(e.target.value)
            setEdit(!edit)
            setInputName('')
        }
    }
    return (
        <div className = 'galleryname'>
            <h1>{galname}</h1>
            {edit ? <p>Press enter when done editing</p> : ''}
            <Input 
                inputValue = {inputName} setInputValue = {setInputName} 
                inputActive = {edit}
                placeHolderValue = {'Enter new gallery name'}
                iconType = {faPen}
                click = {nameHandle}     
                keyHandle = {keyHandle}       
            />
        </div>
    )
}

export default GalleryName
