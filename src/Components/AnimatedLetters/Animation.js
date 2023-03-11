import './Animation.scss'
import React from 'react'

const Animation = ({letterClass, strArray, index}) =>{

    return (
        <span>
            {
                strArray.map((char, i)=>(
                    <span key={char + i} className={`${letterClass} _${index + i}`}> 
                        {char}
                    </span>
                ))
            }
        </span>
    )
}


export default Animation