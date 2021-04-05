import React,{useEffect} from 'react'
import {motion} from 'framer-motion'
import UserForm from '../components/UserForm';

function QuestionsPage() {

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
      <motion.main initial="out" animate="in" exit="out" variants={pageTransitions} className="view-body">
        <div className="col-lg-8 mx-auto text-center mt-5">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UserForm/>
      </motion.main>
    </div>
  )
}


export default QuestionsPage