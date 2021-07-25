import React,{useState} from 'react'
import Typeselect from './Typeselect'
import './TypeContainer.css'
import { v4 as uuid_v4 } from "uuid";

function TypeContainer({types,setTypes,magnify,setMagnify}) {
    const [addNewType,setAddNewType] = useState(false) 
    const keydownHandle = (e)=>{
        if(e.keyCode === 13){
            setAddNewType(false)
            setTypes([...types,
                    {
                        type:e.target.value,
                        select:false,
                        id:uuid_v4()
                    }
            ])
            e.target.value = ''
        }
        else{
            setAddNewType(true)
        }
        if(e.target.value === ''){
            setAddNewType(true)
        }
    }
    return (
        <div className = {magnify ? 'magOn' : ''}>
            <div className = 'typeContainer'>
                {types.map(type => (<Typeselect type={type} types = {types} setTypes = {setTypes} key = {type.id}/>))}
            </div>
            <div className="addNewType">
                <p 
                    className= {`advice ${addNewType ? 'activeAdd' : ''}`} 
                >
                    {addNewType ? 'Press enter when you done' : ''}
                </p>
                <input 
                    type="text" 
                    placeholder = 'Add new image type..'
                    onKeyDown = {keydownHandle}    
                />
            </div>
        </div>
    )
    
}

export default TypeContainer
