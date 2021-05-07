import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/styles_for_specific_components/footer.css'
import {LanguageContext} from '../../utils/context_api/LanguageContext'
import {UserContext} from '../../utils/context_api/UserContext'
import {globalTexts} from '../../texts/global_texts'
import {GrFacebook,GrLinkedin,GrTwitter} from 'react-icons/gr'
import {FiInstagram,FiYoutube} from 'react-icons/fi'

function Footer() {

  let todaysDate = new Date()
  let thisYear = todaysDate.getFullYear()

  const {language} = useContext(LanguageContext)

  const {userData} = useContext(UserContext)

  let selectedLanguage;

  if(language === "English"){
    selectedLanguage = "EN"
  }
  if(language === "Japanese"){
    selectedLanguage = "JP"
  }


  return (
    <footer>
        <nav className="w-full pt-4 flex flex-col justify-center items-center">

          <div className="lg:flex">
              {
              userData.user ?
              (
                <div className="my-4 lg:mr-16 flex justify-center">
                <Link to="/" className="footer-link transition duration-150 ease-in-out">
                  {globalTexts.myaccount[selectedLanguage]}
                </Link>
                </div>
              )
              :
              (
                <>
                <div className="my-4 lg:mr-16 flex justify-center">
                  <Link to="/" className="footer-link transition duration-150 ease-in-out">
                    {globalTexts.login[selectedLanguage]}
                  </Link>
                </div>
                </>
              )
            }
            <div className="my-4 lg:mr-16 flex justify-center">
              <Link to="/getting-started" className="footer-link transition duration-150 ease-in-out">
                {globalTexts.howtouse[selectedLanguage]}
              </Link>
            </div>
            <div className="my-4 lg:mr-16 flex justify-center">
              <Link to="/contact-us" className="footer-link transition duration-150 ease-in-out">
                {globalTexts.contactus[selectedLanguage]}
              </Link>
            </div>
          </div>

          <div className={`flex items-center justify-center mb-6`}>
              <a href="https://www.facebook.com/Gogoumecom-110654400272909" 
              target="_blank" rel="noreferrer">
                <GrFacebook style={{fontSize:"2.5rem"}} className={`ml-2 cursor-pointer color-yellow`}/>
              </a>
              <a href="https://twitter.com/ComGogoume" 
              target="_blank" rel="noreferrer">
                <GrTwitter style={{fontSize:"2.5rem"}} className={`ml-6 cursor-pointer color-yellow`}/>
              </a>
              <a href="https://www.linkedin.com/in/gogoume-com-226478204" 
              target="_blank" rel="noreferrer">
                <GrLinkedin style={{fontSize:"2.5rem"}} role="button" className={`ml-6 cursor-pointer color-yellow`}/>
              </a>
              <a href="https://www.instagram.com/gogoume_official/" 
              target="_blank" rel="noreferrer">
                <FiInstagram style={{fontSize:"3rem"}} role="button" className={`ml-6 cursor-pointer color-yellow`}/>
              </a>
              <a href="https://www.youtube.com/channel/UCL3hKOVTbcTdhMm_gCFopVA/featured" 
              target="_blank" rel="noreferrer">
                <FiYoutube style={{fontSize:"3.5rem"}} role="button" className={`ml-6 cursor-pointer color-yellow`}/>
              </a>
          </div>
        </nav>
        <p className="pt-2 pb-4 text-gray-300 text-center">&#169; Gogoume {thisYear}</p>
    </footer>
  )
}

export default Footer