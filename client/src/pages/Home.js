import React,{useEffect,useContext} from 'react'
import {motion} from 'framer-motion'
import Header from '../components/layout/Header'
import {homeTexts} from '../texts/home_texts'
import {LanguageContext} from '../utils/context_api/LanguageContext'
import Footer from '../components/layout/Footer'
import {useHistory} from 'react-router-dom'

function Home() {

  const history = useHistory()

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
      <section id="home-hero" className="flex justify-center items-center">
          <div style={{maxWidth:"700px"}} className="p-4 h-full flex flex-col justify-center items-center">
            <p className="uppercase text-gray-500 font-semibold text-3xl text-center mb-10 font-capriola">
              {homeTexts.easyonlineresumebuilder[selectedLanguage]}
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-center font-capriola mb-16">
              {homeTexts.createyourprofessionalresumeinfewminutes[selectedLanguage]}
            </h1>
            <button onClick={() => history.push("/getting-started")} type="button" className="button button-yellow">
               {homeTexts.buildmyresumenow[selectedLanguage]}
            </button>
          </div>
        </section>
        
        <section id="home-section-below-hero" className="flex justify-center items-center">
          <div style={{maxWidth:"700px"}} className="p-4 h-full flex flex-col items-center">
            <h1 style={{lineHeight:"1.5"}} className="text-3xl md:text-4xl font-bold text-center font-capriola mt-10 mb-16">
              {homeTexts.choosefromourtemplates[selectedLanguage]}
            </h1>
          </div>
        </section>
      </motion.main>
      <Footer/>
    </div>
  )
}


export default Home