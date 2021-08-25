import './Header.css'
import React from 'react'
import logo from '../../assets/logo.svg'

export default function Header(){
    return(
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>    
        </div>
    )
}