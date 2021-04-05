import React,{useEffect,useContext} from 'react'
import {motion} from 'framer-motion'
import Header from '../components/layout/Header'
import {gettingStartedTexts} from '../texts/getting_started_texts'
import {LanguageContext} from '../utils/context_api/LanguageContext'
import Footer from '../components/layout/Footer'


function Home() {
  
  const {language} = useContext(LanguageContext)

  let selectedLanguage;

  if(language === "English"){
    selectedLanguage = "EN"
  }
  if(language === "Japanese"){
    selectedLanguage = "JP"
  }

  //Scroll web page to top everytime it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  //Variants for page transitions using Framer Motion
  const pageTransitions = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0.8
    }
  }


  return (
    <div className="view" >
      <Header isSticky={false}/>
      <motion.main initial="out" animate="in" exit="out" variants={pageTransitions} className="view-body">
        <section className="mt-16 h-full lg:flex container justify-center items-center">
          <div className="lg:w-1/2 p-6">
            <p className="font-bold text-gray-800 text-6xl mb-10">
              {gettingStartedTexts.letsgetstarted[selectedLanguage]}
            </p>
          <div style={{maxWidth:"500px"}} className="mb-10">
            <h3 className="color-yellow font-semibold text-3xl">
              {gettingStartedTexts.pickatemplate[selectedLanguage]}
            </h3>
            <p className="text-gray-800 font-medium mb-10">
              {gettingStartedTexts.pickatemplatetext[selectedLanguage]}
            </p>
          </div>

          <div style={{maxWidth:"500px"}} className="mb-10">
            <h3 className="color-yellow font-semibold text-3xl">
              {gettingStartedTexts.enteryourinformation[selectedLanguage]}
            </h3>
            <p className="text-gray-800 font-medium mb-10">
              {gettingStartedTexts.enteryourinformationtext[selectedLanguage]}
            </p>
          </div>

          <div style={{maxWidth:"500px"}} className="mb-10">
            <h3 className="color-yellow font-semibold text-3xl">
              {gettingStartedTexts.downloadandprint[selectedLanguage]}
            </h3>
            <p className="text-gray-800 font-medium mb-10">
              {gettingStartedTexts.downloadandprinttext[selectedLanguage]}
            </p>
          </div>

          <button type="button" className="button button-yellow mb-10">
               {gettingStartedTexts.continue[selectedLanguage]}
          </button>
          </div>

          <div className="lg:w-1/2 p-6">
            <img src={`${window.location.origin}/images/resume_undraw.svg`}/>
          </div>
        </section>
      </motion.main>
      <Footer/>
    </div>
  )
}


export default Home