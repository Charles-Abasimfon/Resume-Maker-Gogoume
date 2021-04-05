import React from 'react'
import {useState,createContext,useEffect} from 'react'

/*  THIS CONTEXT PROVIDES THE SELECTED LANGUAGE GLOBALLY   */
export const LanguageContext = createContext()

export function LanguageProvider(props){

  const [language,setLanguage] = useState("English")

  useEffect(() => {
    /* Set languageSelected to the value stored in localStorage, If no value is found then set it to the default being "English" */
   let languageSelected = localStorage.getItem("gogoume-selected-language")
   if(languageSelected === null){
     languageSelected = "English"
   }
   setLanguage(languageSelected)
  }, [])

  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}