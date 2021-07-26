import React from 'react'
import './Typeselect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
function Typeselect({type,types,setTypes}) {
    const clickHandle = ()=>{
        if(type.type === 'all'){
            setTypes(types.map(t => {
                t.type !== 'all' ? t.select = false
                :t.select = true
                return t
            }))
            return 
        }
        setTypes(types.map(t => {
            if(t.id === type.id){
                t.select = !t.select
            }
            if(t.type === 'all'){
                t.select = false
            }
            return t
        }))

    }
    const del = (e)=>{
        alert(`Type delete`)
        setTypes(types.filter(t => t.id !== type.id))
        e.stopPropagation()
    }
    return (
        <div 
            className={`type ${type.select ? 'active' : ''}`}
            onClick = {clickHandle}
        >
            {type.type}
            {type.type !== 'all' ? <FontAwesomeIcon icon = {faTimesCircle} className = 'delete' onClick = {del}/> : ''}
        </div>
    )
}

export default Typeselect
