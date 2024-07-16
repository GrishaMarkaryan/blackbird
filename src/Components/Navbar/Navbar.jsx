import React, { useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon1 from '../Assets/dropdown_icon1.png'

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');       {/* e - это img, на который нажимаем */}
    }

    return (
        <div className="navbar">
            <Link to='/' className="nav">
                <div className="nav_logo">
                    <img src={logo} alt='' className="logo"/>
                    <p>  BLACKBIRD </p>
                </div>
            </Link>

            <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon1} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=> {setMenu('shop')}}> <Link style={{textDecoration: 'none'}} to='/'> Shop </Link> {menu ==='shop'? <hr/>: <></>} </li>
                <li onClick={()=> {setMenu('mens')}}> <Link style={{textDecoration: 'none'}} to='/men'> Men </Link> {menu ==='mens'? <hr/> : <></>}</li>
                <li onClick={()=> {setMenu('womens')}}> <Link style ={{textDecoration: 'none'}} to='/women'> Women </Link> {menu === 'womens'? <hr/>: <></>} </li>
                <li onClick={()=> {setMenu('kids')}}> <Link style={{textDecoration: 'none'}} to='/kids'> Kids </Link> {menu === 'kids'? <hr/>: <></>}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to='/login'> <button> Login </button> </Link>
                <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar