import React,{useEffect,useContext,useState} from 'react'
import {LanguageContext} from '../utils/context_api/LanguageContext'
import {globalTexts} from '../texts/global_texts'
import {motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import Error from '../components/elements/Error'
import Success from '../components/elements/Success'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Banner from '../components/layout/Banner'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
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
    <div className="view" style={{backgroundColor:"#F7F7FF"}}>
    <Header  isSticky={true}/>

    <motion.main initial="out" animate="in" exit="out" variants={pageTransitions} className="view-body">
      <Banner viewtitle="contactus" backgroundImageUrl={`${window.location.origin}/assets/images/manhavingcoffeeandtexting.jpg`}/>
      

      <section style={{padding:".5rem", marginTop:"2rem"}} className="container mx-auto md:flex justify-center items-center">

        <div className="md:w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-16">
        <h1 className="font-medium text-3xl md:text-4xl mb-10">{globalTexts.sendusamessageandwewillbeintouchwithyoushortly[selectedLanguage]}</h1>
          {/* Name */}
          <div className="mb-10">
            <label className="form-label" htmlFor="email">{globalTexts.name[selectedLanguage]}</label>
            <div className="inline-block relative w-full">
              <input style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors" 
              id="name" type="text"
              required
              name="name"
              ref={register({
                required: true
              })}/>
              </div>
            </div>
            {/* Email */}
            <div className="mb-10">
            <label className="form-label" htmlFor="email">
              {globalTexts.email[selectedLanguage]}
            </label>
              <div className="inline-block relative w-full group">
              <input style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors" 
              id="email" type="email"
              required
              name="email"
              ref={register({
              required: true
              })}/>
              </div>
            </div>
            {/* Enquiry */}
            <div className="mb-10">
            <label className="form-label" htmlFor="enquiry">
              {contactTexts.enquiry[selectedLanguage]}
            </label>
              <div className="inline-block relative w-full group">
              <textarea rows="5" style={{width: "100%", maxWidth: "500px"}} className="block appearance-none border rounded w-full py-6 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors" 
              id="enquiry"
              required
              name="enquiry"
              ref={register({
              required: true
              })}/>
              </div>
            </div>


            <div>
              { //displays errors...
                error && (
                <Error errormsg={error} clearError={() => setError(undefined)}/>
                )
              }
            </div>

            <div>
              { //displays success...
                success && (
                <Success successmsg={success} clearSuccess={() => setSuccess(undefined)}/>
                )
              }
            </div>

                  {/* Submit Button*/}
            <button className="mb-10 flex items-center px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-800 transition duration-500 ease-in-out" type="submit">
             {contactTexts.submit[selectedLanguage]}
             <span style={{display: loadingspinnerdisplay}} className="ml-2"><FaSpinner className="animate-spin"/></span>
            </button>
        </form>
        </div>

        <div className="md:w-1/2 flex justify-center items-center p-10">
         <img className="mx-auto md:m-0" style={{maxHeight:"40rem", width:"100%",objectFit: "cover"}} alt="" src={`${window.location.origin}/assets/images/woman-on-call.jpg`}/>
        </div>
        

      </section>
    </motion.main>

    <Footer/>
    </div>
  )
}

export default Contact
