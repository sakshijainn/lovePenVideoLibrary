import React,{useState} from 'react'
import {FiMenu} from "react-icons/fi"
import {FaPenAlt} from "react-icons/fa"
import {BiSearch,BiUser} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import "./Header.css"
import SideDrawer from "../SideDrawer/SideDrawer"
const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
    console.log("open")
  }
    return (
        <div className="header">


            <div className="header-left">
            <FiMenu className="menu"/>
            <FaPenAlt onClick={toggle} className ="header__logo"> </FaPenAlt>
            {isOpened && <SideDrawer />}
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
