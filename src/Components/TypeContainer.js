import React from 'react'
import Typeselect from './Typeselect'
import './TypeContainer.css'
import { v4 as uuid_v4 } from "uuid";

function TypeContainer({types,setTypes,magnify,setMagnify,inputType,setInputType}) {
    const changeHandle = (e)=>{
        setInputType(e.target.value)
    }
    var specialCheck = false
    const keyHandle = (e) =>{
        var duplicate = false
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+/
        if(e.keyCode === 13 && e.target.value !== ''){
            if(!format.test(e.target.value)){
                types.forEach(type => {
                    if(type.type.toLowerCase() === e.target.value.toLowerCase()){
                        alert('This type is alraedy exists')
                        duplicate = true
                    }
                })
                if(!duplicate){
                    setTypes([...types,
                        {
                            type:e.target.value,
                            select:false,
                            id:uuid_v4()
                        }
                    ])
                    setInputType('')
                }
            }
            else{
                alert('Type cannot contain special character or space')
            }
        }
    }
    return (
        <div className = {magnify ? 'magOn' : ''}>
            <div className = 'typeContainer'>
                {types.map(type => (<Typeselect type={type} types = {types} setTypes = {setTypes} key = {type.id}/>))}
            </div>
            <div className="addNewType">
                <p 
                    className= {`advice ${inputType.length > 0 ? 'activeAdd' : ''}`} 
                >
                    {inputType.length > 0 ? 'Press enter to add new type' : ''}
                </p>
                <input 
                    type="text" 
                    placeholder = 'Add new image type..'
                    value = {inputType}
                    onChange = {changeHandle}    
                    onKeyDown = {keyHandle}
                />
            </div>
        </div>
    )
    
}

export default TypeContainer
