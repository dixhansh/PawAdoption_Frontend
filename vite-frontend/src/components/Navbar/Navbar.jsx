import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
    const navigate = useNavigate();

    const handleLiItems = (liName) => {
        if(liName === "Home"){
            setMenu("Home")
            navigate("/home")
        }
        if(liName === "Contact Us"){
            setMenu("Contact Us")
            navigate("/contactus")
        }
    }

  return (
    <div className='navbar'>
        <img src={assets.site_logo} alt="" className="logo" onClick={()=>navigate("/home")}/>
        <ul className='navbar-menu'>
            <li onClick={()=>handleLiItems("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>handleLiItems("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Profile</button>
        </div>
    </div>
  )
}

export default Navbar