import React from 'react'

export const Header = (props)=>{
    return(
        <div className="header-container">
        <h1 > {props.appName}</h1>
        </div>
    )
}