import React from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
// import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = ()=> {
  const page = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element = {<News apiKey = {apiKey}  key = "general" pageSize={page} country='in' category='general'/>}/>
          <Route exact path="/business" element = {<News apiKey = {apiKey} key = "business" pageSize={page} country='in' category='business'/>}/>
          <Route exact path="/sports" element = {<News apiKey = {apiKey} key = "sports" pageSize={page} country='in' category='sports'/>}/>
          <Route exact path="/health" element = {<News apiKey = {apiKey} key = "health" pageSize={page} country='in' category='health'/>}/>
          <Route exact path="/science" element = {<News apiKey = {apiKey} key = "science" pageSize={page} country='in' category='science'/>}/>
          <Route exact path="/technology" element = {<News apiKey = {apiKey} key = "technology" pageSize={page} country='in' category='technology'/>}/>
          <Route exact path="/entertainment" element = {<News apiKey = {apiKey} key = "entertainment" pageSize={page} country='in' category='entertainment'/>}/>
        </Routes>
      </Router>
      </div>
    )
}

export default App;