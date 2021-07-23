import React from 'react'
import Typeselect from './Typeselect'
import './TypeContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function TypeContainer({types,setTypes,magnify,setMagnify}) {
    return (
        <div className = {`typeContainer ${magnify && 'magOn'}`}>
            {types.map(type => (<Typeselect type={type} types = {types} setTypes = {setTypes} key = {type.id}/>))}
            
            <div className = 'newType'>
                <div>
                    <FontAwesomeIcon 
                        className = 'addType'
                        icon = {faPlusCircle}
                    />
                    <p>Add new type</p> 
                </div>
            </div>
        </div>
    )
    
}

export default TypeContainer
