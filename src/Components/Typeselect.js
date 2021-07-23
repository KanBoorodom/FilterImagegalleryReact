import React from 'react'
import './Typeselect.css'
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
    return (
        <div 
            className={`type ${type.select ? 'active' : ''}`}
            onClick = {clickHandle}
        >
            {type.type}
        </div>
    )
}

export default Typeselect
