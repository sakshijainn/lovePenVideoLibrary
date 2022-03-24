import React,{useState} from 'react'
import {FiMenu} from "react-icons/fi"
import {FaPenAlt} from "react-icons/fa"
import {BiSearch,BiUser} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import "./Header.css"
import SideDrawer from "../SideDrawer/SideDrawer"
import { useVideo } from '../../Context/VideoContext'
import {Link} from "react-router-dom"
const Header = () => {

  const { state, videoDispatch } = useVideo();
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
    console.log("open")
  }

  const handleSearch = (e) => {
    videoDispatch({ type: "SEARCH", payload: e.target.value });
  };

    return (
        <div className="header">


            <div className="header-left">
            <FiMenu className="menu"/>
            <FaPenAlt onClick={toggle} className ="header__logo"> </FaPenAlt>
            {isOpened && <SideDrawer />}
            <h3>lovePenStream</h3>
            
            </div>

            <div className="header-middle">
            <input type='text' value={state.keyword}
          onChange={handleSearch}
          placeholder="search"/>
            <BiSearch  className="search"/>
            </div>


            <div className ="header-right">
              <Link to="/login">
            <BiUser className="user"/>
            </Link>
            </div>
        </div>
    )
}

export default Header
