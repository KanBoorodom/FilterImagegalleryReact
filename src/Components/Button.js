import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import './Button.css'
function Button({btnText,icon,click,bgColor,setName}) {
    const [bounce,setBounce] = useState(false)
    return (
    <button  
        onClick = {()=>{
            setBounce(true)
            setName(true)
            click()
        }} 
        onMouseUp = {()=>{
            setBounce(false)
            setName(false)}
        }
        onMouseLeave = {()=>{
            setBounce(false)
            setName(false)}
        }        className = {`button ${bounce ? 'gelatine' : ''}`}
        style = {{backgroundColor:bgColor}}
    >
            {btnText}
            <FontAwesomeIcon icon={icon} className = 'btnIcon'/>
    </button>
    )
}

export default Button
