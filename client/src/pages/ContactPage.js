import React,{useEffect,useContext,useState} from 'react'
import {LanguageContext} from '../utils/context_api/LanguageContext'
import {globalTexts} from '../texts/global_texts'
import {motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import Error from '../components/elements/Error'
import Success from '../components/elements/Success'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import { contactTexts } from '../texts/contact_texts'


function Contact() {

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

  const {language} = useContext(LanguageContext)
  let selectedLanguage;
  if(language === "English"){
    selectedLanguage = "EN"
  }
  if(language === "Japanese"){
    selectedLanguage = "JP"
  }

  const [loadingspinnerdisplay,setLoadingspinnerdisplay]=useState("none")

  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  const {register,handleSubmit} = useForm()
  const onSubmit = async ({name,email,enquiry}) =>{
    try{
      setLoadingspinnerdisplay("")
      let userLanguage = selectedLanguage;
      const mail = { 
        name,
        email, 
        enquiry,
        userLanguage
      }
      await axios.post("/api/mail/send-contact-form-mail", mail)
      setLoadingspinnerdisplay("none")
      setError(undefined)
      setSuccess(contactTexts.messagesentsuccessfully[selectedLanguage])
      }catch(err){ 
      setSuccess(undefined)
      err.response.data.msg && setError(err.response.data.msg)
      setLoadingspinnerdisplay("none")
      }
  }


  return (
    <div className="view">
    <Header  isSticky={false}/>
    <motion.main initial="out" animate="in" exit="out" variants={pageTransitions} className="view-body">

      <section className="mt-16 h-full lg:flex container justify-center">

        <div className="lg:w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-16">
        <h1 className="font-bold text-gray-800 text-4xl lg:text-5xl mb-10">{contactTexts.sendusamessageandwewillbeintouchwithyoushortly[selectedLanguage]}</h1>
          {/* Name */}
          <div className="mb-10">
            <label className="form-label" htmlFor="email">{globalTexts.name[selectedLanguage]}</label>
            <div className="inline-block relative w-full">
              <input style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border-2 border-gray-200 rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors" 
              id="name" type="text"
              required
              name="name"
              {...register('name', { required: true })}/>
              </div>
            </div>
            {/* Email */}
            <div className="mb-10">
            <label className="form-label" htmlFor="email">
              {globalTexts.email[selectedLanguage]}
            </label>
              <div className="inline-block relative w-full group">
              <input style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border-2 border-gray-200 rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors" 
              id="email" type="email"
              required
              name="email"
              {...register('email', { required: true })}
              />
              </div>
            </div>
            {/* Enquiry */}
            <div className="mb-10">
            <label className="form-label" htmlFor="enquiry">
              {contactTexts.enquiry[selectedLanguage]}
            </label>
              <div className="inline-block relative w-full group">
              <textarea rows="5" style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border-2 border-gray-200 rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors" 
              id="enquiry"
              required
              name="enquiry"
              {...register('enquiry', { required: true })}/>
              </div>
            </div>


            <div style={{width: "100%", maxWidth: "500px"}}>
              { //displays errors...
                error && (
                <Error errormsg={error} clearError={() => setError(undefined)}/>
                )
              }
            </div>

            <div style={{width: "100%", maxWidth: "500px"}}>
              { //displays success...
                success && (
                <Success successmsg={success} clearSuccess={() => setSuccess(undefined)}/>
                )
              }
            </div>

                  {/* Submit Button*/}
            <button className="mb-10 flex items-center button button-yellow" type="submit">
             {contactTexts.submit[selectedLanguage]}
             <span style={{display: loadingspinnerdisplay}} className="ml-2"><FaSpinner className="animate-spin"/></span>
            </button>
        </form>
        </div>

        <div className="lg:w-1/2 h-full flex justify-center p-6 lg:p-16">
         <img className="mx-auto md:m-0 lg:mt-24" style={{maxHeight:"40rem", width:"100%",objectFit: "cover"}} alt="" src={`${window.location.origin}/images/mail_us.svg`}/>
        </div>
        

      </section>
    </motion.main>

    <Footer/>
    </div>
  )
}

export default Contact
