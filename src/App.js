
import './App.css';

import React, { Component } from 'react'
import NewsNavBar from './Components/NewsNavBar';
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <div>
       <NewsNavBar/>
       <News/>
       
      </div>
    )
  }
}



