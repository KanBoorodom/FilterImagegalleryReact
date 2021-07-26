import React from 'react'
import Searchbar from './Searchbar'
import TypeContainer from './TypeContainer' 
import './Header.css'
function Header({types,setTypes,inputType,setInputType,search,setSearch,magnify,setMagnify}) {
    return (
        <div className = 'header'>
            <h1>Kan's Filter image gallery</h1>
            <TypeContainer 
                types = {types} setTypes = {setTypes}
                inputType = {inputType} setInputType = {setInputType}
                magnify = {magnify} setMagnify = {setMagnify}    
            />
            <p>
                {!magnify ? 'Click at magnify to activate search.'
                 :'Close search for select type.'}
            </p>
            <Searchbar 
                search = {search} setSearch = {setSearch} 
                magnify = {magnify} setMagnify = {setMagnify}
                types = {types} setTypes = {setTypes}
            />
        </div>
    )
}

export default Header
