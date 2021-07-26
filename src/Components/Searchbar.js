import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css';

function Searchbar({search,setSearch,magnify,setMagnify,types,setTypes}) {
    const searchHandle = (e)=>{
        setSearch(e.target.value)
    } 
    const clickHandle = ()=>{
        setMagnify(!magnify)
        setTypes(types.map(type => {
            type.type === 'all' ? type.select = true :type.select  = false
            return type
        }))
    }
    return (
        <div>
            <div className='searchContainer'>
                <input 
                    type="text" 
                    placeholder= {magnify ? 'Enter image type' : ''}
                    value = {magnify ? search : ''} 
                    onChange = {searchHandle}
                    className = {`searchInput ${!magnify ? 'unClick' : ''}`}
                />
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className = {magnify ? 'hide' : 'search'} 
                    onClick = {clickHandle}    
                />
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className = {magnify ? 'closeSearch' : 'hide'}
                    onClick = {clickHandle}
                />
            </div>
        </div>
    )
}

export default Searchbar
