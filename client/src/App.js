import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './styles/app.css';


//Importing Context Providers
import {LanguageProvider} from './utils/context_api/LanguageContext'
import {UserProvider} from './utils/context_api/UserContext'

//For page transitions
import {AnimatePresence} from 'framer-motion'

//Importing pages
import Home from './pages/Home'
import QuestionsPage from './pages/QuestionsPage'
import GettingStartedPage from './pages/GettingStartedPage'
import ContactPage from './pages/ContactPage'

class App extends Component {
  render() {
    return (
    <LanguageProvider>
    <UserProvider>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/build" component={QuestionsPage}/>
          <Route exact path="/getting-started" component={GettingStartedPage}/>
          <Route exact path="/contact-us" component={ContactPage}/>
        </Switch>
      </AnimatePresence>
    </UserProvider>
    </LanguageProvider>
    );
  }
}

export default App;
