import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './index.css'
import Contact from './components/Contact/index'
import Navbar from './components/Navbar/index'
import Index from './components/Index'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      
      </BrowserRouter>
    );
  }
}

export default App;
