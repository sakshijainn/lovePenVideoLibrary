import React from 'react'
import {FiMenu} from "react-icons/fi"
import {FaPenAlt} from "react-icons/fa"
import {BiSearch,BiUser} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import "./Header.css"
const Header = () => {
    return (
        <div className="header">


            <div className="header-left">
            <FiMenu className="menu"/>
            <FaPenAlt className ="header__logo"> </FaPenAlt>
            <h3>lovePenStream</h3>
            
            </div>

            <div className="header-middle">
            <input type='text'/>
            <BiSearch className="search"/>
            </div>


            <div className ="header-right">
            <BiUser className="user"/>
            </div>
        </div>
    )
}

export default Header
