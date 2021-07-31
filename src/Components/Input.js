import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css';

function Input({inputValue,setInputValue,inputActive,placeHolderValue,iconType,click,keyHandle}) {
    const inputHandle = (e)=>{
        setInputValue(e.target.value)
    } 
    return (
        <div>
            <div className='searchContainer'>
                <input 
                    type="text" 
                    placeholder= {inputActive ? placeHolderValue : ''}
                    maxLength = {20}
                    value = {inputActive ? inputValue : ''} 
                    onChange = {inputHandle}
                    onKeyDown = {keyHandle}
                    className = {`searchInput ${!inputActive ? 'unClick' : ''}`}
                />
                <FontAwesomeIcon 
                    icon={iconType} 
                    className = {inputActive ? 'hide' : 'search'} 
                    onClick = {click}    
                />
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className = {inputActive ? 'closeSearch' : 'hide'}
                    onClick = {click}
                />
            </div>
        </div>
    )
}

export default Input
