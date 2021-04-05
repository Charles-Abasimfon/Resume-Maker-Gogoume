import React,{useContext} from 'react'
import {globalTexts} from '../../texts/global_texts'
import {LanguageContext} from '../../utils/context_api/LanguageContext'
import {Link} from 'react-router-dom'
import '../../styles/styles_for_specific_components/banner.css'

function Banner({viewtitle,hometitle,backgroundImageUrl}) {

  const {language} = useContext(LanguageContext)
  let selectedLanguage;
  if(language === "English"){
    selectedLanguage = "EN"
  }
  if(language === "Japanese"){
    selectedLanguage = "JP"
  }

  console.log(backgroundImageUrl)
  return (
    <section id="banner" style={{background : `#1E3A8A url(${backgroundImageUrl}) center/cover no-repeat`}}>
          <div className="p-4">
            <h1 id="view-title-for-banner">{globalTexts[viewtitle][selectedLanguage]}</h1>
          </div>
          <div className="w-full flex justify-center items-end">
            <Link to={hometitle ? `/${hometitle}` : "/"} className="mb-1 hover:text-gray-200 text-2xl">{
            hometitle ? globalTexts[hometitle][selectedLanguage] : globalTexts.home[selectedLanguage]}</Link>
            <span className="mx-2 text-5xl">/</span>
            <span className="mb-1 text-2xl">{globalTexts[viewtitle][selectedLanguage]}</span>
          </div>
    </section>
  )
}

export default Banner
