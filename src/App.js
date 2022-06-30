import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  page = 6;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element = {<News key = "general" pageSize={this.page} country='in' category='general'/>}/>
          <Route exact path="/business" element = {<News key = "business" pageSize={this.page} country='in' category='business'/>}/>
          <Route exact path="/sports" element = {<News key = "sports" pageSize={this.page} country='in' category='sports'/>}/>
          <Route exact path="/health" element = {<News key = "health" pageSize={this.page} country='in' category='health'/>}/>
          <Route exact path="/science" element = {<News key = "science" pageSize={this.page} country='in' category='science'/>}/>
          <Route exact path="/technology" element = {<News key = "technology" pageSize={this.page} country='in' category='technology'/>}/>
          <Route exact path="/entertainment" element = {<News key = "entertainment" pageSize={this.page} country='in' category='entertainment'/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

