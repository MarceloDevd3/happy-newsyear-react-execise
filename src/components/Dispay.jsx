 
import React from 'react'

export default function CountDown(props) {
    return (
       <div className='column'>
         <div className='count'>
            <h2>{props.valor}</h2>
           
        </div>
           <h3>{props.title}</h3>
       </div>
    )
}