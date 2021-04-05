import React from 'react'
import {useWindowWidthAndHeight} from '../../utils/custom_hooks/useWindowWidthAndHeight'
import Navbar from './navbar/Navbar'
import NavbarForSmallScreens from './navbar/NavbarForSmallScreens'
import {Link} from 'react-router-dom'
import '../../styles/styles_for_specific_components/header.css'

function Header({isSticky}) {

  // use our custom hook to get the the window size
  const [width] = useWindowWidthAndHeight();

  return (
    <header className={isSticky? "sticky-header shadow-md" : "non-sticky-header shadow-md"}>
              <div className="header-inner">
                  <Link to="/" 
                        smooth={true} 
                        className="nav-link">
                        <img id="logo" alt="gogoume logo" src={window.location.origin + "/images/logo.png"}/>
                  </Link>
                  {/*if the width of the window is bigger than 1000px use <Navbar/>,
                     else user <NavbarForSmallScreens/>*/}
                  { width > 1000 ?
                  <Navbar navClass="nav-big"
                          linkClassName="nav-big-link"/>
                  :
                  <NavbarForSmallScreens navClass="nav-small"
                                      linkClassName = "nav-small-link"
                  />
                  } 
              </div>
    </header>
  )
}

export default Header
