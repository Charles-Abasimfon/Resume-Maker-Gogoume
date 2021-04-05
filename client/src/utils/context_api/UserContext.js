import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'


/*  THIS CONTEXT PROVIDES USER-DATA AND USER LOGIN STATUS GLOBALLY  */
export const UserContext = createContext()

export function UserProvider(props){

  const [userData,setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
   const checkLoggedIn = async () => {
     let token = sessionStorage.getItem("user-auth")
     if(token === null){
       token = ""
     }
     try{
       const tokenRes = await axios.post("/api/user/isTokenValid",null,{
         headers: {"user-auth": token}
       })

       if(tokenRes.data){
         const userRes = await axios.get("/api/user/", {
           headers : {"user-auth": token}
         })
         setUserData({
           token,
           user: userRes.data
         })
       }
     }catch(err){ 
      console.log(err)
    }
   }
   checkLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData}}>
      {props.children}
    </UserContext.Provider>

  )
}