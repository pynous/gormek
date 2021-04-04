import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Gi3DGlasses } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  
  const [click, setClick] = useState(false);
 
  
  const [button, setButton] = useState(true);
 
 const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

 const showButton = () => {
   if(window.innerWidth <= 960) { 
     setButton(false);
   } else {
    setButton(true);
   }

 };

 useEffect(() =>{
   showButton();
 },[]);

 window.addEventListener('resize', showButton);

    return (
       <div>
         <nav className="navbar">
             <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
              Görmek <Gi3DGlasses />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <MdMenu />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobleMenu} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links" onClick={closeMobleMenu} >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links" onClick={closeMobleMenu} >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobleMenu} >
                  Sign Up
                </Link>
              </li>

              </ul>
              {button && <Button buttonStyles='btn-outline'>SIGN UP</Button>}
             </div>
         </nav>

       </div>
    )
}

export default Navbar;
