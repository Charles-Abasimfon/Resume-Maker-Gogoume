import React,{useContext} from 'react';
import { Link , useHistory} from 'react-router-dom';
import LanguageSwitch from '../../elements/LanguageSwitch';
import {LanguageContext} from '../../../utils/context_api/LanguageContext'
import {UserContext} from '../../../utils/context_api/UserContext'
import {GrFacebook,GrTwitter,GrLinkedin} from 'react-icons/gr'
import {globalTexts} from '../../../texts/global_texts'



const Navbar = ({navClass, linkClassName}) =>(
    <NavComponent navClass={navClass}
                  linkClassName = {linkClassName}
    />
);

export function NavComponent({onClick, navClass, linkClassName}){

  const history = useHistory()

  const {language} = useContext(LanguageContext)

  const {userData, setUserData} = useContext(UserContext)

  let selectedLanguage;

  if(language === "English"){
    selectedLanguage = "EN"
  }
  if(language === "Japanese"){
    selectedLanguage = "JP"
  }

  /* LOG OUT HANDLER */
  function handleLogout(){
    sessionStorage.removeItem("user-auth")
    setUserData({
      token: undefined,
      user: undefined
    })
    history.push("/login")
    window.location.reload(false);
   }
  /* ============ */

  return(
    <nav className={navClass}>
      <div smooth={true} className={`flex items-center justify-center`}>
         <a href="https://www.facebook.com/Gogoumecom-110654400272909" 
         target="_blank" rel="noreferrer">
          <GrFacebook style={{fontSize:"2.5rem"}} className={`ml-2 cursor-pointer social-media-icon`}/>
         </a>
         <a href="https://twitter.com/ComGogoume" 
         target="_blank" rel="noreferrer">
          <GrTwitter style={{fontSize:"2.5rem"}} className={`ml-6 cursor-pointer social-media-icon`}/>
         </a>
         <a href="https://www.linkedin.com/in/gogoume-com-226478204" 
         target="_blank" rel="noreferrer">
          <GrLinkedin style={{fontSize:"2.5rem"}} role="button" className={`ml-6 cursor-pointer social-media-icon`}/>
         </a>
         <a href="https://www.instagram.com/gogoume_official/" 
         target="_blank" rel="noreferrer">
          <img style={{height:"3rem"}} role="button" className={`ml-6 mr-0 cursor-pointer inline`} alt="" src={`${window.location.origin}/images/instagram.png`}/>
         </a>
         <a href="https://www.youtube.com/channel/UCL3hKOVTbcTdhMm_gCFopVA/featured" 
         target="_blank" rel="noreferrer">
          <img style={{height:"3rem"}} role="button" className={`ml-6 mr-2 cursor-pointer inline`} alt="" src={`${window.location.origin}/images/youtube.png`}/>
         </a>
      </div>
      {
        userData.user ?
        (
          <>
          <Link to="/" smooth={true} className={linkClassName} onClick={onClick}>
           {globalTexts.myaccount[selectedLanguage]}
          </Link>
          <p role="button" smooth={true} className={linkClassName} onClick={handleLogout}>
          {globalTexts.logout[selectedLanguage]}
          </p>
          </>
        )
        :
        (
          <>
          <Link to="/" smooth={true} className={linkClassName} onClick={onClick}>
           {globalTexts.login[selectedLanguage]}
          </Link>
          </>
        )
      }
      
        <div>
          <LanguageSwitch/>
        </div>
    </nav>
  )
}

export default Navbar;